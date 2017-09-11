import { combineEpics } from 'redux-observable';
import {successEpic} from '../NewTodo/state';
import {fetchCarEpic} from '../CarList/state';

export const rootEpic = combineEpics(
  successEpic,
  fetchCarEpic,
);
