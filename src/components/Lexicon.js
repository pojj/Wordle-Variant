import React from "react";
import Letter from "./Letter";
import { Droppable } from "react-beautiful-dnd";

function Lexicon(props) {
  return (
    <Droppable droppableId={props.id} direction="horizontal">
      {(provided) => (
        <div
          className="lexicon"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {props.letters.map((letter, index) => (
            <Letter
              value={letter.value}
              id={letter.id.toString()}
              index={index}
              key={letter.id}
              dmg={letter.dmg}
              hp={letter.hp}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Lexicon;
