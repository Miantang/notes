#jQuery源码的理解

jQuery出现已经9年了，现在的版本已经是2.1，是全世界使用最为广泛的库。jQuery的目的很明确，就是“DOM操作”。它在项目中的存在并不会影响整个代码体系的架构。

学习jQuery的源码也能很大程度上理解JavaScript原生的DOM操作。

###ready与load事件

**DOM文档加载的步骤：**

要想理解为什么ready先执行，load后执行就要先了解下DOM文档加载的步骤：

    (1) 解析HTML结构。
    (2) 加载外部脚本和样式表文件。
    (3) 解析并执行脚本代码。
    (4) 构造HTML DOM模型。//ready
    (5) 加载图片等外部文件。
    (6) 页面加载完毕。//load
    
###类数组对象结构
jQuery实现了9种方法的重载

    1. jQuery([selector,[context]])
    2. jQuery(element)
    3. jQuery(elementArray)
    4. jQuery(object)
    5. jQuery(jQuery object)
    6. jQuery(html,[ownerDocument])
    7. jQuery(html,[attributes])
    8. jQuery()
    9. jQuery(callback)

主要可以分为：①选择器 ②DOM处理 ③DOM加载 [1](http://www.imooc.com/code/3248)


