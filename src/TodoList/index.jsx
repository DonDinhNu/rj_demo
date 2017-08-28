import React from 'react';
import './index.css';

const TodoList = ({list}) => (
  <div>
    <h1>Todo List</h1>
    <ol className='list'>
        {list.map((todo) => (
          <li>
            <b>{todo.title}</b>
            {todo.tags.map(tag => <div>{tag}</div>)}
          </li>
        )
        )}
    </ol>
  </div>
)

export default TodoList;
