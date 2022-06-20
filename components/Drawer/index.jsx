import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DrawerWrap } from "./style";
import { Drawer } from "antd";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/utils/constant";
import { changeLeftVisibleAction } from "@/redux/reducers/drawer/actionCreators";
import RightBar from "../RightBar";

const LeftDrawer = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("black");
  const { visible, theme } = SelfSelector({
    drawer: "visible",
    header: "theme",
  });
  const Close = () => {
    dispatch(changeLeftVisibleAction(false));
  };
  useEffect(() => {
    setColor(BlogTheme[theme].ThemeColor);
  }, [theme]);
  return (
    <Drawer
      title="Basic Drawer"
      placement={"left"}
      key={"left"}
      drawerStyle={{ padding: 0, margin: 0 }}
      headerStyle={{ display: "none" }}
      bodyStyle={{ padding: "20px 0 0 0" }}
      width={256}
      onClose={Close}
      visible={visible}
      closable={false}
    >
      <DrawerWrap
        ThemeColor={color}
        HoverColor={BlogTheme[theme].HoverColor}
        homeFontColor={BlogTheme[theme].homeFontColor}
      >
        <RightBar></RightBar>
      </DrawerWrap>
    </Drawer>
  );
};

export default memo(LeftDrawer);
