// This sample shows how to use React Fragments instead of 
// returning <div> elements.
// It also demonstrates how to use className="" in
// camelCase when we want to use a class in the html.
import React, { Component } from 'react';

class Sample extends Component {
  render(
    <React.Fragment>
      <section className="sample-container">
        <h1>Hello React Fragments</h1>
        <h2>Hello again from a fragment!</h2>
      </section>
    </React.Fragment>
  )
}

export default Sample;
