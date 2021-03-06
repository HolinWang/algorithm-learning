# algorithm-learning
算法学习，永无止境，本仓库主要记录自己学习算法的一些笔记。内容主要参考《学习JavaScript数据结构与算法》第三版
# 基本的数据结构 - 集合
## 集合的概念特点
> 1. 无序
> 2. 元素不能重复
> 3. 是一种特殊的数组，因为无序，所以无法通过下标访问元素 
> ## 集合常用的方法
> 1. add(element): 添加新元素到集合尾部
> 2. delete(element): 删除集合的第一项元素，并将其返回
> 3. has(element): 集合存在指定的元素返回true,反之false
> 4. values():返回一个包含集合中所有值的数组
> 5. clear(): 清空集合
> 6. size(): 返回集合的大小
> 7. toString(): toString方法
## 集合的实现
### 基于对象实现集合的常用方法
```javascript
function Set() {
  // 属性
  this.items = {};

  // 方法
  // add方法
  Set.prototype.add = function (value) {
    // 判断当前集合中是否已经包含了该元素
    if (this.has(value)) {
      return false;
    }
    // 将元素添加到集合中
    this.items[value] = value;
  }

  // has方法
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
  }

  // remove方法
  Set.prototype.remove = function (value) {
    // 判断当前集合中是否已经包含了该元素
    if (!this.has(value)) {
      return false;
    }
    // 将元素从属性中删除
    delete this.items[value];
    return true;
  }

  // clear方法
  Set.prototype.clear = function () {
    this.items = {};
  }

  // size方法
  Set.prototype.size = function () {
    return Object.keys(this.items).length;
  }

  // 获取几个中所有的值
  Set.prototype.values = function () {
    return Object.keys(this.items);
  }

}

```