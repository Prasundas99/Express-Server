import mongoose from "mongoose";
import { userData } from "./data/userData.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { UserModel } from "./models/User.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await UserModel.deleteMany();
    await UserModel.create(userData);
    console.log(`Data imported successfully `);
    process.exit();
  } catch (error) {
    console.log(`ERROR in importing: ${error}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log(`Data deleted successfully `);
    process.exit();
  } catch (error) {
    console.log(`ERROR in deleting: ${error}`);
    process.exit(1);
  }
};


if (process.argv[2] == "-d") {
  deleteData();
} else {
  importData();
}