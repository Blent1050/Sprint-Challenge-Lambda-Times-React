import React from 'react';
import PropTypes from "prop-types";
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {
        props.cards.map((card,key) => {
          return <Card key={key} card={card}/>
        })
      }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Cards;