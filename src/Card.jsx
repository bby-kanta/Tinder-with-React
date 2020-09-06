import React from 'react';

const Card = (props) => {
  return (
    <div className={ props.fadeIn? "fadein card" : "" | props.rightSlide? "likeAnimation card" : "" | props.leftSlide? "skipAnimation card" : "" + "card"}>
      <div className={ props.rightSlide? "like-label" : "" + "fade"}>いいね</div>
      <div className={ props.leftSlide? "skip-label" : "" + "fade"}>スキップ</div>
      <img src={require(`./${props.image}`)} />
      <div className="card-content">
        <div className="card-introduce">
          <h2>{props.name}</h2>
          <h3>{props.age}歳</h3>
        </div>
        <div className="skip-like">
          <div onClick={() => props.skip()} className="skip"> スキップ </div>
          <div onClick={() => props.like()} className="like"> いいね！ </div>
        </div>
      </div>
    </div>
  )
}

export default Card