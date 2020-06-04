import React from "react";
import "./Header.css";

//Holds the score and changes as the scores are clicked using props. 
const Header = props => (
  <div className="header">
    <div className="title">Nature's Game</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;