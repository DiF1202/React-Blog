import request from "./index";

//获取技能点
export function getSkills() {
  return request("/about/get_skills");
}

export function getAbout() {
  return request("/about/aboutMe?type=1");
}
