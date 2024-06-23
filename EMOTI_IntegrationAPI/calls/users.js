const api = require("../testHelpers/api");

exports.createAccount = async function (data) {
  try {
    const response = await api.post("/users", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

exports.logIntoAccount = async function (data) {
  try {
    const response = await api.post("/users/login", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

exports.getUserProfile = async function (user, token) {
  try {
    const response = await api.get(`/users/${user}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

exports.updateProfile = async function (user, data, token) {
  try {
    const response = await api.patch(`/users/${user}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
