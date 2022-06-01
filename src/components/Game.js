import React from "react";
import Lexicon from "./Lexicon";
import randomLetter from "./randomLetter";
import isValidWord from "./isValidWord";
import "./Game.css";
import { DragDropContext } from "react-beautiful-dnd";
import { Button } from "react-bootstrap";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lives: props.startingLives,
      money: props.startingMoney + 1, // Give 1 extra money because the game rolls immediately after rendering
      lexiconSize: props.startingLexiconSize,
      shopSize: props.startingShopSize,
      lexicon: [],
      shopLexicon: [],
      letterId: 0,
    };

    this.onDragEnd = this.onDragEnd.bind(this);
    this.reorderLexicon = this.reorderLexicon.bind(this);
    this.reorderShop = this.reorderShopLexicon.bind(this);
    this.buyLetter = this.buyLetter.bind(this);
    this.sellLetter = this.sellLetter.bind(this);
    this.roll = this.roll.bind(this);
    this.buffLetters = this.buffLetters.bind(this);
    this.endTurn = this.endTurn.bind(this);
  }
  componentDidMount() {
    this.roll();
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
      this.reorderShopLexicon(source.index, destination.index);
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

  reorderShopLexicon(indexI, indexF) {
    const newShopLex = Array.from(this.state.shopLexicon);
    const [movedLetter] = newShopLex.splice(indexI, 1);
    movedLetter.index = indexF;
    newShopLex.splice(indexF, 0, movedLetter);
    this.setState({ shopLexicon: newShopLex });
  }

  buyLetter(indexI, indexF) {
    if (this.state.money >= 3) {
      if (this.state.lexicon.length < this.state.lexiconSize) {
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
      } else {
        alert("Your lexicon is full!");
      }
    } else {
      alert("You are broke");
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

  roll() {
    if (this.state.money > 0) {
      const newLetters = []; // const means variable cannot be redefined, can be modified.
      let letterNum = this.state.letterId;
      for (let i = 0; i < this.state.shopSize; i++) {
        let letter = {};
        letter.value = randomLetter();
        letter.id = letterNum;
        letter.hp = Math.floor(Math.random() * 99 + 1);
        letter.dmg = Math.floor(Math.random() * 99 + 1);
        letterNum++;
        newLetters.push(letter);
      }
      this.setState({
        money: this.state.money - 1,
        shopLexicon: newLetters,
        letterId: letterNum,
      });
    } else {
      alert("You are broke");
    }
  }

  buffLetters() {
    const lexicon = this.state.lexicon;
    for (let i = 0; i < this.state.lexicon.length; i++) {
      for (let j = i + 1; j <= this.state.lexicon.length; j++) {
        let test = lexicon.slice(i, j);
        test = test
          .map((letter) => letter.value)
          .join("")
          .toLowerCase();
        if (isValidWord(test, 0, 279495)) {
          console.log(test);
        }
      }
    }
  }

  endTurn() {
    this.buffLetters();
    // Single line conditional if size smaller than maxSize add increment else size gets maxed (15)
    const newLexiconSize =
      this.state.lexiconSize + this.props.lexiconIncrementSize <=
      this.props.maxSize
        ? this.state.lexiconSize + this.props.lexiconIncrementSize
        : this.props.maxSize;
    const newShopSize =
      this.state.shopSize + this.props.shopIncrementSize <= this.props.maxSize
        ? this.state.shopSize + this.props.shopIncrementSize
        : this.props.maxSize;

    // This complex dumb thing makes it so React is forced to do a synchronous update
    this.setState(
      {
        money: this.props.startingMoney + 1,
        lexiconSize: newLexiconSize,
        shopSize: newShopSize,
      },
      // I can't even remove this stupid anonymous function without it breaking >:(
      () => {
        this.roll();
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div className="game">
        {this.state.lives} helth, {this.state.money} monies
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Lexicon letters={this.state.lexicon} id="owned"></Lexicon>
          <div style={{ border: "inherit" }}></div>
          <Lexicon letters={this.state.shopLexicon} id="shop"></Lexicon>
        </DragDropContext>
        <Button className="roll" onClick={this.roll}>
          Roll
        </Button>
        <Button className="end-turn" onClick={this.endTurn}>
          End Turn
        </Button>
      </div>
    );
  }
}

export default Game;
