// 先引入mockjs
import Mock from 'mockjs';
// 引入json数据格式,json数据格式，图片默认对外暴露
import banner from './banner.json'
import floor from './floor.json';

// mock数据 请求地址 请求数据
Mock.mock('/mock/banner',{code:200,data:banner});
Mock.mock('/mock/floor',{code:200,data:floor});
