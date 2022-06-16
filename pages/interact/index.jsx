import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/layout";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "../../components/Layout/store/actionCreators";
import { InteractWrap } from "../../styles/pages/interact";
import { getFriendLinks } from "@/network/interact.js";
import FrendsLinks from "../../components/Friends/links";
import { Button, Input, message, Switch } from "antd";
import { BlogTheme } from "@/utils/constant";
import { SelfSelector } from "@/utils/common";
const Iteract = ({ friends }) => {
  //state
  const [friendTitle, setFriendTitle] = useState("");
  const [avaUrl, setavaUrl] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  //是否发送邮箱
  const [type, setType] = useState(false);

  const { theme } = SelfSelector({
    header: "theme",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changMainMoveRight(true));
  }, [dispatch]);
  return (
    <InteractWrap>
      <Head>
        <title>About</title>
      </Head>
      <div className="center_wrap">
        <h1 className="link_title">友情链接</h1>
        <p className="link_title">(顺序随机,不分先后)</p>
        <hr className="parting-line" />
        <FrendsLinks friends={friends}></FrendsLinks>
        <h2 className="link_title">欢迎各位大佬交换友链~~~</h2>
        <div className="apply_link">
          <Input
            value={friendTitle}
            className="input"
            onChange={(e) => setFriendTitle(e.target.value)}
            size="large"
            placeholder="大佬的网站名字"
          />
          <Input
            value={url}
            className="input"
            onChange={(e) => setUrl(e.target.value)}
            size="large"
            placeholder="大佬的网站地址(以https,http开头)"
          />
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input"
            size="large"
            placeholder="对于网站的描述(或者网站的主要内容)"
          />
          <Input
            value={avaUrl}
            className="input"
            onChange={(e) => setavaUrl(e.target.value)}
            size="large"
            placeholder="网站的logo(以https,http开头)"
          />
          <Input
            value={email}
            size="large"
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="QQ邮箱以'@'结尾,用于友链审核结果通知"
          />
        </div>
        <Button
          type="primary"
          onClick={() => {
            console.log("申请友链");
          }}
        >
          申请友链
        </Button>
        <div className="tip">
          <div
            style={{ color: BlogTheme[theme].homeFontColor, fontSize: "20px" }}
          >
            本站格式
          </div>
          <div>标题:Di的小站</div>
          <div>地址:https://www.xxxx.com</div>
          <div>描述:大佬们求求你们,带带弟弟吧</div>
          <div>Logo:https://xxxxx.jpg</div>
          <div>
            提示:申请提交后若无其它原因将在24小时内审核，如超过时间还未通过，请私信我。
          </div>
        </div>
      </div>
      <div className="input_and_submit">
        <hr className="parting-line" />
        <div className="dsy_tip">
          赶快来留言吖,博主会经常光顾本站
          <span style={{ color: "#ec5328" }}>(支持markdown语法)</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgb(32, 157, 123)",
            alignItems: "center",
            fontSize: "14px",
            margin: "4px 0",
          }}
        >
          <span>随便对博主说点什么吧❤</span>
          <span className="flex-wrap">
            <span>QQ邮箱提醒</span>{" "}
            <Switch
              onChange={(e) => {
                console.log("开启邮箱提醒");
              }}
              checkedChildren="开启"
              unCheckedChildren="关闭"
            ></Switch>
          </span>
        </div>
      </div>
    </InteractWrap>
  );
};

//网络请求
Iteract.getInitialProps = async () => {
  const res = await getFriendLinks();
  return {
    friends: res?.data?.row,
  };
};

Iteract.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Iteract;
