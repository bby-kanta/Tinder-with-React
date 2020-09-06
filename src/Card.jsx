import React from 'react';

const Card = (props) => {
  return (
    <div className={ props.fadeIn? "fadein card" : "" | props.rightSlide? "likeAnimation card" : "" | props.leftSlide? "skipAnimation card" : "" + "card"}>
      <img src={require(`./${props.image}`)} />
      <div className="card-content">
        <div className="card-introduce">
          <h2>{props.name}</h2>
          <h3>{props.age}歳</h3>
        </div>
        <div className="">
          <div onClick={() => props.skip()}> スキップ </div>
          <div onClick={() => props.like()}> いいね </div>
        </div>
      </div>
    </div>
  )
}

export default Card