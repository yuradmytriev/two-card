import React from "react";
import PropTypes from "prop-types";

import { getPairs } from "./cards.utils";
import { CARD_COLORS_GROUPS, CARDS } from "./card.constants";

export const _createPairsBorders = (hands, hand, card) => {
  const pairsCards = getPairs(hands);

  if (pairsCards[hand]?.includes(card)) {
    const cardColor = CARD_COLORS_GROUPS[CARDS[card]?.value];
    return { outline: `10px solid ${cardColor}` };
  }

  return null;
};

export const _generateImageSource = (cardIndex) =>
  CARDS[cardIndex].type !== "XX"
    ? `http://h3h.net/images/cards/${CARDS[cardIndex].type}.svg`
    : "https://deckofcardsapi.com/static/img/XX.png"; // TODO: find back image in "h3h.net/images/cards"

const Card = ({ hands, handIndex, cardIndex }) => (
  <img
    alt="card"
    className="card"
    src={_generateImageSource(cardIndex)}
    style={_createPairsBorders(hands, handIndex, cardIndex)}
  />
);

Card.propTypes = {
  handIndex: PropTypes.number.isRequired,
  cardIndex: PropTypes.number.isRequired,
};

export default Card;
