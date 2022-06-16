import React, { memo, useEffect, useState, useRef, useCallback } from "react";
import { Timeline } from "antd";
import { TimeWrap } from "./style";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/utils/constant";
import LineItem from "./LineItem";

const TimeLine = ({ timeLineList }) => {
  //获取主题
  const { theme } = SelfSelector({
    header: "theme",
  });
  //设置一个数组 控制每个时间线对象 是否展示
  const [isShowArray, setIsShowArray] = useState([]);

  //强制刷新 为什么要强刷？先放着
  const [, updateState] = useState();
  const io = useRef();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    io.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          //记录数组是否可见
          isShowArray[entry.target.className.split("timeItem")[1]] = true;
          //更新数组
          setIsShowArray(isShowArray);
          forceUpdate();
          io.current.unobserve(entry.target);
        }
      });
    });
  }, [forceUpdate, isShowArray]);

  return (
    <TimeWrap>
      <Timeline pending="博主努力学习中..." mode="alternate">
        {timeLineList?.map((item, index) => {
          return (
            <Timeline.Item
              style={{ marginLeft: "5px" }}
              key={item.id}
              color={item.color}
            >
              <LineItem
                io={io}
                isShow={isShowArray[index]}
                index={index}
                tyle={{ marginLeft: "5px" }}
                item={item}
                homeFontColor={BlogTheme[theme].homeFontColor}
              ></LineItem>
            </Timeline.Item>
          );
        })}
        <Timeline.Item>
          <div>
            <div
              className="content"
              style={{ fontWeight: 600, color: BlogTheme[theme].homeFontColor }}
            >
              谢谢你看到了这里!
            </div>
            <div
              className="time"
              style={{ color: "blue", borderBottom: `1px dashed black` }}
            >
              走不到时间的尽头。。。
            </div>
          </div>
        </Timeline.Item>
      </Timeline>
    </TimeWrap>
  );
};

export default memo(TimeLine);
