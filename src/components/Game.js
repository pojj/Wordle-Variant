import React from "react";
import Arena from "./Arena";
import Shop from "./Shop";
import Letter from "./Letter";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lives: 10,
      money: 10,
      shopSize: 5,
      arenaSize: 3,
      lexicon: [
        <Letter key="1" value="A" />,
        <Letter key="2" value="B" />,
        <Letter key="3" value="C" />,
        <Letter key="4" value="D" />,
      ],
    };
  }

  setLives(newLives) {
    this.setState = {
      lives: newLives,
    };
  }

  setMoney(newMoney) {
    this.setState = {
      money: newMoney,
    };
  }

  addLetter(letter, index) {}

  sellLetter() {}

  endTurn() {}

  render() {
    return (
      <div>
        <Arena></Arena>
        <Shop {...this.state}></Shop>
        {this.state.lexicon}
      </div>
    );
  }
}

export default Game;
