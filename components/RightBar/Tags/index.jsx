import React, { memo } from "react";
import { SelfSelector } from "@/utils/common";
import { AntCloudOutlined } from "@ant-design/icons";
import { TagsWrap } from "./style";
import { BlogTheme } from "@/utils/constant";
import TagItem from "./TagItem";

const Tags = () => {
  const { tags, theme } = SelfSelector({
    right: "tags",
    header: "theme",
  });
  return (
    <TagsWrap>
      <div className="title">
        <span style={{ color: BlogTheme[theme].homeFontColor }}>标签云</span>
        <AntCloudOutlined style={{ color: BlogTheme[theme].homeFontColor }} />
      </div>
      <div className="tag_list">
        <TagItem
          tag={{ tag_id: -1, tag_name: "全部", tag_color: "#5F3DFF" }}
        ></TagItem>
        {tags?.map((item) => {
          return <TagItem key={item.tag_id} tag={item}></TagItem>;
        })}
      </div>
    </TagsWrap>
  );
};

export default memo(Tags);
