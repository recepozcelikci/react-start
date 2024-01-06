const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");

router.post("/", async (req, res) => {
  try {
    const { name, image } = req.body;
    const newCategory = new Category({ name, image });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    try {
      const categoryDetail = await Category.findById(categoryId);
      res.status(200).json(categoryDetail);
    } catch {
      res.status(404).json({ error: "Kategori bulunamadı" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updates = req.body;
    const existingCategory = await Category.findById(categoryId);
    if (!existingCategory) {
      res.status(404).json({ error: "Kategori Bulunamadı" });
    }
    const categoryDetail = await Category.findByIdAndUpdate(
      categoryId,
      updates,
      { new: true }
    );
    res.status(200).json(categoryDetail);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:categoryId", async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const existingCategory = await Category.findByIdAndDelete(categoryId).catch(err => {
            console.log("Mongoose Hatası:", err); 
            throw err; // Mongoose hata durumunu tekrar fırlat
        });

        if (!existingCategory) {
            res.status(404).json({ error: "Kategori Bulunamadı" });
            return; // Hata durumunda işlemi sonlandır
        }

        res.status(200).json("Kategori silindi");
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;
