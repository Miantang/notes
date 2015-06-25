###process
process 这个全局对象来获取命令行中的参数。process 对象 拥有一个名为 argv 的属性，该属性是一个数组，数组中包含了整条命令的所有部分。

###fs(IO) 同步
要执行一个对文件系统的操作，你将会用到 fs 这个 Node 核心模块。要加载这类核心模块，或者其他的"全局"模块，可以用下面的方式引入：

    var fs = require('fs')

现在你可以通过 fs 这个变量来访问整个 fs 模块了。

在 fs 中，所有的同步（或者阻塞）的操作文件系统的方法名都会以 'Sync' 结尾。要读取一个文件，你将需要使用  fs.readFileSync('/path/to/file') 方法。这个方法会返回一个包含文件完整内容的 Buffer 对象。

fs 模块的文档，可以使用浏览器打开如下路径来访问：
  file:///home/p/node-v0.12.1-linux-x86/lib/node_modules/learnyounode/node_apidoc/fs.html

Buffer 对象是 Node 用来高效处理数据的方式，无论该数据是 ascii 还是二进制文件，或者其他的格式。Buffer 可以很容易地通过调用 toString() 方法转换为字符串。如：var str = buf.toString()。

Buffer 的文档可以通过浏览器访问如下路径来查看：
  file:///home/p/node-v0.12.1-linux-x86/lib/node_modules/learnyounode/node_apidoc/buffer.html

如果你在想如何更简单地去计算行数，请回想一下，一个 JavaScript 字符串，可以使用 .split() 分割成子字符串数组，而且，'\n' 可以作为分隔符。注意，供测试的文件末尾的最后一行并没有进行换行，即没有 '\n' 的存在，因此，使用这个方法的话，所得的数组的长度会比行数多一个。

###异步IO

第一个异步 I/O！
 第 4 个习题，共 13 个

编写一个程序，执行一个异步的对文件系统的操作：读取一个文件，并且在终端（标准输出 stdout）打印出这个文件中的内容的行数。类似于执行 cat file | wc -l 这个命令。

所要读取的文件的完整路径会在命令行第一个参数提供。

##### 提示

这个题目的答案几乎和前一个问题一样，但是你需要用更加符合 Node.js 的风格的方式解决：异步。

你将要使用 fs.readFile() 方法，而不是 fs.readFileSync()，并且你需要从你所传入的回调函数中去收集数据（这些数据会作为第二参数传递给你的回调函数），而不是使用方法的返回值。想要学习更多关于回调函数的知识，请查阅：[https://github.com/maxogden/art-of-node#callbacks。](https://github.com/maxogden/art-of-node#callbacks。)

记住，我们习惯中的 Node.js 回调函数都有像如下所示的特征：

    function callback (err, data) { /* ... */ }

所以，你可以通过检查第一个参数的真假值来判断是否有错误发生。如果没有错误发生，你会在第二个参数中获取到一个 Buffer 对象。和 readFileSync() 一样，你可以传入 'utf8' 作为它的第二个参数，然后把回调函数作为第三个参数，这样，你得到的将会是一个字符串，而不是 Buffer。

fs 模块的文档可以通过使用你的浏览器访问如下路径来查看：
  file:///home/p/node-v0.12.1-linux-x86/lib/node_modules/learnyounode/node_apidoc/fs.html

###LS 过滤器

 第 5 个习题，共 13 个

编写一个程序来打印出指定目录下的文件列表，并且以特定的文件名扩展名来过滤这个列表。这次会有两个参数提供给你，第一个是所给的文件目录路径（如：path/to/dir），第二个参数则是需要过滤出来的文件的扩展名。

举个例子：如果第二个参数是 txt，那么你需要过滤出那些扩展名为 .txt的文件。

注意，第二个参数将不会带有开头的 .。

你需要在终端中打印出这个被过滤出来的列表，每一行一个文件。另外，你必须使用异步的 I/O 操作。

#####提示
fs.readdir() 方法接收两个参数：第一个是一个路径，第二个则是回调函数，这个回调函数会有如下特征：

    function callback (err, list) { /* ... */ }

这里的 list 是一个数组，它所包含的元素是每个文件的文件名（字符串形式）。

fs 的文档你可以用浏览器访问 file:///home/p/node-v0.12.1-linux-x86/lib/node_modules/learnyounode/node_apidoc/fs.html 来阅读。

你可能会发现 node 自带的 path 模块也很有用，特别是它那个 extname 方法。

同样，你也可以通过浏览器访问 file:///home/p/node-v0.12.1-linux-x86/lib/node_modules/learnyounode/node_apidoc/path.html 来阅读 path 模块的文档。

