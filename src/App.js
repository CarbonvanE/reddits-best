import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    articles: null,
  }

  componentDidMount() {
    fetch('https://www.reddit.com/best.json')
      .then(r => {
        if (r.status === 200) {
          r.json().then(json => this.setState({ articles: json.data.children }))
        }
      }
    )
  }

  render() {
    return (
      <div className="App">
        Hello world!
      </div>
    );
  }
}

export default App;
