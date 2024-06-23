const db = require("../models");
const User = db.users;

// CD operations
// CREATE
exports.createOne = async function (item) {
  try {
    const user = new User(item);
    const response = await user.save();
    return response;
  } catch (error) {
    return error;
  }
};

// DELETE
exports.deleteOne = async function (value) {
  try {
    const response = await User.findOneAndRemove({ username: value }).exec();
    return response;
  } catch (error) {
    throw Error("error");
  }
};
