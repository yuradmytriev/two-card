import { useEffect, useState } from "react";
import { CARDS } from "modules/Hands/Card/card.constants";

export const getScoreOfHandCards = (handCards) => {
  return handCards.reduce((cardsScore, cardValue, index) => {
    const currentCardValue = CARDS[cardValue].value;
    const nextCardValue = CARDS[handCards[index + 1]]?.value;

    if (Number(currentCardValue) === Number(nextCardValue)) {
      return cardsScore + cardValue;
    }

    return cardsScore;
  }, 0);
};

export const getWinnerIndex = (hands) => {
  let totalScore = 0;

  const handsWithCards = hands.reduce((acc, val, index) => {
    totalScore = totalScore + getScoreOfHandCards(val);
    acc[index] = {
      index,
      score: getScoreOfHandCards(val),
    };

    return acc;
  }, {});

  const winnerIndex = Object.entries(handsWithCards).reduce(
    (leaderIndex, val) => {
      const shouldUpdateLeader =
        val[1].score > handsWithCards[leaderIndex].score;
      if (shouldUpdateLeader) {
        leaderIndex = val[0];
      }

      return Number(leaderIndex);
    },
    0
  );

  if (totalScore > 0) {
    return winnerIndex;
  }

  return null;
};

const useChooseWinner = ({ hands, isGameStarted }) => {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (isGameStarted) {
      const winnerIndex = getWinnerIndex(hands);

      setWinner(() => winnerIndex);
    }
    // eslint-disable-next-line
  }, [isGameStarted]);

  return [winner, setWinner];
};

export default useChooseWinner;
