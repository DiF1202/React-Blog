import * as actionTypes from "./constants";

//改变锚点数组
export const changeAnchorListAction = (AnchorArray) => {
  return {
    type: actionTypes.CHANGE_ANCHOR_LIST,
    AnchorArray,
  };
};
