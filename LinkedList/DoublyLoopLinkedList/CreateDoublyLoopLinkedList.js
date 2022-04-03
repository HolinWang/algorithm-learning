
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
}


const doublyLoopLinkedList = new DoublyLoopLinkedList();
doublyLoopLinkedList.append("a");
doublyLoopLinkedList.append("b");
doublyLoopLinkedList.append("c");
console.log(doublyLoopLinkedList);