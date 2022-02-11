/* 
    将十进制转换为指定进制
*/
import {Stack} from "./CreateStack.js";
function dec2bin(num,baseSystem){
    // 1. 定义栈对象
    const stack = new Stack();
    // 2. 循环操作
    while(num > 0){
        //2.1 将余数存储到栈中 
        stack.push(num % baseSystem);
        // 2.2 将整除的结果，作为下一次运行的数字
        num = Math.floor(num /baseSystem);
    }
    // 3. 从从栈中取出0和1
    let binaryString = "";
    while(!stack.isEmpty()){
        binaryString+= stack.pop();
    }
    return binaryString;
}
console.log(dec2bin(10,2));