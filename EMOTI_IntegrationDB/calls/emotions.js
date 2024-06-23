const db = require("../models");
const Emotion = db.emotions;

// CRUD operations
// CREATE
exports.createOne = async function (item) {
  try {
    const emotion = new Emotion(item);
    const response = await emotion.save();
    return response;
  } catch (error) {
    return error;
  }
};

// READ
exports.readAll = async function () {
  try {
    const response = await Emotion.find().exec();
    return response;
  } catch (error) {
    throw Error("error");
  }
};

exports.readOne = async function (value) {
  try {
    const response = await Emotion.findOne({ name: value }).exec();
    return response;
  } catch (error) {
    return error;
  }
};

// UPDATE
exports.updateOne = async function (value, updateObject) {
  try {
    const response = await Emotion.findOneAndUpdate(
      { name: value },
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
    const response = await Emotion.findOneAndRemove({ name: value }).exec();
    return response;
  } catch (error) {
    throw Error("error");
  }
};
