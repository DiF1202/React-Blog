import React from "react";
// import "../style/components/header.module.less";
import "../style/components/test.css";
import { Row, Col, Menu, Icon } from "antd";

const Header = () => {
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col>
          <span className="header-logo">DiFei Blog</span>
          <span className="header-txt">万水千山，你愿意陪我一起看吗</span>
        </Col>
        <Col>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Icon type="home" />
              首页
            </Menu.Item>
            <Menu.Item key="video">
              <Icon type="edit" />
              实战
            </Menu.Item>
            <Menu.Item key="life">
              <Icon type="smile" />
              生活
            </Menu.Item>
            <Menu.Item key="history">
              <Icon type="file-add" />
              记录
            </Menu.Item>
            <Menu.Item key="message">
              <Icon type="wechat" />
              互动
            </Menu.Item>
            <Menu.Item key="blog">
              <Icon type="solution" />
              关于
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
