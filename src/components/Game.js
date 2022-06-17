import React from "react";
import Lexicon from "./Lexicon";
import Battle from "./Battle";
import randomLetter from "./randomLetter";
import isValidWord from "./isValidWord";
import StatsBar from "./StatsBar";
import "./Game.css";
import saved from "../data/savedLexicons";
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
      freezerSize: 3,
      lexicon: [],
      shopLexicon: [],
      freezer: [],
      buffedLexicon: [],
      letterId: 0,
      round: 1,
      wins: 0,
    };

    // These handle what happens at end of drags
    this.onDragEnd = this.onDragEnd.bind(this);
    this.reorderLexicon = this.reorderLexicon.bind(this);
    this.reorderShop = this.reorderShop.bind(this);
    this.reorderFreezer = this.reorderFreezer.bind(this);
    this.buyLetter = this.buyLetter.bind(this);
    this.buyFrozen = this.buyFrozen.bind(this);
    this.sellLetter = this.sellLetter.bind(this);
    this.freezeLexiconLetter = this.freezeLexiconLetter.bind(this);
    this.freezeShopLetter = this.freezeShopLetter.bind(this);
    this.unfreezeShopLetter = this.unfreezeShopLetter.bind(this);

    this.roll = this.roll.bind(this);
    this.endTurn = this.endTurn.bind(this);
    this.buffLetters = this.buffLetters.bind(this);

    // These are callback functions so battle can call back to game
    this.setGameState = this.setGameState.bind(this);
    this.increaseRound = this.increaseRound.bind(this);
    this.increaseWins = this.increaseWins.bind(this);
    this.setLives = this.setLives.bind(this);
  }

  componentDidMount() {
    this.roll();
  }

  onDragEnd(result) {
    const src = result.source;
    const dest = result.destination;

    if (!dest) {
      return;
    }
    if (src.droppableId === dest.droppableId && src.index === dest.index) {
      return;
    }

    if (src.droppableId === "owned" && dest.droppableId === "owned") {
      this.reorderLexicon(src.index, dest.index);
    }
    if (src.droppableId === "shop" && dest.droppableId === "shop") {
      this.reorderShop(src.index, dest.index);
    }
    if (src.droppableId === "freezer" && dest.droppableId === "freezer") {
      this.reorderFreezer(src.index, dest.index);
    }
    if (src.droppableId === "shop" && dest.droppableId === "owned") {
      this.buyLetter(src.index, dest.index);
    }
    if (src.droppableId === "freezer" && dest.droppableId === "owned") {
      this.buyFrozen(src.index, dest.index);
    }
    if (src.droppableId === "owned" && dest.droppableId === "shop") {
      this.sellLetter(src.index, dest.index);
    }
    if (src.droppableId === "owned" && dest.droppableId === "freezer") {
      this.freezeLexiconLetter(src.index, dest.index);
    }
    if (src.droppableId === "shop" && dest.droppableId === "freezer") {
      this.freezeShopLetter(src.index, dest.index);
    }
    if (src.droppableId === "freezer" && dest.droppableId === "shop") {
      this.unfreezeShopLetter(src.index, dest.index);
    }
  }

  reorderLexicon(indexI, indexF) {
    const newLex = Array.from(this.state.lexicon);
    const [movedLetter] = newLex.splice(indexI, 1);
    newLex.splice(indexF, 0, movedLetter);
    this.setState({ lexicon: newLex });
  }

  reorderShop(indexI, indexF) {
    const newShop = Array.from(this.state.shopLexicon);
    const [movedLetter] = newShop.splice(indexI, 1);
    newShop.splice(indexF, 0, movedLetter);
    this.setState({ shopLexicon: newShop });
  }

  reorderFreezer(indexI, indexF) {
    const newFreezer = Array.from(this.state.freezer);
    const [movedLetter] = newFreezer.splice(indexI, 1);
    newFreezer.splice(indexF, 0, movedLetter);
    this.setState({ freezer: newFreezer });
  }

  buyLetter(indexI, indexF) {
    if (this.state.money >= 3) {
      if (this.state.lexicon.length < this.state.lexiconSize) {
        const newLex = Array.from(this.state.lexicon);
        const newShop = Array.from(this.state.shopLexicon);
        const [movedLetter] = newShop.splice(indexI, 1);
        newLex.splice(indexF, 0, movedLetter);
        this.setState({
          money: this.state.money - 3,
          lexicon: newLex,
          shopLexicon: newShop,
        });
      } else {
        alert("Your lexicon is full!");
      }
    } else {
      alert("You are broke!");
    }
  }

  buyFrozen(indexI, indexF) {
    if (this.state.money >= 3) {
      if (this.state.lexicon.length < this.state.lexiconSize) {
        const newLex = Array.from(this.state.lexicon);
        const newFreezer = Array.from(this.state.freezer);
        const [movedLetter] = newFreezer.splice(indexI, 1);
        newLex.splice(indexF, 0, movedLetter);
        this.setState({
          money: this.state.money - 3,
          lexicon: newLex,
          freezer: newFreezer,
        });
      } else {
        alert("Your lexicon is full!");
      }
    } else {
      alert("You are broke!");
    }
  }

  sellLetter(indexI, indexF) {
    const newLex = Array.from(this.state.lexicon);
    const newShop = Array.from(this.state.shopLexicon);
    const [movedLetter] = newLex.splice(indexI, 1);
    newShop.splice(indexF, 0, movedLetter);
    this.setState({
      money: this.state.money + 1,
      lexicon: newLex,
      shopLexicon: newShop,
    });
  }

  freezeLexiconLetter(indexI, indexF) {
    if (this.state.freezer.length < this.state.freezerSize) {
      const newLex = Array.from(this.state.lexicon);
      const newFreezer = Array.from(this.state.freezer);
      const [movedLetter] = newLex.splice(indexI, 1);
      newFreezer.splice(indexF, 0, movedLetter);
      this.setState({
        money: this.state.money + 1,
        lexicon: newLex,
        freezer: newFreezer,
      });
    } else {
      alert("Your freezer is full!");
    }
  }

  freezeShopLetter(indexI, indexF) {
    if (this.state.freezer.length < this.state.freezerSize) {
      const newShop = Array.from(this.state.shopLexicon);
      const newFreezer = Array.from(this.state.freezer);
      const [movedLetter] = newShop.splice(indexI, 1);
      newFreezer.splice(indexF, 0, movedLetter);
      this.setState({
        shopLexicon: newShop,
        freezer: newFreezer,
      });
    } else {
      alert("Your freezer is full!");
    }
  }

  unfreezeShopLetter(indexI, indexF) {
    const newShop = Array.from(this.state.shopLexicon);
    const newFreezer = Array.from(this.state.freezer);
    const [movedLetter] = newFreezer.splice(indexI, 1);
    newShop.splice(indexF, 0, movedLetter);
    this.setState({
      shopLexicon: newShop,
      freezer: newFreezer,
    });
  }

  roll() {
    if (this.state.money > 0) {
      const newLetters = []; // const means variable cannot be redefined, can be modified.
      const multiplier = this.props.randomMultiplier;
      let letterNum = this.state.letterId;
      for (
        let i = 0;
        i < this.state.shopSize - this.state.freezer.length;
        i++
      ) {
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
      alert("You are broke!");
    }
  }

  endTurn() {
    const newLex = this.buffLetters();

    console.log(saved);

    // Single line conditional if size smaller than maxSize add increment else size gets maxed (15)
    const newLexiconSize =
      this.state.lexiconSize + this.props.lexiconIncrementSize <
      this.props.maxLexiconSize
        ? this.state.lexiconSize + this.props.lexiconIncrementSize
        : this.props.maxLexiconSize;
    const newShopSize =
      this.state.shopSize + this.props.shopIncrementSize <
      this.props.maxShopSize
        ? this.state.shopSize + this.props.shopIncrementSize
        : this.props.maxShopSize;

    // This complex dumb thing makes it so React is forced to do a synchronous update
    this.setState(
      {
        money: this.props.startingMoney + 1,
        buffedLexicon: newLex,
        lexiconSize: newLexiconSize,
        shopSize: newShopSize,
        gameState: "battle",
      },
      // I can't even remove this stupid anonymous function without it breaking >:(
      () => {
        this.roll(); // there is an inefficency here it renders once before this on the setState
        // and again when this.roll is ran
      }
    );
  }

  buffLetters() {
    // Clone newLex only keeping revelant properties
    const newLex = this.state.lexicon.map((item) => {
      return { value: item.value, dmg: item.dmg, hp: item.hp, id: item.id };
    });
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

  setGameState(newState) {
    this.setState({ gameState: newState });
  }
  increaseRound() {
    this.setState({ round: this.state.round + 1 });
  }
  increaseWins() {
    this.setState({ wins: this.state.wins + 1 });
  }
  setLives(newLives) {
    this.setState({ lives: newLives });
  }

  render() {
    console.log(this.state.gameState);
    if (this.state.gameState === "buy") {
      return (
        <div className="game">
          <StatsBar {...this.state} />
          <div style={{ height: "230px" }} />
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Lexicon
              letters={this.state.lexicon}
              id="owned"
              style={{ width: "" + 1 * 90 }}
            />
            <div>
              {this.state.lexicon.length}/{Math.ceil(this.state.lexiconSize)}
            </div>
            <hr style={{ height: "10px", color: "green" }} />
            <div>Freezer {this.state.freezer.length}/3:</div>
            <Lexicon letters={this.state.freezer} id="freezer" />
            <Lexicon letters={this.state.shopLexicon} id="shop" />
          </DragDropContext>
          <div style={{ height: "10px" }} />
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
          <Battle
            {...this.state}
            setGameState={this.setGameState}
            increaseRound={this.increaseRound}
            increaseWins={this.increaseWins}
            setLives={this.setLives}
          />
        </div>
      );
    }
  }
}

export default Game;
