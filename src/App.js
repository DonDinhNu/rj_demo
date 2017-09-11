import React, { Component } from 'react';
import {Provider} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import AppleOrOrange from './AppleOrOrange';
import CarList from './CarList';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import {store} from './redux/storeCreator';

const App = () => (
  <Provider store={store}>
    <div>
      <NewTodo/>
      <TodoList/>
      <CarList />
      </div>
  </Provider>
)

export default App;
