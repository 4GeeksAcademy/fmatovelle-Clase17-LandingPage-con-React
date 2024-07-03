
import React from 'react';

const Card = (props) => {
  console.log(props,'estos son los props');
  return (
    <div className="card mt-3" style= {{width: "18rem"}}>
      <img src={props.img} className="card-img-top" alt="Placeholder" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">{props.button}</a>
      </div>
    </div>
  );
}


export { Card };
