# Go ���Ի����﷨

��һ�½������Ѿ��˽��� Go ���ԵĻ�����ɽṹ�����½����ǽ�ѧϰ Go ���ԵĻ����﷨��

## Go ���

Go ��������ɶ�������ɣ������ǹؼ��֣���ʶ�����������ַ��������š������� GO ����� 6 �������ɣ�

```
fmt.Println("Hello, World!")
```

6 �������(ÿ��һ��)��

```
1. fmt
2. .
3. Println
4. (
5. "Hello, World!"
6. )
```

## �зָ���

�� Go �����У�һ�д���һ����������ÿ����䲻��Ҫ�� C �����е���������һ���Էֺ� ; ��β����Ϊ��Щ���������� Go �������Զ���ɡ�

�������㽫������д��ͬһ�У����������ʹ�� ; ��Ϊ���֣�����ʵ�ʿ��������ǲ�����������������
����Ϊ������䣺

```
fmt.Println("Hello, World!")
fmt.Println("����̳̣�runoob.com")
```

## ע��

ע�Ͳ��ᱻ���룬ÿһ����Ӧ�������ע�͡�
����ע���������ע����ʽ����������κεط�ʹ���� // ��ͷ�ĵ���ע�͡�����ע��Ҳ�п�ע�ͣ������� /* ��ͷ������ */ ��β���磺

```
// ����ע��
/*
 Author by ����̳�
 ���Ƕ���ע��
 */
```

## ��ʶ��

��ʶ�������������������͵ȳ���ʵ�塣һ����ʶ��ʵ���Ͼ���һ�����Ƕ����ĸ(A~Z��a~z)����(0~9)���»���_��ɵ����У����ǵ�һ���ַ���������ĸ���»��߶����������֡�

��������Ч�ı�ʶ����

```
mahesh   kumar   abc   move_name   a_123
myname50   _temp   j   a23b9   retVal
```

��������Ч�ı�ʶ����

* 1ab�������ֿ�ͷ��
* case��Go ���ԵĹؼ��֣�
* a+b��������ǲ�����ģ�

## �ַ�������

Go ���Ե��ַ������ӿ���ͨ�� `+` ʵ�֣�

```
package main
import "fmt"
func main() {
    fmt.Println("Google" + "Runoob")
}
```

����ʵ��������Ϊ��

```
GoogleRunoob
```

## �ؼ���

�����о��� Go �����л�ʹ�õ��� 25 ���ؼ��ֻ����֣�

| break    | default     | func   | interface | select |
| ---------- | ------------- | -------- | ----------- | -------- |
| case     | defer       | go     | map       | struct |
| chan     | else        | goto   | package   | switch |
| const    | fallthrough | if     | range     | type   |
| continue | for         | import | return    | var    |

�������Ͻ��ܵ���Щ�ؼ��֣�Go ���Ի��� 36 ��Ԥ�����ʶ����

| append | bool    | byte    | cap     | close  | complex | complex64 | complex128 | uint16  |
| -------- | --------- | --------- | --------- | -------- | --------- | ----------- | ------------ | --------- |
| copy   | false   | float32 | float64 | imag   | int     | int8      | int16      | uint32  |
| int32  | int64   | iota    | len     | make   | new     | nil       | panic      | uint64  |
| print  | println | real    | recover | string | true    | uint      | uint8      | uintptr |

����һ���ɹؼ��֡�����������������������ͺͺ�����ɡ�
�����п��ܻ�ʹ�õ���Щ�ָ��������� ()�������� [] �ʹ����� {}��
�����п��ܻ�ʹ�õ���Щ�����ţ�.��,��;��: �� ����

## Go ���ԵĿո�

Go �����б�������������ʹ�ÿո�������磺

```
var age int;
```

������ʵ�ʹ�ÿո����ó�������Ķ���

�޿ո�

```
fruit=apples+oranges;
```

�ڱ���������������ո񣬳��������������ۣ��磺

```
fruit = apples + oranges;
```

## ��ʽ���ַ���

Go ������ʹ�� `fmt.Sprintf` ��ʽ���ַ�������ֵ���´���

```
package main

import (
    "fmt"
)

func main() {
   // %d ��ʾ�������֣�%s ��ʾ�ַ���
    var stockcode=123
    var enddate="2020-12-31"
    var url="Code=%d&endDate=%s"
    var target_url=fmt.Sprintf(url,stockcode,enddate)
    fmt.Println(target_url)
}
```

������Ϊ��

```
Code=123&endDate=2020-12-31
```

> �������ݲμ���[Go fmt.Sprintf ��ʽ���ַ���](https://www.runoob.com/go/go-fmt-sprintf.html)

# ���߱ʼ�

**Go �����һ��ṹ: basic_structure.go**

```
// ��ǰ����İ���
package main

// ����������
import . "fmt"

// ��������
const PI = 3.14

// ȫ�ֱ����������͸�ֵ
var name = "gopher"

// һ����������
type newType int

// �ṹ������
type gopher struct{}

// �ӿڵ�����
type golang interface{}

// ��main������Ϊ������ڵ�����
func main() {
    Println("Hello World!")
}
```

Go ������ͨ�� **package** ����֯�ġ�
ֻ�� package ����Ϊ main ��Դ���ļ����԰��� main ������
һ����ִ�г������ҽ���һ�� **main** ����
ͨ�� **import** �ؼ��������������� **main** ����
����ͨ�� **import** �ؼ��ֵ�������:

```
import "fmt"
import "io"
```

Ҳ����ͬʱ������:

```
import (
    "fmt"
    "math"
)
```

���磺

```
package main
import (
    "fmt"
    "math"
)
func main() {
    fmt.Println(math.Exp2(10))  // 1024
}
```

ʹ�� <PackageName>.<FunctionName> ����:

```
package ������
// Ϊfmt�����Ϊfmt2
import fmt2 "fmt"
```

ʡ�Ե���(������ʹ��):

```
// ���õ�ʱ��ֻ��ҪPrintln()��������Ҫfmt.Println()
import . "fmt"
```

ǰ��Ӹ����ʾʡ�Ե��ã���ô���ø�ģ������ĺ��������Բ���дģ��������:

```
import . "fmt"
func main (){
    Println("hello,world")
}
```

ͨ�� **const** �ؼ��������г����Ķ��塣

ͨ���ں������ⲿʹ�� **var** �ؼ���������ȫ�ֱ����������͸�ֵ��

ͨ�� **type** �ؼ��������нṹ(struct)�ͽӿ�(interface)��������

ͨ�� **func** �ؼ��������к�����������

**�ɼ��Թ���**

Go�����У�ʹ�ô�Сд�������ó��������������͡��ӿڡ��ṹ�����Ƿ���Ա��ⲿ�������á�

����������ĸСд��Ϊ **private** :

```
func getId() {}
```

����������ĸ��д��Ϊ **public** :

```
func Printf() {}
```

---

Go ���Եİ�����һ��Ϊ: **��Ŀ��/����**

```
import "test/controllers"
```

�����ĵ���Ϊ: **����.������()**

```
controllers.Test()
```

�����ڷ�������ΪСд��������÷���������ĸ����Ϊ��д��



