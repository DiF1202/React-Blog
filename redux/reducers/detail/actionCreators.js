import * as actionTypes from './constants';
import { getArticleComment } from '@/network/detail';
import { changeMainLoadingAction } from '../../../components/Layout/store/actionCreators';
//改变锚点数组
export const changeAnchorListAction = AnchorArray => {
  return {
    type: actionTypes.CHANGE_ANCHOR_LIST,
    AnchorArray
  };
};

//获取文章评论列表
export const getArticleCommentListAction = (article_id, type, limit, page) => {
  return dispatch => {
    dispatch(changeMainLoadingAction(true));
    getArticleComment(article_id, type, limit, page).then(res => {
      dispatch(changeArticleCommentListAction(res.data.CommentArray));
      dispatch(changeMainLoadingAction(false));
    });
  };
};

//改变评论列表
export const changeArticleCommentListAction = commentList => {
  return {
    type: actionTypes.CHANGE_ARTICLE_COMMENT_LIST,
    commentList
  };
};
