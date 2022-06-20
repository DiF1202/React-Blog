import React, { useState, useEffect, useRef, useCallback } from "react";
import Head from "next/head";
import { List, Input, Pagination } from "antd";
import { HomeMainWrap } from "../../styles/pages/home";
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
import ArticleItem from "../../components/AriticleItem";
import { getRightTagsAction } from "@/redux/reducers/rightbar/actionCreators.js";
import { getHomeArticles } from "@/network/home.js";
import { useRouter } from "next/router";
const limit = 8;

const Home = ({ articles, total, currentPage, tag_id }) => {
  //state
  const dispatch = useDispatch();
  const InputRef = useRef();
  const pageRef = useRef();
  const { theme } = SelfSelector({
    header: "theme",
  });
  const router = useRouter();
  //设置一个数组 记录每个实战项目数组是否可见
  const [isShowArray, setIsShowArray] = useState(new Array(limit));
  const [, updateState] = useState();
  const io = useRef();
  const forceUpdate = useCallback(() => updateState({}), []);
  //hooks
  useEffect(() => {
    io.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          //记录数组是否可见
          isShowArray[entry.target.className.split("homeItem")[1]] = true;
          //更新数组
          setIsShowArray(isShowArray);
          forceUpdate();
          io.current.unobserve(entry.target);
        }
      });
    });
  }, [forceUpdate, isShowArray]);
  useEffect(() => {
    dispatch(changMainMoveRight(true));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getRightTagsAction());
  }, [dispatch]);
  //换页按钮触发
  const pageChange = useCallback(
    (e) => {
      for (let i in isShowArray) {
        isShowArray[i] = false;
      }
      setIsShowArray(isShowArray);
      router.push({
        pathname: "/",
        query: {
          page: e,
          tag_id,
        },
      });
    },
    [isShowArray, router, tag_id]
  );
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
            <span> {total} </span> 篇
          </span>
          <Input
            ref={InputRef}
            // onChange={(title) => onSearch(title)}
            style={{ width: 150, borderRadius: 5, color: "#7a7a7a" }}
            suffix={<SearchOutlined />}
          />
        </div>
        <div className="home_article_list">
          {articles?.map((item, index) => {
            return (
              <div key={item.article_id}>
                <ArticleItem
                  index={index}
                  isShow={isShowArray[index]}
                  isShowArray={isShowArray}
                  homeFontColor={BlogTheme[theme].homeFontColor}
                  io={io}
                  item={item}
                ></ArticleItem>
              </div>
            );
          })}
        </div>
        <div ref={pageRef}>
          <Pagination
            className={"Pagination page"}
            // defaultCurrent={parseInt(currentPage)}
            total={total}
            responsive={true}
            current={currentPage}
            showQuickJumper
            pageSize={limit}
            onChange={(e) => pageChange(e)}
          />
        </div>
      </HomeMainWrap>
    </>
  );
};

//网络请求
Home.getInitialProps = async (context) => {
  const { query } = context;
  const page = query?.page !== undefined ? query?.page : 1;
  const tag_id = query?.tag_id !== undefined ? query?.tag_id : -1;
  const res = await getHomeArticles(limit, page, parseInt(tag_id));
  //处理置顶逻辑
  let articles = res?.data?.articles;
  if (articles?.length > 2) {
    for (let i = 0; i < articles.length; i++) {
      let item = articles[i];
      if (item.isTop === 1) {
        articles.splice(i, 1);
        articles.unshift(item);
      }
    }
  }
  return {
    total: res?.data?.total,
    currentPage: parseInt(page),
    articles,
    tag_id: parseInt(tag_id),
  };
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
