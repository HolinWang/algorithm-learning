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