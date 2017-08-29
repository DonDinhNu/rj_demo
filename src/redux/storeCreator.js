import {createStore, compose} from 'redux';

const enhancers = [
  window.devToolsExtension && window.devToolsExtension(),
];

const noop = () => {};

export const storeCreator = () => {
  const store = createStore(
    noop,
    compose(...enhancers),
  );
  return store;
};

export const store = storeCreator();
