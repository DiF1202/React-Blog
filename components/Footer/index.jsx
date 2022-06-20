/* eslint-disable react/no-unescaped-entities */
import React, { memo, useEffect, useState } from "react";
import { FooterWrapper } from "./style";
import { getCurrentFormatTime } from "@/utils/common";
const Footer = () => {
  const [runTime, setRunTime] = useState("00天:00时:00分:00秒");
  useEffect(() => {
    const timer = setInterval(() => {
      setRunTime(getCurrentFormatTime());
    }, 1000);
    return (_) => {
      clearInterval(timer);
    };
  }, []);
  return (
    <FooterWrapper className="flex-column-wrap">
      <div>本站由Next.js+React+Node+Antd 联合驱动</div>
      <div className="flex-wrap">
        <span className="left">COS对象存储</span>
        <a href="#">点我回到顶部QAQ</a>
        <span className="right">托管于腾讯云</span>
      </div>
      <div className="flex-wrap">
        <span>本站已苟且偷生 </span>
        <span className="time">{runTime}</span>
      </div>
      <div className="about_smile">
        <div>DiFei's Blog</div> <div className="smile"> ｸﾞｯ!(๑•̀ㅂ•́)و✧</div>
      </div>
    </FooterWrapper>
  );
};

export default memo(Footer);
