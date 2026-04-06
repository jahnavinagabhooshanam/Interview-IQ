import 'dotenv/config'
import express from "express"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

const app = express()
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN || "http://localhost:5173",
    credentials: true,
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)

app.get("/", (req, res) => {
    res.send("Interview-IQ API is Live! 🚀")
})

// Global Error Handler to Prevent Vercel Crashes
app.use((err, req, res, next) => {
    console.error("Global Error Caught:", err.message);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Avoid unhandled rejections crashing the process
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

const PORT = process.env.PORT || 8000
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
        connectDb()
    })
} else {
    connectDb() // Ensure DB connects in serverless environments
}

export default app;
