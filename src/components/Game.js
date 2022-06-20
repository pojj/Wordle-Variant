import React from "react";
import Lexicon from "./Lexicon";
import Battle from "./Battle";
import randomLetter from "./randomLetter";
import isValidWord from "./isValidWord";
import StatsBar from "./StatsBar";
import "./Game.css";
import saved from "../data/savedLexicons";
import { DragDropContext } from "react-beautiful-dnd";
import { Button, Image } from "react-bootstrap";
import Swal from "sweetalert2";

/**
 * This is the Game component where all the magic for Joustle happens.
 */
class Game extends React.Component {
  /**
   * Constructor for the Game component.
   *
   * @param props JSON object, Contains the settings for the game(constants)
   */
  constructor(props) {
    super(props);

    // All the "instance variables" that Game needs
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

    // These are methods that handle what happens at the end of drags
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

    // These are methods that the user calls on button presses
    this.roll = this.roll.bind(this);
    this.endTurn = this.endTurn.bind(this);
    this.buffLetters = this.buffLetters.bind(this);

    // These are callback functions so the Battle component can callback to Game
    this.setGameState = this.setGameState.bind(this);
    this.increaseRound = this.increaseRound.bind(this);
    this.increaseWins = this.increaseWins.bind(this);
    this.setLives = this.setLives.bind(this);
  }

  /**
   * This method runs when the Game component is rendered the first time.
   * It populates the shop with random letters
   */
  componentDidMount() {
    this.roll();
  }

  /**
   * This method is called by the drag handler on drag end
   *
   * @param result contains details about the completed drag
   */
  onDragEnd(result) {
    const src = result.source;
    const dest = result.destination;

    if (!dest) {
      return;
    }
    if (src.droppableId === dest.droppableId && src.index === dest.index) {
      return;
    }

    // run correct method depending on where drag started and ended
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

  /**
   * When draggable originates and ends in owned lexicon
   * Modifies state:
   * -Reorders this.state.lexicon
   *
   * @param indexI intial index of dragged item
   * @param indexF final index of dragged item
   */
  reorderLexicon(indexI, indexF) {
    const newLex = Array.from(this.state.lexicon);
    const [movedLetter] = newLex.splice(indexI, 1);
    newLex.splice(indexF, 0, movedLetter);
    this.setState({ lexicon: newLex });
  }

  /**
   * When draggable originates and ends in the shop
   * Modifies state:
   * -Reorders this.state.shopLexicon
   *
   * @param indexI intial index of dragged item
   * @param indexF final index of dragged item
   */
  reorderShop(indexI, indexF) {
    const newShop = Array.from(this.state.shopLexicon);
    const [movedLetter] = newShop.splice(indexI, 1);
    newShop.splice(indexF, 0, movedLetter);
    this.setState({ shopLexicon: newShop });
  }

  /**
   * When draggable originates and ends in the freezer
   * Modifies state:
   * -Reorders this.state.freezer
   *
   * @param indexI intial index of dragged item
   * @param indexF final index of dragged item
   */
  reorderFreezer(indexI, indexF) {
    const newFreezer = Array.from(this.state.freezer);
    const [movedLetter] = newFreezer.splice(indexI, 1);
    newFreezer.splice(indexF, 0, movedLetter);
    this.setState({ freezer: newFreezer });
  }

  /**
   * When draggable originates in shop and ends in lexicon
   * Modifies state:
   * -Remove letter from this.state.shopLexicon
   * -Add letter to this.state.lexicon
   * -Removes 3 from this.state.money
   *
   * @param indexI intial index of dragged item
   * @param indexF final index of dragged item
   */
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
        Swal.fire({
          icon: "warning",
          title: "Lexicon is full",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Insufficent funds",
      });
    }
  }

  /**
   * When draggable originates in freezer and ends in lexicon
   * Modifies state:
   * -Remove letter from this.state.freezer
   * -Add letter to this.state.lexicon
   * -Removes 3 from this.state.money
   *
   * @param indexI intial index of dragged item
   * @param indexF final index of dragged item
   */
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
        Swal.fire({
          icon: "warning",
          title: "Lexicon is full",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Insufficent funds",
      });
    }
  }

  /**
   * When draggable originates in lexicon and ends in shop
   * Modifies state:
   * -Remove letter from this.state.lexicon
   * -Add letter to this.state.shopLexicon
   * -Add 1 to this.state.money
   *
   * @param indexI intial index of dragged item
   * @param indexF final index of dragged item
   */
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

  /**
   * When draggable originates in lexicon and ends in freezer
   * Modifies state:
   * -Remove letter from this.state.lexicon
   * -Add letter to this.state.freezer
   * -Add 1 to this.state.money
   *
   * @param indexI intial index of dragged item
   * @param indexF final index of dragged item
   */
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
      Swal.fire({
        icon: "warning",
        title: "Freezer is full",
      });
    }
  }

  /**
   * When draggable originates in shop and ends in freezer
   * Modifies state:
   * -Remove letter from this.state.shopLexicon
   * -Add letter to this.state.freezer
   *
   * @param indexI intial index of dragged item
   * @param indexF final index of dragged item
   */
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
      Swal.fire({
        icon: "warning",
        title: "Freezer is full",
      });
    }
  }

  /**
   * When draggable originates in freezer and ends in shop
   * Modifies state:
   * -Remove letter from this.state.freezer
   * -Add letter to this.state.shopLexicon
   *
   * @param indexI intial index of dragged item
   * @param indexF final index of dragged item
   */
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

  /**
   * Randomizes letters in this.state.shopLexicon
   * Fill shop with shopLength - freezer.length number of letters
   */
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
      Swal.fire({
        icon: "warning",
        title: "Insufficent funds",
      });
    }
  }

  /**
   * Runs when user presses "end turn" button
   * Changes gameState to "battle" and preps for next "buy" gameState
   */
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
        this.roll();
      }
    );
  }

  /**
   * Is called by endTurn()
   * Checks all letter combinations for if they are a word if so then gives them
   * extra stat points depending on the length of the word
   *
   * @return newLex Array containing lexicon with bonus stats
   */
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

  /**
   * Setter method, is passed to the Battle component
   * Modifies state
   *
   * @param newState new value of this.state.gamestate
   */
  setGameState(newState) {
    this.setState({ gameState: newState });
  }

  /**
   * Setter method, is passed to the Battle component
   * Modifies state, increase round number by 1
   */
  increaseRound() {
    this.setState({ round: this.state.round + 1 });
  }

  /**
   * Setter method, is passed to the Battle component
   * Modifies state, increase wins by 1
   */
  increaseWins() {
    this.setState({ wins: this.state.wins + 1 });
  }

  /**
   * Setter method, is passed to the Battle component
   * Modfiies state, set this.state.lives
   *
   * @param newLives new value of this.state.lives
   */
  setLives(newLives) {
    this.setState({ lives: newLives });
  }

  /**
   * Render function for the Game component
   * Is supposed to run everytime state is changed
   */
  render() {
    if (this.state.wins >= 7) {
      Swal.fire({
        icon: "success",
        title: "Good Job",
        text: "You win!",
        footer: '<a href="">Play Again?</a>',
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      return;
    }
    if (this.state.lives <= 0) {
      Swal.fire({
        icon: "error",
        title: "Game Over",
        text: "Better luck next time!",
        footer: '<a href="">Play Again?</a>',
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      return;
    }
    if (this.state.gameState === "buy") {
      return (
        <div className="game">
          <StatsBar {...this.state} />
          <div style={{ height: "230px" }} />
          <DragDropContext onDragEnd={this.onDragEnd}>
            {/* Every Lexicon component contains the Droppable component */}
            <Lexicon
              letters={this.state.lexicon}
              id="owned"
              size={Math.ceil(this.state.lexiconSize)}
            />
            <div style={{ height: "95px" }}>
              <Image
                src="/FreezerSign.png"
                className="signs"
                style={{ marginRight: "120px" }}
                draggable="false"
              ></Image>
              <Image
                src="/ShopSign.png"
                className="signs"
                draggable="false"
              ></Image>
            </div>
            <Lexicon letters={this.state.freezer} id="freezer" />
            <Lexicon
              letters={this.state.shopLexicon}
              id="shop"
              size={
                Math.ceil(this.state.shopSize - this.state.freezer.length) > 0
                  ? Math.ceil(this.state.shopSize - this.state.freezer.length)
                  : 0.05
              }
            />
          </DragDropContext>
          <div style={{ height: "70px" }} />
          <Button
            className="roll"
            onClick={this.roll}
            size="lg"
            variant="success"
          >
            Roll
          </Button>
          <Button
            className="end-turn"
            onClick={this.endTurn}
            size="lg"
            variant="success"
          >
            End Turn
          </Button>
        </div>
      );
    }
    if (this.state.gameState === "battle") {
      return (
        <Battle
          {...this.state}
          setGameState={this.setGameState}
          increaseRound={this.increaseRound}
          increaseWins={this.increaseWins}
          setLives={this.setLives}
        />
      );
    }
  }
}

export default Game;
