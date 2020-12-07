import React, { useState } from 'react';
import shortid from 'shortid';

const AddTodo = (props) => {
  const [formData, setFormData] = useState(
    {
      id: 0,
      todo: '',
      completed: false,
    }
  );
 
  const { todo } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      todo,
      completed: false,
    });
    setFormData({
      id: 0,
      todo: '',
      completed: false,
    });
  };

  return (
    <form className="input-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="todo"
        className="input-field"
        value={todo}
        required
        placeholder="Add something to do..."
        onChange={(e) => onChange(e)}
      />
      <br />
      <button type="submit" className="input-btn">Add</button>
    </form>
  )
}

export default AddTodo
