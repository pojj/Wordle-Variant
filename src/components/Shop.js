import React from "react";
import Letter from "./Letter";
import randomLetter from "./randomLetter";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shopLetters: [] };
    console.log(this.props);

    this.roll = this.roll.bind(this);
  }
  roll() {
    let newShop = [];

    for (let i = 0; i < this.props.shopSize; i++) {
      newShop.push(<Letter value={randomLetter()} />);
    }

    this.setState({ shopLetters: newShop });
  }

  buyLetter() {}

  render() {
    this.roll();
    return (
      <div>
        Shop gaming
        {this.state.shopLetters}
      </div>
    );
  }
}

export default Shop;
