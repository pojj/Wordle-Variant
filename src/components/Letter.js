import React from "react";
import "./Letter.css";

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      hp: Math.floor(Math.random() * 99 + 1),
      dmg: Math.floor(Math.random() * 99 + 1),
    };
  }

  render() {
    return (
      <div className="letter">
        <div className="value"> {this.state.value}</div>
        <div className="stats">
          <div className="dmg">{this.state.dmg}</div>
          <div className="hp">{this.state.hp}</div>
        </div>
      </div>
    );
  }
}

export default Letter;
