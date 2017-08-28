import React from 'react';
import './index.css';
import ListTag from '../ListTag';

const NewTodo = ({tags}) => (
  <form>
    <label> Title: </label>
    <input type='text' name='title' placeholder='Title please'/>
    <br/>
    <div className='tags'>
      <label> Tags: </label>
      <ListTag tags={tags}/>
      <input type='text' name='title' placeholder='+ New tag'/>
    </div>
    <input type='submit' value='Create New Tag'/>
  </form>
);

export default NewTodo;
