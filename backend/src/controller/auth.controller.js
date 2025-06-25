import { User } from "../models/user.model.js";

export const authCallBack = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    const user = await User.findOne({ clerkId: id });

    if (!user) {
      //signup
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth controller callback");
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
