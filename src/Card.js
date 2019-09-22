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
      <React.Fragment>
        <section className="card-container">
          <header>
            <span initials="JM"></span>
            <h2>Jane Murphy</h2>
          </header>

          <main>
            <ul>
              <li><span>Birthday</span> Jan 1, 1900</li>
              <li><span>Address</span> 123 Any St.</li>
              <li><span>Phone</span> 123-456-7890</li>
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
