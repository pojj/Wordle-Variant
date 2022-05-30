import React from "react";
import Arena from "./Arena";
import randomLetter from "./randomLetter";
import { Button } from "react-bootstrap";
import "./Game.css";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: 0 };

    this.roll = this.roll.bind(this);
  }

  roll() {
    if (this.props.money > 0) {
      let newLetters = [];
      let letterNum = this.state.checked;

      for (let i = 0; i < this.props.shopSize; i++) {
        let letter = {};
        letter.value = randomLetter();
        letter.id = letterNum;
        letter.hp = Math.floor(Math.random() * 99 + 1);
        letter.dmg = Math.floor(Math.random() * 99 + 1);
        letterNum++;
        newLetters.push(letter);
      }

      this.props.setMoney(this.props.money - 1);
      this.props.setShopLexicon(newLetters);
      this.setState({ checked: letterNum });
    }
  }

  render() {
    return (
      <div>
        <Arena letters={this.props.shopLexicon} id="shop"></Arena>
        <br />
        <Button className="roll" onClick={this.roll}>
          Roll
        </Button>
      </div>
    );
  }
}

export default Shop;
