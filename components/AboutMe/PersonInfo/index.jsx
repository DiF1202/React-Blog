import React, { memo } from "react";
import { PersonWrap } from "./style";
import { ManOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/utils/constant";
const PersonInfo = () => {
  const { theme } = SelfSelector({ header: "theme" });
  return (
    <PersonWrap homeFontColor={BlogTheme[theme].homeFontColor}>
      <div className="top"></div>
      <div className="Info">
        <div className="avat">
          <img
            style={{ width: "100px" }}
            src="https://difei-1305004956.cos.ap-shanghai.myqcloud.com/%E5%8D%9A%E5%AE%A2%E5%9B%BE%E5%BA%93/Snipaste_2022-06-14_03-15-00.jpg?imageView2/1/w/100/q/100"
            alt=""
          />
        </div>
        <div className="info_right">
          <div
            className="name"
            style={{ color: BlogTheme[theme].homeFontColor, fontWeight: 600 }}
          >
            DiFei
          </div>
          <div className="sex" style={{ fontSize: "15px" }}>
            <span>
              <EnvironmentOutlined style={{ color: "#00CD90" }} />
              福建福州
            </span>
            <span>
              {" "}
              男<ManOutlined style={{ color: "#019FCF" }} />
            </span>
          </div>
          <div className="content">
            Hi,我叫何迪斐,为了练习学到的东西,做了一个小站,初来乍到,多有不足,请谅解！
          </div>
        </div>
      </div>
    </PersonWrap>
  );
};

export default memo(PersonInfo);
