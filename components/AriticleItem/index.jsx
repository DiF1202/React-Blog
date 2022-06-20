import React, { memo, useRef, useEffect } from "react";
import { HomeArticleItem } from "./style";
import {
  ScheduleOutlined,
  MessageOutlined,
  FireOutlined,
  ToTopOutlined,
} from "@ant-design/icons";
import { handleTimeStamp } from "@/utils/format";
import { getPreviewImgUrl } from "@/utils/format";
import { useRouter } from "next/router";

const ArticleItem = (props) => {
  const router = useRouter();
  const ArticleRef = useRef();
  const { item, index, homeFontColor, isShow, io } = props;
  useEffect(() => {
    if (io.current) {
      io.current.observe(ArticleRef.current);
    }
  }, [io]);
  return (
    <HomeArticleItem
      ref={ArticleRef}
      homeFontColor={homeFontColor}
      isShow={isShow}
      className={["articeItem", `homeItem${index}`].join(" ")}
    >
      {/* 下面这一行是右上角的实在小图标 */}
      {item.isBattle === 1 && <div className="bat">实战</div>}
      <div
        onClick={() => {
          router.push({
            pathname: `detail/${item.article_id}`,
          });
        }}
      >
        <h2 className="title">{item.title}</h2>
        <div className="article_info">
          {item.isTop === 1 && (
            <div className="page_top">
              <ToTopOutlined></ToTopOutlined> 本页置顶
            </div>
          )}
          <div className="time">
            <ScheduleOutlined
              style={{ color: "lightseagreen", fontSize: "16px" }}
            />
            {handleTimeStamp(item.createTime)}
            {/* {item.createTime} */}
          </div>

          {/* 渲染tag */}
          {item?.tags?.map((tag) => {
            return (
              <span
                key={tag.tag_id}
                className="tag_item"
                style={{ backgroundColor: tag.tag_color }}
              >
                {tag.tag_name}
              </span>
            );
          })}
          {/* 阅读次数  */}
          <div className="readingCount">
            <FireOutlined style={{ fontSize: "16px", color: "red" }} />{" "}
            {item.readingCount}
          </div>
          {/* 评论数 */}
          <div className="commentCount">
            <MessageOutlined style={{ fontSize: "16px" }} /> {item.commentCount}
          </div>
        </div>
        {/* 图片 */}
        {item.faceUrl && (
          <div className="image_box flex-wrap">
            <img
              src={
                isShow
                  ? getPreviewImgUrl(item.faceUrl, { q: 20 })
                  : "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb75fc5b61441db0de8f3caeba20275e8107d270811b329-QsLrXX_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622022562&t=c327623c796967e46b8c053abd1c37f3"
              }
              alt=""
            />
          </div>
        )}
        <div className="des">{item.des}</div>
        <div className="view_all"></div>
      </div>
    </HomeArticleItem>
  );
};

export default memo(ArticleItem);
