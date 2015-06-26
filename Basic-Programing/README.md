最近，打算做一些简单的练习巩固一下C++基础。在完整使用C++的标准IO时，而不是使用C语言配套的输入输出，打算写一个速记表，以防遗忘。

现笔记如下：
###iomanip
---------------------------

####[setiosflags](http://www.cplusplus.com/reference/iomanip/setiosflags/)

setiosflags (ios_base::fmtflags mask);

传入一个格式标识 [std::ios_base::fmtflags](http://www.cplusplus.com/reference/ios/ios_base/fmtflags/)

与之对应的是[resetiosflags](http://www.cplusplus.com/reference/iomanip/resetiosflags/) 
 ```c++
// using ios_base::fmtflags
#include <iostream>     // std::cout, std::ios_base, std::ios,
                        // std::hex, std::showbase
int main () {
  // using fmtflags as class member constants:
  std::cout.setf (std::ios_base::hex , std::ios_base::basefield);
  std::cout.setf (std::ios_base::showbase);
  std::cout << 100 << '\n';

  // using fmtflags as inherited class member constants:
  std::cout.setf (std::ios::hex , std::ios::basefield);
  std::cout.setf (std::ios::showbase);
  std::cout << 100 << '\n';

  // using fmtflags as object member constants:
  std::cout.setf (std::cout.hex , std::cout.basefield);
  std::cout.setf (std::cout.showbase);
  std::cout << 100 << '\n';

  // using fmtflags as a type:
  std::ios_base::fmtflags ff;
  ff = std::cout.flags();
  ff &= ~std::cout.basefield;   // unset basefield bits
  ff |= std::cout.hex;          // set hex
  ff |= std::cout.showbase;     // set showbase
  std::cout.flags(ff);
  std::cout << 100 << '\n';

  // not using fmtflags, but using manipulators:
  std::cout << std::hex << std::showbase << 100 << '\n';

  return 0;
}
// OUTPUT 0x64\n0x64\n0x64\n0x64\n0x64
``` 

比如，配合
```c++
<< setiosflags(ios::fixed) << setprecision(2)
```
可以保证输出小数点后二位。

`setf unsetf flags`是`std::cout`的成员函数，可以以此来设置相关的格式
