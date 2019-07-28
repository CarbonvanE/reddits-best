import React from 'react';
import './Info.scss';

function Info(props) {
  const formatNumber = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="Info">
      <div className="section">
        <h3>Title</h3>
        <h4>{props.details.display_name}</h4>
      </div>
      <div className="section">
        <h3>Public description</h3>
        <h4>{props.details.public_description}</h4>
      </div>
      <div className="section">
        <h3>Subscriber count</h3>
        <h4>{formatNumber(props.details.subscribers)}</h4>
      </div>
    </div>
  );
}

export default Info;
