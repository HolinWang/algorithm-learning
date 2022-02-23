<!--
 * @Author: Holin Wang
 * @Date: 2022-02-21 20:51:37
 * @LastEditors: Holin Wang
 * @LastEditTime: 2022-02-23 22:50:17
 * @Description: 
-->
# algorithm-learning
算法学习，永无止境，本仓库主要记录自己学习算法的一些笔记。内容主要参考《学习JavaScript数据结构与算法》第三版
# 基本的数据结构 - 优先级队列
## 优先级队列的概念特点
> 1. 每个元素不再只是一个数据，而是包含数据的优先级；
> 2. 在添加方式中，根据优先级放入正确的的位置；
> 3. 例如登机的顺序、急诊科等等生活中的案例。
## 优先级队列常用的方法
> 1. enPriorityQueue (elementm,priority): 添加新元素
> 2. deQueue (element,priority):  删除前端元素,并将其返回
> 3. peekFront():查看前端元素
> 4. isEmpty(): 判断是否为空
> 5. size(): 获取队列大小
> 6. toString():toString方法
## 优先级队列的实现
> 1. 封装一个新的构造函数，将元素和优先级放在一起
> 2. 添加元素时，将新插入的元素的优先级和队列中已经存在的元素的优先级进行比较，目的是获得正确的位置
### 基于数组实现先级队列的常用方法
```javascript
/*
import { Queue } from './../CreateQueue';
import { PriorityQueue } from './CreatePriorityQueue';
 * @Author: Holin Wang
 * @Date: 2022-02-23 20:52:27
 * @LastEditors: Holin Wang
 * @LastEditTime: 2022-02-23 22:49:52
 * @Description: 封装一个优先级队列
 */
export function PriorityQueue() {
  // 重新创建一个内部类
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  // 封装属性
  this.items = [];
  // 插入方法
  PriorityQueue.prototype.enPriorityQueue = function (element, priority) {
    // 1. 创建QueueElement对象
    let queueElement = new QueueElement(element, priority);
    // 2. 判断队列是否为空
    if (this.items.length === 0) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        // 如果插入的元素的优先级比较，注意这里的逻辑时priority越小优先级越高,元素越靠前
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  };
  // 2. 删除前端元素,并将其返回
  PriorityQueue.prototype.deQueue = function () {
    return this.items.shift();
  };
  // 3. 查看前端元素
  PriorityQueue.prototype.front = function () {
    return this.items[0];
  };
  // 4. 判断队列是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  // 5. 获取队列大小
  PriorityQueue.prototype.size = function () {
    return this.items.length;
  };
  // 6. toString方法
  PriorityQueue.prototype.toString = function () {
    var resultString = "";
    for (var i = 0; i < this.items.length; i++) {
      resultString +=
        this.items[i].element + "-" + this.items[i].priority + "; ";
    }
    return resultString;
  };
}
// 测试代码
let priorityQueue = new PriorityQueue();

priorityQueue.enQueue("abc", 5);
priorityQueue.enQueue("asd", 2);
priorityQueue.enQueue("awd", 6);
priorityQueue.enQueue("acx", 7);
priorityQueue.enQueue("azd", 1);
priorityQueue.enQueue("aaz", 4);

console.log(priorityQueue.toString());

```