import {Component} from 'react'

import TodoItem from '../TodoItem/index'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {list: initialTodosList}

  onDele = key => {
    const {list} = this.state
    console.log(key)

    const filteredList = list.filter(each => each.id !== key)
    console.log(filteredList)
    this.setState({list: filteredList})
  }

  render() {
    // console.log(initialTodosList)
    const {list} = this.state
    return (
      <div>
        <ul>
          <h1 className="head">Simple Todos</h1>
          {list.map(each => (
            <TodoItem
              onDele={this.onDele}
              ListItem={each}
              key={each.id}
              fList={initialTodosList}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
