import React from 'react';
import './index.css';

const NewTodo = ({tags}) => (
  <from>
    <label> Title: </label>
    <input type='text' name='title' placeholder='Title please'/>
    <br/>
    <div className='tags'>
      <label> Tags: </label>
      {tags.map(tag => <div>{tag}</div>)}
      <input type='text' name='title' placeholder='+ New tag'/>
      <input type='submit' value='Create New Tag'/>
    </div>
  </from>
)

export default NewTodo
