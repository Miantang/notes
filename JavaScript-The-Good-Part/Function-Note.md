1. 函数对象

对象字面值产生的对象连接到Object.prototype

函数对象连接到Function.prototype(它自己连接到Object.prototype)

2. 调用

- 方法调用模式（就是作为属性来调用）
- 函数调用模式
- 构造器调用模式（不推荐）
    JS是一门基于原型继承的语言，对象可以直接从其他对象继承属性。
    如果在一个函数前面加new，那么背后会创建一个连接到该函数的prototype成员的新对象，同时this会被绑定在那个新对象上。
    - apply，call
    
3. 参数

arguments只是一个类似数组的对象。它有length属性，但没有任何数组的方法。

4. 返回值

如果未指定`return`，则返回`undefined`

如果函数调用时加上前缀new，则放回this（该新对象）

5. 异常
```javascript
throw {}

try {
    //sth
} catch (error) {
    console.log(e.name, e.message);
}
```

6. 扩充类型的功能
通过`Object.prototype`添加方法
`Object.prototype.newMethod = newFunc;`

做之前判断有没有这个method。

7. 递归

8. 作用域

内部函数可以访问定义它们的外部函数的参数与变量，除了this和arguments。

9. 闭包
