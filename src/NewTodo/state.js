import {createAction, handleActions} from 'redux-actions';
import { Observable } from 'rxjs';
import {combineReducers} from 'redux';
import {uniq, path} from 'lodash/fp';
import {addTodoList} from '../TodoList/state';

// Define action
const ADD_TAG = 'NewTodo/addTag';
const REMOVE_TAG = 'NewTodo/removeTag';
const ADD_TITLE = 'NewTodo/addTitle';
const RESET_FORM = 'newTodo/resetFrom'
const SUCCESS = 'newTodo/message'
const FETCH_ORG = 'newTodo/fetch_org'
const UPDATE_ORG = 'newTodo/update_org'

export const addTagAction = createAction(ADD_TAG);
export const removeLatestTag = createAction(REMOVE_TAG);
export const addTitleAction = createAction(ADD_TITLE);
export const resetFrom = createAction(RESET_FORM);
export const handleSucess = createAction(SUCCESS);
export const fetchOrgAction = createAction(FETCH_ORG);
export const updateOrgAction = createAction(UPDATE_ORG);

export const tagsSelector = path('newTodo.tags');
export const titleSelector = path('newTodo.title');
export const messageSelector = path('newTodo.message');
export const ogrNameSelector = path('newTodo.orgName');


const tags = handleActions(
  {
    [ADD_TAG]: (state, action)  =>uniq([...state, action.payload]),
    [REMOVE_TAG]: (state, _action) => state.slice(0, -1),
    [RESET_FORM]: (state, _action) => [],
  },
  []
);

const title = handleActions(
  {
    [ADD_TITLE]: (state, action) => action.payload,
    [RESET_FORM]: (state, _action) => '',
  },
  ''
);

const message = handleActions(
  {
    [SUCCESS]: () => 'Create success!',
  },
  ''
);

const orgName = handleActions(
  {
    [UPDATE_ORG]: (state, action) => action.payload,
  }, ''
);

export const fetchOrgEpic = action$ =>
  action$.ofType(FETCH_ORG)
    .mergeMap(action =>
      Observable.ajax.getJSON('http://localhost:3001/api/v1/organisations')
        .do(console.log)
        .map(response => updateOrgAction(response.name))
    );

export const successEpic = action$ =>
  action$.ofType(SUCCESS)
    .do(console.log)
    .map(action => addTodoList(action.payload));
    // Use map will be reuse param (payload) of previous action.
    // In this case, map has action of SUCCESS

const reducer = combineReducers({
  tags,
  title,
  message,
  orgName,
});

export default {newTodo: reducer}
