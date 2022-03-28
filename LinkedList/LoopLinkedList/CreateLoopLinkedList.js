function LoopLinkedList() {
  // 内部节点类
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  // 属性
  this.head = null;
  this.length = 0;

  // 1.append方法
  LoopLinkedList.prototype.append = function (data) {
    // 1. 创建新节点
    const newNode = new Node(data);
    let current = this.head;
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      // 找到最后一个节点
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }

    this.length += 1;
    return true
  }

  // 2. insert方法
  LoopLinkedList.prototype.insert = function (position, data) {
    // 1. 越界判断
    if (position < 0 || position > this.length) {
      return false;
    }
    // 2. 创建新节点
    const newNode = new Node(data);

    if (this.length === 0) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let index = 0;
        let previous = null;
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = newNode;
        newNode.next = current;
      }
    }
    this.length += 1;
  }

  // 2.removeAt方法
  LoopLinkedList.prototype.removeAt = function (position) {
    // 1. 越界判断
    if (position < 0 || position >= this.length) {
      return false;
    }
    let current = this.head;
    // 2. 判断删除的位置
    if (position === 0) {
      // 注意这里是循环链表，删除第一个之后，需要将最后那一个节点的next重新指向新的this.head
      while (current.next !== this.head) {
        current = current.next;
      }
      this.head = this.head.next;
      current.next = this.head;
    } else {
      let index = 0;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length -= 1;
  }
}

const loopLinkedList = new LoopLinkedList();

loopLinkedList.append("aaa");
loopLinkedList.append("bbb");
loopLinkedList.append("ccc");
loopLinkedList.append("ddd");
loopLinkedList.insert(1, "a0");
console.log(loopLinkedList);
// loopLinkedList.insert(1, "a3");
loopLinkedList.removeAt(4);
console.log(loopLinkedList);