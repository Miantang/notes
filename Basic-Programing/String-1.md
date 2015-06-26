###假如以字符串的形式输入：

`cin >> string` 按词输入，遇空格暂停。

`cin.get(char)` 按一个字符读入
 
 以ifstream& 作为返回值返回。可以根据`ios_base::iostate`（如[eof](#4. ios::eof)）来循环读取,如示例：
 
 ```c++
int main(int argc,char *argv[])
{
    string word;
    while(cin >> word) // while(getline(cin,line))
    {
        cout<<word<<endl; //endl用来输出一个换行符并刷新输出缓冲区
    }
    return 0;
}
 ```
------------------------- 

####1. [getline(istream&, string&)](http://www.cplusplus.com/reference/string/string/getline/)

istream& getline (istream&  is, string& str, char delim);

提取字符串string。读取整行
 ```c++
// extract to string
#include <iostream>
#include <string>

main ()
{
  std::string name;

  std::cout << "Please, enter your full name: ";
  std::getline (std::cin,name);
  std::cout << "Hello, " << name << "!\n";

  return 0;
}
```

####2. [istream::getline](http://www.cplusplus.com/reference/istream/istream/getline/)

istream& getline (char* s, streamsize n);

是cin的成员函数。不过要注意的是，使用的是`char*`传入参数。**注意定义好字符串长度。**

####3. [get](http://www.cplusplus.com/reference/istream/istream/get/)

int get();

istream& get (char& c);

istream& get (char* s, streamsize n);

istream& get (streambuf& sb);

是cin的成员函数。可与getline等同。也可只读取一个char

####4. [ios::eof](http://www.cplusplus.com/reference/ios/ios/eof/)

bool eof() const;

是ifstream的成员函数，遇到EOF返回true。

[char_traits<T>::eof](http://www.cplusplus.com/reference/string/char_traits/eof/)静态常量表达式constexpr .类似于EOF(<cstdio>)

```c++
// ios::eof example
#include <iostream>     // std::cout
#include <fstream>      // std::ifstream
int main () {
  std::ifstream is("example.txt");   // open file
  char c;
  while (is.get(c))                  // loop getting single characters
    std::cout << c;

  if (is.eof())                      // check for EOF
    std::cout << "[EoF reached]\n";
  else
    std::cout << "[error reading]\n";

  is.close();                        // close file
  return 0;
}
```
####5. gets 

可以接受空格

####6. [std::wcin](http://www.cplusplus.com/reference/iostream/wcin/)

extern basic_istream<wchar_t> wcin;

`wchar_t`主要用于国际化字符
