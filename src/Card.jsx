import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.age}歳</h3>
      <div onClick={() => props.like()}> いいね </div>
      <div onClick={() => props.skip()}> スキップ </div>
    </div>
  )
}

export default Card