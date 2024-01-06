const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");


router.get("/", async (req, res) => {
    try {
      const coupons = await Coupon.find();
      res.status(200).json(coupons);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
});
router.get("/:couponId", async (req, res) => {
    try {
      const couponId = req.params.couponId;
      try {
        const couponDetail = await Coupon.findById(couponId);
        if(!couponDetail){
            return res.status(404).json({ error: "Kupon bulunamadı" });
        }
        res.status(200).json(couponDetail);
      } catch {
        res.status(404).json({ error: "Kupon bulunamadı" });
      }
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
});
router.post("/create", async (req, res) => {
    try {
      const newCoupon = new Coupon(req.body);
      await newCoupon.save();
      res.status(201).json(newCoupon);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
});

router.put("/:couponId", async (req, res) => {
    try {
      const couponId = req.params.couponId;
      const updates = req.body;
      const existingcoupon = await Coupon.findById(couponId);
      if (!existingcoupon) {
        return res.status(404).json({ error: "Kupon Bulunamadı" });
      }
      const couponDetail = await Coupon.findByIdAndUpdate(
        couponId,
        updates,
        { new: true }
      );
      res.status(200).json(couponDetail);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
});

router.delete("/:couponId", async (req, res) => {
    try {
        const couponId = req.params.couponId;
        const existingCoupon = await Coupon.findByIdAndDelete(couponId).catch(err => {
            console.log("Mongoose Hatası:", err); 
            throw err; // Mongoose hata durumunu tekrar fırlat
        });

        if (!existingCoupon) {
            res.status(404).json({ error: "Kupon Bulunamadı" });
            return; // Hata durumunda işlemi sonlandır
        }

        res.status(200).json("Kupon silindi");
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;