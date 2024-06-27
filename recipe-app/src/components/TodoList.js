// src/components/TodoList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../actions';

const TodoList = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add To-Do</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
