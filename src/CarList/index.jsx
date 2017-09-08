import React from 'react';
import { Observable } from 'rxjs';
import {connect} from 'react-redux';
import { fetchCarsAction, carsSelector } from './state';

const CarList = ({cars, fetchCars}) => (
  <div>
    <h1>Car list</h1>
    <p> Example for use Redux Observable to call api</p>
    <input type='button' value='Fetch Cars List From API' onClick={fetchCars}/>
    <ol>
      {cars.map(car => <li key={car}>{car}</li>)}
    </ol>
  </div>
);

const mapDispatchToProps = dispatch => ({
  fetchCars:() => {
    dispatch(fetchCarsAction());
  }
});

const mappStateToProps = state => ({
  cars: carsSelector(state),
});

const enhance = connect(null, mapDispatchToProps);

export default enhance(CarList);
