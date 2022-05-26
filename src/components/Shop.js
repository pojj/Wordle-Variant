import React from "react";
import Letter from "./Letter";
import randomLetter from "./randomLetter";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shopLetters: [], key: 0 };

    this.roll = this.roll.bind(this);
  }

  roll() {
    let newShop = [];
    let letterNum = this.state.key;

    for (let i = 0; i < this.props.shopSize; i++) {
      newShop.push(<Letter value={randomLetter()} key={letterNum} />);
      letterNum++;
    }

    this.setState({ shopLetters: newShop, key: letterNum });
  }

  buyLetter() {}

  render() {
    console.log(this.state.shopLetters);
    return (
      <div>
        Shop gaming
        {this.state.shopLetters}
        <button onClick={this.roll}>Roll</button>
      </div>
    );
  }
}

export default Shop;
