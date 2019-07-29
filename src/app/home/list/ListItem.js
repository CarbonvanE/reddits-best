import React from 'react';
import './ListItem.scss';

import { formatDotNotation } from './../../../genericFunctions';


function ListItem(props) {
  return (
    <div className="ListItem">
      <a className="title" href={props.data.url}><h3>{props.data.title}</h3></a>
      <div className="info">
        <div className="subreddit" onClick={() => props.toggleDetails(props.data.subreddit)}>{props.data.subreddit_name_prefixed}</div>
        <div className="spacer">·</div>
        <div className="points">
          <span className="score">{formatDotNotation(props.data.score)}</span>
          <span>points</span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
