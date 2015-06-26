###[标准库 string ](http://www.cplusplus.com/reference/string/)

C++11:
- int stoi (const string&  str, size_t* idx = 0, int base = 10): 将特定的base进制（0是auto）数字型string&解析成 十进制int。&idx指向数字之后的substr
- long stol (const string&  str, size_t* idx = 0, int base = 10);

- unsigned long stoul (const string&  str, size_t* idx = 0, int base = 10);
- long long stoll (const string&  str, size_t* idx = 0, int base = 10);
- double stod (const string&  str, size_t* idx = 0);

- string to_string(int val);
- begin, end

=============================
####[string类](http://www.cplusplus.com/reference/string/string/)

成员函数：

#####Iterators:
- string::iterator begin(), end()
- reverse_iterator rbegin() noexcept; rbegin, rend 倒置的迭代器

#####Capacity:
- size_t size() const noexcept;// 同length()
- size_t max_size() const noexcept; // 4294967291
- void resize (size_t n, char c);
```c++
  unsigned sz = str.size();//str = I like to code in C
  str.resize (sz+2,'+');
  std::cout << str << '\n'; //I like to code in C++
  str.resize (14);
  std::cout << str << '\n';//I like to code
```
- size_t capacity() const noexcept; // 分配的存储空间，bytes。大于等于size()
- void reserve (size_t n = 0); // 申请新的capacity n。对size和内容无影响
- void clear() noexcept; 
- bool empty() const noexcept;// 是否为空，当size等于0时
- void shrink_to_fit();     // 减少capacity来fit它的size **(11)**
```c++
std::string str (100,'x'); //capacity of str: 100
str.resize(10);            //capacity of str: 100
str.shrink_to_fit();       //capacity of str: 10
```
#####Element access:
- char& operator[] (size_t pos);
- char& at (size_t pos);
- char&  front(), back(); // **(11)**

#####Modifiers:
- string& operator+= (const string& str),  (const char* s), (char c),  (initializer_list<char> il);
- string& append(const string& str, size_t subpos, size_t sublen);
```c++
  std::string str2="Writing ";
  std::string str3="print 10 and then 5 more";
  str.append(str2);                       // "Writing "
  str.append(str3,6,3);                   // "10 "
  str.append("dots are cool",5);          // "dots "
  str.append("here: ");                   // "here: "
  str.append(10u,'.');                    // ".........."
  str.append(str3.begin()+8,str3.end());  // " and then 5 more"
  str.append<int>(5,0x2E);                // "....."
```
- void push_back (char c); // 只能是单字符
- string& assign (size_t n, char c); //  替换成新的值
- string& insert (size_t pos, const string& str, size_t subpos, size_t sublen);
- string& erase (size_t pos = 0, size_t len = npos); 

    iterator erase (const_iterator first, const_iterator last);
    
    iterator erase (const_iterator p);

- string& [replace](http://www.cplusplus.com/reference/string/string/replace/) (size_t pos, size_t len, const string& str, size_t subpos, size_t sublen);

    string& replace (const_iterator i1, const_iterator i2, const string& str);
    
- void swap (string& str); // template <class T> void swap (T& a, T& b)
- void pop_back(); // 删除最后一个字符 **(11)**

#####String operations:
- const char* c_str() const noexcept; // 等同于data()
- get_allocator
- size_t copy (char* s, size_t len, size_t pos = 0) const; // 将substring拷贝给s，返回len-pos
- size_t find , rfind(const char* s, size_t pos, size_t n) const; // 从第pos个开始找，找匹配s的前n项，未找到，返回string::npos = -1; 
- size_t find_first_of , find_last_of(const char* s, size_t pos, size_t n) const; // 找任何符合的字符
```c++
  std::string str ("Please, replace the vowels in this sentence by asterisks.");
  std::size_t found = str.find_first_of("aeiou");
  while (found!=std::string::npos)
  {
    str[found]='*';
    found=str.find_first_of("aeiou",found+1);
  }    // str =  Pl**s*, r*pl*c* th* v*w*ls *n th*s s*nt*nc* by *st*r*sks.
```
- size_t find_first_not_of , find_last_not_of (const string& str, size_t pos = 0) const noexcept;
- string substr (size_t pos = 0, size_t len = npos) const; // 返回一个新的string
- int compare (size_t pos, size_t len, const string& str, size_t subpos, size_t sublen) const;   // 返回 0 >0 <0

    int compare (const string& str) const noexcept;

#####Non-member function overloads：    
- istream& getline (istream&  is, string& str, char delim);

