export function Queue(){

    // 属性
    this.items = [];
    // 方法
    // 1. 添加新元素到队列尾部
    Queue.prototype.enQueue = function(element){
        this.items.push(element);
    }
    // 2. 删除队列的第一项元素，并将其返回
    Queue.prototype.deQueue = function(){
        return this.items.shift();
    }
    // 3. 只查看队列的第一项元素
    Queue.prototype.peek = function(){
        return this.items[0];
    }
    // 4. 判空，队列为空返回true,反之false
    Queue.prototype.isEmpty = function(){
        return this.items.length === 0;
    }
    // 5. 清空队列
    Queue.prototype.clear = function(){
        return this.items = [];
    }
    // 6. 返回队列的大小
    Queue.prototype.size = function(){
        return this.items.length;
    }
    // 7. toString()方法
    Queue.prototype.toString = function(element){
        let resultString = "";
        for(let i = 0;i < this.items.length;i++){
            resultString += this.items[i]+"";
        }
        return resultString;
    }

}

// 使用队列 
        // var queue = new Queue();
        // queue.enQueue("abc");
        // queue.enQueue("def");
        // queue.enQueue("wer");
        // alert(queue);

        // //  删除前端元素
        // queue.deQueue()
        // alert(queue);
        // queue.deQueue();
        // alert(queue);

        // alert(queue.front());
        // alert(queue.isEmpty());
        // alert(queue.size());
        // alert(queue.toString());