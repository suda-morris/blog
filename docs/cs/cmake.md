# 𝘾𝙈𝙖𝙠𝙚 基础

:::tip

从广义上来讲，CMake 是一组工具,包括了 `CMake`，`CTest` 和 `CPack`。

:::

## 最小 CMake 工程

```cmake
cmake_minimum_required(VERSION 3.5)
project(MyApp
        VERSION 1.0
        LANGUAGES C)
set(SOURCES main.c)
add_executable(MyExe ${SOURCES})
```

`add_executable` 等“函数”在 CMake 中称为 `命令`，和函数不同，CMake 命令虽然可以传入参数，但是无法 return 结果给调用者（返回结果需要使用其它技巧）。CMake 命令对大小写不敏感，但是通常使用小写。

### cmake_minimum_required

```cmake
cmake_minimum_required(VERSION major.minor[.patch[.tweak]])
```

该命令需要放置在 CMakeLists.txt 文件的第一行。

* 该命令声明了 CMake 项目依赖的最小版本号，确保某些 CMake 功能在用户的 cmake 软件中是存在的
* 设置默认的 CMake 策略，使其与指定的版本号匹配
* 设置的版本号要尽可能高，新项目建议使用 `3.2` 及其以上版本

### project

```cmake
project(projectName
	[VERSION major[.minor[.patch[.tweak]]]]
	[LANGUAGES languageName ...]
)
```



## Out-of-source Build

```bash
mkdir build
cd build
cmake -G "Unix Makefiles" ../source
cmake --build . --config Release --target MyApp
```

:::tip

CMake 支持多种项目文件格式：

<table>
  <tr>
    <th>Category<br></th>
    <th>Generator Examples</th>
    <th>Multi-config<br></th>
  </tr>
  <tr>
    <td rowspan="3">Visual Studio</td>
    <td>Visual Studio 15 2017</td>
    <td rowspan="3">Yes</td>
  </tr>
  <tr>
    <td>Visual Studio 14 2015</td>
  </tr>
  <tr>
    <td>...</td>
  </tr>
  <tr>
    <td>Xcode</td>
    <td>Xcode</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Ninja</td>
    <td>Ninja</td>
    <td>No</td>
  </tr>
  <tr>
    <td rowspan="4">Makefiles</td>
    <td>Unix Makefiles</td>
    <td rowspan="4">No</td>
  </tr>
  <tr>
    <td>MSYS Makefiles</td>
  </tr>
  <tr>
    <td>MinGW Makefiles</td>
  </tr>
  <tr>
    <td>NMake Makefiles<br></td>
  </tr>
</table>

:::

## 变量

```cmake
set(color Green CACHE STRING "Color of folower" FORCE)
set_property(CACHE color PROPERTY STRINGS Red Orange Green)
variable_watch(color)
message(STATUS "Color = ${color}")
message(STATUS "IDF_PATH = $ENV{IDF_PATH}")
message(STATUS "Version = ${PROJECT_VERSION}")
message(STATUS "SrcPath = ${PROJECT_SOURCE_DIR}")
message(STATUS)
set(longStr " ESP8266 ESP32 ESP8089 ")
set(shortStr "ESP")

get_cmake_property(resultVar MACROS)
message(${resultVar})

set_directory_properties(PROPERTIES username "morris")
get_directory_property(resultVar username)
message(${resultVar})

set_property(
	GLOBAL
	PROPERTY FOO
	1
	2
	3)

get_cmake_property(foo_value FOO)
message(STATUS "value of FOO is ${foo_value}")

set(my_list 1 2 3)
set_property(
	DIRECTORY
	PROPERTY FOO
	"${my_list}")

get_property(foo_value DIRECTORY PROPERTY FOO)
message(STATUS "value of FOO is ${foo_value}")
```

## string 命令

```cmake
string(STRIP ${longStr} longStr)
message(${longStr})
string(FIND ${longStr} ${shortStr} outVar)
message(${outVar})
string(FIND ${longStr} ${shortStr} outVar REVERSE)
message(${outVar})
string(REPLACE "ESP" "Espressif" outVar ${longStr})
message(${outVar})
string(REGEX MATCHALL "[0-9]" outVar ${longStr})
message(${outVar})
set(testStr abcdefabcd)
string(REGEX REPLACE "(de)" "X\\1Y" outVar ${testStr})
message(${outVar})
```

### list 命令

```cmake
set(myList a;b;c;def)
message(${myList})
list(LENGTH myList outVar)
message(${outVar})
list(GET myList 3 0 outVar)
message(${outVar})
set(myPaths "/a/b/c" "/b/e" "/a/d" "/b/e")
message(${myPaths})
list(REMOVE_DUPLICATES myPaths)
message(${myPaths})
list(SORT myPaths)
message(${myPaths})

set(tlist "/a;/b;/c")
message(${tlist})
set(tlist "/d;/e" ${tlist})
message(${tlist})
list(APPEND tlist "/f")
message(${tlist})
```

## 条件判断

```cmake
if("/b/e" IN_LIST myPaths)
        message(STATUS "/b/e is in the list")
endif()

set(x 3)
set(y 7)
math(EXPR z "(${x}+${y})/2")
message(${z})

if(x AND ("23" EQUAL 23))
        message("YES")
else()
        message("NO")
endif()

set(who "Morris")
if("Hi from ${who}" MATCHES "Hi from (Morris|Wendy).*")
        message("${CMAKE_MATCH_1} says hello : ${CMAKE_MATCH_0}")
else()
        message("Nobody says hello")
endif()

if(IS_DIRECTORY "/home")
        message("Is Directory")
endif()

if(COMMAND string)
        message("string command exist")
endif()

if(DEFINED ENV{IDF_PATH})
        message("environment IDF_PATH has been defined")
endif()
```

## 循环语句

```cmake
set(list1 A B)
set(list2)
set(foo WillNotBeShown)
foreach(loopVar IN LISTS list1 list2 ITEMS ${foo} bar)
        message("Iteration for: ${loopVar}")
endforeach()

foreach(loopVar RANGE 0 5 1)
        message("${loopVar}")
endforeach()

message("source_dir=${CMAKE_SOURCE_DIR}\r\nbin_dir=${CMAKE_BINARY_DIR}")
message("current_source_dir=${CMAKE_CURRENT_SOURCE_DIR}\r\ncurrent_bin_dir=${CMAKE_CURRENT_BINARY_DIR}")

set(my_value 1)
while(my_value LESS 40)
    message(STATUS "value=${my_value}")
    math(EXPR my_value "${my_value}+1")
endwhile()
```

## 函数

```cmake
# ARGN 代表剩余的参数
# ARGV 代表所有的参数
function(func arg)
        message("arg=${arg}")
        message("ARGC=${ARGC}")
        message("ARGV=${ARGV}")
        message("ARGN=${ARGN}")
        if(DEFINED arg)
                message("Function arg is a defined variable")
        else()
                message("Function arg is NOT a defined variable")
        endif()
endfunction()

function(do_cmake_good)
	foreach(arg IN LISTS ARGN)
		message(STATUS "Got argument: ${arg}")
	endforeach()
endfunction()

macro(macr arg)
        message("arg=${arg}")
        message("ARGC=${ARGC}")
        if(DEFINED arg)
                message("Macro arg is a defined variable")
        else()
                message("Macro arg is NOT a defined variable")
        endif()
endmacro()

func(foobar test)
macr(foobar)

function(esp_func)
        set(prefix IDF)
        set(noValues ENABLE_WIFI CONSOLE)
        set(singleValues TARGET)
        set(multiValues SOURCES IMAGES)
        cmake_parse_arguments(${prefix}
                              "${noValues}"
                              "${singleValues}"
                              "${multiValues}"
                              ${ARGN})
        message("Option summary:")
        foreach(arg IN LISTS noValues)
                if(${${prefix}_${arg}})
                        message("${arg} enabled")
                else()
                        message("${arg} disabled")
                endif()
        endforeach()

        foreach(arg IN LISTS singleValues multiValues)
                message("${arg}=${${prefix}_${arg}}")
        endforeach()
endfunction()

esp_func(SOURCES foo.cpp startup.S TARGET esp32 ENABLE_WIFI)
esp_func(CONSOLE TARGET esp8266 IMAGES here.png there.png)

function(myfunc result1 result2)
        set(${result1} "First result" PARENT_SCOPE)
        set(${result2} "Second result" PARENT_SCOPE)
endfunction()

myfunc(res1 res2)
message("result1=${res1}")
message("result2=${res2}")

function(sum out a b)
	math(EXPR ret "${a} + ${b}")
	set("${out}" "${ret}" PARENT_SCOPE)
endfunction()
```

## include 命令

```cmake
include(CMakePrintHelpers)
cmake_print_properties(TARGETS MyExe MyLib PROPERTIES TYPE)
cmake_print_properties(DIRECTORIES "." PROPERTIES username)
cmake_print_variables(tlist CMAKE_VERSION)

include(TestBigEndian)
test_big_endian(isBigEndian)
cmake_print_variables(isBigEndian)

find_package(PythonInterp)
find_package(PythonLibs)
cmake_print_variables(PYTHON_EXECUTABLE)

cmake_print_variables(CMAKE_BUILD_TYPE)
```

## 最佳实战

* 使用 `target_xxx` 版本的 CMake 宏

* 指定 `property` 的 `PUBLIC`，`PRIVATE` 或者 `INTERFACE` 属性

* 获取 `target` 的编译 `flag` 之前要先将其链接进来

* 谨慎使用会影响所有 `target` 的宏，比如：

  * `INCLUDE_DIRECTORIES()`
  * `ADD_DEFINITIONS()`
  * `LINK_LIBRARIES()`

* 不要在 `target_include_directories()` 引用模块之外的路径

* 针对仅仅包含头文件的一些库，建议：

  * `add_library(mylib INTERFACE)`
  * `target_include_directories(mylib INTERFACE include)`
  * `target_link_libraries(mylib INTERFACE Boost::Boost)`

* 为模块添加新的编译选项

  ```cmake
  target_include_directories(mylib PUBLIC include)
  target_include_directories(mylib PRIVATE src)

  if(SOME_SETTING)
  	target_compile_definitions(mylib
  							   PUBLIC WITH_SOME_SETTING)
  endif()
  ```

* 设置全局编译选项

  ```cmake
  if(MSVC)
  	add_compile_options(/W3 /WX)
  else()
  	add_compile_options(-W -Wall -Werror)
  endif()
  ```
