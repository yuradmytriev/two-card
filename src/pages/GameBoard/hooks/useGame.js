import { useState } from "react";
import { useHands } from "modules/Hands";
import useChooseWinner from "./useChooseWinner";

const useGame = () => {
  const [
    hands,
    handleOpenCards,
    handleResetCards,
    handleUpdateHandsCount,
  ] = useHands();

  const [isGameStarted, setGameStarted] = useState(false);

  const [winner, setWinner] = useChooseWinner({ hands, isGameStarted });

  const handleStartGame = () => {
    handleOpenCards();

    setGameStarted(() => true);
  };

  const handleResetGame = () => {
    setWinner(null);

    handleResetCards();

    setGameStarted(() => false);
  };

  return [
    hands,
    winner,
    isGameStarted,
    handleStartGame,
    handleResetGame,
    handleUpdateHandsCount,
  ];
};

export default useGame;
