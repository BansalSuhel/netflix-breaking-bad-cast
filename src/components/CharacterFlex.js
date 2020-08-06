import React from 'react';

import SingleCharacter from './SingleCharacter';
import './CharacterFlex.css';

const CharacterFlex = props => {
 
    return(
    <div className="character-flex">
      {props.items.map(item => ( 
        <SingleCharacter item={item} key={item.char_id}/>
      ))}
    </div>)
};

export default CharacterFlex;
