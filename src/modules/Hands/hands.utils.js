import {
  BACK_CARD_INDEX,
  DESK_CARDS_COUNT,
  HAND_CARDS_COUNT,
} from "./Card/card.constants";
import { createRange } from "../../common/common.utils";

export const generateClosedCardsSet = (handsCount) => {
  const createSubArray = (value, index) =>
    Array(DESK_CARDS_COUNT)
      .fill(BACK_CARD_INDEX)
      .slice(index * HAND_CARDS_COUNT, (index + 1) * HAND_CARDS_COUNT);

  return createRange(handsCount).map(createSubArray);
};

export const generateOpenedCardsSet = (handsCount) => {
  const shuffledCards = createRange(DESK_CARDS_COUNT).sort(
    () => Math.random() - 0.5
  );

  return createRange(handsCount).map((_, handIndex) =>
    shuffledCards
      .slice(handIndex * HAND_CARDS_COUNT, (handIndex + 1) * HAND_CARDS_COUNT)
      .sort((a, b) => a - b)
  );
};
