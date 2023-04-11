import express from "express";
import productRouter from "./routes/products";
import categoryRouter from "./routes/category";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/auth"

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter)

mongoose.connect("mongodb://127.0.0.1:27017/we17303");

export const viteNodeApp = app;