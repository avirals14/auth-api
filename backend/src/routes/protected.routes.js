import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Protected route accessed",
    userId: req.user.userId,
  });
});

export default router;