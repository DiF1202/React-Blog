import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  AnchorArray: [], //锚点数组
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ANCHOR_LIST:
      return state.set("AnchorArray", action.AnchorArray);
    default:
      return state;
  }
}
export default reducer;
