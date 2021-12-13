import React from 'react';

const Card = (props) => {
  return (
  <div className="card">
    <img src={props.img} alt="The image" />
    <h2 className="title">{props.title}</h2>
    <p className="description">{props.description}</p>
    <a href={props.link1} className="link">Share</a>
    <a href={props.link2} className="link">Explore</a>
  </div>
  )
}

export default Card;
