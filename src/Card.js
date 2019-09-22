// Card component
import React, { Component } from 'react';

class Card extends Component {
  // At the bare minimum a react component needs
  // to have a `render function` that returns
  // some HTML. In order to make the react
  // ecosystem aware of this component we
  // have to export it below.
  render() {
    // This syntax in known as JSX
    return (
      <div>
        <h1>Hello world</h1>
        <h2>Hello again</h2>
      </div>
    )
  }
}

export default Card;
