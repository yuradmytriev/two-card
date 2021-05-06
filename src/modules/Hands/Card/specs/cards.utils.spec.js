import { getPairs } from "../cards.utils";

describe("Utils: getPairs - should return cards pairs", () => {
  test("should return pairs with the same values", () => {
    const hands = [
      [13, 22, 23, 26, 27, 32, 35],
      [0, 3, 23, 24, 32, 36, 39],
    ];
    expect(getPairs(hands)).toEqual([
      [22, 23, 26, 27, 32, 35],
      [0, 3, 36, 39],
    ]);
  });

  test("should not return pairs with the same values", () => {
    const hands = [
      [13, 22, 0, 5, 30, 40, 50],
      [13, 22, 0, 5, 30, 40, 50],
    ];
    expect(getPairs(hands)).toEqual([[], []]);
  });
});
