import React from 'react';
import './List.css';

import ListItem from './ListItem';


function List(props) {
  console.log(props.articles);
  return (
    <div className="List">
      {props.articles.map(article => <ListItem data={article.data} />)}
    </div>
  );
}

export default List;
