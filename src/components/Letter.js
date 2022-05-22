import React from "react";

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value, hp: 1, dmg: 1 };
  }

  render() {
    return <div>Letter gaming {this.state.value}</div>;
  }
}

export default Letter;
