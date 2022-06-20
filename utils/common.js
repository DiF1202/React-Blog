import { useSelector, shallowEqual } from "react-redux";

//工具函数 用来获取redux里面的state
export function SelfSelector(obj) {
  return useSelector((state) => {
    const keys = Object.keys(obj);
    const result = Object.create(null);
    keys.forEach((key) => {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          result[item] = state.getIn([key, item]);
        });
      } else {
        result[value] = state.getIn([key, obj[key]]);
      }
    });
    return result;
  }, shallowEqual);
}

//获取时间
export function getCurrentFormatTime() {
  let startTime = new Date("2022-05-30"); // 开始时间
  let endTime = new Date(); // 结束时间
  let usedTime = endTime - startTime; // 相差的毫秒数
  let days = Math.floor(usedTime / (24 * 3600 * 1000)); // 计算出天数
  let leavel = usedTime % (24 * 3600 * 1000); // 计算天数后剩余的时间
  let hours = Math.floor(leavel / (3600 * 1000)); // 计算剩余的小时数
  let leavel2 = leavel % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
  let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数
  let level3 = leavel2 - minutes * 60 * 1000;
  let seconds = Math.floor(level3 / 1000);
  return days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
}

//防抖
export function debounce(fn, delay) {
  let timer = null;
  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
  return _debounce;
}

//获取锚点函数 用于目录跟随
export function getNodeInfo(nodeList) {
  let AnchorArray = [];
  for (let i = 0; i < nodeList.length; i++) {
    AnchorArray.push({
      href: `#${nodeList[i]?.children[0]?.id}`,
      title: nodeList[i]?.innerText,
      level: nodeList[i]?.localName.substr(1),
      children: [],
    });
  }
  let finalArray = [];
  let item = AnchorArray[0];

  if (AnchorArray.length >= 2) {
    if (AnchorArray[1].level < AnchorArray[0].level) {
      finalArray.push(AnchorArray[0]);
    } else {
      finalArray.push(item);
    }
  }
  for (let i = 1; i < AnchorArray.length; i++) {
    if (item.level < AnchorArray[i].level) {
      item.children.push(AnchorArray[i]);
    } else {
      item = AnchorArray[i];
      finalArray.push(item);
    }
  }
  return finalArray;
}
