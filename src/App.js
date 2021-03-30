import React, { useState, useEffect, useRef} from 'react';
import axios from './axios';
import './App.css';
import Header from './Components/Header';
import SwipeButtons from './Components/SwipeButtons';
import TinderCards from './Components/TinderCards';

var data = [
  {"name":"Wendy Shon",
   "imgUrl":"https://upload.wikimedia.org/wikipedia/commons/6/62/Wendy_at_Incheon_Airport_on_September_9%2C_2019.jpg"},
  {"name":"Teyana Taylor",
   "imgUrl":"https://www.rollingstone.com/wp-content/uploads/2020/06/teyana-taylor.jpg?resize=1800,1200&w=1800"},
   {"name":"Carla Gugino", "imgUrl":"https://i.pinimg.com/originals/89/ac/1a/89ac1a348b3c7cd5ab9cc00eaf5fe2b7.jpg"}
];

function App() {

  const [people, setPeople] = useState(data);
  const childRefs = Array(people.length);
  childRefs.fill(useRef());

  const handleSwipe = (dir, swipedName) => {
    console.log('You swiped '+dir+' on '+swipedName);
  };

  const handleLeftScreen = (leftName) => {
    console.log(leftName+" left the screen...")
    setPeople(prev => [{"name":"Carla Gugino", "imgUrl":"https://i.pinimg.com/originals/89/ac/1a/89ac1a348b3c7cd5ab9cc00eaf5fe2b7.jpg"}].concat(prev.slice(0, prev.length-1)));
  };

  const handleClick = (dir) => { 
    childRefs[people.length-1].current.swipe(dir);
  };

  return (
    <div className="App">
      <Header></Header>
      <TinderCards 
        cards={people}
        swipeHandler={handleSwipe}
        leftScreenHandler={handleLeftScreen}
        childRefs={childRefs}
      ></TinderCards>
      <SwipeButtons
        clickHandler={handleClick}
      ></SwipeButtons>
    </div>
  );
}

export default App;
