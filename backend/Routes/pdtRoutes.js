const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = require("../Middleware/multre");
const adminAuth = require("../Middleware/adminAuth");

const { 
  addPdt, 
  listPdt, 
  editPdt, 
  bulkAddPdt,
  removePdt,
  getSingleProduct, 
} = require("../Controllers/productController");

// Get single product
router.get("/products/:id", getSingleProduct);

// Add single product
router.post(
  "/products",
  adminAuth,
  upload.fields([{ name: "image1", maxCount: 1 }]),
  addPdt
);

// Edit single product
router.put(
  "/products/:id",
  upload.fields([{ name: "image1", maxCount: 1 }]), // optional image upload
  editPdt
);

// Bulk add products (no images for now)
router.post("/products/bulkAdd", bulkAddPdt);

// Get all products
router.get("/products", listPdt);

// Delete product
router.delete("/products/:id", adminAuth, removePdt);

module.exports = router;
