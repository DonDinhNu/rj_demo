import React from 'react';
import {connect} from 'react-redux';
import {addTagAction, addTitleAction} from './state';
import {removeLatestTag, tagsSelector, titleSelector} from './state';

import './index.css';
import ListTag from '../ListTag';

const NewTodo = ({tags, title, addTag, removeLatestTag, addTitle}) => (
  <div>
    <h1></h1>
    <label> Title: </label>

  <input type='text' name='title' placeholder='Title please' onChange={addTitle} value={title}/>
    <br/>
    <div className='tags'>
      <label> Tags: </label>
      <ListTag tags={tags}/>
      <input type='text' name='title' placeholder='+ New tag' onKeyPress={addTag}/>
    </div>
    <input type='submit' value='Create New Tag'/>
    <input type='button' value='Remove' onClick={removeLatestTag}/>
  </div>
);

const mapDispatchToProps = dispatch => ({
  // Addtag is function with data to dispatch
  addTag:  e => {
    if (e.charCode === 13) {
      dispatch(addTagAction(e.target.value));
      e.target.value = '';
    }
  },

  removeLatestTag: () => {
    dispatch(removeLatestTag())
  },

  addTitle: (e) => {
    dispatch(addTitleAction(e.target.value));
  }
});

const mappStateToProps = state => ({
  tags: tagsSelector(state),
  title: titleSelector(state),
}
);

const enhance = connect(mappStateToProps, mapDispatchToProps);

export default enhance(NewTodo);

//mapDispatchToProps
//1. Patch action to event
//2. Add action as param on const NewTodo
//3. On mapDispatchToProps, define a key with name is action and handle dispatch with action.
// dispatch action, reducer handle action to update state


//mappStateToProps
// Recieve state

// lodash
