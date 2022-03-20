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
    // 在尾部追加数据
    DoublyLinkedList.prototype.append = function (element) {
        // 1. 根据元素创建节点
        let newNode = new Node(element);
        // 2. 判断列表是否为空
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        // 3. length +1
        this.length += 1;
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append("aaa");
doublyLinkedList.append("bbb");
doublyLinkedList.append("ccc");
console.log(doublyLinkedList);