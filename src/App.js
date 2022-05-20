import React from "react";
import "./App.css";
import isValidWord from "./components/isValidWord";

class App extends React.Component() {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        {isValidWord("llama", 0, 58109) ? "yes" : "new"}
      </div>
    );
  }
}

export default App;
