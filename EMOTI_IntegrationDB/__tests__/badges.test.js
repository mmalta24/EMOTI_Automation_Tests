const dbBadges = require("../calls/badges");
const TIMEOUT = 7000;

const item = {
  badgeName: "testBadge",
  badgeIMG:
    "https://i.pinimg.com/originals/19/19/df/1919dfda3b3f19392ddb9205b4e1331c.png",
  pointsNeeded: 10,
  badgeEmotion: "Feliz",
};

const updateItem = { pointsNeeded: 50 };

// CRUD operations
describe("create one badge", () => {
  test(
    "create badge and check values saved on db",
    async () => {
      const result = await dbBadges.createOne(item);
      expect(result).toBeTruthy();
      expect(result.badgeName).toBe(item.badgeName);
      expect(result.badgeIMG).toBe(item.badgeIMG);
      expect(result.pointsNeeded).toBe(item.pointsNeeded);
      expect(result.badgeEmotion).toBe(item.badgeEmotion);
    },
    TIMEOUT
  );

  test(
    "create badge: badgeName missing",
    async () => {
      let badge = { ...item };
      badge.badgeName = "";
      const result = await dbBadges.createOne(badge);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.badgeName.message).toBe(
        "Please provide a badgeName!"
      );
    },
    TIMEOUT
  );

  test(
    "create badge: duplicate badgeName",
    async () => {
      const result = await dbBadges.createOne(item);
      expect(result.name).toBe("MongoServerError");
      expect(result.code).toBe(11000);
    },
    TIMEOUT
  );

  test(
    "create badge: badgeIMG missing",
    async () => {
      let badge = { ...item };
      badge.badgeIMG = "";
      const result = await dbBadges.createOne(badge);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.badgeIMG.message).toBe("Please provide a badgeIMG!");
    },
    TIMEOUT
  );

  test(
    "create badge: pointsNeeded missing",
    async () => {
      let badge = { ...item };
      badge.pointsNeeded = "";
      const result = await dbBadges.createOne(badge);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.pointsNeeded.message).toBe(
        "Please provide a pointsNeeded!"
      );
    },
    TIMEOUT
  );

  test(
    "create badge: badgeEmotion missing",
    async () => {
      let badge = { ...item };
      badge.badgeEmotion = "";
      const result = await dbBadges.createOne(badge);
      expect(result.name).toBe("ValidationError");
      expect(result.errors.badgeEmotion.message).toBe(
        "Please provide a badgeEmotion!"
      );
    },
    TIMEOUT
  );
});

describe("read all badges", () => {
  test(
    "check if number of classes is at least 1",
    async () => {
      const result = await dbBadges.readAll();
      expect(result.length >= 1).toBeTruthy();
    },
    TIMEOUT
  );
});

describe("read one badge", () => {
  test(
    "read test badge 'testBadge'",
    async () => {
      const result = await dbBadges.readOne(item.badgeName);
      expect(result).toBeTruthy();
      expect(result.badgeName).toBe(item.badgeName);
      expect(result.badgeIMG).toBe(item.badgeIMG);
      expect(result.pointsNeeded).toBe(item.pointsNeeded);
      expect(result.badgeEmotion).toBe(item.badgeEmotion);
    },
    TIMEOUT
  );

  test(
    "read unexistent badge",
    async () => {
      const result = await dbBadges.readOne("notExistentBadge");
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});

describe("update one badge", () => {
  test(
    "update test badge",
    async () => {
      const result = await dbBadges.updateOne(item.badgeName, updateItem);
      expect(result).toBeTruthy();
      expect(result).toEqual(expect.objectContaining(updateItem));
    },
    TIMEOUT
  );

  test(
    "update unexistent badge",
    async () => {
      const result = await dbBadges.updateOne("notExistentBadge", updateItem);
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});

describe("delete one badge", () => {
  test(
    "delete test badge",
    async () => {
      const result = await dbBadges.deleteOne(item.badgeName);
      expect(result).toBeTruthy();
    },
    TIMEOUT
  );

  test(
    "delete unexistent class",
    async () => {
      const result = await dbBadges.deleteOne("notExistentBadge");
      expect(result).toBeFalsy();
    },
    TIMEOUT
  );
});
