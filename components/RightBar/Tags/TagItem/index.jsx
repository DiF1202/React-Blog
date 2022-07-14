import React, { memo } from "react";
import { TagItemWrap } from "./style";
import { Tag } from "antd";
import { useRouter } from "next/router";
const TagItem = (props) => {
  const { tag } = props;
  const router = useRouter();
  const handleTagClick = () => {
    router.push({
      pathname: "/",
      query: {
        tag_id: tag.tag_id,
      },
    });
  };
  return (
    <TagItemWrap color={tag.tag_color}>
      <Tag color={tag.tag_color} onClick={() => handleTagClick()}>
        {tag.tag_name}
      </Tag>
    </TagItemWrap>
  );
};
export default memo(TagItem);
