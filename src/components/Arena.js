import React from "react";
import Letter from "./Letter";
import "./Letter.css";
import "./Arena.css";
import { Droppable } from "react-beautiful-dnd";

class Arena extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Droppable droppableId={this.props.id} direction="horizontal">
        {(provided) => (
          <div
            className="lexicon"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.props.letters.map((letter, index) => (
              <Letter
                value={letter.value}
                id={letter.id.toString()}
                index={index}
                key={letter.id}
                hp={letter.hp}
                dmg={letter.dmg}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default Arena;
