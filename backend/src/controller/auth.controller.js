import { User } from "../models/user.model.js";

export const authCallBack = async (req, res, next) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    const user = await User.findOne({ clerkId: id });

    if (!user) {
      //signup
      await User.create({
        clerkId: id,
        fullName: `${firstName || ""} ${lastName}`.trim(),
        imageUrl,
      });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth controller callback");
    next(error);
  }
};
