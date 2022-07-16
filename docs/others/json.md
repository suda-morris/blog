title: JSON
tags:
  - json
categories:
  - Geek Hobbies
author: suda-morris
date: 2015-12-07 18:06:10 +0800
------

## cJSON使用

```c
    typedef struct cJSON {
     struct cJSON *next,*prev;
     struct cJSON *child;
     int type;
     char *valuestring;
     int valueint;
     double valuedouble;
     char *string;
    } cJSON;
```

1. cJSON结构体为一个双向链表，并可通过child指针访问下一层

2. type变量决定数据类型，数据项可以是字符串可以是整形，也可以是浮点型。如果是整形的话可以从valueint取出，如果是浮点型的话可以从valuedouble取出，以此类推

3. 主要函数说明

   1. 解析
      1. cJSON_Parse函数负责解析JSON数据包，并按照cJSON结构体的结构序列化整个数据包。使用该函数会通过malloc函数在内存中开辟一个空间，使用完成需要手动释放
      2. cJSON_GetObjectItem函数可以从cJSON结构体中查找某个子节点名称，如果查找成功，可把该子节点序列化到cJSON结构体中
      3. 如果需要使用cJSON结构体中的内容，可通过cJSON结构体中的valueint和valuestring取出有价值的内容
      4. 通过cJSON_Delete释放内存空间
   2. 组装
      1. cJSON_CreateObject函数可创建一个根数据项，之后便可向该根数据项中添加string或int等内容
      2. cJSON_AddNumberToObject向节点中添加子节点
      3. cJSON_Print函数可以打印跟数据项

4. 使用例子：

   ```c
    cJSON* pRoot = cJSON_CreateObject();
    cJSON* pArray = cJSON_CreateArray();
    cJSON_AddItemToObject(pRoot, "students_info", pArray);
    char* szOut = cJSON_Print(pRoot);

    cJSON* pItem = cJSON_CreateObject();
    cJSON_AddStringToObject(pItem, "name", "chenzhongjing");
    cJSON_AddStringToObject(pItem, "sex", "male");
    cJSON_AddNumberToObject(pItem, "age", 28);
    cJSON_AddItemToArray(pArray, pItem);

    pItem = cJSON_CreateObject();
    cJSON_AddStringToObject(pItem, "name", "fengxuan");
    cJSON_AddStringToObject(pItem, "sex", "male");
    cJSON_AddNumberToObject(pItem, "age", 24);
    cJSON_AddItemToArray(pArray, pItem);

    pItem = cJSON_CreateObject();
    cJSON_AddStringToObject(pItem, "name", "tuhui");
    cJSON_AddStringToObject(pItem, "sex", "male");
    cJSON_AddNumberToObject(pItem, "age", 22);
    cJSON_AddItemToArray(pArray, pItem);

    char* szJSON = cJSON_Print(pRoot);
    cJSON_Delete(pRoot);
    //free(szJSON);

    pRoot = cJSON_Parse(szJSON);
    pArray = cJSON_GetObjectItem(pRoot, "students_info");
    if (NULL == pArray)
    {
        return -1;
    }

    int iCount = cJSON_GetArraySize(pArray);
    for (int i = 0; i < iCount; ++i)
    {
        cJSON* pItem = cJSON_GetArrayItem(pArray, i);
        if (NULL == pItem)
        {
            continue;
        }

        string strName = cJSON_GetObjectItem(pItem, "name")->valuestring;
        string strSex = cJSON_GetObjectItem(pItem, "sex")->valuestring;
        int iAge = cJSON_GetObjectItem(pItem, "age")->valueint;
    }

    cJSON_Delete(pRoot);
    free(szJSON);
   ```
