import React, { memo, useRef, useEffect } from "react";
import { TimeItemWrap } from "./style";
const LineItem = (props) => {
  const { item, index, isShow, io } = props;
    const TimeItemRef = useRef();
      useEffect(() => {
        // console.log(io);
        if (io.current) {
          io.current.observe(TimeItemRef.current);
        }
      }, [io]);
  return (
    <TimeItemWrap
      ref={TimeItemRef}
      className={["shy-timeline", `timeItem${index}`].join(" ")}
      isShow={isShow}
    >
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: item.content }}
      ></div>
      <div
        className="time"
        style={{ color: item.color, borderBottom: `1px dashed ${item.color}` }}
      >
        {item.time}
      </div>
    </TimeItemWrap>
  );
};

export default LineItem;
