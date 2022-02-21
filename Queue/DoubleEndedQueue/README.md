<!--
 * @Author: Holin Wang
 * @Date: 2022-02-21 20:51:37
 * @LastEditors: Holin Wang
 * @LastEditTime: 2022-02-21 21:34:40
 * @Description: 
-->
# algorithm-learning
算法学习，永无止境，本仓库主要记录自己学习算法的一些笔记。内容主要参考《学习JavaScript数据结构与算法》第三版
# 基本的数据结构 - 双端队列
## 队列的概念特点
> 1. 有序集合；
> 2. 受限的线性结构；
> 2. 可以从前、后端同时添加、删除元素。
## 双端队列常用的方法
> 1. addFront(element): 添加新元素到队列前端
> 2. addBack(element): 添加新元素到队列后端
> 2. peekFront():查看前端元素
> 3. peekBack(): 查看后端元素
> 4. removeFront(): 删除前端元素
> 5. removeBack(): 删除后端元素
> 6. isEmpty(): 判断是否为空
> 7. size(): 获取队列大小
> 8. toString():toString方法
## 双端队列的实现
### 基于数组实现队列的常用方法
```javascript
export function DoubleEndedQueue(){
    //属性
    this.items = [];
    //方法
    // 从前端添加元素
    DoubleEndedQueue.prototype.addFront = function (element) {
      this.items.unshift(element);
    }
    // 从后端添加元素
    DoubleEndedQueue.prototype.addBack = function (element) {
      this.items.push(element);
    }
    // 查看前端元素
    DoubleEndedQueue.prototype.peekFront = function (element) {
      return this.items[0];
    }
    // 查看后端元素
    DoubleEndedQueue.prototype.peekBack = function (element) {
      return this.items[items.length - 1];
    }
    // 删除前端元素
    DoubleEndedQueue.prototype.removeFront = function (element) {
      return this.items.shift();
    }
    // 删除后端元素
    DoubleEndedQueue.prototype.removeBack = function (element) {
      return this.items.pop();
    }
    // 判断队列是否为空
    DoubleEndedQueue.prototype.isEmpty = function (element) {
      return this.items.length === 0;
    }
    // 获取队列大小
    DoubleEndedQueue.prototype.size = function (element) {
      return this.items.length;
    }
    // toString方法
    DoubleEndedQueue.prototype.toString = function (element) {
      var resultString = "";
      for (var i = 0; i < this.items.length; i++) {
        resultString += this.items[i] + "";
      }
      return resultString;
    }
}
```
## 双端队列的应用
回文检查器：回文是正反都能读通的单词、词组、数或一系列字符的序列，例如 madam或者racecar.
```javascript
import { DoubleEndedQueue } from './CreateDoubleEndedQueue.js';
const Palindrome = (params) => {
    // 1. 创建一个双向队列
    const doubleEndedQueue = new DoubleEndedQueue();
    // 2. 首先需要判断参数时候合法
    if(params === undefined || params === null || (params !== null && params.length === 0)){
        return false;
    }
    // 3. 统一大小写，去除空格
    const lowerStr = params.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar,lastChar;
    // 4. 将字符串添中每一个字符按顺序添加到队列中
    for(let i = 0;i < lowerStr.length;i++){
        doubleEndedQueue.addBack(lowerStr.charAt(i))
    }
    while(doubleEndedQueue.size() > 1 && isEqual){
        firstChar = doubleEndedQueue.removeFront();
        lastChar = doubleEndedQueue.removeBack();
        if(firstChar !== lastChar){
            isEqual = false;
        }
    }
    console.log(isEqual);
    return isEqual;
}

Palindrome("Step on no pets");
```