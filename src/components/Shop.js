import React from "react";
import Arena from "./Arena";
import Letter from "./Letter";
import randomLetter from "./randomLetter";
import { Button } from "react-bootstrap";
import { Droppable } from "react-beautiful-dnd";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopLetters: [], //[{ value: "A", id: "3", index: "0" }],
      checked: 0,
      id: "shop",
      letterOrder: [],
    };

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
        letter.index = letterNum - this.state.checked;
        letterNum++;
        newLetters.push(letter);
      }

      this.props.setMoney(this.props.money - 1);
      this.setState({
        shopLetters: newLetters,
        checked: letterNum,
      });
    }
  }

  buyLetter() {}

  render() {
    return (
      <div>
        <Arena letters={this.state.shopLetters} id={this.state.id}></Arena>
        <br />
        <Button onClick={this.roll}>Roll</Button>
      </div>
    );
  }
}

export default Shop;
