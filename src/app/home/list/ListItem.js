import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.scss';

import { formatDotNotation } from 'genericFunctions';


function ListItem(props) {
  return (
    <div className="ListItem">
      <a className="title" href={props.data.url}><h3>{props.data.title}</h3></a>
      <div className="info">
        <Link className="subreddit" to={`/${props.data.subreddit}`}>{props.data.subreddit_name_prefixed}</Link>
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
