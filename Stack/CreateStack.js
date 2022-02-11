export function Stack(){
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

// let stack = new Stack();
// stack.push(10);
// stack.push(13);
// stack.push(12);
// stack.push(15);
// console.log(stack);