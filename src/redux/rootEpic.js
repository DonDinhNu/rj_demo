import { combineEpics } from 'redux-observable';
import {successEpic, fetchOrgEpic} from '../NewTodo/state';

export const rootEpic = combineEpics(
  successEpic,
  fetchOrgEpic,
);
