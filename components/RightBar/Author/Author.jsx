/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import { Avatar, Divider } from "antd";
import { AuthorWrap } from "./style";
import { BlogTheme, BlogThemeKeys, blogImgUrls } from "../../../utils/constant";
import { SelfSelector } from "../../../utils/common";
import { useDispatch } from "react-redux";
import { changeBlogTheme } from "../../Header/store/actions";
import {
  EnvironmentOutlined,
  MailOutlined,
  QqOutlined,
  WechatOutlined,
} from "@ant-design/icons";
const Author = () => {
  //state
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("white");
  const { theme } = SelfSelector({
    header: ["theme"],
  });
  const dispatch = useDispatch();

  //hooks
  useEffect(() => {
    setColor(BlogTheme[theme].homeFontColor);
  }, [theme]);

  //methods
  const handleMouseOver = () => {
    if (rotate === 0) {
      setRotate(360);
    } else if (rotate === 360) {
      setRotate(0);
    }
    dispatch(
      changeBlogTheme(
        theme === BlogThemeKeys.DARKNORMAL
          ? BlogThemeKeys.NORMAL
          : BlogThemeKeys.DARKNORMAL
      )
    );
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
          <div>福州大学</div>
          <div>2019-2023 </div>
        </div>
        <div className="person_info">
          <div>
            <EnvironmentOutlined /> 福建 - 福州
          </div>
          <div>
            <EnvironmentOutlined /> 哔哩哔哩 / 网易
          </div>
          <div>前端: React + Next.js + Antd</div>
          <div>后台: React + Vite + Antd</div>
          <div>后端: Express + Mysql</div>
          <div>
            <MailOutlined /> 346274777@qq.com
          </div>
          <div className="dubai">真的好想留在大厂</div>
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
