const { log } = require("console");
const User = require("../models/user.model");

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); // $ne -> not equal

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("error in getUsersForSidebar...", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getUsersForSidebar };
