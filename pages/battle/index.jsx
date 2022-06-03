import React, { useState, useEffect, useCallback, useRef } from "react";
import Layout from "../../components/Layout/layout";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "../../components/Layout/store/actionCreators";
import { SearchOutlined } from "@ant-design/icons";
import { BattleWrap } from "./style";
import { Input } from "antd";
import { productionList } from "@/utils/mock.js";
import ProductionItem from "../../components/ProcutionItem";
export default function Battle() {
  const dispatch = useDispatch();
  //设置一个数组 记录每个实战项目数组是否可见
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
          isShowArray[entry.target.className.split("battle")[1]] = true;
          //更新数组
          setIsShowArray(isShowArray);
          forceUpdate();
          io.current.unobserve(entry.target);
        }
      });
    });
  }, [forceUpdate, isShowArray]);

  //右边个人介绍动画控制
  useEffect(() => {
    dispatch(changMainMoveRight(true));
  }, [dispatch]);
  return (
    <BattleWrap>
      <Head>
        <title>Di迪的项目实战</title>
      </Head>
      <div className="home_content_header">
        <span className="info">
          实战与生活 <span> {productionList && productionList.length} </span> 篇
        </span>
        <Input
          style={{ width: 150, borderRadius: 5, color: "#7a7a7a" }}
          suffix={<SearchOutlined />}
        />
      </div>
      <div className="production_list">
        {productionList &&
          productionList.map((item, index) => {
            return (
              <ProductionItem
                io={io}
                isShow={isShowArray[index]}
                item={item}
                index={index}
                key={item.production_id}
              ></ProductionItem>
            );
          })}
      </div>
    </BattleWrap>
  );
}

Battle.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
