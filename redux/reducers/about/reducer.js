import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  skills: [], //博主技能点
  position: "", //位置
  ip: "", //ip地址
  time: "", //时间
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SKILLS:
      return state.set("skills", action.skills);
    case actionTypes.CHANGE_POSITION:
      return state.set("position", action.position);
    case actionTypes.CHANGE_IP:
      return state.set("ip", action.ip);
    case actionTypes.CHANGE_TIME:
      return state.set("time", action.time);
    default:
      return state;
  }
}

export default reducer;
