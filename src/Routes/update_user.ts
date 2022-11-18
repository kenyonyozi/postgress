import express, { json } from "express";
import { User } from "../Entities/User";

const router = express.Router();

router.put("/api/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOneBy({ id: parseInt(userId, 10) });
    User.merge(user, req.body);
    res.json({
      message: "success",
      payload: user,
    });
  } catch (e) {
    res.json({
      message: "fail",
    });
  }
});

export { router as updateUserRouter };
