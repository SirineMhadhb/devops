// mongo.js

import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test2")
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.error("MongoDB connection failed:", error);
});

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("collection", newSchema);

export default collection;
