import React from "react";
import Letter from "./Letter";
import randomLetter from "./randomLetter";
import { Button } from "react-bootstrap";
import { Droppable } from "react-beautiful-dnd";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shopLetters: [], key: 0 };

    this.roll = this.roll.bind(this);
  }

  roll() {
    if (this.props.money > 0) {
      let newShop = [];
      let letterNum = this.state.key;

      for (let i = 0; i < this.props.shopSize; i++) {
        newShop.push(
          <Letter className="letter" value={randomLetter()} key={letterNum} />
        );
        letterNum++;
      }

      this.props.setMoney(this.props.money - 1);
      this.setState({ shopLetters: newShop, key: letterNum });
    }
  }

  buyLetter() {}

  render() {
    return (
      <div>
        <Droppable droppableId="shop">
          {(provided) => this.state.shopLetters}
        </Droppable>
        <br />
        <Button onClick={this.roll}>Roll</Button>
      </div>
    );
  }
}

export default Shop;
