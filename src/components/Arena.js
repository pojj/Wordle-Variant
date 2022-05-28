import React from "react";
import Letter from "./Letter";
import "./Letter.css";
import { Droppable } from "react-beautiful-dnd";

class Arena extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Droppable droppableId={this.props.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {this.props.letters.map((letter, index) => (
              <Letter
                value={letter.value}
                id={letter.id.toString()}
                index={index}
                key={letter.id}
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
