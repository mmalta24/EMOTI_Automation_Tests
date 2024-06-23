const users = require("../calls/users");
const dbUsers = require("../calls/dbUsers");
const testItems = require("../testHelpers/users");
const TIMEOUT = 7000;

const user = {
  username: "userTest",
  password: "password",
  email: "userTest@gmail.com",
  typeUser: "Criança",
  name: "Test User",
};

const extra = {
  username: "extraTest",
  password: "password",
  email: "extraTest@gmail.com",
  typeUser: "Tutor",
  name: "Test User",
};

let KEY_ADMIN = "";
let KEY_TEACHER = "";
let KEY_CHILD = "";
let KEY_TUTOR = "";

describe("create account", () => {
  test(
    "200 - Create account",
    async () => {
      const response = await users.createAccount(user);
      expect(response.status).toBe(201);
      expect(response.data.success).toBeTruthy();
      expect(response.data.message).toBe(`User ${user.username} created!`);
      expect(response.data.uri).toBe(`api/users/${user.username}`);
    },
    TIMEOUT
  );

  test(
    "200 - Create extra account",
    async () => {
      const response = await users.createAccount(extra);
      expect(response.status).toBe(201);
      expect(response.data.success).toBeTruthy();
      expect(response.data.message).toBe(`User ${extra.username} created!`);
      expect(response.data.uri).toBe(`api/users/${extra.username}`);
    },
    TIMEOUT
  );

  test(
    "400 - Missing username",
    async () => {
      let u = { ...user, username: "" };
      const response = await users.createAccount(u);
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toContain("Please provide a username!");
    },
    TIMEOUT
  );

  test(
    "400 - Invalid username",
    async () => {
      let u = { ...user, username: "u!ser" };
      const response = await users.createAccount(u);
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toContain(
        `${u.username} is not a valid username!`
      );
    },
    TIMEOUT
  );

  test(
    "400 - Missing password",
    async () => {
      let u = { ...user, password: "" };
      const response = await users.createAccount(u);
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe("Please provide a password!");
    },
    TIMEOUT
  );

  test(
    "400 - Missing email",
    async () => {
      let u = { ...user, email: "" };
      const response = await users.createAccount(u);
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toContain("Please provide a email!");
    },
    TIMEOUT
  );

  test(
    "400 - Invalid email",
    async () => {
      let u = { ...user, email: "user@gmail,com" };
      const response = await users.createAccount(u);
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toContain(`${u.email} is not a valid email!`);
    },
    TIMEOUT
  );

  test(
    "400 - Missing typeUser",
    async () => {
      let u = { ...user, typeUser: "" };
      const response = await users.createAccount(u);
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toContain("Please provide a typeUser!");
    },
    TIMEOUT
  );

  test(
    "400 - Invalid typeUser",
    async () => {
      let u = { ...user, typeUser: "Type" };
      const response = await users.createAccount(u);
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toContain(
        `${u.typeUser} is not a valid type! Try Administrador, Professor, Criança or Tutor.`
      );
    },
    TIMEOUT
  );

  test(
    "400 - Missing name",
    async () => {
      let u = { ...user, name: "" };
      const response = await users.createAccount(u);
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toContain("Please provide a name!");
    },
    TIMEOUT
  );

  test(
    "400 - Create 'Administrador' account",
    async () => {
      let u = { ...user, typeUser: "Administrador" };
      const response = await users.createAccount(u);
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe("You can't register as an admin!");
    },
    TIMEOUT
  );

  test(
    "422 - Username already in use",
    async () => {
      let u = { ...user, username: "User" };
      const response = await users.createAccount(u);
      expect(response.status).toBe(422);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        `The username ${u.username} or email ${u.email} are already in use!`
      );
    },
    TIMEOUT
  );

  test(
    "422 - Email already in use",
    async () => {
      let u = { ...user, email: "user@gmail.com" };
      const response = await users.createAccount(u);
      expect(response.status).toBe(422);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        `The username ${u.username} or email ${u.email} are already in use!`
      );
    },
    TIMEOUT
  );
});

describe("login", () => {
  test(
    "200 - User logged",
    async () => {
      const response = await users.logIntoAccount(user);
      expect(response.status).toBe(200);
      expect(response.data.success).toBeTruthy();
      expect(response.data.authKey).toBeTruthy();
      expect(response.data.typeUser).toBe(user.typeUser);
      expect(response.data.username).toBe(user.username);
    },
    TIMEOUT
  );

  test(
    "200 - Extra user logged",
    async () => {
      const response = await users.logIntoAccount(extra);
      expect(response.status).toBe(200);
      expect(response.data.success).toBeTruthy();
      expect(response.data.authKey).toBeTruthy();
      expect(response.data.typeUser).toBe(extra.typeUser);
      expect(response.data.username).toBe(extra.username);
    },
    TIMEOUT
  );

  test(
    "200 - Default Admin logged",
    async () => {
      const u = {
        username: "Admin",
        password: "Esmad_2122",
      };
      const response = await users.logIntoAccount(u);
      expect(response.status).toBe(200);
      expect(response.data.success).toBeTruthy();
      expect(response.data.authKey).toBeTruthy();
      expect(response.data.typeUser).toBe("Administrador");
      expect(response.data.username).toBe("Admin");
      KEY_ADMIN = response.data.authKey;
    },
    TIMEOUT
  );

  test(
    "200 - Test Teacher logged",
    async () => {
      const u = {
        username: testItems.teacher.username,
        password: testItems.teacher.password,
      };
      const response = await users.logIntoAccount(u);
      expect(response.status).toBe(200);
      expect(response.data.success).toBeTruthy();
      expect(response.data.authKey).toBeTruthy();
      expect(response.data.typeUser).toBe(testItems.teacher.typeUser);
      expect(response.data.username).toBe(testItems.teacher.username);
      KEY_TEACHER = response.data.authKey;
    },
    TIMEOUT
  );

  test(
    "200 - Test Child logged",
    async () => {
      const u = {
        username: testItems.child.username,
        password: testItems.child.password,
      };
      const response = await users.logIntoAccount(u);
      expect(response.status).toBe(200);
      expect(response.data.success).toBeTruthy();
      expect(response.data.authKey).toBeTruthy();
      expect(response.data.typeUser).toBe(testItems.child.typeUser);
      expect(response.data.username).toBe(testItems.child.username);
      KEY_CHILD = response.data.authKey;
    },
    TIMEOUT
  );

  test(
    "200 - Test Tutor logged",
    async () => {
      const u = {
        username: testItems.tutor.username,
        password: testItems.tutor.password,
      };
      const response = await users.logIntoAccount(u);
      expect(response.status).toBe(200);
      expect(response.data.success).toBeTruthy();
      expect(response.data.authKey).toBeTruthy();
      expect(response.data.typeUser).toBe(testItems.tutor.typeUser);
      expect(response.data.username).toBe(testItems.tutor.username);
      KEY_TUTOR = response.data.authKey;
    },
    TIMEOUT
  );

  test(
    "400 - Missing username",
    async () => {
      let u = { password: "password" };
      const response = await users.logIntoAccount(u);
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe("Login with username and password!");
    },
    TIMEOUT
  );

  test(
    "400 - Missing password",
    async () => {
      let u = { username: user.username };
      const response = await users.logIntoAccount(u);
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe("Login with username and password!");
    },
    TIMEOUT
  );

  test(
    "401 - Wrong password",
    async () => {
      let u = { ...user, password: "Esmad_2122" };
      const response = await users.logIntoAccount(u);
      expect(response.status).toBe(401);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe("Username and password don't match!");
    },
    TIMEOUT
  );

  test(
    "403 - Blocked account",
    async () => {
      let u = { username: "blockAccountForTest", password: "Esmad_2122" };
      const response = await users.logIntoAccount(u);
      expect(response.status).toBe(403);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        "Your account is blocked. Please try again later!"
      );
    },
    TIMEOUT
  );

  test(
    "404 - Unexistent user",
    async () => {
      let u = { username: "someoneElse", password: "password" };
      const response = await users.logIntoAccount(u);
      expect(response.status).toBe(404);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe("User not found!");
    },
    TIMEOUT
  );
});

describe("user profile data", () => {
  test(
    "200 - User see own profile",
    async () => {
      const response = await users.getUserProfile(
        testItems.teacher.username,
        KEY_TEACHER
      );
      expect(response.status).toBe(200);
      expect(response.data.success).toBeTruthy();
      expect(response.data.user.username).toBe(testItems.teacher.username);
      expect(response.data.user.email).toBe(testItems.teacher.email);
      expect(response.data.user.typeUser).toBe(testItems.teacher.typeUser);
      expect(response.data.user.name).toBe(testItems.teacher.name);
      expect(response.data.user.imgProfile).toBe("");
      expect(response.data.user.password).toBeUndefined();
      expect(response.data.user.blocked).toBeUndefined();
      expect(response.data.user.badgesId).toBeUndefined();
      expect(response.data.user.questionsDone).toBeUndefined();
      expect(response.data.user.tutor).toBeUndefined();
      expect(response.data.user.children).toBeUndefined();
      expect(response.data.user.history).toBeUndefined();
      expect(response.data.user.activitiesPersonalized).toBeUndefined();
      expect(response.data.user.activitiesSuggested).toBeUndefined();
    },
    TIMEOUT
  );

  test(
    "401 - User not authenticated",
    async () => {
      const response = await users.getUserProfile(
        testItems.teacher.username,
        ""
      );
      expect(response.status).toBe(401);
      expect(response.data.success).toBeFalsy();
      expect(response.data.message).toBe("Unauthorized!");
    },
    TIMEOUT
  );

  test(
    "403 - User profile of not who's logged",
    async () => {
      const response = await users.getUserProfile(
        testItems.teacher.username,
        KEY_TUTOR
      );

      expect(response.status).toBe(403);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        `You don't have permission to see ${testItems.teacher.username}'s data!`
      );
    },
    TIMEOUT
  );
});

describe("update user data", () => {
  test(
    "200 - User itself updating password",
    async () => {
      const response = await users.updateProfile(
        testItems.child.username,
        { password: "newpassword" },
        KEY_CHILD
      );
      expect(response.status).toBe(200);
      expect(response.data.success).toBeTruthy();
      expect(response.data.message).toBe(
        `User ${testItems.child.username} updated!`
      );
      expect(response.data.fieldsUpdated.password).toBeTruthy();
      expect(response.data.fieldsUpdated.imgProfile).toBeFalsy();
    },
    TIMEOUT
  );

  test(
    "200 - User itself updating imgProfile",
    async () => {
      const response = await users.updateProfile(
        testItems.child.username,
        { imgProfile: "www.someImage.png" },
        KEY_CHILD
      );
      expect(response.status).toBe(200);
      expect(response.data.success).toBeTruthy();
      expect(response.data.message).toBe(
        `User ${testItems.child.username} updated!`
      );
      expect(response.data.fieldsUpdated.password).toBeFalsy();
      expect(response.data.fieldsUpdated.imgProfile).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "400 - User itself updating nothing",
    async () => {
      const response = await users.updateProfile(
        testItems.child.username,
        {},
        KEY_CHILD
      );
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        "Please provide provide password and/or imgProfile!"
      );
    },
    TIMEOUT
  );

  test(
    "401 - User itself updating blocked",
    async () => {
      const response = await users.updateProfile(
        testItems.child.username,
        { blocked: false },
        KEY_CHILD
      );
      expect(response.status).toBe(401);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        "You don't have permission to change your own blocked status!"
      );
    },
    TIMEOUT
  );

  test(
    "200 - Admin updating blocked - false to true",
    async () => {
      const response = await users.updateProfile(
        testItems.child.username,
        { blocked: true },
        KEY_ADMIN
      );
      expect(response.status).toBe(200);
      expect(response.data.success).toBeTruthy();
      expect(response.data.message).toBe(
        `User ${testItems.child.username} updated!`
      );
      expect(response.data.fieldsUpdated.blocked).toBeTruthy();
      expect(response.data.fieldsUpdated.newValue).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "200 - Admin updating blocked - true to false",
    async () => {
      const response = await users.updateProfile(
        testItems.child.username,
        { blocked: false },
        KEY_ADMIN
      );
      expect(response.status).toBe(200);
      expect(response.data.success).toBeTruthy();
      expect(response.data.message).toBe(
        `User ${testItems.child.username} updated!`
      );
      expect(response.data.fieldsUpdated.blocked).toBeTruthy();
      expect(response.data.fieldsUpdated.newValue).toBeFalsy();
    },
    TIMEOUT
  );

  test(
    "400 - Admin updating blocked - block user who is already blocked",
    async () => {
      const response = await users.updateProfile(
        "blockAccountForTest",
        { blocked: true },
        KEY_ADMIN
      );
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        "User blockAccountForTest is already blocked!"
      );
    },
    TIMEOUT
  );

  test(
    "400 - Admin updating blocked - unblock user who is not blocked",
    async () => {
      const response = await users.updateProfile(
        testItems.child.username,
        { blocked: false },
        KEY_ADMIN
      );
      expect(response.status).toBe(400);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        `User ${testItems.child.username} is already unblocked!`
      );
    },
    TIMEOUT
  );

  test(
    "401 - Admin trying to update password",
    async () => {
      const response = await users.updateProfile(
        testItems.teacher.username,
        { password: "secret" },
        KEY_ADMIN
      );

      expect(response.status).toBe(401);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        `As an admin, you only can update ${testItems.teacher.username} blocked status!`
      );
    },
    TIMEOUT
  );

  test(
    "401 - Admin trying to update imgProfile",
    async () => {
      const response = await users.updateProfile(
        testItems.teacher.username,
        { imgProfile: "www.someImage.png" },
        KEY_ADMIN
      );

      expect(response.status).toBe(401);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        `As an admin, you only can update ${testItems.teacher.username} blocked status!`
      );
    },
    TIMEOUT
  );

  test(
    "401 - User not authenticated",
    async () => {
      const response = await users.updateProfile(
        testItems.teacher.username,
        {},
        ""
      );
      expect(response.status).toBe(401);
      expect(response.data.success).toBeFalsy();
      expect(response.data.message).toBe("Unauthorized!");
    },
    TIMEOUT
  );

  test(
    "403 - Admin updating blocked - block Admin type",
    async () => {
      const response = await users.updateProfile(
        testItems.admin.username,
        { blocked: true },
        KEY_ADMIN
      );
      expect(response.status).toBe(403);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        `Username ${testItems.admin.username} cannot be blocked!`
      );
    },
    TIMEOUT
  );

  test(
    "403 - User profile of not who's logged / not admin",
    async () => {
      const response = await users.updateProfile(
        testItems.teacher.username,
        {},
        KEY_TUTOR
      );

      expect(response.status).toBe(403);
      expect(response.data.success).toBeFalsy();
      expect(response.data.error).toBe(
        `You don't have permission to edit ${testItems.teacher.username}'s data!`
      );
    },
    TIMEOUT
  );
});

beforeAll(async () => {
  dbUsers.createOne(testItems.admin);
  await users.createAccount(testItems.teacher);
  await users.createAccount(testItems.tutor);
  await users.createAccount(testItems.child);
});

afterAll(async () => {
  dbUsers.deleteOne(testItems.admin.username);
  dbUsers.deleteOne(testItems.teacher.username);
  dbUsers.deleteOne(testItems.tutor.username);
  dbUsers.deleteOne(testItems.child.username);
  dbUsers.deleteOne(user.username);
  dbUsers.deleteOne(extra.username);
});
