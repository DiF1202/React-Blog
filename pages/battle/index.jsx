import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../../components/Layout/layout';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { changMainMoveRight } from '../../components/Layout/store/actionCreators';
import { SearchOutlined } from '@ant-design/icons';
import { BattleWrap } from '../../styles/pages/battle';
import { Input } from 'antd';
import ProductionItem from '../../components/ProcutionItem';
import { getProductions } from '@/network/battle.js';
import { InterSectionLazyLoad } from '@/utils/common.js';

const Battle = ({ productionList }) => {
  const dispatch = useDispatch();
  //设置一个数组 记录每个实战项目数组是否可见
  const [isShowArray, setIsShowArray] = useState([]);

  useEffect(() => {
    InterSectionLazyLoad('production', entry => {
      isShowArray[entry.target.className.split('battle')[1]] = true;
      setIsShowArray([...isShowArray]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productionList]);

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
        <Input style={{ width: 150, borderRadius: 5, color: '#7a7a7a' }} suffix={<SearchOutlined />} />
      </div>
      <div className="production_list">
        {productionList?.map((item, index) => {
          return <ProductionItem isShow={isShowArray[index]} item={item} index={index} key={item.production_id}></ProductionItem>;
        })}
      </div>
    </BattleWrap>
  );
};

//网络请求
Battle.getInitialProps = async () => {
  const res = await getProductions();
  return {
    productionList: res?.data?.doc
  };
};

Battle.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Battle;
