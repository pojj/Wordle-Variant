import React from "react";
import "./Game.css";
import { Button } from "react-bootstrap";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lexicon: props.buffedLexicon,
      opponentLexicon: props.lexicon,
    };
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
          onClick={() => this.props.setGameState("buy")} // do not remove the anonymous function otherwise it will break
        >
          End Battle
        </Button>
      </div>
    );
  }
}

export default Battle;
