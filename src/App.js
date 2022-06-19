import React from "react";
import settings from "./settings";
import Game from "./components/Game";
import "./components/Game.css";

function App() {
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "50px", margin: "10px" }}>
        Joustle
      </div>
      {/* Give settings as props to the game */}
      <Game {...settings}></Game>
    </div>
  );
}

export default App;
