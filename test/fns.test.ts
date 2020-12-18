import { add } from "../src/fns";

describe("fns.ts", () => {
  test("add", () => {
    expect(add(2, 3)).toBe(5);
  });
});
