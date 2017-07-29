import React, { Component } from 'react';

import { updateStyle } from '../utils/utils'

import Quote from './Quote';


const QUOTE_API_URL = 'https://random-quote-generator.herokuapp.com/api/quotes/random';

class App extends Component {

  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      quote: {
        quote: '',
        author: ''
      }
    };
  };

  getQuote() {
    fetch(QUOTE_API_URL)
      .then(response => response.json())
      .then(response => {
        // Update the state with the new quote
        this.setState({
          quote: response
        });
        // Change the colors
        updateStyle();
      });

  };

  componentDidMount() {
    this.getQuote();
  };

  shareQuote() {
    const content = `${this.state.quote.quote} \n -- ${this.state.quote.author}`;
    window.location.href = `https://twitter.com/home?status=${content};`
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Quote quote={this.state.quote} />
          <button id="new-quote" className="primary-color-background" onClick={() => this.getQuote()}>New quote</button>
          <button className="share primary-color-background" onClick={this.shareQuote.bind(this)}><i className="fa fa-twitter"></i></button>
        </div>

      </div>
    );
  }
}

export default App;
