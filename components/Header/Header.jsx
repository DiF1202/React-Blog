import React, { useState, useEffect, memo } from "react";
import { HeaderWrap } from "../Header/style";
import { BlogTheme, getHeaderRenderIndexByWidth } from "../../utils/constant";
import { useRouter } from "next/router";
import { SelfSelector } from "../../utils/common";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "../Layout/store/actionCreators";
import {
  HomeOutlined,
  BarChartOutlined,
  EditOutlined,
  WechatOutlined,
  UserOutlined,
} from "@ant-design/icons";

const tabList = [
  { label: "首页", key: "home", icon: <HomeOutlined />, link: "/home" }, // 菜单项务必填写 key
  { label: "实战", key: "battle", icon: <EditOutlined />, link: "/battle" },
  { label: "归档", key: "life", icon: <BarChartOutlined />, link: "/life" },
  {
    label: "互动",
    key: "interact",
    icon: <WechatOutlined />,
    link: "/interact",
  },
  { label: "关于", key: "about", icon: <UserOutlined />, link: "/about" },
];

const Header = () => {
  //state
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [renderIndex, setRenderIndex] = useState(5);
  const dispatch = useDispatch();
  const {
    isHidden = false,
    theme,
    screenWidth,
  } = SelfSelector({
    header: ["isHidden", "theme"],
    layout: ["screenWidth"],
  });
  //hooks
  useEffect(() => {
    setRenderIndex(getHeaderRenderIndexByWidth(screenWidth, tabList));
  }, [screenWidth]);

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    });
  }, []);
  return (
    <HeaderWrap
      className="flex-wrap"
      isHidden={isHidden}
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
            {tabList.slice(0, renderIndex).map((item, index) => {
              return (
                <div className="tab-item" key={item.key}>
                  <div
                    className={[
                      "nav-link",
                      index === currentIndex ? "tab-active" : "",
                    ].join(" ")}
                    onClick={() => {
                      dispatch(changMainMoveRight(false));
                      setCurrentIndex(index);
                      router.push(item.link);
                    }}
                  >
                    <span className="tab-item-icon">{item.icon}</span>
                    <span className="tab-item-name">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default memo(Header);
