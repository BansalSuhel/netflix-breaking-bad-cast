import React from 'react';

import './SingleCharacter.css';

const SingleCharacter = props => {

  return (
    <div className="single-character">
      <div className="front-div">
        <img src={props.item.img} alt={props.item.name} className="front-div__img" />
      </div>
      <div className="back-div">
        <h1 className="back-div__heading">{props.item.name}</h1>
        <ul className="back-div__itmes">
          <li className="back-div__list"><strong>Actor Name:</strong> {props.item.portrayed}</li>
          <li className="back-div__list"><strong>NickName:</strong> {props.item.nickname}</li>
          <li className="back-div__list"><strong>Birthday:</strong> {props.item.birthday}</li>
          <li className="back-div__list"><strong>Status:</strong> {props.item.status}</li>
        </ul>

      </div>
    </div>
  )
};

export default SingleCharacter;