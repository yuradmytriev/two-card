import React from "react";
import PropTypes from "prop-types";
import HANDS_LIST from "./buttons.constants";

const ChooseHandsCountButtons = ({ handleUpdateHandsCount }) => {
  const updateHandsCount = (handsNumber) => () =>
    handleUpdateHandsCount?.(handsNumber);

  return (
    <div>
      {HANDS_LIST.map((handIndex) => (
        <button
          type="button"
          key={handIndex}
          className="choose-hands-count-button"
          onClick={updateHandsCount(handIndex)}
        >
          {handIndex}
        </button>
      ))}
    </div>
  );
};

ChooseHandsCountButtons.propTypes = {
  handleUpdateHandsCount: PropTypes.func,
};

ChooseHandsCountButtons.defaultProps = {
  handleUpdateHandsCount: () => null
};

export default ChooseHandsCountButtons;
