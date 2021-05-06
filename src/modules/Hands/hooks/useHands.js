import { useState } from "react";
import {
  generateClosedCardsSet,
  generateOpenedCardsSet,
} from "modules/Hands/hands.utils";

const DEFAULT_HANDS_COUNT = 2;

const useHands = () => {
  const [hands, setHands] = useState(() =>
    generateClosedCardsSet(DEFAULT_HANDS_COUNT)
  );

  const handleUpdateHandsCount = (handsCount) => {
    setHands(generateClosedCardsSet(handsCount));
  };

  const handleOpenCards = () => {
    setHands(generateOpenedCardsSet(hands.length));
  };

  const handleResetCards = () => {
    setHands(generateClosedCardsSet(hands.length));
  };

  return [hands, handleOpenCards, handleResetCards, handleUpdateHandsCount];
};

export default useHands;
