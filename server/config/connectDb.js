import mongoose from "mongoose";

const connectDb = async () => {
    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            serverSelectionTimeoutMS: 5000, // Fail fast if can't connect
        })
        console.log("DataBase Connected ✅")
    } catch (error) {
        console.error(`❌ DataBase Connection Error: ${error.message}`)
    }
}

export default connectDb