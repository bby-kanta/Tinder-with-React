import React from 'react';
import Card from './Card.jsx'

class Tinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      people: [
        {id: 1, name:'レイア', age: 30},
        {id: 2, name:'パドメ', age: 22},
        {id: 3, name:'ハーマイオニー', age: 19},
        {id: 4, name:'マクゴナガル', age: 60}
      ]
    }
  }
  
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  like = (array) => {
    this.setState({
      people: this.state.people
    })

    const person = array.shift()
    console.log(person.name + 'をいいねしました')
    console.log(array)
    return person
  }

  render() {
    const people = this.state.people
    const person = people[0]

    return (
      <div>
        <Card name={person.name} age="23" isPublished={this.state.isPublished} toggle={() => this.togglePublished()} like={() => this.like(people)} />
      </div>
    )
  }
}

export default Tinder