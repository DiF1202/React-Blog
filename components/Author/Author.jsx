/* eslint-disable react/jsx-no-comment-textnodes */
import React, { memo, useState, useEffect } from "react";
import { Avatar, Divider } from "antd";
import { AuthorWrap } from "./style";
import { BlogTheme, BlogThemeKeys, blogImgUrls } from "../../utils/constant";
import Image from "next/image";
import {
  EnvironmentOutlined,
  MailOutlined,
  QqOutlined,
  WechatOutlined,
} from "@ant-design/icons";
const Author = () => {
  //state
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("");
  const [theme, setTheme] = useState("normal"); //设置主题

  useEffect(() => {
    setColor(BlogTheme[theme].homeFontColor);
  }, [theme]);    

  //hooks
  const handleMouseOver = () => {
    if (rotate === 0) {
      setRotate(360);
      setTheme("darknormal");
    } else if (rotate === 360) {
      setRotate(0);
      setTheme("normal");
    }
  };

  return (
    <AuthorWrap
      ThemeColor={BlogTheme[theme].ThemeColor}
      homeFontColor={color}
      rotate={rotate}
    >
      <div className="fixed_info">
        <img
          onMouseOver={() => handleMouseOver()}
          className="my_avat"
          src={rotate === 0 ? blogImgUrls.avator1 : blogImgUrls.avator2}
          alt=""
        />
        <div className="person_name">DiF1202</div>
        <div className="school_info">
          <div>福大机械</div>
          <div>2019-2023 学生</div>
        </div>
        <div className="person_info">
          <div>
            <EnvironmentOutlined /> 福建 - 福州
          </div>
          <div>前端: React + Next.js + Antd</div>
          <div>后台: React + Vite + Antd</div>
          <div>后端: Node + Mysql</div>
          <div>
            <MailOutlined /> 346274777@qq.com
          </div>
          <div className="dubai">有很多想去的地方</div>
          <Divider orientation="center" style={{ color }}>
            社交帐号
          </Divider>
          <div className="concat_ways">
            <div>
              <QqOutlined style={{ fontSize: "30px", color }} />
              <img src={blogImgUrls.qq} alt="QQ" />
            </div>
            <div>
              <WechatOutlined style={{ fontSize: "30px", color }} />
              <img src={blogImgUrls.wechat} alt="微信" />
            </div>
          </div>
        </div>
      </div>
    </AuthorWrap>
  );
};

export default Author;
