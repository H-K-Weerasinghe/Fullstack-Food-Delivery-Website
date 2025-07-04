import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// ✅ Add food item with image upload
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    const image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error adding food" });
  }
};

// ✅ List all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching food list" });
  }
};

// ✅ Remove food item by ID & delete image from uploads/
const removeFood = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await foodModel.findById(foodId);

    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    // Delete image file from uploads folder
    const imagePath = path.join("uploads", food.image);
    fs.unlink(imagePath, async (err) => {
      if (err) {
        console.log("Image delete error:", err); // continue anyway
      }

      await foodModel.findByIdAndDelete(foodId);
      res.json({ success: true, message: "Food Removed" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error deleting food" });
  }
};

export { addFood, listFood, removeFood };
