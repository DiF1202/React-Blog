"use strict";

var withPlugins = require("next-compose-plugins");

var nextWithLess = require("next-with-less"); // 转换 antd ,用来支持 按需引入组件css


var withTM = require("next-transpile-modules")(["antd"]);
/** @type {import('next').NextConfig} */


var nextConfig = {
  reactStrictMode: true,
  compiler: {//只要有.babelrc文件，就会切回babel编译，这里swc就无效了。
    // styledComponents: true,
  },
  redirects: function redirects() {
    return regeneratorRuntime.async(function redirects$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", [{
              source: "/",
              destination: "/home",
              permanent: true
            }]);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var plugins = [[nextWithLess, {
  // 配置 less变量, 可以看到页面中的按钮都变成了红色
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {// "@primary-color": "red",
      }
    }
  },
  javascriptEnabled: true
}], [withTM]];
module.exports = withPlugins(plugins, nextConfig);