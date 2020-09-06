import React from 'react';
import Card from './Card.jsx'

class Tinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {id: 1, name:'レイア', age: 30, image:'leia.jpg'},
        {id: 2, name:'パドメ', age: 22, image:'padome.jpg'},
        {id: 3, name:'ハーマイオニー', age: 19, image:'hamaioni.jpeg'},
        {id: 4, name:'マクゴナガル', age: 60, image:'makugonagaru.jpg'}
      ],
      fadeIn: false,
      rightSlide: false,
      leftSlide: false
    }
  }

  like = (array) => {
    this.setState({
      fadeIn: false,
      rightSlide: true,
      people: this.state.people
    })

    setTimeout(() => {
      const person = array.shift()
      console.log(person.name + 'さんをいいねしました')
      console.log('残り' + array.length + '人です')
    }, 200)

    setTimeout(() => {
      this.setState({
        fadeIn: true,
        rightSlide: false,
        people: this.state.people
      })
    }, 300)

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
      <div className="cards">
        <Card
          image={person.image}
          name={person.name}
          age={person.age}
          like={() => this.like(people)}
          skip={() => this.skip(people)}
          fadeIn={this.state.fadeIn}
          rightSlide={this.state.rightSlide}
        />
      </div>
    )
  }
}

export default Tinder