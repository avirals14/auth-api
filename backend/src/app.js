import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import protectedRoutes from "./routes/protected.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.get("/", (req, res)=>(
    res.send("API is running...")
));

export default app;