import React from 'react';
import './ListItem.scss';

function ListItem(props) {
  const formatNumber = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="ListItem">
      <a className="title" href={props.data.url}><h3>{props.data.title}</h3></a>
      <div className="info">
      <div className="subreddit" onClick={() => props.toggleDetails(props.data)}>r/{props.data.subreddit}</div>
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
