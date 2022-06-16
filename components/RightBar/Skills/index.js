import React, { memo } from "react";
import { Progress } from "antd";
import { SkillWrap } from "./style";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/utils/constant";

const Skills = () => {
  const { theme, skills } = SelfSelector({
    header: "theme",
    about: ["skills"],
  });

  return (
    <SkillWrap>
      <div className="hot" style={{ color: BlogTheme[theme].homeFontColor }}>
        博主 Skills
      </div>
      <div className="skill_list">
        {skills?.map((item) => {
          return (
            <div key={item.id} className="skill_item">
              <span style={{ color: BlogTheme[theme].homeFontColor }}>
                {item.skill_name}
              </span>
              <Progress
                style={{ width: "70%" }}
                status="active"
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={item.percent}
              />
            </div>
          );
        })}
      </div>
    </SkillWrap>
  );
};

export default memo(Skills);
