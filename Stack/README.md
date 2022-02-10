# algorithm-learning
算法学习，永无止境，本仓库主要记录自己学习算法的一些笔记。内容主要参考《学习JavaScript数据结构与算法》第三版
# 基本的数据结构 - 栈
## 栈的概念特点
> 1. 有序集合；
> 2. 遵循后进先出（LIFO）原则；
> 3. 新元素靠近栈顶，旧元素靠近栈底。
## 栈常用的方法
> 1. push(element): 添加新元素到栈顶
> 2. pop(): 移除栈顶元素，同时返回被移除的元素
> 3. peek(): 只查看栈顶元素，不修改栈的元素
> 4. isEmpty(): 判空，栈为空返回true,反之false
> 5. clear(): 清空栈
> 6. size(): 返回栈的大小
> 7. toString(): toString方法
## 代码实现
### 基于数组实现栈的常用方法
```javascript
function Stack(){
    // 栈中的属性
    this.items = [];
    // 栈相关的操作

    // 1. 压栈
    Stack.prototype.push = function (element){
        this.items.push(element);
    }
    // 移除栈顶元素，同时返回被移除的元素
    Stack.prototype.pop = function (){
        return this.items.pop();
    }
    // 3. 查看栈顶元素
    Stack.prototype.peek = function (){
        return this.items[this.items.length -1];
    }
    // 4. 判断栈是否为空
    Stack.prototype.isEmpty = function (){
        return this.items.length == 0;
    }
    // 5. 清空栈
    Stack.prototype.clear = function (){
        this.items = [];
    }
    // 6. 获取栈的大小
    Stack.prototype.size = function (){
        return this.items.length;
    }
    // 7. toString方法
    Stack.prototype.toString = function (){
        var resultString = "";
        for(var i = 0;i < this.items.length;i++){
            resultString += this.items[i] + "";
        }
        return resultString;
    }
}

let stack = new Stack();
stack.push(10);
stack.push(13);
stack.push(12);
stack.push(15);
console.log(stack);

```
