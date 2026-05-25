import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// Database Connection
export const connectDB = () => { mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database Connected Successfully."))
.catch(error => {"Database Connection Error : ", error});
}