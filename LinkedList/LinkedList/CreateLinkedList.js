/*
 * @Author: Holin Wang
 * @Date: 2022-03-08 08:47:30
 * @LastEditors: Holin Wang
 * @LastEditTime: 2022-03-08 08:51:43
 * @Description: 单向链表的封装
 */
export function CreateLinkedList(){
    // 内部节点类
    function Node(data){
        this.data = data;
        this.next = null;
    }

    // 属性
    this.head = null; //链表的第一个节点
    this.length = 0;  //用来记录链表的长度
}