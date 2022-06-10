import React from "react";
import "./Game.css";
import { Button } from "react-bootstrap";
import saved from "../data/savedLexicons";

class Battle extends React.Component {
  constructor(props) {
    super(props);

    // format enemy lexicon from saved battles
    let round = props.round - 1;
    if (saved[round] === undefined) {
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

    // add current lexicon to saved
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

    this.checkWin = this.checkWin.bind(this);
  }

  componentDidMount() {
    // check win/lose right when battle starts in case user has no letters
    this.checkWin();
  }

  checkWin() {
    let endBattle = false;
    if (
      this.state.lexicon.length <= 0 &&
      this.state.opponentLexicon.length <= 0
    ) {
      alert("Tie!");
      endBattle = true;
    } else if (this.state.opponentLexicon.length <= 0) {
      alert("You win!");
      endBattle = true;
    } else if (this.state.lexicon.length <= 0) {
      alert("You lose!");
      this.props.setLives(this.props.lives - 1);
      endBattle = true;
    }
    if (endBattle) {
      this.props.increaseRound();
      this.props.setGameState("buy");
    }
  }

  attack() {
    const newLex = this.state.lexicon;
    const oppLex = this.state.opponentLexicon;

    newLex[0].hp -= oppLex[0].dmg;
    oppLex[0].hp -= newLex[0].dmg;

    if (newLex[0].hp <= 0) {
      newLex.shift();
    }
    if (oppLex[0].hp <= 0) {
      oppLex.shift();
    }

    this.setState({ lexicon: newLex, opponentLexicon: oppLex });
    this.checkWin();
  }

  render() {
    return (
      <div className="game">
        {this.props.lives} helth
        <div className="lexicon">
          {this.state.lexicon.map((letter) => (
            <div className="letter" key={letter.id}>
              <div className="value">{letter.value}</div>
              <div className="stats">
                <div className="dmg">{letter.dmg}</div>
                <div className="hp">{letter.hp}</div>
              </div>
            </div>
          ))}
        </div>
        <hr style={{ height: "10px", color: "green" }} />
        <div className="lexicon">
          {this.state.opponentLexicon.map((letter) => (
            <div className="letter" key={letter.id}>
              <div className="value">{letter.value}</div>
              <div className="stats">
                <div className="dmg">{letter.dmg}</div>
                <div className="hp">{letter.hp}</div>
              </div>
            </div>
          ))}
        </div>
        <Button
          className="end-turn"
          onClick={() => this.attack()} // do not remove the anonymous function otherwise it will break
        >
          Attack
        </Button>
      </div>
    );
  }
}

export default Battle;
