import fizzBuzz from "../fizzBuzz";

describe("fizzBuzzモジュールのテスト", () => {
  describe("3の倍数を渡すとFizzが返ってくる", () => {
    test.each([
      { int: 3, reason: "3を渡すとFizzが返ってくる" },
      { int: 99, reason: "99を渡すとFizzが返ってくる" },
    ])("$reason", ({ int, reason }) => {
      expect(fizzBuzz(int)).toBe("Fizz");
    });
  });

  describe("5の倍数を渡すとBuzzが返ってくる", () => {
    test.each([
      {
        int: 5,
        reason: "5を渡すとBuzzが返ってくる",
      },
      { int: 100, reason: "100を渡すとBuzzが返ってくる" },
    ])(`$reason`, ({ int, reason }) => {
      expect(fizzBuzz(int)).toBe("Buzz");
    });
  });

  describe("15の倍数を渡すとFizzBuzzが返ってくる", () => {
    test.each([
      { int: 15, reason: "15を渡すとFizzBuzzが返ってくる" },
      { int: 90, reason: "90を渡すとFizzBuzzが返ってくる" },
    ])("$reason", ({ int, reason }) => {
      expect(fizzBuzz(int)).toBe("FizzBuzz");
    });
  });

  describe("3の倍数で5の倍数でも15の倍数でもない場合は渡した数値が返ってくる", () => {
    test.each([
      { int: 1, reason: "1を渡すと1が返ってくる" },
      { int: 98, reason: "98を渡すと98が返ってくる" },
    ])("$reason", ({ int, reason }) => {
      expect(fizzBuzz(int)).toBe(int);
    });
  });
});
