# 价格登陆页

这是根据Figma设计稿生成的前端价格登陆页项目。

## 项目预览

该项目是一个价格展示页面，包含三种不同的套餐方案，并支持按月/按年付费切换。

## 技术栈

- React
- Styled Components

## 项目结构

```
src/
  ├── components/     # 组件目录
  │   ├── Header.js   # 页面头部组件
  │   ├── PricingHeader.js  # 价格标题组件
  │   ├── PricingCard.js    # 价格卡片组件
  │   └── PricingSection.js # 价格区块组件
  ├── App.js          # 应用主组件
  ├── index.js        # 入口文件
  └── index.css       # 全局样式
public/
  ├── images/         # 图片资源
  └── index.html      # HTML模板
```

## 安装和使用

1. 克隆项目
```bash
git clone git@github.com:XUXIKAI886/pricing-landing-page.git
cd pricing-landing-page
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm start
```

4. 构建生产版本
```bash
npm run build
```

## Figma设计稿

本项目基于Figma设计稿实现：[Pricing Landing Page](https://www.figma.com/design/NpCPZHPSPWTc8XfNAHXt2z/Pricing-Landing-Page--Community-?node-id=2-18&t=oSNKk50Qv7NmnPlK-4) 

## 修改作者
ccsh