import React, { useState } from 'react';
import AddTodo from './AddTodo';

const ListTodos = () => {
  const [list, setList] = useState({todos:[]});

  const { todos } = list;

  const addTodo = (todo) => {
    setList({todos:[todo, ...todos]});
  };

  const onCompleteClick = (id) => {
   setList({ todos: todos.map((item) => {
     if (item.id === id) {
       return { ...item, completed:  !item.completed};
     }
     return item;
   })})
  }

  const onDeleteClick = (id) => {
    setList({todos: todos.filter((item) => item.id !== id)});
  }

  return (
    <div>
      <AddTodo  onSubmit={addTodo} />
        <table className="list">
        <tbody className="list-items">
          {
            todos && todos.map((item) => (
              <tr key={item.id}>
                <td
                  className={item.completed ? 'mark-done' : ''}
                >
                  {item.todo}
                </td>
                <td
                  onClick={() => onCompleteClick(item.id)}
                  role="presentation"
                >
                  <i className="fas fa-check" />
                </td>
                <td
                  onClick={() => onDeleteClick(item.id)}
                  role="presentation"
                >
                  <i className="fas fa-trash" />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListTodos
