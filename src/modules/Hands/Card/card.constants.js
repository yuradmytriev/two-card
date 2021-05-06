import { flatten } from "common/common.utils";

export const DESK_CARDS_COUNT = 52;
export const HAND_CARDS_COUNT = 7;
export const BACK_CARD_INDEX = 52;

export const CARD_COLORS_GROUPS = [
  "#FFFFFF",
  "#C0C0C0",
  "#808080",
  "#000000",
  "#FF0000",
  "#800000",
  "#FFFF00",
  "#808000",
  "#00FFFF",
  "#0000FF",
  "#000080",
  "#FF00FF",
  "#800080",
  "#8ff080",
];

// helper to avoid hardcoded cards
export const generateCards = () => {
  const _createRange = (from, to) =>
    Array(to - from + 1)
      .fill()
      .map((_, index) => from + index);

  const _groupCards = (cardIndex) =>
    ["spade", "diamond", "club", "heart"].map(
      (index) => `${index}_${cardIndex}`
    );

  const cardsInx = [..._createRange(2, 10), "J", "Q", "K", "A"];

  return [...flatten(cardsInx.map(_groupCards)), "XX"].reduce(
    (acc, cardType, cardIndex) => {
      acc[cardIndex] = {
        type: cardType,
        value:
          cardIndex === BACK_CARD_INDEX ? 0 : Math.floor(cardIndex / 4) + 1,
      };
      return acc;
    },
    {}
  );
};

export const CARDS = generateCards();
