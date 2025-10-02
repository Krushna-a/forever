require("dotenv").config();
const Products = require("../Models/productModel");
const cloudinary = require("cloudinary").v2;

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const addPdt = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      size,
      color,
      category,
      type,
      tags,
      inStock,
    } = req.body;

    // Validate required fields
    if (!title || !description || !price || !category || !type) {
      return res.status(400).json({
        status: "failure",
        message: "Missing required fields",
      });
    }

    // Check if image exists
    if (!req.files || !req.files.image1) {
      return res.status(400).json({
        status: "failure",
        message: "Image is required",
      });
    }

    const image = req.files.image1[0];

    // Upload to cloudinary
    const result = await cloudinary.uploader.upload(image.path, {
      resource_type: "auto",
      folder: "products",
    });

    // Create product with image data
    const productData = {
      title,
      description,
      price: Number(price),
      image: {
        filename: image.originalname,
        url: result.secure_url, // This stores the Cloudinary URL
      },
      size: Array.isArray(size) ? size : JSON.parse(size),
      color: Array.isArray(color) ? color : JSON.parse(color),
      category,
      type,
      tags: Array.isArray(tags) ? tags : JSON.parse(tags),
      inStock: Boolean(inStock),
    };

    const newProduct = await Products.create(productData);

    res.status(201).json({
      status: "success",
      message: "Product added successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error("Product addition error:", error);
    res.status(500).json({
      status: "failure",
      message: error.message || "Error adding product",
    });
  }
};

const editPdt = async (req, res) => {
  try {
    const { id } = req.params; // Get product ID from URL
    const {
      title,
      description,
      price,
      size,
      color,
      category,
      type,
      tags,
      inStock,
    } = req.body;

    // Find existing product
    const product = await Products.findById(id);
    if (!product) {
      return res.status(404).json({
        status: "failure",
        message: "Product not found",
      });
    }

    // Prepare update object
    const updatedData = {
      title: title || product.title,
      description: description || product.description,
      price: price !== undefined ? Number(price) : product.price,
      size: size
        ? Array.isArray(size)
          ? size
          : JSON.parse(size)
        : product.size,
      color: color
        ? Array.isArray(color)
          ? color
          : JSON.parse(color)
        : product.color,
      category: category || product.category,
      type: type || product.type,
      tags: tags
        ? Array.isArray(tags)
          ? tags
          : JSON.parse(tags)
        : product.tags,
      inStock:
        inStock !== undefined ? Boolean(inStock) : product.inStock,
      updatedAt: new Date(),
    };

    // Check if new image is uploaded
    if (req.files && req.files.image1) {
      const image = req.files.image1[0];
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "auto",
        folder: "products",
      });

      updatedData.image = {
        filename: image.originalname,
        url: result.secure_url,
      };
    }

    // Update product in DB
    const updatedProduct = await Products.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true } // Return the updated document
    );

    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Product update error:", error);
    res.status(500).json({
      status: "failure",
      message: error.message || "Error updating product",
    });
  }
};

const bulkAddPdt = async (req, res) => {
  try {
    const products = req.body.products;

    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        status: "failure",
        message: "Products array is required",
      });
    }

    // Prepare products to insert
    const productsToInsert = products.map(item => ({
      title: item.title,
      description: item.description,
      price: Number(item.price),
      image: item.image || { filename: "", url: "" }, // placeholder
      size: Array.isArray(item.size) ? item.size : [],
      color: Array.isArray(item.color) ? item.color : [],
      category: item.category,
      type: item.type,
      tags: Array.isArray(item.tags) ? item.tags : [],
      inStock: item.inStock !== undefined ? Boolean(item.inStock) : true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    // Bulk insert into MongoDB
    const insertedProducts = await Products.insertMany(productsToInsert);

    res.status(201).json({
      status: "success",
      message: `${insertedProducts.length} products added successfully`,
      data: insertedProducts,
    });
  } catch (error) {
    console.error("Bulk product addition error:", error);
    res.status(500).json({
      status: "failure",
      message: error.message || "Error adding products",
    });
  }
};


const listPdt = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({
      status: "success",
      products: products, // Changed to match frontend expectation
      count: products.length,
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Error fetching products",
    });
  }
};

const removePdt = async (req, res) => {
  try {
    const { id } = req.params; // Changed from req.body to req.params
    const product = await Products.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        status: "failure",
        message: "Product not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Error deleting product",
    });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);

    if (!product) {
      return res.status(404).json({
        status: "failure",
        message: "Product not found",
      });
    }

    res.status(200).json({
      status: "success",
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Error fetching product",
    });
  }
};

// Add to module.exports
module.exports = { addPdt,editPdt, bulkAddPdt, listPdt, removePdt, getSingleProduct };
