// Card component
import React, { Component } from 'react';

class Card extends Component {
  // Every component is able to maintain its own state.
  constructor(props) {
  // Every constructor must call super()
    super(props) 

    this.state = {
      firstName: 'Jane Murphy',
      initials: 'JM',
      info: [
        { title: 'Birthday', text: 'Jan 1 1900' },
        { title: 'Address', text: '123 Any St.' },
        { title: 'Birthday', text: '123-456-7890' }
      ]
    }
  }

  // At the bare minimum a react component needs
  // to have a `render function` that returns
  // some HTML. In order to make the react
  // ecosystem aware of this component we
  // have to export it below.
  render() {
    // This syntax in known as JSX
    return (
      <React.Fragment>
        <section className="card-container">
          <header>
            {/* Wrap JS expression in curly braces.*/}
            <span initials={ this.state.initials }></span>
            <h2>{ this.state.firstName }</h2>
          </header>

          <main>
            <ul>
              <li><span>Birthday</span> { this.state.info[0].text }</li>
              <li><span>Address</span> { this.state.info[1].text }</li>
              <li><span>Phone</span> { this.state.info[2].text }</li>
              <li></li>
            </ul>
          </main>
        </section>
      </React.Fragment>
    )
  }
}

export default Card;

// This sample shows how to use React Fragments instead of 
// returning <div> elements.
// It also demonstrates how to use className="" in
// camelCase when we want to use a class in the html.
