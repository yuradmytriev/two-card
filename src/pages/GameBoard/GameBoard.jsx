import React from "react";

import { GameResult } from "components/GameResult";
import { StartGameButton } from "components/StartGameButton";

import { Hands } from "modules/Hands";
import { Card } from "modules/Hands/Card";
import { ChooseHandsCountButtons } from "modules/Hands/ChooseHandsCountButtons";

import useGame from "./hooks/useGame";

const GameBoard = () => {
  const [
    hands,
    winner,
    isGameStarted,
    handleStartGame,
    handleResetGame,
    handleUpdateHandsCount,
  ] = useGame();

  return (
    <>
      <StartGameButton
        onClickHandler={isGameStarted ? handleResetGame : handleStartGame}
      />
      <ChooseHandsCountButtons
        handleUpdateHandsCount={!isGameStarted ? handleUpdateHandsCount : null}
      />
      {isGameStarted && winner !== null && <GameResult winner={winner} />}
      <Hands
        hands={hands}
        renderCards={({ handIndex, cardIndex }) => (
          <Card hands={hands} handIndex={handIndex} cardIndex={cardIndex} />
        )}
      />
    </>
  );
};

export default GameBoard;
