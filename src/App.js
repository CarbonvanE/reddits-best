import React, { Component } from 'react';
import './App.scss';

import List from './list/List';


class App extends Component {
  state = {
    articles: null,
    fetchingError: false
  }

  componentDidMount() {
    fetch('https://www.reddit.com/best.json')
      .then(r => {
        if (r.status === 200) {
          r.json().then(json => this.setState({ articles: json.data.children }))
        } else {
          this.setState({ fetchingError: true })
        }
      }
    )
  }

  render() {
    if (this.state.articles) {
      return (
        <div className="App">
          <div className="content">
            <div className="top">
              <h1>Home</h1>
              <h2>Top 10 posts</h2>
            </div>
            <List articles={this.state.articles}/>
          </div>
        </div>
      );
    } else if (this.state.fetchingError) {
      return <div className="error-message">Something went wrong while fetching the articles.</div>
    } else {
      return <div className="fetching-message">Fetching the articles...</div>
    }
  }
}

export default App;
