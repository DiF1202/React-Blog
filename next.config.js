const withPlugins = require("next-compose-plugins");
const nextWithLess = require("next-with-less");

// 转换 antd ,用来支持 按需引入组件css
const withTM = require("next-transpile-modules")(["antd"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    //只要有.babelrc文件，就会切回babel编译，这里swc就无效了。
    // styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

const plugins = [
  [
    nextWithLess,
    {
      // 配置 less变量, 可以看到页面中的按钮都变成了红色
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {
            // "@primary-color": "red",
          },
        },
      },
      javascriptEnabled: true,
    },
  ],
  [withTM],
];

module.exports = withPlugins(plugins, nextConfig);
