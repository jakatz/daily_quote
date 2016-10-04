import React, { Component } from 'react';
import Quote from './Quote';

class App extends Component {
  constructor() {
    super();

    // bindings
    this.getQuote = this.getQuote.bind(this);

    // getInitialState
    this.state = {
      quote: "",
      author: ""
    };
  }

  setBackground(url) {
    const page = document.querySelector('.daily-quote');
    console.log(page);
  }

  getQuote(e) {
    e.preventDefault();
    fetch('http://quotes.rest/qod.json?category=inspire', {
      method: 'get'
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      const quote = data.contents.quotes[0].quote;
      const author = data.contents.quotes[0].author;

      this.setBackground(data.contents.quotes[0].background);
      this.setState({
        quote: quote,
        author: author
      });
    }).catch((err) => {
      console.error("Error: ", err);
    });
  }

  render() {
    return (
      <div className="daily-quote">
        <Quote getQuote={this.getQuote} />
        <p>{this.state.quote}</p>
        <h1>{this.state.author}</h1>
      </div>
    );
  }
}

export default App;
