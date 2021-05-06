import { flatten } from "common/common.utils";
import { CARDS, BACK_CARD_INDEX } from "./card.constants";

export const getPairs = (hands) =>
  hands.map(
    (handWithCards) =>
      flatten(
        handWithCards
          .map((card, index) => {
            const shouldIgnoreBackCard = card !== BACK_CARD_INDEX;
            const arePrevAndNextCardsSame =
              CARDS?.[card]?.value === CARDS?.[handWithCards[index + 1]]?.value;

            if (shouldIgnoreBackCard && arePrevAndNextCardsSame) {
              return [card, handWithCards[index + 1]];
            }

            return null;
          })
          .filter((i) => i)
      ) // TODO: we should filter items first to speed up the algorithm
  );
