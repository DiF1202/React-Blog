import React, { memo } from "react";
import { FriendItemList } from "./style";
import FriendItem from "../linkItem";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/utils/constant";
export default memo(function FriendLink(props) {
  const { friends } = props;
  const { theme } = SelfSelector({
    header: "theme",
  });
  return (
    <FriendItemList>
      {friends?.map((friend, index) => {
        return (
          <FriendItem
            friend={friend}
            homeFontColor={BlogTheme[theme].homeFontColor}
            key={friend.id}
            index={index}
          ></FriendItem>
        );
      })}
    </FriendItemList>
  );
});
