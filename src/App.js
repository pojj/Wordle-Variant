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
      <img
        style={{
          display: "block",
          margin: "10px auto 10px auto",
        }}
        src="./Joustle.png"
        draggable="false"
      />
      {/* Give settings as props to the game */}
      <Game {...settings}></Game>
    </div>
  );
}

export default App;
