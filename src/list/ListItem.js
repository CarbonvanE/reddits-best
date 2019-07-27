import React from 'react';
import './ListItem.scss';

function ListItem(props) {
  const formatNumber = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="ListItem">
      <div className="title">{props.data.title}</div>
      <div className="info">
      <div className="subreddit">r/{props.data.subreddit}</div>
      <div className="spacer">·</div>
      <div className="points">
        <span className="score">{formatNumber(props.data.score)}</span>
        <span>points</span>
      </div>
      </div>
    </div>
  );
}

export default ListItem;
