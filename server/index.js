// index.js

import express from "express";
import bodyParser from "body-parser";
import referralRoutes from "./routes/referralRoutes";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_ATLAS_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB Atlas");
});

app.use("/referrals", referralRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
