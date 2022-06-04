import React, { useState, useEffect, useRef, useCallback } from "react";
import Head from "next/head";
import { List, Input, Pagination } from "antd";
import { HomeMainWrap } from "../home/indexStyle";
import {
  CalendarOutlined,
  VideoCameraOutlined,
  FireOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Layout from "../../components/Layout/layout";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "../../components/Layout/store/actionCreators";
import { SelfSelector } from "@/utils/common";
import { debounce } from "@/utils/common";
import { BlogTheme } from "@/utils/constant";
import { articles } from "@/utils/mock"; //假数据
const Home = () => {
  //state
  const dispatch = useDispatch();
  const InputRef = useRef();
  const { theme } = SelfSelector({
    header: "theme",
  });

  //hooks
  useEffect(() => {
    dispatch(changMainMoveRight(true));
  }, [dispatch]);

  //留一下 搜索框要做防抖处理
  const onSearch = () => {};
  return (
    <>
      <Head>
        <title>Di迪的小站</title>
      </Head>
      <HomeMainWrap>
        <div className="home_content_header">
          <span className="info">
            博客日志
            <span> xxx </span> 篇
          </span>
          <Input
            ref={InputRef}
            // onChange={(title) => onSearch(title)}
            style={{ width: 150, borderRadius: 5, color: "#7a7a7a" }}
            suffix={<SearchOutlined />}
          />
        </div>
        <div className="home_article_list"></div>
      </HomeMainWrap>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
