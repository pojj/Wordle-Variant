import React from "react";
import randomLetter from "./randomLetter";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shopLetters: [] };
    console.log(this.props);
  }
  roll() {
    newShop = [];

    for (let i; i < this.props.shopSize; i++) {
      newShop.push(<Letter value={randomLetter()} />);
    }

    this.setState = { shopLetters: newShop };
  }

  buyLetter() {}

  render() {
    return <div>Shop gaming</div>;
  }
}

export default Shop;
