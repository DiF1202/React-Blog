import { getComments } from '@/network/interact';
import * as actionTypes from './constants';

//评论留言
export const getInteractComments = () => {
  return dispatch => {
    getComments().then(res => {
      dispatch(changeInteractAction(res.data.CommentArray));
    });
  };
};
const changeInteractAction = commentList => {
  return {
    type: actionTypes.CHANGE_INTERACT_COMMENTS,
    commentList
  };
};
