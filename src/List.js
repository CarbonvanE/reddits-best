import React from 'react';
import './List.scss';

import ListItem from './ListItem';


function List(props) {
  return (
    <div className="List">
      {props.articles.map(article => <ListItem data={article.data} />)}
    </div>
  );
}

export default List;
