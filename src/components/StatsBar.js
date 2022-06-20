import React from "react";
import "./Game.css";
import { Image } from "react-bootstrap";

/**
 * Functional component that makes the stat bar
 * Changes depending on the gameState passed in as props
 *
 * @param props contains gameState
 */
function StatsBar(props) {
  if (props.gameState === "buy") {
    return (
      <div className="stats-information">
        <div className="stats-bar" id="money">
          <Image src="/Gold.png" draggable="false" />
          <h1 className="stat-number">{props.money}</h1>
        </div>
        <div className="stats-bar" id="lives">
          <Image src="/Heart.png" draggable="false" />
          <h1 className="stat-number">{props.lives}</h1>
        </div>
        <div className="stats-bar" id="wins">
          <Image src="/Trophy.png" draggable="false" />
          <h1 className="stat-number">{props.wins}/7</h1>
        </div>
        <div className="stats-bar" id="round">
          <Image src="/Hourglass.png" draggable="false" />
          <h1 className="stat-number">{props.round}</h1>
        </div>
      </div>
    );
  }
  if (props.gameState === "battle") {
    return (
      <div className="stats-information">
        <div className="stats-bar" id="lives">
          <Image src="/Heart.png" draggable="false" />
          <h1 className="stat-number">{props.lives}</h1>
        </div>
        <div className="stats-bar">
          <h1 className="stat-number">
            Lose→
            <Image
              src="/Heart.png"
              style={{ width: "30px", position: "relative", top: "-5px" }}
              draggable="false"
            />
            {props.lives - Math.ceil(props.round / 2) > 0
              ? props.lives - Math.ceil(props.round / 2)
              : 0}
          </h1>
        </div>
        <div className="stats-bar" id="wins">
          <Image src="/Trophy.png" draggable="false" />
          <h1 className="stat-number">{props.wins}/7</h1>
        </div>
        <div className="stats-bar" id="round">
          <Image src="/Hourglass.png" draggable="false" />
          <h1 className="stat-number">{props.round}</h1>
        </div>
      </div>
    );
  }
}

export default StatsBar;
