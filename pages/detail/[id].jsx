/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/layout";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "../../components/Layout/store/actionCreators";
import { DetailWrapper } from "../../styles/pages/detail";
import { getArticleDetail } from "@/network/detail.js";
import { BlogTheme } from "@/utils/constant";
import { SelfSelector } from "@/utils/common";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
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

const dividerStyle = { color: "#3c78d8", fontSize: 18 };

const Detail = ({ articleDetail }) => {
  const router = useRouter();
  const { theme } = SelfSelector({
    header: "theme",
  });
  const dispatch = useDispatch();
  const { tags = [] } = articleDetail || [];
  // hooks
  useEffect(() => {
    dispatch(changMainMoveRight(true));
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
      <div className="markdown-body">
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
