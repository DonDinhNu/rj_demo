import { combineEpics } from 'redux-observable';
import {successEpic} from '../NewTodo/state';

export const rootEpic = combineEpics(
  successEpic,
);
