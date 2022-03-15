<!--
 * @Author: Holin Wang
 * @Date: 2022-03-04 16:41:48
 * @LastEditors: Holin Wang
 * @LastEditTime: 2022-03-15 21:24:02
 * @Description: 双向链表的实现及应用
-->
# algorithm-learning
算法学习，永无止境，本仓库主要记录自己学习算法的一些笔记。内容主要参考《学习JavaScript数据结构与算法》第三版
# 基本的数据结构 - 队列
## 双向链表的概念特点
> 1. 既可以从头遍历到尾，又可以从尾遍历到头；
> 2. 链表相连的过程是双向的（每个节点既指向下一个引用，同时指向前一个引用）；
> 3. 一个节点既有向前连接的引用，也有一个向后连接的引用；
> 4. 可以使用一个head和一个tail分别指向头部和尾部的节点；
> 5. 每个节点由三部分组成： 前一个节点的指针`prev`;保存的元素`item`;后一个节点的指针`next`；
> 6. 双向链表的第一个节点的prev为null；
> 7. 双向链表的最后的节点的next为null。
##  双向链表常用的方法
> 1. enQueue(element): 添加新元素到队列尾部
> 2. deQueue(): 删除队列的第一项元素，并将其返回
> 3. peek(): 只查看队列的第一项元素
> 4. isEmpty(): 判空，队列为空返回true,反之false
> 5. clear(): 清空队列
> 6. size(): 返回队列的大小
> 7. toString(): toString方法
##  双向链表的实现
```javascript

```