import React, { useState } from "react";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer";
import { LayoutWrap } from "./indexStyle";
import RightBar from "../RightBar/index";
const Layout = ({ children }) => {
  // 先放一下 后面放进redux
  const [moveRight, setmoveRight] = useState("moveRight");

  return (
    <>
      {/* 头组件 */}
      <Header></Header>
      {/* 首页主题两栏布局 */}
      <LayoutWrap className="flex-wrap" moveRight={moveRight}>
        <div className="left-content">{children}</div>
        <div className="right-bar">
          <RightBar />
        </div>
      </LayoutWrap>
      {/* Footer组件 */}
      <Footer></Footer>
    </>
  );
};

export default Layout;
