import React, { memo, useRef } from 'react';
import { TimeItemWrap } from './style';
const LineItem = props => {
  const { item, index, isShow, io } = props;
  const TimeItemRef = useRef();

  return (
    <TimeItemWrap ref={TimeItemRef} className={['shy-timeline', `timeItem${index}`].join(' ')} isShow={isShow}>
      <div className="content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
      <div className="time" style={{ color: item.color, borderBottom: `1px dashed ${item.color}` }}>
        {item.time}
      </div>
    </TimeItemWrap>
  );
};

export default memo(LineItem);
