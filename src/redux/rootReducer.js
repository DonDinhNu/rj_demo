import {combineReducers} from 'redux';
import newTodo from '../NewTodo/state';

export const rootReducer = combineReducers({
  ...newTodo,
});

export default rootReducer;
