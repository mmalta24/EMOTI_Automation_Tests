const dbEmotions = require("../calls/emotions");
const TIMEOUT = 7000;

const item = {
  name: "Chateado",
};

const updateItem = { name: "Zangado" };

// CRUD operations
describe("create one emotion", () => {
  test(
    "create emotion and check values saved on db",
    async () => {
      const result = await dbEmotions.createOne(item);
      expect(result).toBeTruthy();
      expect(result.name).toBe(item.name);
    },
    TIMEOUT
  );

  test(
    "create user: name missing",
    async () => {
      let emotion = { name: "" };
      const result = await dbEmotions.createOne(emotion);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.name.message).toBe("Please provide a name!");
    },
    TIMEOUT
  );

  test(
    "create emotion: duplicate name",
    async () => {
      let emotion = { name: item.name };
      const result = await dbEmotions.createOne(emotion);
      expect(result.name).toBe("MongoServerError");
      expect(result.code).toBe(11000);
    },
    TIMEOUT
  );
});

describe("read all emotions", () => {
  test(
    "check if number of users is at least 1",
    async () => {
      const result = await dbEmotions.readAll();
      expect(result.length >= 1).toBeTruthy();
    },
    TIMEOUT
  );
});

describe("read one emotion", () => {
  test(
    "read test emotion 'Chateado' exists",
    async () => {
      const result = await dbEmotions.readOne(item.name);
      expect(result).toBeTruthy();
      expect(result.name).toBe(item.name);
    },
    TIMEOUT
  );

  test(
    "read unexistent emotion",
    async () => {
      const result = await dbEmotions.readOne("notExistentEmotion");
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});

describe("update one emotion", () => {
  test(
    "update test emotion",
    async () => {
      const result = await dbEmotions.updateOne(item.name, updateItem);
      expect(result).toBeTruthy();
      expect(result).toEqual(expect.objectContaining(updateItem));
    },
    TIMEOUT
  );

  test(
    "update unexistent emotion",
    async () => {
      const result = await dbEmotions.updateOne(
        "notExistentEmotion",
        updateItem
      );
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});

describe("delete one emotion", () => {
  test(
    "delete test emotion",
    async () => {
      const result = await dbEmotions.deleteOne(updateItem.name);
      expect(result).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "delete unexistent emotion",
    async () => {
      const result = await dbEmotions.deleteOne("notExistentEmotion");
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});
