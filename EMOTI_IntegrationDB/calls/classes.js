const db = require("../models");
const Class = db.classes;

// CRUD operations
// CREATE
exports.createOne = async function (item) {
  try {
    const c = new Class(item);
    const response = await c.save();
    return response;
  } catch (error) {
    return error;
  }
};

// READ
exports.readAll = async function () {
  try {
    const response = await Class.find().exec();
    return response;
  } catch (error) {
    throw Error("error");
  }
};

exports.readOne = async function (valueName, valueTeacher) {
  try {
    const response = await Class.findOne({
      name: valueName,
      teacher: valueTeacher,
    }).exec();
    return response;
  } catch (error) {
    return error;
  }
};

// UPDATE
exports.updateOne = async function (valueName, valueTeacher, updateObject) {
  try {
    const response = await Class.findOneAndUpdate(
      { name: valueName, teacher: valueTeacher },
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
exports.deleteOne = async function (valueName, valueTeacher) {
  try {
    const response = await Class.findOneAndRemove({
      name: valueName,
      teacher: valueTeacher,
    }).exec();
    return response;
  } catch (error) {
    throw Error("error");
  }
};
