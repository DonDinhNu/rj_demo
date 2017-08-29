import {createAction, handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {uniq, path} from 'lodash/fp';

// Define action
const ADD_TAG = 'NewTodo/addTag';
const REMOVE_TAG = 'NewTodo/removeTag';

export const addTagAction = createAction(ADD_TAG);
export const tagsSelector = path('newTodo.tags');
export const removeLatestTag = createAction(REMOVE_TAG);

const tags = handleActions(
  {
    [ADD_TAG]: (state, action)  =>uniq([...state, action.payload]),
    [REMOVE_TAG]: (state, _action) => state.slice(0, -1),
  },
  []
);

const reducer = combineReducers({
  tags,
});

export default {newTodo: reducer}
