import React, { useState } from "react";
import Head from "next/head";
import { List } from "antd";
import { HomeMainWrap } from "../home/indexStyle";
import {
  CalendarOutlined,
  VideoCameraOutlined,
  FireOutlined,
} from "@ant-design/icons";
import Header from "../../components/Header/Header";
import RightBar from "../../components/RightBar";
import Footer from "../../components/Footer";
const Home = () => {
  const [mylist, setMylist] = useState([
    {
      title: "Di迪学不会前端怎么办?",
      context:
        "摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂",
    },
    {
      title: "Di迪学不会前端怎么办?>",
      context:
        "摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂",
    },
    {
      title: "Di迪学不会前端怎么办?",
      context:
        "摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂",
    },
    {
      title: "Di迪学不会前端怎么办?",
      context:
        "摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂摆烂",
    },
  ]);
  const [moveRight, setmoveRight] = useState("moveRight");
  return (
    <div>
      <Head>
        <title>Di迪的小站</title>
      </Head>
      {/* 头部组件 */}
      <Header></Header>
      {/* 首页主题两栏布局 */}
      <HomeMainWrap className="flex-wrap" moveRight={moveRight}>
        <div className="left-content">
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span>
                    <CalendarOutlined /> 2022-05-30
                  </span>
                  <span>
                    <VideoCameraOutlined /> 视频教程
                  </span>
                  <span>
                    <FireOutlined /> 5498人
                  </span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          ></List>
        </div>
        <div className="right-bar">
          <RightBar />
        </div>
      </HomeMainWrap>
      {/* Footer组件 */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
