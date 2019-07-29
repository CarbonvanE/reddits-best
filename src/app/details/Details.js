import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Details.scss';

import Info from './Info';
import Icon from './Icon';


class Details extends Component {
  state = {
    details: null,
    fetchingError: false
  }

  componentDidMount() {
    fetch(`https://www.reddit.com/r/${this.props.match.params.subreddit}/about.json`)
      .then(r => {
        if (r.status === 200) r.json().then(json => this.setState({ details: json.data }))
        else this.setState({ fetchingError: true })
      }
    )
  }


  render() {
    return (
      <div className="Details">
        <div className="content">
          <Link className="back" to="/">
            <Icon />
            <span>Home</span>
          </Link>

          <div className="top">
            <a href={this.state.details ? `https://www.reddit.com${this.state.details.url}` : "#"}>
              <h1>r/{this.props.match.params.subreddit}</h1>
            </a>
            <h2>Subreddit details</h2>
          </div>

          {this.state.details && <Info details={this.state.details}/>}
          {this.state.fetchingError && <div className="error-message">Something went wrong while fetching the subreddits information.</div>}
        </div>
      </div>
    );
  }
}

export default Details;
