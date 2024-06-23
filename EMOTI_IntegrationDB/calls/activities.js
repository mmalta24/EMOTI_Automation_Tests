const db = require("../models");
const Activity = db.activities;

// CRUD operations
// CREATE
exports.createOne = async function (item) {
  try {
    const activity = new Activity(item);
    const response = await activity.save();
    return response;
  } catch (error) {
    return error;
  }
};

// READ
exports.readAll = async function () {
  try {
    const response = await Activity.find().exec();
    return response;
  } catch (error) {
    throw Error("error");
  }
};

exports.readOne = async function (value) {
  try {
    const response = await Activity.findOne({ title: value }).exec();
    return response;
  } catch (error) {
    return error;
  }
};

// UPDATE
exports.updateOne = async function (value, updateObject) {
  try {
    const response = await Activity.findOneAndUpdate(
      { title: value },
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
    const response = await Activity.findOneAndRemove({ title: value }).exec();
    return response;
  } catch (error) {
    throw Error("error");
  }
};
