import {createAction, handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {uniq, path} from 'lodash/fp';

export const ADD_TODO = 'todoList/addTodo'

export const todosSeletor = path('todoList.todos');
export const addTodoList = createAction(ADD_TODO);

export const todos = handleActions({
  [ADD_TODO]: (state, action) =>
    [...state, action.payload],
}, []);

const reducer = combineReducers({
  todos,
});

export default {todoList: reducer};
