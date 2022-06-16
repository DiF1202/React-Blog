import React, { memo } from "react";
import { TagItemWrap } from "./style";
import { Tag } from "antd";
const TagItem = (props) => {
  const { tag } = props;
  return (
    <TagItemWrap color={tag.tag_color}>
      <Tag color={tag.tag_color} onClick={() => {}}>
        {tag.tag_name}
      </Tag>
    </TagItemWrap>
  );
};
export default memo(TagItem);
