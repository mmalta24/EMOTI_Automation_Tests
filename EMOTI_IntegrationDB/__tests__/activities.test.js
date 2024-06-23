const dbActivities = require("../calls/activities");
const TIMEOUT = 7000;

const item = {
  title: "testActivity",
  level: "Fácil",
  questions: ["Some question"],
  caseIMG: "https://www.plt.org/wp-content/uploads/2020/03/plt-.png",
  description: "Some activity",
  category: "Quizz",
  author: "someone",
};

const updateItem = { level: "Difícil" };

// CRUD operations
describe("create one activity", () => {
  test(
    "create activity and check values saved on db",
    async () => {
      const result = await dbActivities.createOne(item);
      expect(result).toBeTruthy();
      expect(result.title).toBe(item.title);
      expect(result.level).toBe(item.level);
      expect(result.questions).toStrictEqual(item.questions);
      expect(result.caseIMG).toBe(item.caseIMG);
      expect(result.description).toBe(item.description);
      expect(result.category).toBe(item.category);
      expect(result.author).toBe(item.author);
    },
    TIMEOUT
  );

  test(
    "create activity: title missing",
    async () => {
      let activity = { ...item };
      activity.title = "";
      const result = await dbActivities.createOne(activity);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.title.message).toBe("Please provide a title!");
    },
    TIMEOUT
  );

  test(
    "create activity: duplicate title",
    async () => {
      const result = await dbActivities.createOne(item);
      expect(result.name).toBe("MongoServerError");
      expect(result.code).toBe(11000);
    },
    TIMEOUT
  );

  test(
    "create activity: level missing",
    async () => {
      let activity = { ...item };
      activity.level = "";
      const result = await dbActivities.createOne(activity);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.level.message).toBe("Please provide a level!");
    },
    TIMEOUT
  );

  test(
    "create activity: level invalid",
    async () => {
      let activity = { ...item };
      activity.level = "Level";
      const result = await dbActivities.createOne(activity);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.level.message).toBe(
        `${activity.level} is not a valid type! Try Fácil, Médio or Difícil.`
      );
    },
    TIMEOUT
  );

  test(
    "create activity: questions missing",
    async () => {
      let activity = { ...item };
      activity.questions = [];
      const result = await dbActivities.createOne(activity);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.questions.message).toBe(
        "Questions cannot be empty!"
      );
    },
    TIMEOUT
  );

  test(
    "create activity: caseIMG missing",
    async () => {
      let activity = { ...item };
      activity.caseIMG = "";
      const result = await dbActivities.createOne(activity);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.caseIMG.message).toBe("Please provide a caseIMG!");
    },
    TIMEOUT
  );

  test(
    "create activity: description missing",
    async () => {
      let activity = { ...item };
      activity.description = "";
      const result = await dbActivities.createOne(activity);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.description.message).toBe(
        "Please provide a description!"
      );
    },
    TIMEOUT
  );

  test(
    "create activity: category missing",
    async () => {
      let activity = { ...item };
      activity.category = "";
      const result = await dbActivities.createOne(activity);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.category.message).toBe("Please provide a category!");
    },
    TIMEOUT
  );

  test(
    "create activity: author missing",
    async () => {
      let activity = { ...item };
      activity.author = "";
      const result = await dbActivities.createOne(activity);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.author.message).toBe("Please provide a author!");
    },
    TIMEOUT
  );
});

describe("read all activities", () => {
  test(
    "check if number of activities is at least 1",
    async () => {
      const result = await dbActivities.readAll();
      expect(result.length >= 1).toBeTruthy();
    },
    TIMEOUT
  );
});

describe("read one activity", () => {
  test(
    "read test activity 'testBadge'",
    async () => {
      const result = await dbActivities.readOne(item.title);
      expect(result).toBeTruthy();
      expect(result.title).toBe(item.title);
      expect(result.level).toBe(item.level);
      expect(result.questions).toStrictEqual(item.questions);
      expect(result.caseIMG).toBe(item.caseIMG);
      expect(result.description).toBe(item.description);
      expect(result.category).toBe(item.category);
      expect(result.author).toBe(item.author);
    },
    TIMEOUT
  );

  test(
    "read unexistent activity",
    async () => {
      const result = await dbActivities.readOne("notExistentActivity");
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});

describe("update one activity", () => {
  test(
    "update test activity",
    async () => {
      const result = await dbActivities.updateOne(item.title, updateItem);
      expect(result).toBeTruthy();
      expect(result).toEqual(expect.objectContaining(updateItem));
    },
    TIMEOUT
  );

  test(
    "update unexistent activity",
    async () => {
      const result = await dbActivities.updateOne(
        "notExistentActivity",
        updateItem
      );
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});

describe("delete one activity", () => {
  test(
    "delete test activity",
    async () => {
      const result = await dbActivities.deleteOne(item.title);
      expect(result).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "delete unexistent activity",
    async () => {
      const result = await dbActivities.deleteOne("notExistentActivity");
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});
