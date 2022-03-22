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
}

let doublyLinkedList = new DoublyLinkedList();
// append test
doublyLinkedList.append("aaa");
doublyLinkedList.append("bbb");
doublyLinkedList.append("ccc");
// console.log(doublyLinkedList);
doublyLinkedList.insert(0, 'a');
doublyLinkedList.insert(2, 'b');
doublyLinkedList.insert(4, 'd');
console.log(doublyLinkedList.toString());

// console.log(doublyLinkedList.forwardString());

// console.log(doublyLinkedList.backswordString());