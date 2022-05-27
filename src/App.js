import React from "react";
import "./App.css";
import Game from "./components/Game";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.maxIndex = 279495;
  }

  render() {
    return (
      <div className="App">
        <Game></Game>
      </div>
    );
  }
}

export default App;
