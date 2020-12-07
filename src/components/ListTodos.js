import React, { useState } from 'react';
import shortid from 'shortid';
import AddTodo from './AddTodo';

const ListTodos = () => {
  const [list, setList] = useState({todos:[]})

  const { todos } = list;

  const addTodo = (todo) => {
    setList({todos:[todo, ...todos]});
  };

  console.log(todos);

  return (
    <div>
      <AddTodo  onSubmit={addTodo} />
        <table className="list">
        <tbody className="list-items">
          {
            todos && todos.map((item) => (
              <tr key={shortid.generate()}>
                <td
                  className={item.completed ? 'mark-done' : ''}
                >
                  {item.todo}
                </td>
                <td
                  // onClick={() => props.onCompleteClick(item.id)}
                  // role="presentation"
                >
                  <i className="fas fa-check" />
                </td>
                <td
                  // onClick={() => props.onDeleteClick(item.id)}
                  // role="presentation"
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
