import React from 'react';
import Card from './Card.jsx'

class Tinder extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card name="レイア" age="23" />
        <Card name="パドメ" age="25" />
        <Card name="レイ" age="20" />
        <Card name="ハーマイオニー" age="19" />
        <Card name="マクゴナガル" age="60" />
      </div>
    )
  }
}

export default Tinder