/*
 * @Author: Holin Wang
 * @Date: 2022-03-16 21:10:45
 * @LastEditors: Holin Wang
 * @LastEditTime: 2022-03-16 21:11:48
 * @Description: 双向链表的实现
 */
function DoublyLinkedList() {
  // 内部类
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
  // 属性
  this.head = null;
  this.tail = null;
  this.length = 0;


  // 定义相关的操作方法
  // 1. append方法
  DoublyLinkedList.prototype.append = function (element) {
    // 1. 根据元素创建节点
    let newNode = new Node(element);
    // 2. 判断列表是否为空
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    // 3. length +1
    this.length += 1;
  }
  // 2. 将字符串转换为字符串形式
  // 2.1 toString方法
  DoublyLinkedList.prototype.toString = function () {
    return this.backswordString();
  }

  // 2.2 forwardString方法
  DoublyLinkedList.prototype.forwardString = function () {
    // 1. 定义变量
    let current = this.tail;
    let resString = "";

    // 2. 循环遍历
    while (current) {
      resString += current.data + " ";
      current = current.prev;
    }
    return resString;
  }

  // 2.3 backswordString方法
  DoublyLinkedList.prototype.backswordString = function () {
    // 1. 定义变量
    let current = this.head;
    let resString = "";

    // 2. 循环遍历
    while (current) {
      resString += current.data + " ";
      current = current.next;
    }
    return resString;
  }

  // 3. insert方法
  DoublyLinkedList.prototype.insert = function (position, element) {
    // 1.判断越界的问题
    if (position < 0 || position > this.length) {
      return false;
    }
    // 2. 创建新的节点
    let newNode = new Node(element);
    // 3. 判断插入位置
    if (position === 0) {                     // 插入首位
      // 链表为空
      if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
    } else if (position === this.length) {    // 插入尾部
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {                                // 插入中间
      // 定义属性
      let current = this.head;
      let index = 0;
      while (index++ < position) {
        current = current.next;
      }
      newNode.next = current;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.prev = newNode;
    }
    // 4. length + 1
    this.length += 1;
  }

  // 4. get 获取对应位置的元素
  DoublyLinkedList.prototype.get = function (position) {
    // 1.判断越界的问题
    if (position < 0 || position >= this.length) {
      return false;
    }
    let index = 0;
    let current = this.head;
    // 提高查询效率
    if ((this.length / 2) > position) {
      while (index++ < position) {
        current = current.next;
      }
    } else {
      current = this.tail;
      index = this.length - 1;
      while (index-- > position) {
        current = current.prev;
      }
    }
    return current.data;
  }

  // 5. get 获取对应位置的元素
  DoublyLinkedList.prototype.indexOf = function (data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  }

  // 6. update 获取对应位置的元素
  DoublyLinkedList.prototype.update = function (position, newData) {
    // 1.判断越界的问题
    if (position < 0 || position >= this.length) {
      return false;
    }
    let index = 0;
    let current = this.head;
    // 提高查询效率
    if ((this.length / 2) > position) {
      while (index++ < position) {
        current = current.next;
      }
    } else {
      current = this.tail;
      index = this.length - 1;
      while (index-- > position) {
        current = current.prev;
      }
    }
    current.data = newData;
  }

  // 7. removeAt 根据对应位置删除元素
  DoublyLinkedList.prototype.removeAt = function (position) {
    // 1.判断越界的问题
    if (position < 0 || position > this.length) {
      return false;
    }
    // 2. 判断删除的位置
    let current = this.head;
    if (this.length > 0 && this.length < 2) {   //只有一个节点
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {                     //删除第一个
        this.head = this.head.next;
        this.head.prev = null;
      } else if (position === this.length - 1) { // 删除最后一个 
        current = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {                                   //删除中间的
        let index = 0;
        // 提高查询效率
        if (this.length / 2 > position) {
          while (index++ < position) {
            current = current.next;
          }
        } else {
          let index = this.length - 1;
          current = this.tail;
          while (index-- > position) {
            current = current.prev;
          }
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    this.length -= 1;
    // 返回被删除的节点
    return current.data;
  }
  // 8. remove 删除元素
  DoublyLinkedList.prototype.remove = function (data) {
    // 1. 获取下标
    let index = this.indexOf(data);
    return this.removeAt(index);
  }
}
let doublyLinkedList = new DoublyLinkedList();
// append test
doublyLinkedList.append("aaa");
doublyLinkedList.append("bbb");
doublyLinkedList.append("ccc");

doublyLinkedList.insert(0, 'a');
doublyLinkedList.insert(2, 'b');
doublyLinkedList.insert(4, 'd');

doublyLinkedList.update(1, "h")
console.log(doublyLinkedList.toString());
doublyLinkedList.removeAt(2);
doublyLinkedList.remove("bbb")
console.log(doublyLinkedList.toString());
// console.log(doublyLinkedList.get(3));
// console.log(doublyLinkedList.toString());
// console.log(doublyLinkedList.indexOf("a"));
// console.log(doublyLinkedList.forwardString());

// console.log(doublyLinkedList.backswordString());