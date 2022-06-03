import React, { useState, useEffect } from "react";
import { AboutWrap } from "./style";
import Layout from "../../components/Layout/layout";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "../../components/Layout/store/actionCreators";
import PersonInfo from "../../components/AboutMe/PersonInfo";
import Clock from "../../components/AboutMe/Clock";
export default function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changMainMoveRight(true));
  }, [dispatch]);
  return (
    <AboutWrap>
      <Head>
        <title>Di迪的自我介绍</title>
      </Head>
      <PersonInfo></PersonInfo>
      <h1 className="aboutMe">时间不等人</h1>
      <Clock></Clock>
    </AboutWrap>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
