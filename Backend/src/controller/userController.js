const User = require("../models/userModel");
// var mongoose = require('mongoose');
// mongoose.Types.ObjectId.isValid('your id here');

// Create a new user
const createUser = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }
    const user = await new User(data);
    await user.save();
    if (!user) {
      res.status(400).json({
        success: false,
        message: "user is not created",
      });
    }

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get all users
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const data = req.body;
    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
    });
    res
      .status(200)
      .json({ success: true, user, message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { createUser, getAllUser, updateUser, deleteUser };
