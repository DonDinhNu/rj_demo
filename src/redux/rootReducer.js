import {combineReducers} from 'redux';
import newTodo from '../NewTodo/state';
import todoList from '../TodoList/state';

export const rootReducer = combineReducers({
  ...newTodo,
  ...todoList,
});

export default rootReducer;
