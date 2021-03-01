# 正则表达式

![正则表达式的功能](../.vuepress/public/images/cs/regex/regular_expression_functioning.png)

## 元字符

![元字符](../.vuepress/public/images/cs/regex/regex_meta_char.png)

## 量词与贪婪

![各种匹配模式](../.vuepress/public/images/cs/regex/regex_modes.png)

### 贪婪模式（Greedy）

正则中，表示次数的量词默认是贪婪的，在贪婪模式下，会尝试尽可能最大长度去匹配。

在字符串`aaabb`中使用正则`a*`的匹配过程：

![贪婪模式示例](../.vuepress/public/images/cs/regex/regex_greedy_example_result.png)

![贪婪模式解析](../.vuepress/public/images/cs/regex/regex_greedy_example.jpg)

### 非贪婪模式（Lazy）

非贪婪模式下，正则会找出长度最小且满足要求的结果。将贪婪模式变成非贪婪模式的方法是：**在量词后面加上`?`**

![非贪婪模式示例](../.vuepress/public/images/cs/regex/regex_lazy_example_result.png)

### 贪婪和非贪婪的对比

![贪婪模式与非贪婪模式的对比](../.vuepress/public/images/cs/regex/regex_greedy_lazy_compare.png)

```python
>>> import re
>>> re.findall(r'a*', 'aaabb')  # 贪婪模式
['aaa', '', '', '']
>>> re.findall(r'a*?', 'aaabb') # 非贪婪模式
['', 'a', '', 'a', '', 'a', '', '', '']
```

## 分组与引用

![正则分组](../.vuepress/public/images/cs/regex/regex_group.png)

括号在正则中可以用于分组，被括号括起来的部分“子表达式”会被保存成一个子组，简单来说，第几个括号就是第几个分组。

如果正则中出现了括号，那么就会认为，这个子表达式在后续可能会再次被引用，如果我们不打算去引用，建议将其声明为**不保存**子组，以提高正则的性能。实现方法是，在括号里面使用`?:`进行声明。

|            | 正则     | 示例             |
| ---------- | -------- | ---------------- |
| 保存子组   | (正则)   | \d{15}(\d{3})?   |
| 不保存子组 | (?:正则) | \d{15}(?:\d{3})? |

![分组](../.vuepress/public/images/cs/regex/regex_subgroup.png)

### 分组的编号

如果要看某个括号里面的内容是第一个分组，该怎么办？我们只需要数左括号（开括号）是第几个，就可以确定是第几个子组。

![分组编号](../.vuepress/public/images/cs/regex/regex_subgroup_index.png)

### 命名分组

有些语言提供了命名分组，这比数字更有辨识度，不容易出错。格式为：`(?P<group-name>regular-expression)`

### 分组引用

| 编程语言   | 查找时引用方式 | 替换时引用方式 |
| ---------- | -------------- | -------------- |
| Python     | \number        | \number        |
| Java       | \number        | $number        |
| JavaScript | \number        | $number        |

![正则表达式查找重复单词](../.vuepress/public/images/cs/regex/regex_search_double_word.png)