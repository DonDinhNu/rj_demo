import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import AppleOrOrange from './AppleOrOrange';
import CarList from './CarList';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

const App = () => (
  <div>
    <HelloWorld title="World"/>
    <AppleOrOrange isApple={true}/>
    <AppleOrOrange isApple={false}/>
    <CarList cars={['Audi', 'Mes', 'Toyota']}/>
    <NewTodo tags={[]}/>
    <TodoList list={[
        {title: 'Cake', tags: ['Tiramisu', 'Doreyaky']},
        {title: 'Car', tags: ['Toyota', 'Mes', 'Audi']}
      ]}/>
  </div>
)

export default App;
