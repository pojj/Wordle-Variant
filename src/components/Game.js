import React from "react";
import Lexicon from "./Lexicon";
import Battle from "./Battle";
import randomLetter from "./randomLetter";
import isValidWord from "./isValidWord";
import "./Game.css";
import { DragDropContext } from "react-beautiful-dnd";
import { Button } from "react-bootstrap";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: "buy",
      lives: props.startingLives,
      money: props.startingMoney + 1, // Give 1 extra money because the game rolls immediately after rendering
      lexiconSize: props.startingLexiconSize,
      shopSize: props.startingShopSize,
      lexicon: [],
      buffedLexicon: [],
      shopLexicon: [],
      letterId: 0,
      round: 1,
    };

    this.onDragEnd = this.onDragEnd.bind(this);
    this.reorderLexicon = this.reorderLexicon.bind(this);
    this.reorderShop = this.reorderShopLexicon.bind(this);
    this.buyLetter = this.buyLetter.bind(this);
    this.sellLetter = this.sellLetter.bind(this);
    this.roll = this.roll.bind(this);
    this.buffLetters = this.buffLetters.bind(this);
    this.endTurn = this.endTurn.bind(this);
    this.setGameState = this.setGameState.bind(this);
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
      const multiplier = this.props.randomMultiplier;
      let letterNum = this.state.letterId;
      for (let i = 0; i < this.state.shopSize; i++) {
        let letter = {};
        letter.value = randomLetter();
        letter.id = letterNum;
        const stats = this.props.letterStats[letter.value];
        letter.dmg = Math.ceil(Math.random() * stats.dmg * multiplier);
        letter.hp = Math.ceil(Math.random() * stats.hp * multiplier);
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
    const newLex = structuredClone(this.state.lexicon);
    for (let i = 0; i < this.state.lexicon.length; i++) {
      for (let j = i + 1; j <= this.state.lexicon.length; j++) {
        let test = newLex.slice(i, j);
        let word = test.map((letter) => letter.value).join("");
        if (isValidWord(word, 0, this.props.numWords)) {
          console.log(word);
          for (let k = i; k < j; k++) {
            newLex[k].dmg += Math.pow(word.length, 2);
            newLex[k].hp += Math.pow(word.length, 2);
          }
        }
      }
    }
    return newLex;
  }

  endTurn() {
    const newLex = this.buffLetters();

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
        gameState: "battle",
        money: this.props.startingMoney + 1,
        buffedLexicon: newLex,
        lexiconSize: newLexiconSize,
        shopSize: newShopSize,
        round: this.state.round + 1,
      },
      // I can't even remove this stupid anonymous function without it breaking >:(
      () => {
        this.roll(); // there is an inefficency here it renders once before this on the setState
        // and again when this.roll is ran
      }
    );
  }

  setGameState(newState) {
    this.setState({ gameState: newState });
  }

  render() {
    console.log(this.state.gameState);
    if (this.state.gameState === "buy") {
      return (
        <div className="game">
          {this.state.lives} helth, {this.state.money} monies, round:
          {this.state.round}
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Lexicon letters={this.state.lexicon} id="owned"></Lexicon>
            <hr style={{ height: "10px", color: "green" }} />
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
    if (this.state.gameState === "battle") {
      return (
        <div className="game-b">
          <Battle {...this.state} setGameState={this.setGameState} />
        </div>
      );
    }
  }
}

export default Game;
