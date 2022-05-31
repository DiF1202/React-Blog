import { useSelector, shallowEqual } from "react-redux";

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
