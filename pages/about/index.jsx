/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from "react";
import { AboutWrap } from "../../styles/pages/about";
import Layout from "../../components/Layout/layout";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "../../components/Layout/store/actionCreators";
import PersonInfo from "../../components/AboutMe/PersonInfo";
import Clock from "../../components/AboutMe/Clock";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { SelfSelector } from "@/utils/common";
import { getSkillsAction } from "@/redux/reducers/about/actionCreators";
import { getAbout } from "@/network/about";

const About = ({ markdown }) => {
  const { skills } = SelfSelector({
    about: ["skills"],
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changMainMoveRight(true));
    if (skills?.length === 0) dispatch(getSkillsAction());
  }, [dispatch, skills?.length]);
  return (
    <AboutWrap>
      <Head>
        <title>Di迪的自我介绍</title>
      </Head>
      <PersonInfo></PersonInfo>
      <h1 className="aboutMe">时间不等人</h1>
      <Clock></Clock>
      <div className="markdown-body" style={{ width: "100%" }}>
        <ReactMarkdown children={markdown} rehypePlugins={[rehypeRaw]} />
      </div>
    </AboutWrap>
  );
};

//网络请求
About.getInitialProps = async () => {
  const res = await getAbout();
  return {
    markdown: res?.data?.row?.content,
  };
};

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
