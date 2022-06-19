import React from "react";
import Letter from "./Letter";
import { Droppable } from "react-beautiful-dnd";
import Swal from "sweetalert2";

/**
 * Functional component that contains the Droppable component
 * Which contains the individual Draggable letters
 */
function Lexicon(props) {
  // To stop DnD from dying
  if (props.letters.includes(undefined)) {
    Swal.fire({
      icon: "error",
      title: "Stap it",
      showConfirmButton: false,
      allowOutsideClick: false,
      footer: "<a href=''>I'll take a chill pill</a>",
    });
    return;
  }
  return (
    <Droppable droppableId={props.id} direction="horizontal">
      {(provided) => (
        <div
          className="lexicon"
          ref={provided.innerRef}
          {...provided.droppableProps}
          id={props.id}
          style={{ width: props.size * 90 + "px" }}
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
