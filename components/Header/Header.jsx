import React, { useState, useEffect, memo } from "react";
import { HeaderWrap } from "../Header/style";
import { BlogTheme, getHeaderRenderIndexByWidth } from "../../utils/constant";
import { useRouter } from "next/router";
import { SelfSelector } from "../../utils/common";
import { useDispatch } from "react-redux";
import {
  changMainMoveRight,
  changeLoginPanelShow,
  changeUserName,
} from "../Layout/store/actionCreators";
import { changeLeftVisibleAction } from "@/redux/reducers/drawer/actionCreators";
import {
  HomeOutlined,
  BarChartOutlined,
  EditOutlined,
  WechatOutlined,
  UserOutlined,
  QqOutlined,
  CaretDownOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Menu, Dropdown, message } from "antd";

const routerMap = {
  "/home": 0,
  "/battle": 1,
  "/life": 2,
  "/interact": 3,
  "/about": 4,
};

const Header = () => {
  //state
  const router = useRouter();
  const { pathname } = router;
  const [currentIndex, setCurrentIndex] = useState(routerMap[pathname]);
  const [renderIndex, setRenderIndex] = useState(5);
  const dispatch = useDispatch();
  const {
    isHidden = false,
    theme,
    screenWidth,
    visible,
    username,
  } = SelfSelector({
    header: ["isHidden", "theme"],
    layout: ["screenWidth", "username"],
    drawer: "visible",
  });
  //hooks
  useEffect(() => {
    setRenderIndex(getHeaderRenderIndexByWidth(screenWidth, tabList));
    console.log(renderIndex);
  }, [screenWidth]);

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    });
  }, []);
  useEffect(() => {
    setCurrentIndex(routerMap[pathname]);
  }, [pathname]);
  // methods
  const showLogin = () => {
    dispatch(changeLoginPanelShow(true));
  };
  // 退出登录
  const loginOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    dispatch(changeUserName(null));
    message.success("成功退出");
  };
  const tabList = [
    {
      title: "首页",
      key: "home",
      icon: <HomeOutlined />,
      link: "/home",
      label: <Link href="/home">首页</Link>,
    }, // 菜单项务必填写 key
    {
      title: "实战",
      key: "battle",
      icon: <EditOutlined />,
      link: "/battle",
      label: <Link href="/battle">实战</Link>,
    },
    {
      title: "归档",
      key: "life",
      icon: <BarChartOutlined />,
      link: "/life",
      label: <Link href="/life">归档</Link>,
    },
    {
      title: "互动",
      key: "interact",
      icon: <WechatOutlined />,
      link: "/interact",
      label: <Link href="/interact">互动</Link>,
    },
    {
      title: "关于",
      key: "about",
      icon: <UserOutlined />,
      link: "/about",
      label: <Link href="/about">关于</Link>,
    },
    {
      title: username ? "退出登录" : "邮箱登录",
      key: "login",
      icon: <QqOutlined />,
      label: username ? (
        <span onClick={loginOut}>退出登录</span>
      ) : (
        <span onClick={showLogin}>登录</span>
      ),
    },
  ];
  return (
    <HeaderWrap
      className="flex-wrap"
      isHidden={isHidden}
      ThemeColor={BlogTheme[theme].ThemeColor}
      HoverColor={BlogTheme[theme].HoverColor}
      fontColor={BlogTheme[theme].fontColor}
    >
      <div className="header-box">
        <div
          className="left-menu"
          onClick={() => dispatch(changeLeftVisibleAction(!visible))}
        >
          <MenuFoldOutlined />
        </div>
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
            {tabList.slice(0, renderIndex).map((item, index) => {
              return (
                <div className="tab-item" key={item.key}>
                  <div
                    className={[
                      "nav-link",
                      index === currentIndex ? "tab-active" : "",
                    ].join(" ")}
                    onClick={() => {
                      // router.push(item.link);
                      dispatch(changMainMoveRight(false));
                      // setCurrentIndex(index);
                    }}
                  >
                    {item.key !== "login" ? (
                      <Link href={`${item.link}`}>
                        <div>
                          <span className="tab-item-icon">{item.icon}</span>
                          <span className="tab-item-name">{item.title}</span>
                        </div>
                      </Link>
                    ) : (
                      <div onClick={username ? loginOut : showLogin}>
                        <span className="tab-item-icon">{item.icon}</span>
                        <span className="tab-item-name">{item.title}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {renderIndex !== 6 ? (
              <Dropdown overlay={<Menu items={tabList.slice(renderIndex)} />}>
                <a
                  className="ant-dropdown-link"
                  style={{ color: "white", fontSize: "13px" }}
                  href="@"
                  onClick={(e) => e.preventDefault()}
                >
                  <CaretDownOutlined />
                </a>
              </Dropdown>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default memo(Header);
