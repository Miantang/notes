#MVVM理解
MVVM，是Model-View-ViewModel的简称。也就是说，由视图，视图模型，模型三个部分组成。通过这三个部分，实现UI逻辑、呈现逻辑和状态控制、数据和业务逻辑的分离。
![1][p1]
使用MVVM模式有几大好处：

1. 低耦合。View可以独立于Model变化和修改，一个ViewModel可以绑定到不同的View上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。

2. 可重用性。可以把一些视图的逻辑放在ViewModel里面，让很多View重用这段视图逻辑。

3. 独立开发。开发人员可以专注与业务逻辑和数据的开发(ViewModel)。设计人员可以专注于界面(View)的设计。

4. 可测试性。可以针对ViewModel来对界面(View)进行测试

然而，在众多的前端框架中，基于MVVM架构的框架层出不穷。现今较为流行有：`knockout` `ember` `vue` `angular` `avalon`，它们的实现各有不同。孰优孰劣难以比较，都还是需要针对具体业务场景具体分析。

先模拟一个场景：

用户操作：
    用户在input文本框中改变值，多个地方的值也相应的改变了。

问题：
    1. 开发者并没有操作DOM，事件是如何绑定的。
    2. JavaScript代码中的值，如何关联到HTML代码中。
    3. HTML代码中如何实现自动同步视图

这里就引出了学习一个MVVM框架的实现，重点关注的几个点：

1. 

[p1]: mvvm-learning/1.jpg
[1]: http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html