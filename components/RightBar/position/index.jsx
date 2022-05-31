import React, { memo, useState, useEffect } from "react";
import { PositionWrap } from "./style";
import { HeartOutlined } from "@ant-design/icons";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/utils/constant";

const Position = () => {
  const [message, setMessage] = useState("如果太晚了,就看看电视,早点休息吧~~");
  //暂时无法放进react-redux 等待个人页面开发完后加入
  // let { theme, position, ip, time } = SelfSelector({
  //   about: ["position", "ip", "time"],
  //   header: "theme",
  // });
  const { theme } = SelfSelector({
    header: ["theme"],
  });
  return (
    <PositionWrap homeFontColor={BlogTheme[theme].homeFontColor}>
      <div className="your_words" style={{ color: "rgb(32, 157, 123)" }}>
        相见恨晚
        <HeartOutlined />
      </div>
      <div className="YourInfo">
        <div>
          您的Ip： <span>xxxxxxx</span>
        </div>
        <div>
          您的地址： <span>xxxxxxx</span>
        </div>
        <div>
          <span> 您好，现在是：</span>
          <span>time。</span>
          <span> {message}</span>
        </div>
      </div>
    </PositionWrap>
  );
};

export default memo(Position);
