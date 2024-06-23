const cleanEmptyObjectKeys = require("../functions/cleanEmptyObjectKeys");

test("object with empty values", () => {
  const object = {
    val1: "something",
    val2: null,
    val3: undefined,
    val4: "",
  };
  expect(cleanEmptyObjectKeys(object)).toEqual({ val1: "something" });
});

test("object without empty values", () => {
  const person = {
    name: "John Doe",
    age: 42,
  };
  expect(cleanEmptyObjectKeys(person)).toEqual(person);
});
