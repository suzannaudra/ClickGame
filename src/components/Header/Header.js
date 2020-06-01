import React from "react";
import "./Header.css";

//Holds the score and changeds as the scores are clicked using props. 
const Header = props => (
  <div className="header">
    <div className="title">Nature's Click Game</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;