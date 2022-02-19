/*
 * @Author: Holin Wang
 * @Date: 2022-02-19 23:25:52
 * @LastEditors: Holin Wang
 * @LastEditTime: 2022-02-20 00:31:55
 * @Description: 击鼓传花游戏
        例如有10个人围成一圈，把花从第一个人开始传递，在每次数到3的
        时候，花在谁手里，谁就淘汰，直到剩余最后一个人，就是胜者。
 */
import {Queue} from "./CreateQueue.js";

/**
 * @param {*} list   数组 存储人
 * @param {*} num    指定数字
 */
const passGame = (list,num) => {
    // 1. 创建一个队列
    const queue = new Queue();
    // 2. 将所有的人添加到队列中
    if(list && list.length > 0){
        for(let i = 0;i < list.length;i++){
            queue.enQueue(list[i]);
        }
    }
    // 3. 开始数数，不等于num的时候，重新添加至队列末端；等于的时候，直接删除
    while(queue.size() > 1){
        // 3.1 num数字之前的人都需要重新添加至队列的末端
        for(let j = 0;j < num -1;j++){
            queue.enQueue(queue.deQueue());
        }
        // num对应的人直接删除
        queue.deQueue();
    }
    // 4. 获取最终的胜利者
    const lastWinner = queue.peek();
    return lastWinner;
}
// 测试qwer
var arr = ["lily", "alert", "qwer", "why", "bili", "holin"];
console.log(passGame(arr, 2))