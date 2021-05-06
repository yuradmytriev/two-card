import React from "react";
import PropTypes from "prop-types";

const GameResult = ({ winner }) => {
  const winnerPlayer = winner + 1;

  return <h3>{!!winnerPlayer ? `Winner ${winnerPlayer}` : "No winners"}</h3>;
};

GameResult.propTypes = {
  winner: PropTypes.number,
};

GameResult.defaultProps = {
  winner: null,
};

export default GameResult;
