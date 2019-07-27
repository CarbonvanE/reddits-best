import React from 'react';
import './ListItem.css';

function ListItem(props) {
  console.log(props.data);
  return (
    <div className="ListItem">
      <div className="title">{props.data.title}</div>
      <div className="info">
      <div className="subreddit">r/{props.data.subreddit}</div>
        <div className="points">
          <span className="score">{props.data.score}</span>
          <span>points</span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
