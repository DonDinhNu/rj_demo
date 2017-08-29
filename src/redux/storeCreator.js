import {createStore, compose} from 'redux';
import rootReducer from './rootReducer';

const enhancers = [
  window.devToolsExtension && window.devToolsExtension(),
];

const noop = () => {};

export const storeCreator = () => {
  const store = createStore(
    rootReducer,
    compose(...enhancers),
  );
  return store;
};

export const store = storeCreator();
