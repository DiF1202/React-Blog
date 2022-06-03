import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/layout";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "../../components/Layout/store/actionCreators";
import { LifeWrap } from "./style";
import dynamic from "next/dynamic";
import TimeLine from "../../components/TimeLine";

export default function Life() {
  const MusicPlayer = dynamic(import("../../components/MusicPlayer"), {
    ssr: false,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changMainMoveRight(true));
  }, [dispatch]);
  return (
    <LifeWrap>
      <Head>
        <title>Di迪的成长记录</title>
      </Head>
      <div className="music">
        <p>我喜欢听的歌不多</p>
        <p style={{ textAlign: "center" }}>歌曲库里只有40多首</p>
        <p style={{ textAlign: "right" }}>我想把我喜欢的分享出来</p>
      </div>
      <MusicPlayer></MusicPlayer>
      <TimeLine></TimeLine>
    </LifeWrap>
  );
}

Life.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
