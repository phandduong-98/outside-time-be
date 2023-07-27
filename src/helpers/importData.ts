import mongoose from "mongoose";
import { ChapterModel } from "../db/chapter";
import dotenv from "dotenv";
dotenv.config();

// MongoDB connection URL
const dbUrl = process.env.MONGO_URL!;

const addedChapterId: any[] = [];
const Source: any[] = [];
// Function to connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

// Function to import data into MongoDB
const importData = async () => {
  try {
    // Connect to the database
    await connectToDatabase();

    // Insert each object into the database
    for (const item of Source) {
      if (!addedChapterId.includes(item.chapter_number)) {
        await ChapterModel.create(item);
        addedChapterId.push(item.chapter_number);
        console.log("Inserted:", item.chapter_number);
      }
    }
    console.log(addedChapterId.length);

    console.log("Data import completed!");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

// Run the data import function
importData();
