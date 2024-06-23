const equalPasswords = require("../functions/equalPasswords");

test("equal values", () => {
  expect(equalPasswords("Esmad_2122", "Esmad_2122")).toBeTruthy();
});

test("different values", () => {
  expect(equalPasswords("Esmad_2122", "esmad_2122")).toBeFalsy();
});
