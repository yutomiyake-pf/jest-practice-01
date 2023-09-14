import sayHoge from "../sayHoge";

test("sayHoge", () => {
  expect(sayHoge()).toBe("hoge");
});
