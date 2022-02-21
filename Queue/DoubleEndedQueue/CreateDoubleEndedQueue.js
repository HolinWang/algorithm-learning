/*
 * @Author: Holin Wang
 * @Date: 2022-02-21 20:52:44
 * @LastEditors: Holin Wang
 * @LastEditTime: 2022-02-21 21:02:02
 * @Description: 
 */
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
    // 测试
    // var queue = new DoubleEndedQueue();
    // queue.addFront(2);
    // queue.addFront(1);
    // queue.addFront(3);
    // queue.addBack(5);
    // queue.addBack(4);
    // queue.addBack(6);
    // alert(queue);
    // queue.removeFront();
    // alert(queue);
    // queue.removeBack();
    // alert(queue);

    // alert(queue.toString());