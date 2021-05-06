import { generateClosedCardsSet, generateOpenedCardsSet } from "../hands.utils";

describe("Hands utils: generateClosedCardsSet - should generate closed cards for all hands", () => {
  test("should return closed cards", () => {
    expect(generateClosedCardsSet(2)).toEqual([
      [52, 52, 52, 52, 52, 52, 52],
      [52, 52, 52, 52, 52, 52, 52],
    ]);
  });

  test("should return closed cards for 4 hands", () => {
    expect(generateClosedCardsSet(4)).toEqual([
      [52, 52, 52, 52, 52, 52, 52],
      [52, 52, 52, 52, 52, 52, 52],
      [52, 52, 52, 52, 52, 52, 52],
      [52, 52, 52, 52, 52, 52, 52],
    ]);
  });
});

describe("Hands utils: generateOpenedCardsSet - should generate opened cards for all hands", () => {
  test("should return opened cards", () => {
    expect(generateOpenedCardsSet(2)).toHaveLength(2);
  });

  test("should return opened cards for 4 hands", () => {
    expect(generateOpenedCardsSet(4)).toHaveLength(4);
  });
});
