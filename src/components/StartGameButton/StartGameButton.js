import React from "react";
import PropTypes from "prop-types";

const StartGameButton = ({ onClickHandler }) => (
  <button type="button" onClick={onClickHandler} className="play-button">
    Deal Cards
  </button>
);

StartGameButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default StartGameButton;
