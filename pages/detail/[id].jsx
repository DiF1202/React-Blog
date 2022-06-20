/* eslint-disable react/no-children-prop */
import React, { memo, useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout/layout";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "../../components/Layout/store/actionCreators";
import { DetailWrapper } from "../../styles/pages/detail";
import {
  getArticleDetail,
  changeArticleReadingCount,
} from "@/network/detail.js";
import { BlogTheme } from "@/utils/constant";
import { SelfSelector } from "@/utils/common";
import { useRouter } from "next/router";
import { getNodeInfo } from "@/utils/common";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { blogImgUrls } from "@/utils/constant";
import { changeAnchorListAction } from "@/redux/reducers/detail/actionCreators";
import {
  ScheduleOutlined,
  MessageOutlined,
  RiseOutlined,
  RedEnvelopeOutlined,
  QqOutlined,
  WechatOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import { Divider, message, Popover } from "antd";

const payImgStyle = { width: "100px", height: "100px" };
const midImgStyle = { display: "block", margin: "0,auto" };
const dividerStyle = { color: "#3c78d8", fontSize: 18 };

const Detail = ({ articleDetail }) => {
  const mdRef = useRef();
  const router = useRouter();
  const { theme } = SelfSelector({
    header: "theme",
  });
  const dispatch = useDispatch();
  const { tags = [] } = articleDetail || [];
  // hooks
  useEffect(() => {
    dispatch(changMainMoveRight(true));
    // 更新阅读量
    changeArticleReadingCount(articleDetail.article_id);
  }, [articleDetail.article_id, dispatch]);

  useEffect(() => {
    const HList = mdRef.current.querySelectorAll("h1,h2,h3,h4,h5");
    const AnchorArray = getNodeInfo(HList);
    // console.log(AnchorArray);
    dispatch(changeAnchorListAction(AnchorArray));
    //更改文章标题
  }, [dispatch]);

  return (
    <DetailWrapper homeFontColor={BlogTheme[theme].homeFontColor}>
      <Head>
        <title>{articleDetail.title}</title>
      </Head>
      <div className="detail_header">
        <div
          className="home"
          onClick={() => {
            router.back();
          }}
        >
          首页 &nbsp;
        </div>
        <div> / {articleDetail.title}</div>
      </div>
      <div className="detail_all_info">
        <div className="detail_title">{articleDetail.title}</div>
        <div className="detail_info">
          <div className="time">
            <div></div>
            <ScheduleOutlined
              style={{ color: "lightseagreen", fontSize: "16px" }}
            />
            {articleDetail.createTime}
          </div>
          <div className="readingCount">
            <RiseOutlined style={{ fontSize: "16px", color: "red" }} />
            {articleDetail.readingCount}
          </div>
          <div className="commentCount">
            <MessageOutlined style={{ fontSize: "16px" }} />
            {articleDetail.commentCount}
          </div>
        </div>
        {/* 文章图片 */}
        {articleDetail.faceUrl && (
          <div className="detail_image">
            <img
              src={articleDetail.faceUrl}
              alt="兴趣使然的前端技术小站"
              title="兴趣使然的前端技术小站"
            />
          </div>
        )}
        {/* 视频介绍 */}
        {articleDetail.audioUrl && (
          <div className="audio">
            <Divider orientation="center" style={{ color: "#3c78d8" }}>
              视频介绍
            </Divider>
            <video controls="controls" src={articleDetail.audioUrl}></video>
          </div>
        )}
      </div>
      <Divider orientation="center" style={dividerStyle}>
        description
      </Divider>
      <div style={{ color: "#6B6A6A", padding: "10px" }}>
        {articleDetail.des}
      </div>

      <Divider orientation="center" style={dividerStyle}>
        正文
      </Divider>
      <div className="markdown-body" ref={mdRef}>
        <ReactMarkdown
          children={articleDetail.content}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
      <hr />
      <div className="article_tags">
        <div className="article_tags_container">
          <TagsOutlined style={{ fontSize: "23px", color: "#1890FF" }} />
          {tags.map((item) => {
            return (
              <span
                onClick={() => handleTagClick(item)}
                key={item.tag_id}
                className="tag_item"
                style={{ backgroundColor: item.tag_color }}
              >
                {item.tag_name}
              </span>
            );
          })}
        </div>
      </div>
      <Divider orientation="center" style={{ fontSize: "30px" }}>
        <Popover
          content={
            <div>
              <img alt="" style={payImgStyle} src={blogImgUrls.wepay} />
              <img alt="" style={payImgStyle} src={blogImgUrls.airpay} />
            </div>
          }
          title="打赏...谢谢老板！"
        >
          <RedEnvelopeOutlined
            style={{ color: "#ff5777", padding: "0 10px" }}
          />
        </Popover>
        <Popover
          content={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img alt="" src={blogImgUrls.qq} />
            </div>
          }
          title="我的QQ"
        >
          <QqOutlined style={{ color: "#1B92FF", padding: "0 10px" }} />
        </Popover>
        <Popover
          content={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img alt="" src={blogImgUrls.wechat} />
            </div>
          }
          title="我的微信"
        >
          <WechatOutlined style={{ color: "#1CD66C", padding: "0 10px" }} />
        </Popover>
      </Divider>
    </DetailWrapper>
  );
};

//网络请求
Detail.getInitialProps = async (context) => {
  const {
    query: { id },
  } = context;
  const res = await getArticleDetail(id);
  console.log(res?.data?.article);
  return {
    articleDetail: res?.data?.article,
  };
};

Detail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Detail;
