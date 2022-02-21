/*
 * @Author: Holin Wang
 * @Date: 2022-02-21 20:52:44
 * @LastEditors: Holin Wang
 * @LastEditTime: 2022-02-21 21:34:19
 * @Description: 回文检查
 *      将字符串反向排列并检查它和原字符串是否相同，如果相同，则是一个回文。
 */
import { DoubleEndedQueue } from './CreateDoubleEndedQueue.js';
const Palindrome = (params) => {
    // 1. 创建一个双向队列
    const doubleEndedQueue = new DoubleEndedQueue();
    // 2. 首先需要判断参数时候合法
    if(params === undefined || params === null || (params !== null && params.length === 0)){
        return false;
    }
    // 3. 统一大小写，去除空格
    const lowerStr = params.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar,lastChar;
    // 4. 将字符串添中每一个字符按顺序添加到队列中
    for(let i = 0;i < lowerStr.length;i++){
        doubleEndedQueue.addBack(lowerStr.charAt(i))
    }
    while(doubleEndedQueue.size() > 1 && isEqual){
        firstChar = doubleEndedQueue.removeFront();
        lastChar = doubleEndedQueue.removeBack();
        if(firstChar !== lastChar){
            isEqual = false;
        }
    }
    console.log(isEqual);
    return isEqual;
}

Palindrome("Step on no pets");
