import React, { useState, useEffect } from "react";
import { HeaderWrap } from "../Header/style";
import { Row, Col, Menu, Button } from "antd";
import { BlogTheme, BlogThemeKeys, blogImgUrls } from "../../utils/constant";

import {
  HomeOutlined,
  VideoCameraOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const items = [
  { label: "首页", key: "home", icon: <HomeOutlined /> }, // 菜单项务必填写 key
  { label: "视频", key: "video", icon: <VideoCameraOutlined /> },
  { label: "生活", key: "life", icon: <SmileOutlined /> },
  { label: "生活", key: "life", icon: <SmileOutlined /> },
  { label: "生活", key: "life", icon: <SmileOutlined /> },
];
const Header = () => {
  //state
  const [color, setColor] = useState("");
  const [theme, setTheme] = useState("darknormal"); //设置主题
  return (
    // <HeaderWrap>
    //   <Row type="flex" justify="center">
    //     <Col xs={24} sm={24} md={10} lg={15} xl={12}>
    //       <span className="header-logo">Di迪</span>
    //       <span className="header-txt">不会写代码的吉他手不是好程序员</span>
    //     </Col>

    //     <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
    //       <Menu mode="horizontal" items={items}></Menu>
    //     </Col>
    //   </Row>
    // </HeaderWrap>
    <HeaderWrap
      className="flex-wrap"
      ThemeColor={BlogTheme[theme].ThemeColor}
      HoverColor={BlogTheme[theme].HoverColor}
      fontColor={BlogTheme[theme].fontColor}
    >
      <div className="header-box">
        <div className="blog-info">
          <div
            className="blog-title"
            title="Di迪后台管理系统"
            // onClick={() => window.open("https://www.dingshiyi.top/control")}
          >
            DeFei
            <span role="img" aria-label="图片">
              🌲
            </span>
          </div>
          <div className="some-sentence">大佬们,求求你们带带弟弟吧</div>
        </div>
        <div className="header-right">
          <div className="tab-list">
            {/* <Menu mode="horizontal" items={items}></Menu> */}
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
