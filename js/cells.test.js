import { add } from "./cells";

describe("Given function add", () => {
  describe("When the params are a = 1 and b = 1", () => {
    test("Then the result should be 2", () => {
      const a = 1;
      const b = 1;
      const result = add(a, b);
      const expected = 2;
      expect(result).toBe(expected);
    });
  });
});
