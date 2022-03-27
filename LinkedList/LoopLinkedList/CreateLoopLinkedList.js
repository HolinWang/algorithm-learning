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

    }


    if (position === 0) {

    }

    this.length += 1;
  }
}


const loopLinkedList = new LoopLinkedList();

loopLinkedList.append("aaa");
loopLinkedList.append("bbb");


console.log(loopLinkedList);