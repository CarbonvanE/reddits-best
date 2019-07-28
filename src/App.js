import React, { Component } from 'react';
import './App.scss';

import Home from './home/Home';
import Details from './details/Details';


class App extends Component {
  state = {
    articles: null,
    fetchingError: false,
    details: false
  }

  componentDidMount() {
    fetch('https://www.reddit.com/best.json')
      .then(r => {
        if (r.status === 200) {
          r.json().then(json => this.setState({ articles: json.data.children.slice(0, 10) }))
        } else {
          this.setState({ fetchingError: true })
        }
      }
    )
  }


  render() {
    return (
      <div className="App">
        {!this.state.articles && <div className="fetching-message">Fetching the articles...</div>}
        {this.state.articles && <Home articles={this.state.articles} toggleDetails={details => this.setState({ details })} />}
        {this.state.details && <Details subreddit={this.state.details} toggleDetails={() => this.setState({ details: false })} />}
      </div>
    )
  }
}

export default App;
