import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.age}歳</h3>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()} />
      <div onClick={() => props.like()}> いいね </div>
    </div>
  )
}

export default Card