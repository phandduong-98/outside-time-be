import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import router from "./router";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const mongoUrl = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl!);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use("/", router());

app.get('/', (req,res) => {
  res.send({ title: 'Books' });
})
//Connect to the database before listening
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("listening for requests");
    console.log(`Server running on http://localhost:${process.env.PORT}/`);
  });
});
