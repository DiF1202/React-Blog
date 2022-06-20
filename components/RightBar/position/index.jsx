import React, { memo, useState, useEffect } from "react";
import { PositionWrap } from "./style";
import { HeartOutlined } from "@ant-design/icons";
import { SelfSelector } from "@/utils/common";
import { getTextByCurrentTime } from "@/utils/format";
import { BlogTheme } from "@/utils/constant";

const Position = () => {
  const [message, setMessage] = useState("如果太晚了,就看看电视,早点休息吧~~");
  const [time, setTime] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()).toLocaleString());
    }, 1000);
    return (_) => {
      clearInterval(timer);
    };
  }, []);

  const { theme, position, ip } = SelfSelector({
    header: ["theme"],
    about: ["position", "ip"],
  });
  return (
    <PositionWrap homeFontColor={BlogTheme[theme].homeFontColor}>
      <div className="your_words" style={{ color: "rgb(32, 157, 123)" }}>
        相见恨晚
        <HeartOutlined />
      </div>
      <div className="YourInfo">
        <div>
          您的Ip： <span>{ip}</span>
        </div>
        <div>
          您的地址： <span>{position}</span>
        </div>
        <div>
          <span> 您好，现在是：</span>
          <span>{time}</span>
          <span> {getTextByCurrentTime(time)}</span>
        </div>
      </div>
    </PositionWrap>
  );
};

export default memo(Position);
