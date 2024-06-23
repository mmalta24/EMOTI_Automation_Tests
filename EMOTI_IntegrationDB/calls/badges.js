const db = require("../models");
const Badge = db.badges;

// CRUD operations
// CREATE
exports.createOne = async function (item) {
  try {
    const badge = new Badge(item);
    const response = await badge.save();
    return response;
  } catch (error) {
    return error;
  }
};

// READ
exports.readAll = async function () {
  try {
    const response = await Badge.find().exec();
    return response;
  } catch (error) {
    throw Error("error");
  }
};

exports.readOne = async function (value) {
  try {
    const response = await Badge.findOne({ badgeName: value }).exec();
    return response;
  } catch (error) {
    return error;
  }
};

// UPDATE
exports.updateOne = async function (value, updateObject) {
  try {
    const response = await Badge.findOneAndUpdate(
      { badgeName: value },
      updateObject,
      {
        returnOriginal: false, // to return the updated document
        runValidators: true, // update validators on update command
        useFindAndModify: false, //remove deprecation warning
      }
    ).exec();
    return response;
  } catch (error) {
    throw Error("error");
  }
};

// DELETE
exports.deleteOne = async function (value) {
  try {
    const response = await Badge.findOneAndRemove({ badgeName: value }).exec();
    return response;
  } catch (error) {
    throw Error("error");
  }
};
