// Write your code here
import './index.css'

const TodoItem = props => {
  const {ListItem, key, initialTodosList, onDele} = props
  const onDel = () => {
    onDele(ListItem.id)
  }

  return (
    <li className="main">
      <p className="wid">{ListItem.title}</p>
      <button className="color" onClick={onDel}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
