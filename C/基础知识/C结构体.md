## C 结构体
#### 返回 [C基础知识](../C基础知识.md)


***


`数组` 允许定义可存储相同类型数据项的变量，`结构` 是C编程中另一种用户自定义的可用的数据类型，它允许您存储不同类型的数据项。  
结构用于表示一条记录，假设您想要跟踪图书馆中书本的动态，您可能需要跟踪每本书的下列属性：  
- Title
- Author
- Subject
- Book ID


###### 定义结构
为了定义结构，您必须使用 struct 语句。struct 语句定义了一个包含多个成员的新的数据类型，struct 语句的格式如下：
```
struct tag { 
    member-list
    member-list 
    member-list  
    ...
} variable-list ;
```
`tag` 是结构体标签。  
`member-list` 是标准的变量定义，比如 `int i;` 或者 `float f;` ，或者其他有效的变量定义。  
`variable-list` 结构变量，定义在结构的末尾，最后一个分号之前，您可以指定一个或多个结构变量。下面是声明 Book 结构的方式：  
```
struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
} book;
```
在一般情况下，tag、member-list、variable-list 这 3 部分至少要出现 2 个。以下为实例：
```
//此声明声明了拥有3个成员的结构体，分别为整型的a，字符型的b和双精度的c
//同时又声明了结构体变量s1
//这个结构体并没有标明其标签
struct 
{
    int a;
    char b;
    double c;
} s1;

//此声明声明了拥有3个成员的结构体，分别为整型的a，字符型的b和双精度的c
//结构体的标签被命名为SIMPLE,没有声明变量
struct SIMPLE
{
    int a;
    char b;
    double c;
};
//用SIMPLE标签的结构体，另外声明了变量t1、t2、t3
struct SIMPLE t1, t2[20], *t3;

//也可以用typedef创建新类型
typedef struct
{
    int a;
    char b;
    double c; 
} Simple2;

//现在可以用Simple2作为类型声明新的结构体变量
Simple2 u1, u2[20], *u3;
```
在上面的声明中，第一个和第二声明被编译器当作两个完全不同的类型，即使他们的成员列表是一样的，如果令 t3=&s1，则是非法的。  
在上面的声明中，第一个和第二声明被编译器当作两个完全不同的类型，即使他们的成员列表是一样的，如果令 t3=&s1，则是非法的。  
```
//此结构体的声明包含了其他的结构体
struct COMPLEX
{
    char string[100];
    struct SIMPLE a;
};

//此结构体的声明包含了指向自己类型的指针
struct NODE
{
    char string[100];
    struct NODE *next_node;
};
```
如果两个结构体互相包含，则需要对其中一个结构体进行不完整声明，如下所示：
```
struct B;    //对结构体B进行不完整声明

//结构体A中包含指向结构体B的指针
struct A
{
    struct B *partner;
    //other members;
};

//结构体B中包含指向结构体A的指针，在A声明完后，B也随之进行声明
struct B
{
    struct A *partner;
    //other members;
};
```


###### 结构体变量的初始化
和其它类型变量一样，对结构体变量可以在定义时指定初始值。
```
#include <stdio.h>

struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
} book = {"C 语言", "RUNOOB", "编程语言", 123456};

int main()
{
    printf("title : %s\nauthor: %s\nsubject: %s\nbook_id: %d\n", book.title, book.author, book.subject, book.book_id);
}
```
执行输出结果为：
```
title : C 语言
author: RUNOOB
subject: 编程语言
book_id: 123456
```


###### 访问结构成员
为了访问结构的成员，我们使用**成员访问运算符（.）**。成员访问运算符是结构变量名称和我们要访问的结构成员之间的一个句号。您可以使用 struct 关键字来定义结构类型的变量。下面的实例演示了结构的用法：  
```
#include <stdio.h>
#include <string.h>

struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
};

int main() 
{
   struct Books Book1;        /* 声明 Book1，类型为 Books */
   struct Books Book2;        /* 声明 Book2，类型为 Books */
   
   /* Book1 详述 */
   strcpy( Book1.title, "C Programming");
   strcpy( Book1.author, "Nuha Ali"); 
   strcpy( Book1.subject, "C Programming Tutorial");
   Book1.book_id = 6495407;
   
   /* Book2 详述 */
   strcpy( Book2.title, "Telecom Billing");
   strcpy( Book2.author, "Zara Ali");
   strcpy( Book2.subject, "Telecom Billing Tutorial");
   Book2.book_id = 6495700;
   
   /* 输出 Book1 信息 */
   printf( "Book 1 title : %s\n", Book1.title);
   printf( "Book 1 author : %s\n", Book1.author);
   printf( "Book 1 subject : %s\n", Book1.subject);
   printf( "Book 1 book_id : %d\n", Book1.book_id);
  
   /* 输出 Book2 信息 */
   printf( "Book 2 title : %s\n", Book2.title);
   printf( "Book 2 author : %s\n", Book2.author);
   printf( "Book 2 subject : %s\n", Book2.subject);
   printf( "Book 2 book_id : %d\n", Book2.book_id);
   
   return 0;         
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
Book 1 title : C Programming
Book 1 author : Nuha Ali
Book 1 subject : C Programming Tutorial
Book 1 book_id : 6495407
Book 2 title : Telecom Billing
Book 2 author : Zara Ali
Book 2 subject : Telecom Billing Tutorial
Book 2 book_id : 6495700
```


###### 结构作为函数参数
您可以把结构作为函数参数，传参方式与其他类型的变量或指针类似。您可以使用上面实例中的方式来访问结构变量：
```
#include <stdio.h>
#include <string.h>

struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
};

/* 函数声明 */
void printBook( struct Books book );

int main( )
{
   struct Books Book1;        /* 声明 Book1，类型为 Books */
   struct Books Book2;        /* 声明 Book2，类型为 Books */
 
   /* Book1 详述 */
   strcpy( Book1.title, "C Programming");
   strcpy( Book1.author, "Nuha Ali"); 
   strcpy( Book1.subject, "C Programming Tutorial");
   Book1.book_id = 6495407;
 
   /* Book2 详述 */
   strcpy( Book2.title, "Telecom Billing");
   strcpy( Book2.author, "Zara Ali");
   strcpy( Book2.subject, "Telecom Billing Tutorial");
   Book2.book_id = 6495700;
 
   /* 输出 Book1 信息 */
   printBook( Book1 );
 
   /* 输出 Book2 信息 */
   printBook( Book2 );
 
   return 0;
}

void printBook( struct Books book )
{
   printf( "Book title : %s\n", book.title);
   printf( "Book author : %s\n", book.author);
   printf( "Book subject : %s\n", book.subject);
   printf( "Book book_id : %d\n", book.book_id);
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
Book title : C Programming
Book author : Nuha Ali
Book subject : C Programming Tutorial
Book book_id : 6495407
Book title : Telecom Billing
Book author : Zara Ali
Book subject : Telecom Billing Tutorial
Book book_id : 6495700
```


###### 指向结构的指针
您可以定义指向结构的指针，方式与定义指向其他类型变量的指针相似，如下所示：  
```
struct Books *struct_pointer;
```
现在，您可以在上述定义的指针变量中存储结构变量的地址。为了查找结构变量的地址，请把 & 运算符放在结构名称的前面，如下所示：
```
struct_pointer = &Book1;
```
为了使用指向该结构的指针访问结构的成员，您必须使用 -> 运算符，如下所示：
```
struct_pointer->title;
```
让我们使用结构指针来重写上面的实例，这将有助于您理解结构指针的概念：
```
#include <stdio.h>
#include <string.h>

struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
};

/* 函数声明 */
void printBook( struct Books *book );

int main( )
{
   struct Books Book1;        /* 声明 Book1，类型为 Books */
   struct Books Book2;        /* 声明 Book2，类型为 Books */
 
   /* Book1 详述 */
   strcpy( Book1.title, "C Programming");
   strcpy( Book1.author, "Nuha Ali"); 
   strcpy( Book1.subject, "C Programming Tutorial");
   Book1.book_id = 6495407;
 
   /* Book2 详述 */
   strcpy( Book2.title, "Telecom Billing");
   strcpy( Book2.author, "Zara Ali");
   strcpy( Book2.subject, "Telecom Billing Tutorial");
   Book2.book_id = 6495700;
 
   /* 通过传 Book1 的地址来输出 Book1 信息 */
   printBook( &Book1 );
 
   /* 通过传 Book2 的地址来输出 Book2 信息 */
   printBook( &Book2 );
 
   return 0;
}

void printBook( struct Books *book )
{
   printf( "Book title : %s\n", book->title);
   printf( "Book author : %s\n", book->author);
   printf( "Book subject : %s\n", book->subject);
   printf( "Book book_id : %d\n", book->book_id);
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
Book title : C Programming
Book author : Nuha Ali
Book subject : C Programming Tutorial
Book book_id : 6495407
Book title : Telecom Billing
Book author : Zara Ali
Book subject : Telecom Billing Tutorial
Book book_id : 6495700
```



## 读者笔记


***


结构体中成员变量分配的空间是按照成员变量中占用空间最大的来作为分配单位,同样成员变量的存储空间也是不能跨分配单位的,如果当前的空间不足,则会存储到下一个分配单位中。  
```
#include <stdio.h>

typedef struct
{
    unsigned char a;
    unsigned int  b;
    unsigned char c;
} debug_size1_t;

typedef struct
{
    unsigned char a;
    unsigned char b;
    unsigned int  c;
} debug_size2_t;

int main(void)
{
    printf("debug_size1_t size=%lu,debug_size2_t size=%lu\r\n", sizeof(debug_size1_t), sizeof(debug_size2_t));
    return 0;
}
```
编译执行输出结果：
```
debug_size1_t size=12,debug_size2_t size=8
```
结构体占用存储空间,以32位机为例  
- debug_size1_t 存储空间分布为a(1byte)+空闲(3byte)+b(4byte)+c(1byte)+空闲(3byte)=12(byte)。
- debug_size2_t 存储空间分布为a(1byte)+b(1byte)+空闲(2byte)+c(4byte)=8(byte)。


***


结构体数组:
```
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAXTITL 41
#define MAXAUTL 31
#define MAVXBKS 100

char * s_gets(char * st, int n);

struct book {
    char title[MAXTITL];
    char author[MAXAUTL];
    float value;
};

int main()
{
    struct book library[MAVXBKS];    //book类型的结构体数组
    int i;
    int index;
    // printf("请问你要录入多少本书的信息\n");
    printf("How many books do you want to enter? \n");
    do
    {
        scanf("%d", &index);
    } while (index > MAVXBKS);    
    getchar();
    for (i = 0; i < index; i++)
        {
        printf("请输入第%d本书的名称:\n",i+1);
        s_gets(library[i].title, MAXTITL);
        printf("输入其作者的名字:\n");
        s_gets(library[i].author, MAXAUTL);
        printf("请输入书本的价格:\n");
        scanf("%f", &library[i].value);
        getchar();
    }
    for (i = 0; i < index; i++)
    {
            printf("%d\t%s  是  %s 写的 定价为%f元\n", i,library[i].title, library[i].author, library[i].value);
    }
    system("pause");       

    return 0;
}

char * s_gets(char * st, int n)
{
    char * ret_val;
    char * find;
    ret_val = fgets(st, n, stdin);
    if (ret_val)
    {
        find = strchr(st, '\n');    //查找换行符
        if (find)    //  查找地址不为空
            *find = '\0';    //在此处放入一个空字符
        else
            while (getchar() != '\n')
        continue;    //处理剩余字符
    }
    return ret_val;
}
```


***


可以在声明结构体时初始化结构体变量:
```
#include <stdio.h>

int main(void) {
    struct Student {
        char name[50];
        int gender;
        int age;
    } student2 = {"张三",0,30};
    
    struct Student student1;
    printf("name:\n");    
}
```


***


**结构体数组**  

一个结构体变量中可以存放一组数据（如一个学生的学号，姓名，成绩等数据）。如果有10个学生的数据需要参加运算，显然应该用数组，这就是结构体数组。结构体数组与以前介绍过的数据值型数组不同之处在于每个数组元素都一个结构体类型的数据，它们分别包括各个成员（分量）项。  

**定义结构体数组**

和定义结构体变量的方法相仿，只需说明其为数组即可。
```
struct student
{
    int num;
    char name[20];
    char sex;
    int age;
    float score;
    char addr[30];
};
struct student stu[3];
```
以上定义了一个数组 stu，其元素为 struct student 类型数据，数组有 3 个元素。也可以直接定义一个结构体数组。如：
```
struct student
{
    int num;
    ....

}stu[3];

或

struct

{
    int num;
    　...
}stu[3];
```

**结构体数组的初始化**  
与其它类型数组一样，对结构体数组可以初始化如：
```
struct student
{
    int mum;
    char name[20];
    char sex;
    int age;
    float score;
    char addr[30];
}stu[3] = {{10101,"Li Lin", 'M', 18, 87.5, "103 Beijing Road"},
            {10101,"Li Lin", 'M', 18, 87.5, "103 Beijing Road"},
            {10101,"Li Lin", 'M', 18, 87.5, "103 Beijing Road"}};
```
定义数组 stu 时，元素个数可以不指定，即写成以下形式：
```
stu[] = {{...},{...},{...}};
```
编译时，系统会根据给出初值的结构体常量的个数来确定数组元素的个数。  
当然，数组的初始化也可以用以下形式：  
```
struct student
{
    int num;
    ...
};
struct student stu[] = {{...},{...},{...}};
```
即先声明结构体类型，然后定义数组为该结构体类型，在定义数组时初始化。  
从以上可以看到，结构体数组初始化的一般形式是在定义数组的后面加上：

**结构体数组应用举例**  
下面例子说明结构体数组的定义和引用。  
```
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct person
{
    char name[20];
    int count;
} leader[3] = {{"Li", 0}, {"Zhang", 0}, {"Fun", 0}};
            
void main()
{
    int i, j;
    char leader_name[20];
    for(i = 1; i<= 10;i++)
    {
        scanf("%s", leader_name);
        for(j=0;j<3;j++)
            if(strcmp(leader_name, leader[j].name) == 0)
                leader[j].count ++;
    }
    printf("\n");
    for(i=0;i<3;i++)
        printf("%5s: %d\n", leader[i].name, leader[i].count);
    system("pause");
}
```
运行结果如下：
```
LI
Li
Fun
Zhang
Zhang
Fun
Li
Fun
Zhang
Li

   Li: 3
Zhang: 3
  Fun: 3
```
> 更多内容参考：[C 结构体详解]( https://www.runoob.com/w3cnote/c-structures-intro.html )


***


使用结构数组存储书名/作者，结构体指针访问成员时，也可以对指针解引用再访问，如：`*struct_pointer.title;`(上面范例)。  
```
#include<stdio.h>
#include<string.h>

char * s_gets(char*st, int n);

#define MAXTITL 40
#define MAXAUTL 40
#define MAXBKS 100  // 书籍的最大数量

struct book {   //建立 book 模板
    char title[MAXTITL];
    char author[MAXAUTL];
    float value;
};

int main(void)
{
    struct book library[MAXBKS];  //book 结构类型数组
    int count = 0;
    int index;
    printf("请输入书名：\n");
    printf("按下 [enter] 键结束输入。\n");
    while (count < MAXBKS && s_gets(library[count].title, MAXTITL) != NULL && library[count].title[0] != '\0')
    {
        printf("请输入作者：\n");
        s_gets(library[count].author, MAXAUTL);
        printf("请输入价格：\n");
        scanf("%f", &library[count++].value);
        while (getchar() != '\n')
            continue;  //清理输入行
        if (count < MAXBKS)
            printf("输入下一本书。\n");
    }
    if (count > 0)  // 如果数组内有存书籍
    {
        printf("书的列表:\n");
        for (index = 0; index < count; index++)  // 遍历已存入的书籍,
            printf("%s - %s:$%.2f\n", library[index].title, library[index].author, library[index].value); // 将内容打印出来
    }
    else
        printf("没有书。\n");  // 否则就打印没书
        
    return 0;
}

char * s_gets(char * st, int n)  //输入文本(作家)函数
{
    char * ret_val;
    char * find;
    ret_val = fgets(st, n, stdin);
    if (ret_val)
    {
        find = strchr(st, '\n');  //查找换行符
        if (find)  //如果地址不是NULL
            *find = '\0';  //在此处放置一个空字符
        else
            while (getchar() != '\n')
                continue;
    }
    return ret_val;
}
```


***


**对一楼所讲内容的补充：结构体内存大小对齐原则**
- 结构体变量的首地址能够被其最宽基本类型成员的大小所整除。
- 结构体每个成员相对于结构体首地址的偏移量(offset)都是成员大小的整数倍，如有需要编译器会在成员之间加上填充字节(internal adding)。即结构体成员的末地址减去结构体首地址(第一个结构体成员的首地址)得到的偏移量都要是对应成员大小的整数倍。
- 结构体的总大小为结构体最宽基本类型成员大小的整数倍，如有需要编译器会在成员末尾加上填充字节。


***


##
#### 返回 [C基础知识](../C基础知识.md)