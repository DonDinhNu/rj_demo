import React from 'react';
import './index.css';
import ListTag from '../ListTag';

const TodoList = ({list}) => (
  <div>
    <h1>Todo List</h1>
    <ol className='list'>
        {list.map((todo, index) => (
          <li key={index}>
            <b>{todo.title}</b>
            <ListTag tags={todo.tags}/>
          </li>
        )
        )}
    </ol>
  </div>
)

export default TodoList;
