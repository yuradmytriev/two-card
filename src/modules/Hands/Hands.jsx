import React from "react";
import PropTypes from "prop-types";

const Hands = ({ hands, renderCards }) =>
  hands.map((cards, handIndex) => (
    <div key={handIndex} className="hand">
      {React.Children.toArray(
        cards.map((cardIndex) => renderCards({ cardIndex, handIndex }))
      )}
    </div>
  ));

Hands.propTypes = {
  hands: PropTypes.array.isRequired, // TODO: better to use PropTypes.shape() for arrays and objects
  renderCards: PropTypes.func.isRequired,
};

export default Hands;
