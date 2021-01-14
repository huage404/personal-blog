---
title: 可以将 JS 导出为 excel 表格的工具 
date: 2021-01-14
categories:
 - tool
tags: 
 - tools
sidebar: auto
sidebarDepth: 3
---

## 功能：JS 转 excel 文件下载

## 安装
```shell script
npm install js-export-excel
or
yarn add js-export-excel
```


## 示例
```javascript
// 导入文件
const ExportJsonExcel = require("blogs/tools/js-tools/js-export-excel");
 
var option = {};
 
option.fileName = "excel";
 
option.datas = [
  {
    sheetData: [
      { one: "一行一列", two: "一行二列" },
      { one: "二行一列", two: "二行二列" },
    ],
    sheetName: "sheet",
    sheetFilter: ["two", "one"],
    sheetHeader: ["第一列", "第二列"],
    columnWidths: [20, 20],
  },
  {
    sheetData: [
      { one: "一行一列", two: "一行二列" },
      { one: "二行一列", two: "二行二列" },
    ],
  },
];
 
var toExcel = new ExportJsonExcel(option); //new
toExcel.saveExcel(); //保存
```


## 参数

 - fileName ：保存文件名
 - saveAsBlob ：导出文件流（默认 false ）
 - datas : 数据，是一个数组，数组的参数是对象，每个对象对应的是一个 sheet 页
 - sheetData ：数据源（必须），两种写法

 ```javascript
// 两种形式
// 第一种 object
[{one:'一行一列',two:'一行二列'},{one:'二行一列',two:'二行二列'}]
// 第二种 array
[['一行一列','一行二列'],['二行一列','二行二列']]
```

 - sheetName ： sheet 标签名
 - sheetFilter ：列过滤(只有在 data 为 object 下起作用)(可有可无)
 - sheetFilter ：可以控制列的展示顺序，并且如果声明 sheetFilter ，那么 sheetData 中没有在 sheetFilter 声明的字段数据，将不会被展示
 - columnWidths 列宽 (数组，非必须)
 - sheetHeader ：标题（ excel 的第一行数据，不会被 sheetFilter 影响）
