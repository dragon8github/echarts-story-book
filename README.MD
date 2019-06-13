# 📊  echarts-story-book

https://storybook.js.org/docs/guides/guide-vue/

https://storybook.js.org/docs/configurations/standalone-options/

https://storybook.js.org/docs/configurations/custom-webpack-config/

```bash
$ npm install

$ npm run start
```

## 这个脚手架怎么来的？

Step 1 : 先根据官方教程安装基础脚手架.

```bash
# 脚手架
$ npx -p @storybook/cli sb init --type vue

# 插件
$ cnpm i -D @storybook/addons @storybook/addon-actions @storybook/addon-knobs @storybook/addon-notes

# 运行
$ npm run storybook
```

Step 2 : 根据官方示例，学习基本的操作.

Step 3 : 根据 [guide-vue](https://storybook.js.org/docs/guides/guide-vue/) 大幅度修改了项目结构.

Step 4 : 添加了 webpack.config.js （其实是为了 resolve 配置的快捷路径而已）