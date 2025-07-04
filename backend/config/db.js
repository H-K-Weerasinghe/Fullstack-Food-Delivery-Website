import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://hkweerasinghe:19640607@cluster0.vgcbedu.mongodb.net/food-del')
    .then(() => console.log("✅ DB connected"))
    .catch(err => console.log("❌ DB connection error:", err));
};
