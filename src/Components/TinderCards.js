import React from 'react';
import '../Styles/TinderCards.css';
import TinderCard from 'react-tinder-card';
import uniqueId from 'lodash.uniqueid';

function TinderCards(props) {

  const cards = props.cards;

  const handleSwipe = (dir, swipedName) => {
      props.swipeHandler(dir, swipedName)
  }; 

  const handleLeftScreen = (leftName) => {
      props.leftScreenHandler(leftName)
  };

  // Render Function  
  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {cards.map((card, index) => 
          <TinderCard
            className="swipe"
            key={uniqueId('person_')}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => handleSwipe(dir, card.name)}
            onCardLeftScreen={() => handleLeftScreen(card.name)}
            ref={props.childRefs[index]}
          >
            <div 
              style={{ backgroundImage: 'url(' + card.imgUrl + ')' }} className='card'
            >
              <h3>{card.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
    </div>
  )
}

 export default TinderCards
 