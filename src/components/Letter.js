import React from "react";
import "./Letter.css";
import { Draggable } from "react-beautiful-dnd";

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      hp: props.hp,
      dmg: props.dmg,
    };
  }

  render() {
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {(provided) => (
          <div
            className="letter"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className="value" {...provided.dragHandleProps}>
              {this.state.value}
            </div>
            <div className="stats">
              <div className="dmg">{this.state.dmg}</div>
              <div className="hp">{this.state.hp}</div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Letter;
