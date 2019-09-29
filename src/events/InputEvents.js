import React, { Component } from 'react';

class InputEvents extends Component {
  constructor(props) {
    super(props)
    
    this.state = { mouseDown: false, mouseClicked: 0, inputText: 'Hello World', formInputText: 'Hello again'}
  }

  render() {
    return(
      <React.Fragment>
      <section>
        <h3>Mouse Events:</h3>
        <button>
          Click Me
        </button>
      </section>
      </React.Fragment>
    )
  }
}

export default InputEvents;
