
function DoublyLoopLinkedList() {
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


  //1. append方法
  DoublyLoopLinkedList.prototype.append = function (element) {
    // 1. 创建节点
    let newNode = new Node(element);
    // 2. 判断是否尾空
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
      newNode.next = this.head;
    }

    this.length += 1;
  }

  // 2. insert方法 考虑三个位置 头、尾以及中间
  DoublyLoopLinkedList.prototype.insert = function (position, element) {
    // 1.判断越界的问题
    if (position < 0 || position > this.length) {
      return false;
    }
    if (position === 0) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = this.tail;
        newNode.prev = this.head;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        newNode.prev = this.tail;
      }
    }

  }
}


const doublyLoopLinkedList = new DoublyLoopLinkedList();
doublyLoopLinkedList.append("a");
doublyLoopLinkedList.append("b");
doublyLoopLinkedList.append("c");
console.log(doublyLoopLinkedList);