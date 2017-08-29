import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

// Define action
const ADD_TAG = 'NewTodo/addTag';

const addTagAction = data  => ({
  type: ADD_TAG,
  payload: data,
})

const tags = handleActions({
  [ADD_TAG]: (state, action)  => [...state, action.payload],},
  []
);

const reducer = combineReducers({
  tags,
});

export default {newTodo: reducer}
