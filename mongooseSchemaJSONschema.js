//mongooshe schema json schema
import mongoose from "mongoose";
import jsonSchemas from "mongoose-schema-jsonschema";
import { userSchema } from "./models/User.js";
jsonSchemas(mongoose);

const jsonSchema = userSchema.jsonSchema();
console.dir(jsonSchema, { depth: null });