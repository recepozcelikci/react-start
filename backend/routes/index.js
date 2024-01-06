const express = require("express");
const router = express.Router();

const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");
const userRoute = require("./account.js");
const couponRoute = require("./coupons.js");

router.use("/categories",categoryRoute);
router.use("/products",productRoute);
router.use("/accounts",userRoute);
router.use("/coupons",couponRoute);

module.exports = router;