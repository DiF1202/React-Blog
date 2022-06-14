import * as actionTypes from "./constants";
import { getSkills } from "@/network/about.js";

//获取博主技能点
export const getSkillsAction = () => {
  return (dispatch) => {
    getSkills().then((res) => {
      dispatch(changeSkills(res?.data?.doc));
    });
  };
};

const changeSkills = (skills) => {
  return {
    type: actionTypes.CHANGE_SKILLS,
    skills,
  };
};
