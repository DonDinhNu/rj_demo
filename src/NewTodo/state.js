import {createAction, handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {uniq, path} from 'lodash/fp';

// Define action
const ADD_TAG = 'NewTodo/addTag';
const REMOVE_TAG = 'NewTodo/removeTag';
const ADD_TITLE = 'NewTodo/addTitle';

export const addTagAction = createAction(ADD_TAG);
export const removeLatestTag = createAction(REMOVE_TAG);
export const addTitleAction = createAction(ADD_TITLE);

export const tagsSelector = path('newTodo.tags');
export const titleSelector = path('newTodo.title');


const tags = handleActions(
  {
    [ADD_TAG]: (state, action)  =>uniq([...state, action.payload]),
    [REMOVE_TAG]: (state, _action) => state.slice(0, -1),
  },
  []
);

const title = handleActions(
  {
    [ADD_TITLE]: (state, action) => action.payload
  },
  ''
)

const reducer = combineReducers({
  tags,
  title,
});

export default {newTodo: reducer}
