import { getScoreOfHandCards, getWinnerIndex } from "../hooks/useChooseWinner";

describe("Hook utils: useChooseWinner", () => {
  describe("Utils: getScoreOfHandCards - should count correct player score", () => {
    test("should return zero score for non-pairs cards", () => {
      const hand = [0, 11, 14, 23, 42, 45, 48];
      expect(getScoreOfHandCards(hand)).toBe(0);
    });

    test("should return positive score for pairs cards", () => {
      const hand = [10, 11, 14, 23, 42, 45, 48];
      expect(getScoreOfHandCards(hand)).toBe(10);
    });
  });

  describe("Utils: getWinnerIndex - should get a correct winner index", () => {
    test("should win first player", () => {
      const hands = [
        [3, 21, 22, 23, 34, 46, 47],
        [0, 4, 23, 28, 32, 36, 39],
      ];
      expect(getWinnerIndex(hands)).toBe(0);
    });

    test("should win second player", () => {
      const hands = [
        [3, 21, 27, 31, 34, 46, 49],
        [0, 3, 23, 24, 32, 36, 39],
      ];
      expect(getWinnerIndex(hands)).toBe(1);
    });

    test("should win third player", () => {
      const hands = [
        [0, 1, 11, 22, 30, 33, 48],
        [0, 1, 11, 22, 30, 33, 48],
        [9, 10, 17, 20, 26, 28, 29],
      ];
      expect(getWinnerIndex(hands)).toBe(2);
    });
  });
});
