import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import { rootEpic } from './rootEpic';
import { createEpicMiddleware } from 'redux-observable';
import {compact} from 'lodash';

const epicMiddleware = createEpicMiddleware(rootEpic);
const enhancers = compact([
  applyMiddleware(epicMiddleware),
  window.devToolsExtension && window.devToolsExtension(),
]);

const noop = () => {};

export const storeCreator = () => {
  const store = createStore(
    rootReducer,
    compose(...enhancers),
  );
  return store;
};

export const store = storeCreator();
