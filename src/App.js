import React from "react";
import settings from "./settings";
import Game from "./components/Game";

function App() {
  return (
    <div>
      {/* Give settings as props to the game */}
      <Game {...settings}></Game>
    </div>
  );
}

export default App;
