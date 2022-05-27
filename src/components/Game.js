import React from "react";
import Arena from "./Arena";
import Shop from "./Shop";
import Letter from "./Letter";
import DragDrop from "./DragDrop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lives: 10,
      money: 10,
      shopSize: 10,
      arenaSize: 3,
      lexicon: [
        <Letter key="1" value="A" />,
        <Letter key="2" value="B" />,
        <Letter key="3" value="C" />,
      ],
    };
    this.setLives = this.setLives.bind(this);
    this.setMoney = this.setMoney.bind(this);
  }

  setLives(newLives) {
    this.setState({ lives: newLives });
  }

  setMoney(newMoney) {
    this.setState({ money: newMoney });
  }

  addLetter(letter, index) {}

  sellLetter() {}

  endTurn() {}

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        {this.state.lives} helth, {this.state.money} monies
        <DragDrop />
        <Arena></Arena>
        {this.state.lexicon}
        <Shop {...this.state} setMoney={this.setMoney}></Shop>
      </DndProvider>
    );
  }
}

export default Game;
