import React, { Component } from 'react';

class Quote extends Component {
  // componentDidMount() {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('GET', this.props.source);
  //   xhr.send(null);

  //   xhr.onreadystatechange = ()=> {
  //     if (xhr.readyState === 4) {
  //       console.log(xhr.responseText);
  //     } else {
  //       console.log('Error: ', xhr.status);
  //     }
  //   }
  // }

  render() {
    const getQuoteButton = <button onClick={this.props.getQuote}>Get Quote</button>;

    return (
      <div>{getQuoteButton}</div>
    );
  }
}

export default Quote;