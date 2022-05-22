import React from "react";
import "./App.css";
import Game from "./components/Game";
import isValidWord from "./components/isValidWord";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.maxIndex = 279495;
  }

  render() {
    return (
      <div className="App">
        <Game></Game>

        {/* {isValidWord("gamers", 0, this.maxIndex) ? "yes" : "no"} */}
      </div>
    );
  }
}

export default App;
