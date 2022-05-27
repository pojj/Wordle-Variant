import React from "react";
import Arena from "./Arena";
import Shop from "./Shop";
import Letter from "./Letter";
import { DragDropContext } from "react-beautiful-dnd";

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
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  setLives(newLives) {
    this.setState({ lives: newLives });
  }

  setMoney(newMoney) {
    this.setState({ money: newMoney });
  }

  onDragEnd() {}

  addLetter(letter, index) {}

  sellLetter() {}

  endTurn() {
    //TODO: reorder stuff
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.lives} helth, {this.state.money} monies
        <Arena />
        {this.state.lexicon}
        <Shop {...this.state} setMoney={this.setMoney}></Shop>
      </DragDropContext>
    );
  }
}

export default Game;
