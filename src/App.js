import React from "react";
import settings from "./settings";
import Game from "./components/Game";
import "./components/Game.css";

/**
 * Final project for CS 12
 * A super auto pets and wordle parody but bad
 * by William
 */
function App() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
          margin: "10px",
        }}
      >
        Joustle
      </div>
      {/* Give settings as props to the game */}
      <Game {...settings}></Game>
    </div>
  );
}

export default App;
