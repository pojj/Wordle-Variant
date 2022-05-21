import React from "react";
import "./App.css";
import isValidWord from "./components/isValidWord";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.maxIndex = 279495;
  }

  render() {
    return (
      <div className="App">
        {isValidWord("thomas", 0, this.maxIndex) ? "yes" : "no"}
      </div>
    );
  }
}

export default App;
