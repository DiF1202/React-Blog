import React, { useState, useEffect, memo, Suspense } from "react";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer";
import BackTop from "../BackTop/index";
import { LayoutWrap } from "./indexStyle";
import RightBar from "../RightBar/index";
import { useDispatch } from "react-redux";
import { SelfSelector, debounce } from "@/utils/common";
import { changMainMoveRight, changeScreenWidth } from "./store/actionCreators";
import Script from "next/script";
import Loading from "../Loading";
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { loading, moveRight, showLogin, screenWidth } = SelfSelector({
    layout: ["loading", "moveRight", "showLogin", "screenWidth"],
  });

  useEffect(() => {
    const resize = debounce(function (e) {
      const width = e.target.innerWidth;
      dispatch(changeScreenWidth(width));
    }, 100);
    window.addEventListener("resize", resize);
    //改变右边的动画
    dispatch(changMainMoveRight(true));
    return (_) => {
      window.removeEventListener("resize", resize);
    };
  }, [dispatch]);

  return (
    <>
      {/* 背景 */}
      <Script
        src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/ribbon.js"
        strategy="lazyOnload"
      />
      {/* 回到顶部 */}
      <BackTop></BackTop>
      {/* 头组件 */}
      <Header></Header>
      {/* 首页主题两栏布局 */}
      <Suspense fallback={<Loading />}>
        <LayoutWrap className="flex-wrap" moveRight={moveRight}>
          <div className="left-content">{children}</div>
          <div className="right-bar">
            <RightBar />
          </div>
        </LayoutWrap>
      </Suspense>
      {/* Footer组件 */}
      <Footer></Footer>
    </>
  );
};

export default memo(Layout);
