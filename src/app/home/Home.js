import React from 'react';
import './Home.scss';

import List from './list/List';


function Home(props) {
  return (
    <div className="Home">
      <div className="content">
        <div className="top">
          <h1>Home</h1>
          <h2>Top 10 posts</h2>
        </div>
        <List articles={props.articles} toggleDetails={props.toggleDetails} />
      </div>
    </div>
  );
}

export default Home;
