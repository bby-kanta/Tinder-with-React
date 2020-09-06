import React from 'react';
import Card from './Card.jsx'

class Tinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false
    }
  }
  
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  render() {
    return (
      <div>
        <Card name="レイア" age="23" isPublished={this.state.isPublished} toggle={() => this.togglePublished()} />
        <Card name="パドメ" age="25" />
        <Card name="レイ" age="20" />
        <Card name="ハーマイオニー" age="19" />
        <Card name="マクゴナガル" age="60" />
      </div>
    )
  }
}

export default Tinder