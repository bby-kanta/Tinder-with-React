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
    console.log(person.name + 'さんをいいねしました')
    console.log('残り' + array.length + '人です')
    return person
  }

  skip = (array) => {
    this.setState({
      people: this.state.people
    })

    const person = array.shift()
    console.log(person.name + 'さんをスキップしました')
    console.log('残り' + array.length + '人です')
    return person
  }

  render() {
    const people = this.state.people
    const person = people[0]

    return (
      <div>
        <Card name={person.name} age={person.age} isPublished={this.state.isPublished} like={() => this.like(people)} skip={() => this.skip(people)} />
      </div>
    )
  }
}

export default Tinder