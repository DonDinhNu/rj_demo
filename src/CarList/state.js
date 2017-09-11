import {createAction, handleActions} from 'redux-actions';
import { Observable } from 'rxjs';
import {combineReducers} from 'redux';
import {uniq, path} from 'lodash/fp';

const UDPATE_CARS = 'carsList/cars'
const FETCH_CAR = 'carsList/fetch_org'

const cars = handleActions({
  [UDPATE_CARS]: (state, action) => action.payload
}, []);

export const fetchCarsAction = createAction(FETCH_CAR);
export const updateCarsAction = createAction(UDPATE_CARS);
export const carsSelector = path('carsList.cars');

export const fetchCarEpic = action$ =>
  action$.ofType(FETCH_CAR)
    .mergeMap(action =>
      Observable.ajax.getJSON('http://localhost:3001/api/v1/organisations')
        .do(console.log)
        .map(response => updateCarsAction(response))
    );

const reducer = combineReducers({
  cars,
});

export default {carsList: reducer}
