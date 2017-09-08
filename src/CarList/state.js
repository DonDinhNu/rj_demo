import {createAction, handleActions} from 'redux-actions';
import { Observable } from 'rxjs';
import {combineReducers} from 'redux';
import {uniq, path} from 'lodash/fp';

const CARS = 'carsList/cars'

const cars = handleActions({
  [CARS]: () => [1,2,3]
}, '');

export const fetchCarsAction = createAction(CARS);
export const carsSelector = path('carsList.cars');

const reducer = combineReducers({
  cars,
});

export default {carsList: reducer}
