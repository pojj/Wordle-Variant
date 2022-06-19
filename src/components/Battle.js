import React from "react";
import "./Game.css";
import StatsBar from "./StatsBar";
import { Button, Image } from "react-bootstrap";
import saved from "../data/savedLexicons";
import Swal from "sweetalert2";

/**
 * This is the Battle component that runs when gameState is "battle"
 * All the beautiful animations happen here
 */
class Battle extends React.Component {
  /**
   * Constructor for the Battle component
   *
   * @param props Takes in Game's state as well as the setter methods to modify Game.state
   */
  constructor(props) {
    super(props);

    // Format enemy lexicon from saved battles
    let round = props.round - 1;
    if (!saved[round]) {
      round = saved.length - 1;
    }
    const oppLex = structuredClone(
      saved[round][Math.floor(Math.random() * saved[round].length)]
    );

    for (let id = 0; id < oppLex.length; id++) {
      oppLex[id].id = -id - 1;
    }

    this.state = {
      lexicon: structuredClone(props.buffedLexicon),
      opponentLexicon: oppLex,
    };

    // Add current lexicon to saved
    if (props.buffedLexicon.length) {
      const saveIt = props.buffedLexicon.map((letter) => ({
        value: letter.value,
        dmg: letter.dmg,
        hp: letter.hp,
      }));
      if (saved[props.round - 1]) {
        saved[props.round - 1].push(saveIt);
      } else {
        saved[props.round - 1] = [saveIt];
      }
    }

    this.fastForward = this.fastForward.bind(this);
    this.animate = this.animate.bind(this);
    this.attack = this.attack.bind(this);
    this.checkWin = this.checkWin.bind(this);
  }

  /**
   * Starts an animation for the first letter every 1.5 seconds
   * the once the component is rendered for the first time
   */
  componentDidMount() {
    this.setState({ auto: setInterval(this.animate, 1500) });
  }

  /**
   * Starts animation every half second
   */
  fastForward() {
    clearInterval(this.state.auto);
    this.setState({ auto: setInterval(this.animate, 400) });
  }

  /**
   * Starts animation for the first letter
   * Then queues attack to run after 0.3 seconds
   */
  animate() {
    if (
      this.state.lexicon.length > 0 &&
      this.state.opponentLexicon.length > 0
    ) {
      const newLex = this.state.lexicon;
      const oppLex = this.state.opponentLexicon;
      newLex[0].class = "owned";
      oppLex[0].class = "opponent";

      this.setState({ lexicon: newLex, opponentLexicon: oppLex });
      setTimeout(() => {
        this.attack();
      }, 300);
    } else {
      this.checkWin();
    }
  }

  /**
   * Calculates damage to the first letters
   * Then runs checkWin()
   */
  attack() {
    if (
      this.state.lexicon.length > 0 &&
      this.state.opponentLexicon.length > 0
    ) {
      const newLex = this.state.lexicon;
      const oppLex = this.state.opponentLexicon;
      newLex[0].hp -= oppLex[0].dmg;
      oppLex[0].hp -= newLex[0].dmg;
      newLex[0].class = "null";
      oppLex[0].class = "null";

      if (newLex[0].hp <= 0) {
        newLex.shift();
      }
      if (oppLex[0].hp <= 0) {
        oppLex.shift();
      }
      this.setState({ lexicon: newLex, opponentLexicon: oppLex });
      this.checkWin();
    }
  }

  /**
   * Check if lexicon and opponentLexicon if length is 0
   * Then creates popup depending on who won
   * Also changes gameState
   */
  checkWin() {
    let endBattle = false;
    if (
      this.state.lexicon.length <= 0 &&
      this.state.opponentLexicon.length <= 0
    ) {
      Swal.fire({
        icon: "info",
        title: "You tied",
        text: "(You don't lose lives or gain trophies)",
      });
      endBattle = true;
    } else if (this.state.opponentLexicon.length <= 0) {
      Swal.fire({
        icon: "info",
        title: "You won the round",
        text: "(You gained a trophy)",
      });
      this.props.increaseWins();
      endBattle = true;
    } else if (this.state.lexicon.length <= 0) {
      Swal.fire({
        icon: "info",
        title: "You lost the round",
        text: "(You lost lives)",
      });
      this.props.setLives(this.props.lives - Math.ceil(this.props.round / 2));
      endBattle = true;
    }
    if (endBattle) {
      clearInterval(this.state.auto);
      this.props.increaseRound();
      this.props.setGameState("buy");
    }
  }

  /**
   * Render function for the Battle component
   * Contains code reqiured for the animations
   */
  render() {
    return (
      <div className="game">
        <StatsBar {...this.props} />

        <div style={{ height: "230px" }} />

        <div className="lexicon">
          {this.state.lexicon.map((letter) => (
            <div
              className={letter.class === "owned" ? "letter owned" : "letter"}
              key={letter.id}
            >
              <div className="value">{letter.value}</div>
              <div className="stats">
                <div className="dmg">{letter.dmg}</div>
                <div className="hp">{letter.hp}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: "95px" }}>
          <Image
            src="/ArenaSign.png"
            className="signs"
            style={{ marginLeft: "100px" }}
            draggable="false"
          ></Image>
        </div>

        <div className="lexicon opponent">
          {this.state.opponentLexicon.map((letter) => (
            <div
              className={
                letter.class === "opponent" ? "letter opponent" : "letter"
              }
              key={letter.id}
            >
              <div className="value">{letter.value}</div>
              <div className="stats">
                <div className="dmg">{letter.dmg}</div>
                <div className="hp">{letter.hp}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: "70px" }} />

        <Button
          className="end-turn"
          onClick={() => this.fastForward()} // Do not remove the anonymous function otherwise it will break
          size="lg"
          variant="success"
        >
          Fast Forward
        </Button>
      </div>
    );
  }
}

export default Battle;
