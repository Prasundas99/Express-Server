import express from "express";
import dotenv from "dotenv";
import Connect from "./config/db.js";

dotenv.config();
const app = express();

// Connect DB
Connect();

const PORT = 5000 || process.env.PORT;


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});




//mongooshe schema json schema
// For Testing mongoose Schema
import mongoose from "mongoose";
import jsonSchemas from "mongoose-schema-jsonschema";
import { userSchema } from "./models/User.js";
jsonSchemas(mongoose);

const jsonSchema = userSchema.jsonSchema();
console.dir(jsonSchema, { depth: null });
