import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./route/user.route.js";
dotenv.config();

const app = express();

// middlewares.
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Set security headers
app.get("/", (req, res) => {
    console.log("API is running...");
    res.send("API is running...");
})

// routes
app.use("/api/v1/user", userRouter);


// server start here
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

