import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routers/foodRoute.js"; // ✅ default import

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API route
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'))

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`✅ Server Started on http://localhost:${port}`);
});
