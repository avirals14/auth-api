import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import UserModel from "../models/User.model.js";

const router = express.Router();

router.get("/me", authMiddleware, async (req, res) => {
  try {
    // get userId from middleware
    const userId = req.user.userId;

    // get user from db
    const user = await UserModel.findById(userId).select("-password");

    if(!user){
      return res.status(404).json({
        success:false,
        message:"User Not Found",
      });
    }

    // return user
    return res.status(200).json({
      success:true,
      user,
    });
  } catch (error) {
    console.error("/me Route Error : ", error);
    
    return res.status(500).json({
      success:false,
      message:"Failed to fetch User",
    });
  }
});

export default router;