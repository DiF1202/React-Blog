import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/layout';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { changMainMoveRight } from '../../components/Layout/store/actionCreators';
import { InteractWrap } from '../../styles/pages/interact';
import { getFriendLinks, applyLink } from '@/network/interact.js';
import { addComment } from '@/network/detail';
import FrendsLinks from '../../components/Friends/links';
import { Button, Input, message, Switch } from 'antd';
import { BlogTheme } from '@/utils/constant';
import { SelfSelector } from '@/utils/common';
import CommentInputWrap from '../../components/CommentInputWrap';
import { getArticleCommentListAction } from '@/redux/reducers/detail/actionCreators';
const Iteract = ({ friends }) => {
  const dispatch = useDispatch();
  //state
  const [friendTitle, setFriendTitle] = useState('');
  const [avaUrl, setavaUrl] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [type, setType] = useState(false); //是否发送邮箱
  //分页 每一页的数据
  const [limit, setLimit] = useState(11);
  const { theme, commentList } = SelfSelector({
    header: 'theme',
    detail: 'commentList'
  });

  // hooks
  useEffect(() => {
    dispatch(changMainMoveRight(true));
  }, [dispatch]);
  //拿评论
  useEffect(() => {
    dispatch(getArticleCommentListAction(-1, 0, limit, 1));
  }, [dispatch]);

  // methods
  const apply_link = () => {
    const userId = localStorage.getItem('userId');
    applyLink(friendTitle, avaUrl, url, description, email, userId).then(res => {
      const type = res.data.type;
      const Message = res.message;
      if (type) {
        setFriendTitle('');
        setavaUrl('');
        setUrl('');
        setDescription('');
        setEmail('');
        message.success(Message);
      } else {
        message.error(Message);
      }
    });
  };

  const TextAreaChange = e => {
    setComment(e.target.value);
  };

  const submitComment = () => {
    addComment({
      themeId: -1,
      comment,
      fatherId: -1,
      userId: localStorage.getItem('userId'),
      levelId: -1,
      type,
      area: localStorage.getItem('position')
    }).then(res => {
      const Message = res.message;
      const type = res.data.type;
      if (type) {
        //重新发一次请求
        dispatch(getArticleCommentListAction(-1, 0, limit, 1));
        message.success(Message);
        setComment('');

        //重新发一次请求
      } else {
        message.error(Message);
      }
    });
  };

  const showMoreComment = () => {
    dispatch(getArticleCommentListAction(-1, 0, limit + 11, 1));
    setLimit(limit + 11);
  };

  const handleSwitchChange = e => {
    setType(e);
    if (e) {
      message.success('此留言会通过邮箱提醒博主~');
    }
  };

  return (
    <InteractWrap>
      <Head>
        <title>About</title>
      </Head>
      <div className="center_wrap">
        <h1 className="link_title">友情链接</h1>
        <p className="link_title">(顺序随机,不分先后)</p>
        <hr className="parting-line" />
        <FrendsLinks friends={friends}></FrendsLinks>
        <h2 className="link_title">欢迎各位大佬交换友链~~~</h2>
        <div className="apply_link">
          <Input value={friendTitle} className="input" onChange={e => setFriendTitle(e.target.value)} size="large" placeholder="大佬的网站名字" />
          <Input value={url} className="input" onChange={e => setUrl(e.target.value)} size="large" placeholder="大佬的网站地址(以https,http开头)" />
          <Input value={description} onChange={e => setDescription(e.target.value)} className="input" size="large" placeholder="对于网站的描述(或者网站的主要内容)" />
          <Input value={avaUrl} className="input" onChange={e => setavaUrl(e.target.value)} size="large" placeholder="网站的logo(以https,http开头)" />
          <Input value={email} size="large" onChange={e => setEmail(e.target.value)} className="input" placeholder="QQ邮箱以'@'结尾,用于友链审核结果通知" />
        </div>
        <Button type="primary" onClick={() => apply_link()}>
          申请友链
        </Button>
        <div className="tip">
          <div style={{ color: BlogTheme[theme].homeFontColor, fontSize: '20px' }}>本站格式</div>
          <div>标题:Di的小站</div>
          <div>地址:https://www.xxxx.com</div>
          <div>描述:大佬们求求你们,带带弟弟吧</div>
          <div>Logo:https://xxxxx.jpg</div>
          <div>提示:申请提交后若无其它原因将在24小时内审核，如超过时间还未通过，请私信我。</div>
        </div>
      </div>
      <div className="input_and_submit">
        <hr className="parting-line" />
        <div className="dsy_tip">
          赶快来留言吖,博主会经常光顾本站
          <span style={{ color: '#ec5328' }}>(支持markdown语法)</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: 'rgb(32, 157, 123)',
            alignItems: 'center',
            fontSize: '14px',
            margin: '4px 0'
          }}
        >
          <span>随便对博主说点什么吧❤</span>
          <span className="flex-wrap">
            <span>QQ邮箱提醒</span> <Switch onChange={e => handleSwitchChange(e)} checkedChildren="开启" unCheckedChildren="关闭"></Switch>
          </span>
        </div>
      </div>
      <CommentInputWrap TextAreaChange={TextAreaChange} submitComment={submitComment} article_id={-1} commentList={commentList} comment={comment} showMoreComment={showMoreComment} />
    </InteractWrap>
  );
};

//网络请求
Iteract.getInitialProps = async () => {
  const res = await getFriendLinks();
  return {
    friends: res?.data?.row
  };
};

Iteract.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Iteract;
