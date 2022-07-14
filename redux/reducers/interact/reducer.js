import { Map } from 'immutable';
import * as actionTypes from './constants';
const defaultState = Map({
  commentList: []
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_INTERACT_COMMENTS:
      return state.set('commentList', action.commentList);
    default:
      return state;
  }
}
export default reducer;
