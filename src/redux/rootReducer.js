import {combineReducers} from 'redux';
import newTodo from '../NewTodo/state';
import todoList from '../TodoList/state';
import carsList from '../CarList/state';

export const rootReducer = combineReducers({
  ...newTodo,
  ...todoList,
  ...carsList,
});

export default rootReducer;
