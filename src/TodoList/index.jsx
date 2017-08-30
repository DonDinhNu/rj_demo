import React from 'react';
import {connect} from 'react-redux';
import {todosSeletor} from './state';

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

const mappStateToProps = (state) => (
  {
    list: todosSeletor(state),
  }
)
const enhance = connect(mappStateToProps, null);

export default enhance(TodoList);
