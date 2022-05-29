import React from "react";
import Arena from "./Arena";
import Shop from "./Shop";
import { DragDropContext } from "react-beautiful-dnd";
import { Button } from "react-bootstrap";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lives: 10,
      money: 10,
      arenaSize: 3,
      shopSize: 10,
      lexicon: [
        { value: "A", id: "a", hp: 1, dmg: 1 },
        { value: "B", id: "b", hp: 2, dmg: 2 },
        { value: "C", id: "c", hp: 3, dmg: 3 },
      ],
      shopLexicon: [],
    };

    this.setShopLexicon = this.setShopLexicon.bind(this);
    this.setLives = this.setLives.bind(this);
    this.setMoney = this.setMoney.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.reorderLexicon = this.reorderLexicon.bind(this);
    this.reorderShop = this.reorderShop.bind(this);
    this.buyLetter = this.buyLetter.bind(this);
    this.sellLetter = this.sellLetter.bind(this);
  }

  setLives(newLives) {
    this.setState({ lives: newLives });
  }

  setMoney(newMoney) {
    this.setState({ money: newMoney });
  }

  setShopLexicon(newShopLexicon) {
    this.setState({ shopLexicon: newShopLexicon });
  }

  onDragEnd(result) {
    const source = result.source;
    const destination = result.destination;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (source.droppableId === "owned" && destination.droppableId === "owned") {
      this.reorderLexicon(source.index, destination.index);
    }
    if (source.droppableId === "shop" && destination.droppableId === "shop") {
      this.reorderShop(source.index, destination.index);
    }
    if (source.droppableId === "shop" && destination.droppableId === "owned") {
      this.buyLetter(source.index, destination.index);
    }
    if (source.droppableId === "owned" && destination.droppableId === "shop") {
      this.sellLetter(source.index, destination.index);
    }
  }

  reorderLexicon(indexI, indexF) {
    const newLex = Array.from(this.state.lexicon);
    const [movedLetter] = newLex.splice(indexI, 1);
    movedLetter.index = indexF;
    newLex.splice(indexF, 0, movedLetter);
    this.setState({ lexicon: newLex });
  }

  reorderShop(indexI, indexF) {
    const newShopLex = Array.from(this.state.shopLexicon);
    const [movedLetter] = newShopLex.splice(indexI, 1);
    movedLetter.index = indexF;
    newShopLex.splice(indexF, 0, movedLetter);
    this.setState({ shopLexicon: newShopLex });
  }

  buyLetter(indexI, indexF) {
    if (this.state.money >= 3) {
      const newLex = Array.from(this.state.lexicon);
      const newShopLex = Array.from(this.state.shopLexicon);
      const [movedLetter] = newShopLex.splice(indexI, 1);
      movedLetter.index = indexF;
      newLex.splice(indexF, 0, movedLetter);
      this.setState({
        money: this.state.money - 3,
        lexicon: newLex,
        shopLexicon: newShopLex,
      });
    }
  }

  sellLetter(indexI, indexF) {
    const newLex = Array.from(this.state.lexicon);
    const newShopLex = Array.from(this.state.shopLexicon);
    const [movedLetter] = newLex.splice(indexI, 1);
    movedLetter.index = indexF;
    newShopLex.splice(indexF, 0, movedLetter);
    this.setState({
      money: this.state.money + 1,
      lexicon: newLex,
      shopLexicon: newShopLex,
    });
  }

  endTurn() {
    //TODO: reorder stuff
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.lives} helth, {this.state.money} monies
        <Arena letters={this.state.lexicon} id="owned"></Arena>
        <div style={{ border: "3px solid green" }} />
        <Shop
          money={this.state.money}
          setMoney={this.setMoney}
          shopSize={this.state.shopSize}
          shopLexicon={this.state.shopLexicon}
          setShopLexicon={this.setShopLexicon}
        />
        <Button className="end" onClick={this.endTurn}>
          End Turn
        </Button>
      </DragDropContext>
    );
  }
}

export default Game;
