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
        { title: 'Birthday', text: '123-456-7890' },
        { title: 'email', text: '' }
      ]
    }
  }

  // At the bare minimum a react component needs
  // to have a `render function` that returns
  // some HTML. In order to make the react
  // ecosystem aware of this component we
  // have to export it below.
  render() {
    // Use a variable to avoid repetition of typing this over and over.
    const { firstName, initials, info } = this.state;
    // This syntax in known as JSX
    return (
      <React.Fragment>
        <section className="card-container">
          <header>
            {/* Wrap JS expression in curly braces.*/}
            <span initials={ initials }></span>
            {/*<span initials={ this.state.initials }></span>*/}
            <h2>{ firstName }</h2>
          </header>

          <main>
            <ul>
              {/* Loop through the info array.*/}
              { info.map((row, index) => {
                  return (
                    <li key={index}>
                      <span>{ row.title }</span>
                      { /* Use ternary operator to check if text is missing */ }
                      { row.text ? row.text : 'n/a' } 
                    </li>
                  )
              })}
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
