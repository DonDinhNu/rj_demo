import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import AppleOrOrange from './AppleOrOrange';
import CarList from './CarList'

const App = () => (
  <div>
    <HelloWorld title="World"/>
    <AppleOrOrange isApple={true}/>
    <AppleOrOrange isApple={false}/>
    <CarList cars={['Audi', 'Mes', 'Toyota']}/>
  </div>
)

export default App;
