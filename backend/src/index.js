import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";

import { connectToDB } from "./lib/db.js";

import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/songs.route.js";
import albumRoutes from "./routes/albums.route.js";
import statRoutes from "./routes/stats.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(clerkMiddleware());

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

app.listen(PORT, () => {
  console.log("Server Listening at port " + PORT);
  connectToDB();
});
