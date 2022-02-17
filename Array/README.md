# algorithm-learning
算法学习，永无止境，本仓库主要记录自己学习算法的一些笔记。内容主要参考《学习JavaScript数据结构与算法》第三版
# 基本的数据结构 - 数组
## 数组的概念特点
>  1. 数组是最简单的数据结构
>  2. 数组是一个容器，可以存储`一组`相同类型 (JS中可以支持不同类型) 的数据
## 为什么要使用数组
>  1. 同类型数据的时候可以避免定义多个变量来存储数据
## 数组常用的方法
### 1. array.push()
#### `把一个元素增加到数组的末尾，返回的值为新数组的长度arry.length`
```javascript
let arry = [2, 9, 5]
let returnValue = arry.push(4)
console.log(returnValue) // 4
console.log(arry) // [2, 9, 5, 4]
```
### 2. array.pop()
#### `删除数组中最后一个元素，返回值为删除的元素，实例：`
```javascript
let arry = [2, 9, 5]
let returnValue = arry.pop()
console.log(returnValue) // 5
console.log(arry) // [2, 9]
```
### 3. array.unshift()
#### `与push方法类似，区别在于它是在数组的前面添加元素，返回值为新数组的长度arry.length`
```javascript
let arry = [2, 9, 5]
let returnValue = arry.unshift(4)
console.log(returnValue) // 4
console.log(arry) // [4, 2, 9, 5]
```
> `注意：`使用push和shift组合可以实现数据的`先进先出`，当然也可以使用unshift和pop
### 4. array.reverse()
#### `把数组反向排序，这里要注意它会改变原来的数组，而不会创建新的数组`
```javascript
let arry = [2, 9, 5]
arry.reverse()
console.log(arry) // [ 5, 9, 2 ]
```
### 5. array.sort()
#### `对数组进行排序，可接受参数，参数必须是函数，如果不没有参数 则是按照字符编码的顺序进行排序`
```javascript
let arry = [10, 5, 40, 1000]
console.log(arry.sort()) // [ 10, 1000, 40, 5 ]
```
#### `如果数字想要按大小排列，可写入参数：`
```javascript
let arr = [3, 1, 7]
console.log(arr.sort((a, b) => a - b)) // [ 1, 3, 7 ]
```
### 6. arry.forEach(item, index) 与 arry.map(item, index)
#### `两者都是对数组遍历，index表示数组索引，不是必须的参数，区别在于map方法会返回一个新的数组`
```javascript
let arry = [1, 5, 10, 15];
let arry1 = arry.map( x => x + 2);
console.log(arry1) // [ 3, 7, 12, 17 ]
```
### 7. arry.some()
#### `用于检测数组中的元素是否满足指定条件,参数也是函数；如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false`
```javascript
let arry = [5, 10, 15];
console.log(arry.every(item => item > 2)) // true
```
### 8. arry.filter()
#### `它创建一个新的数组，原数组不变，新数组中的元素是通过检查指定数组中符合条件的所有元素`
```javascript
let arry = [1, 5, 10, 15];
let arry1 = arry.filter(item => item > 5)
console.log(arry) // [ 1, 5, 10, 15 ]
console.log(arry1) // [ 10, 15 ]
```
### 9. arry.join()
#### `把数组元素合并为一个字符串，如果不带参数，默认用逗号分隔`
```javascript
let arry = [5, 10, 15];
console.log(arry.join()) // 5,10,15
// 添加参数
let arry = [5, 10, 15];
console.log(arry.join('.')) // 5.10.15
```
### 10. arry.splice(index, hm, add)
#### `它既可以删除特定的元素，也可以在特定位置增加元素，也可以删除增加，同时搞定。index是起始位置，hm是要删除元素的个数，add是要增加的元素`
```javascript
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
myFish.splice(2, 0, 'drum') // hm为0 表示不删除任何元素
console.log(myFish) // [ 'angel', 'clown', 'drum', 'mandarin', 'sturgeon' ]
```
```javascript
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
myFish.splice(2, 1, 'drum')
console.log(myFish)  // [ 'angel', 'clown', 'drum', 'sturgeon' ]
```
### 11. arry.concat()
#### `用于连接两个或多个数组，返回值为连接后的新数组，原数组不变`
```javascript
let arry1 = [1, 2, 3]
let arry2 = [4, 5, 6]
arry1.concat(arry2)
console.log(arry1.concat(arry2)) // [ 1, 2, 3, 4, 5, 6 ]
```
