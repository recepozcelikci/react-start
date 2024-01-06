const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const generateRandomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 70 + 1);
  return `https://i.pravatar.cc/300/img=${randomAvatar}`;
};

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const exitingUser = await User.findOne({ email });

    const defaultAvatar = generateRandomAvatar();


    if (exitingUser) {
      return res
        .status(400)
        .json({ error: "Email adresiniz zaten kullanımda" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      avatar : defaultAvatar
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "Email adresiniz veya şifre yanlış" });
    }
    const passwordControl = await bcrypt.compare(password, user.password);

    if(!passwordControl){
      return res
        .status(400)
        .json({ error: "Email adresiniz veya şifre yanlış" });
    }

    res.status(200).json({
      id : user.id,
      email : user.email,
      username : user.username,
      role : user.role,
      avatar : user.avatar
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
module.exports = router;
