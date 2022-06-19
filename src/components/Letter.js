import React from "react";
import "./Game.css";
import { Draggable } from "react-beautiful-dnd";

/**
 * Functional component that is the Draggable Letter
 * Also contains the css for the Letter
 */
function Letter(props) {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <div
          className="letter"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="value" {...provided.dragHandleProps}>
            {props.value}
          </div>
          <div className="stats">
            <div className="dmg">{props.dmg}</div>
            <div className="hp">{props.hp}</div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Letter;
