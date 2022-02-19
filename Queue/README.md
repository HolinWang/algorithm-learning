<!--
 * @Author: Holin Wang
 * @Date: 2022-02-19 23:25:52
 * @LastEditors: Holin Wang
 * @LastEditTime: 2022-02-20 00:36:22
 * @Description: 
-->
# algorithm-learning
算法学习，永无止境，本仓库主要记录自己学习算法的一些笔记。内容主要参考《学习JavaScript数据结构与算法》第三版
# 基本的数据结构 - 队列
## 队列的概念特点
> 1. 有序集合；
> 2. 受限的线性结构；
> 2. 遵循先进先出（FIFO）原则；
> 3. 尾部添加（元素），首部删除（元素）。
## 队列常用的方法
> 1. enQueue(element): 添加新元素到队列尾部
> 2. deQueue(): 删除队列的第一项元素，并将其返回
> 3. peek(): 只查看队列的第一项元素
> 4. isEmpty(): 判空，队列为空返回true,反之false
> 5. clear(): 清空队列
> 6. size(): 返回队列的大小
> 7. toString(): toString方法
## 队列的实现
### 基于数组实现队列的常用方法
```javascript
function Queue(){
    // 属性
    this.items = [];
    // 方法
    // 1. 添加新元素到队列尾部
    Queue.prototype.enQueue = function(element){
        this.items.push(element);
    }
    // 2. 删除队列的第一项元素，并将其返回
    Queue.prototype.deQueue = function(){
        return this.items.shift();
    }
    // 3. 只查看队列的第一项元素
    Queue.prototype.peek = function(){
        return this.items[0];
    }
    // 4. 判空，队列为空返回true,反之false
    Queue.prototype.isEmpty = function(){
        return this.items.length === 0;
    }
    // 5. 清空队列
    Queue.prototype.clear = function(){
        return this.items = [];
    }
    // 6. 返回队列的大小
    Queue.prototype.size = function(){
        return this.items.length;
    }
    // 7. toString()方法
    Queue.prototype.toString = function(element){
        let resultString = "";
        for(let i = 0;i < this.items.length;i++){
            resultString += this.items[i]+"";
        }
        return resultString;
    }
}
// 使用队列 
// var queue = new Queue();
// queue.enQueue("abc");
// queue.enQueue("def");
// queue.enQueue("wer");
// alert(queue);
// //  删除前端元素
// queue.deQueue()
// alert(queue);
// queue.deQueue();
// alert(queue);
// alert(queue.front());
// alert(queue.isEmpty());
// alert(queue.size());
// alert(queue.toString());
```
## 队列的应用
击鼓传花游戏:
    例如将具体数目的人围成一圈，把花从第一个人开始传递，在每次数到2的时候，花在谁手里，谁就淘汰，直到剩余最后一个人，就是胜者。
```javascript
import {Queue} from "./CreateQueue.js";
/**
 * @param {*} list   数组 存储人
 * @param {*} num    指定数字
 */
const passGame = (list,num) => {
    // 1. 创建一个队列
    const queue = new Queue();
    // 2. 将所有的人添加到队列中
    if(list && list.length > 0){
        for(let i = 0;i < list.length;i++){
            queue.enQueue(list[i]);
        }
    }
    // 3. 开始数数，不等于num的时候，重新添加至队列末端；等于的时候，直接删除
    while(queue.size() > 1){
        // 3.1 num数字之前的人都需要重新添加至队列的末端
        for(let j = 0;j < num -1;j++){
            queue.enQueue(queue.deQueue());
        }
        // num对应的人直接删除
        queue.deQueue();
    }
    // 4. 获取最终的胜利者
    const lastWinner = queue.peek();
    return lastWinner;
}
// 测试
var arr = ["lily", "alert", "qwer", "why", "bili", "holin"];
console.log(passGame(arr, 2))

```