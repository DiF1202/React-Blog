import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  skills: [], //博主技能点
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SKILLS:
      return state.set("skills", action.skills);
    default:
      return state;
  }
}

export default reducer;
