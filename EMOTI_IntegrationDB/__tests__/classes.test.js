const dbClasses = require("../calls/classes");
const TIMEOUT = 7000;

const item = {
  name: "testClass",
  teacher: "someUser",
};

const updateItem = { name: "newClass" };

// CRUD operations
describe("create one class", () => {
  test(
    "create class and check values saved on db",
    async () => {
      const result = await dbClasses.createOne(item);
      expect(result).toBeTruthy();
      expect(result.name).toBe(item.name);
      expect(result.teacher).toBe(item.teacher);
      expect(result.requests).toStrictEqual([]);
      expect(result.students).toStrictEqual([]);
    },
    TIMEOUT
  );

  test(
    "create class: name missing",
    async () => {
      let c = { ...item };
      c.name = "";
      const result = await dbClasses.createOne(c);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.name.message).toBe("Please provide a className!");
    },
    TIMEOUT
  );

  test(
    "create class: teacher missing",
    async () => {
      let c = { ...item };
      c.teacher = "";
      const result = await dbClasses.createOne(c);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.teacher.message).toBe("Please provide a teacher!");
    },
    TIMEOUT
  );
});

describe("read all classes", () => {
  test(
    "check if number of classes is at least 1",
    async () => {
      const result = await dbClasses.readAll();
      expect(result.length >= 1).toBeTruthy();
    },
    TIMEOUT
  );
});

describe("read one class", () => {
  test(
    "read test class 'testClass' with teacher 'someUser' exists",
    async () => {
      const result = await dbClasses.readOne(item.name, item.teacher);
      expect(result).toBeTruthy();
      expect(result.name).toBe(item.name);
      expect(result.teacher).toBe(item.teacher);
      expect(result.requests).toStrictEqual([]);
      expect(result.students).toStrictEqual([]);
    },
    TIMEOUT
  );

  test(
    "read unexistent class",
    async () => {
      const result = await dbClasses.readOne(
        "notExistentClass",
        "notExistentUser"
      );
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});

describe("update one class", () => {
  test(
    "update test class",
    async () => {
      const result = await dbClasses.updateOne(
        item.name,
        item.teacher,
        updateItem
      );
      expect(result).toBeTruthy();
      expect(result).toEqual(expect.objectContaining(updateItem));
    },
    TIMEOUT
  );

  test(
    "update unexistent class",
    async () => {
      const result = await dbClasses.updateOne(
        "notExistentClass",
        "notExistentUser",
        updateItem
      );
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});

describe("delete one user", () => {
  test(
    "delete test class",
    async () => {
      const result = await dbClasses.deleteOne(updateItem.name, item.teacher);
      expect(result).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "delete unexistent class",
    async () => {
      const result = await dbClasses.deleteOne(
        "notExistentClass",
        "notExistentUser"
      );
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});
