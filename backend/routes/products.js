const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");


router.get("/", async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
});
router.get("/:productId", async (req, res) => {
    try {
      const productId = req.params.productId;
      try {
        const productDetail = await Product.findById(productId);
        if(!productDetail){
            return res.status(404).json({ error: "Ürün bulunamadı" });
        }
        res.status(200).json(productDetail);
      } catch {
        res.status(404).json({ error: "Ürün bulunamadı" });
      }
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
});
router.post("/create", async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
});

router.put("/:productId", async (req, res) => {
    try {
      const productId = req.params.productId;
      const updates = req.body;
      const existingProduct = await Product.findById(productId);
      if (!existingProduct) {
        return res.status(404).json({ error: "Ürün Bulunamadı" });
      }
      const productDetail = await Product.findByIdAndUpdate(
        productId,
        updates,
        { new: true }
      );
      res.status(200).json(productDetail);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
});

router.delete("/:productId", async (req, res) => {
    try {
        const productId = req.params.productId;
        const existingProduct = await Product.findByIdAndDelete(productId).catch(err => {
            console.log("Mongoose Hatası:", err); 
            throw err; // Mongoose hata durumunu tekrar fırlat
        });

        if (!existingProduct) {
            res.status(404).json({ error: "Ürün Bulunamadı" });
            return; // Hata durumunda işlemi sonlandır
        }

        res.status(200).json("Ürün silindi");
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;