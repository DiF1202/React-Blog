import * as actionType from "./constants";

//改变isHidden 控制header是否隐藏
export const changeIsHiddenAction = (isHidden) => {
  return {
    type: actionType.CHANGE_HEADER_IS_HIDDEN,
    isHidden,
  };
};

//切换博客主题
export const changeBlogTheme = (themeKey) => {
  return {
    type: actionType.CHANGE_BLOG_THEME,
    themeKey,
  };
};
