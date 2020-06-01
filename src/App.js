
import './App.css';
import React, { Component } from "react"
import Card from "./components/Card"
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import cards from "./cards.json"
import "./App.css"
    
    class App extends Component {
    
      // Setting this.state.cards to the cards json array
      state = {
        cards,
        score: 0,
        highscore: 0
      };
    
      // If the user clicks on the same card it alerts that the Game is over. If the current score is more than than the high score it becomes the new highscore and the game is over. 
      gameOver = () => {
        if (this.state.score > this.state.highscore) {
          this.setState({highscore: this.state.score}, function() {
            console.log(this.state.highscore);
          });
        }
        this.state.cards.forEach(card => {
          card.count = 0;
        });
        alert(`Game Over :( \nscore: ${this.state.score}`);
        this.setState({score: 0});
        return true;
      }
    //This function counts the score. It finds the card by id and if the id has not been previously clicked it increments the score by 1. Keep doing this until the game is over. 
      clickCount = id => {
        this.state.cards.find((o, i) => {
          if (o.id === id) {
            if(cards[i].count === 0){
              cards[i].count = cards[i].count + 1;
              this.setState({score : this.state.score + 1}, function(){
                console.log(this.state.score);
              });
              this.state.cards.sort(() => Math.random() - 0.5)
              return true; 
            } else {
              this.gameOver();
            }
          }
        });
      }
      // Map over this.state.cards and render a cardCard component for each card object. This gives each card and id, image, and clickcount. 
      render() {
        return (
          <Wrapper>
            <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
            {this.state.cards.map(card => (
              <Card
                clickCount={this.clickCount}
                id={card.id}
                key={card.id}
                image={card.image}
              />
            ))}
          </Wrapper>
        );
      }
    }
    
    export default App;
    