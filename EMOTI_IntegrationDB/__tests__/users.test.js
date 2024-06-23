const dbUsers = require("../calls/users");
const testItems = require("../testHelpers/users");
const TIMEOUT = 7000;

const item = {
  username: "userTest",
  password: "password",
  email: "userTest@gmail.com",
  typeUser: "Criança",
  name: "Test User",
};

const updateItem = { password: "newPassword" };

// CRUD operations
describe("create one user", () => {
  test(
    "create user and check values saved on db",
    async () => {
      const result = await dbUsers.createOne(item);
      expect(result).toBeTruthy();
      expect(result.email).toBe(item.email);
      expect(result.name).toBe(item.name);
      expect(result.password).toBe(item.password);
      expect(result.typeUser).toBe(item.typeUser);
      expect(result.username).toBe(item.username);
    },
    TIMEOUT
  );

  test(
    "create user: username missing",
    async () => {
      let user = { ...item };
      user.username = "";
      const result = await dbUsers.createOne(user);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.username.message).toBe("Please provide a username!");
    },
    TIMEOUT
  );

  test(
    "create user: duplicate username",
    async () => {
      let user = { ...item };
      user.username = testItems.child.username;
      const result = await dbUsers.createOne(user);
      expect(result.name).toBe("MongoServerError");
      expect(result.code).toBe(11000);
    },
    TIMEOUT
  );

  test(
    "create user: username invalid",
    async () => {
      let user = { ...item };
      user.username = "u.ser";
      const result = await dbUsers.createOne(user);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.username.message).toBe(
        `${user.username} is not a valid username!`
      );
    },
    TIMEOUT
  );

  test(
    "create user: password missing",
    async () => {
      let user = { ...item };
      user.password = "";
      const result = await dbUsers.createOne(user);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.password.message).toBe("Please provide a password!");
    },
    TIMEOUT
  );

  test(
    "create user: email missing",
    async () => {
      let user = { ...item };
      user.email = "";
      const result = await dbUsers.createOne(user);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.email.message).toBe("Please provide a email!");
    },
    TIMEOUT
  );

  test(
    "create user: duplicate email",
    async () => {
      let user = { ...item };
      user.email = testItems.child.email;
      const result = await dbUsers.createOne(user);
      expect(result.name).toBe("MongoServerError");
      expect(result.code).toBe(11000);
    },
    TIMEOUT
  );

  test(
    "create user: email invalid",
    async () => {
      let user = { ...item };
      user.email = "u!ser@gmail.com";
      const result = await dbUsers.createOne(user);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.email.message).toBe(
        `${user.email} is not a valid email!`
      );
    },
    TIMEOUT
  );

  test(
    "create user: typeUser missing",
    async () => {
      let user = { ...item };
      user.typeUser = "";
      const result = await dbUsers.createOne(user);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.typeUser.message).toBe("Please provide a typeUser!");
    },
    TIMEOUT
  );

  test(
    "create user: typeUser invalid",
    async () => {
      let user = { ...item };
      user.typeUser = "Type";
      const result = await dbUsers.createOne(user);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.typeUser.message).toBe(
        `${user.typeUser} is not a valid type! Try Administrador, Professor, Criança or Tutor.`
      );
    },
    TIMEOUT
  );

  test(
    "create user: name missing",
    async () => {
      let user = { ...item };
      user.name = "";
      const result = await dbUsers.createOne(user);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.name.message).toBe("Please provide a name!");
    },
    TIMEOUT
  );
});

describe("read all users", () => {
  test(
    "check if number of users is at least 5",
    async () => {
      const result = await dbUsers.readAll();
      expect(result.length >= 5).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "check if at least one user is admin",
    async () => {
      const result = await dbUsers.readAll();
      expect(
        result.some((user) => user.typeUser === "Administrador")
      ).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "check if at least one user is teacher",
    async () => {
      const result = await dbUsers.readAll();
      expect(result.some((user) => user.typeUser === "Professor")).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "check if at least one user is tutor",
    async () => {
      const result = await dbUsers.readAll();
      expect(result.some((user) => user.typeUser === "Tutor")).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "check if at least one user is child",
    async () => {
      const result = await dbUsers.readAll();
      expect(result.some((user) => user.typeUser === "Criança")).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "check if all users are admin, teacher, child or tutor",
    async () => {
      const result = await dbUsers.readAll();
      let userTypes = result.every(
        ({ typeUser }) =>
          typeUser === "Administrador" ||
          typeUser === "Professor" ||
          typeUser === "Tutor" ||
          typeUser === "Criança"
      );
      expect(userTypes).toBeTruthy();
    },
    TIMEOUT
  );
});

describe("read one user", () => {
  test(
    "read test user 'userTest' exists and is type 'Criança'",
    async () => {
      const result = await dbUsers.readOne(item.username);
      expect(result).toBeTruthy();
      expect(result.typeUser).toBe("Criança");
    },
    TIMEOUT
  );

  test(
    "read unexistent user",
    async () => {
      const result = await dbUsers.readOne("notExistentUser");
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});

describe("update one user", () => {
  test(
    "update test user",
    async () => {
      const result = await dbUsers.updateOne(item.username, updateItem);
      expect(result).toBeTruthy();
      expect(result).toEqual(expect.objectContaining(updateItem));
    },
    TIMEOUT
  );

  test(
    "update unexistent user",
    async () => {
      const result = await dbUsers.updateOne("notExistentUser", updateItem);
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});

describe("delete one user", () => {
  test(
    "delete test user",
    async () => {
      const result = await dbUsers.deleteOne(item.username);
      expect(result).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "delete unexistent user",
    async () => {
      const result = await dbUsers.deleteOne("notExistentUser");
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});

beforeAll(() => {
  dbUsers.createOne(testItems.admin);
  dbUsers.createOne(testItems.teacher);
  dbUsers.createOne(testItems.tutor);
  dbUsers.createOne(testItems.child);
});

afterAll(() => {
  dbUsers.deleteOne(testItems.admin.username);
  dbUsers.deleteOne(testItems.teacher.username);
  dbUsers.deleteOne(testItems.tutor.username);
  dbUsers.deleteOne(testItems.child.username);
});
