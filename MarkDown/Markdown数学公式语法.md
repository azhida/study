# Markdown 数学公式语法

参考： [Markdown 数学公式语法](https://www.jianshu.com/p/4460692eece4#14%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%92%8C%E8%A1%8C%E6%A0%87%E7%9A%84%E4%BD%BF%E7%94%A8) 和 [Cmd Markdown 公式指导手册](https://www.zybuluo.com/codeep/note/163962) 等处所做笔记。感谢大神。 

#  公式使用

### 插入公式

可插入行内公式或独立公式

- 行内公式

```
$ J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha} \text {，行内公式示例} $
```

这是行内公式  $ \qquad J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha} \text {，行内公式示例} $

- 独立公式

```
$$ J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha} \text {，独立公式示例} $$
```

$$
J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha} \text {，独立公式示例}
$$

### 输入上下标

`^` 表示上标, `_` 表示下标。如果上下标的内容多于一个字符，需要用 `{}` 将这些内容括成一个整体。上下标可以嵌套，也可以同时使用。

```
$$ x^{y^z}=(1+{\rm e}^x)^{-2xy^w} $$
```

$ x^{y^z}=(1+{\rm e}^x)^{-2xy^w} $

### 输入括号和分隔符

`()`、`[]` 和 `|` 表示符号本身，使用 `\{\}` 来表示 `{}` 。当要显示大号的括号或分隔符时，要用 `\left` 和 `\right` 命令。
一些特殊的括号：

| 输入    | 显示                                                      | 输入    | 显示                                                      |
| --------- | ----------------------------------------------------------- | --------- | ----------------------------------------------------------- |
| \langle | $ \langle $ | \rangle | $\rangle$  |
| \lceil  | $ \lceil $ | \rceil  | $ \rceil $   |
| \lfloor  | $ \lfloor $ | \rfloor  | $ \rfloor $   |
| \lbrace  | $ \lbrace $ | \rbrace  | $ \rbrace $   |

```
$$ f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right) $$
```

显示

$$
f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right)
$$

有时候要用 `\left.` 或 `\right.` 进行匹配而不显示本身。

```
$$ \left. \frac{{\rm d}u}{{\rm d}x} \right| _{x=0} $$
```

$$
\left. \frac{{\rm d}u}{{\rm d}x} \right| _{x=0}
$$

### 输入分数

通常使用 `\frac {分子} {分母}` 命令产生一个分数，分数可嵌套。

便捷情况可直接输入 `\frac ab` 来快速生成一个 $ \frac ab $ 。

如果分式很复杂，亦可使用 `分子 \over 分母` 命令，此时分数仅有一层。

```
$$\frac{a-1}{b-1} \quad and \quad {a+1\over b+1}$$
```

$$
\frac{a-1}{b-1} \quad and \quad {a+1 \over b+1}
$$

### 输入开方

使用 `\sqrt [根指数，省略时为2] {被开方数}` 命令输入开方。

```
$$\sqrt{2} \quad and \quad \sqrt[n]{3}$$
```

$$
\sqrt{2} \quad and \quad \sqrt[n]{3}
$$

### 输入省略号

数学公式中常见的省略号有两种，`\ldots` 表示与文本底线对齐的省略号，`\cdots` 表示与文本中线对齐的省略号。

```
$$f(x_1,x_2,\underbrace{\ldots}_{\rm ldots} ,x_n) = x_1^2 + x_2^2 + \underbrace{\cdots}_{\rm cdots} + x_n^2$$
```

$$
f(x_1,x_2,\underbrace{\ldots}_{\rm ldots} ,x_n) = x_1^2 + x_2^2 + \underbrace{\cdots}_{\rm cdots} + x_n^2
$$

### 输入矢量

使用 `\vec{矢量}` 来自动产生一个矢量。也可以使用 `\overrightarrow` 等命令自定义字母上方的符号。

```
$$\vec{a} \cdot \vec{b}=0$$
```

$$
\vec{a} \cdot \vec{b}=0
$$

```
$$\overleftarrow{xy} \quad and \quad \overleftrightarrow{xy} \quad and \quad \overrightarrow{xy}$$
```

$$
\overleftarrow{xy} \quad and \quad \overleftrightarrow{xy} \quad and \quad \overrightarrow{xy}
$$

### 输入积分

使用 `\int_积分下限^积分上限 {被积表达式}` 来输入一个积分。

```
$$\int_0^1 {x^2} \,{\rm d}x$$
```

$$
\int_0^1 {x^2} \,{\rm d}x
$$

本例中 `\,` 和 `{\rm d}` 部分可省略，但建议加入，能使式子更美观。

### 输入极限运算

使用 `\lim_{变量 \to 表达式} 表达式` 来输入一个极限。如有需求，可以更改 `\to` 符号至任意符号。

```
$$ \lim_{n \to +\infty} \frac{1}{n(n+1)} \quad and \quad \lim_{x\leftarrow{示例}} \frac{1}{n(n+1)} $$
```

$$
\lim_{n \to +\infty} \frac{1}{n(n+1)} \quad and \quad \lim_{x\leftarrow{示例}} \frac{1}{n(n+1)}
$$

### 输入累加、累乘运算

使用 `\sum_{下标表达式}^{上标表达式} {累加表达式}` 来输入一个累加。
与之类似，使用 `\prod` `\bigcup` `\bigcap` 来分别输入累乘、并集和交集。
此类符号在行内显示时上下标表达式将会移至右上角和右下角。

```
$$\sum_{i=1}^n \frac{1}{i^2} \quad and \quad \prod_{i=1}^n \frac{1}{i^2} \quad and \quad \bigcup_{i=1}^{2} R$$
```

$$
\sum_{i=1}^n \frac{1}{i^2} \quad and \quad \prod_{i=1}^n \frac{1}{i^2} \quad and \quad \bigcup_{i=1}^{2} R
$$

$ \sum_{i=1}^n \frac{1}{i^2} \quad and \quad \prod_{i=1}^n \frac{1}{i^2} \quad and \quad \bigcup_{i=1}^{2} R $

### 输入希腊字母

输入 `\小写希腊字母英文全称` 和 `\首字母大写希腊字母英文全称` 来分别输入小写和大写希腊字母。
**对于大写希腊字母与现有字母相同的，直接输入大写字母即可。**

| 输入 | 显示  | 输入 | 显示 | 输入 | 显示 | 输入 | 显示 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| \alpha   | $ \alpha $ | A       | A | \beta    | $ \beta $       | B        | ![B](https://math.jianshu.com/math?formula=B)                 |
| \gamma   | ![\gamma](https://math.jianshu.com/math?formula=%5Cgamma)     | \Gamma  | ![\Gamma](https://math.jianshu.com/math?formula=%5CGamma)   | \delta   | ![\delta](https://math.jianshu.com/math?formula=%5Cdelta)     | \Delta   | ![\Delta](https://math.jianshu.com/math?formula=%5CDelta)     |
| \epsilon | ![\epsilon](https://math.jianshu.com/math?formula=%5Cepsilon) | E       | ![E](https://math.jianshu.com/math?formula=E)               | \zeta    | ![\zeta](https://math.jianshu.com/math?formula=%5Czeta)       | Z        | ![Z](https://math.jianshu.com/math?formula=Z)                 |
| \eta     | ![\eta](https://math.jianshu.com/math?formula=%5Ceta)         | H       | ![H](https://math.jianshu.com/math?formula=H)               | \theta   | ![\theta](https://math.jianshu.com/math?formula=%5Ctheta)     | \Theta   | ![\Theta](https://math.jianshu.com/math?formula=%5CTheta)     |
| \iota    | ![\iota](https://math.jianshu.com/math?formula=%5Ciota)       | I       | ![I](https://math.jianshu.com/math?formula=I)               | \kappa   | ![\kappa](https://math.jianshu.com/math?formula=%5Ckappa)     | K        | ![K](https://math.jianshu.com/math?formula=K)                 |
| \lambda  | ![\lambda](https://math.jianshu.com/math?formula=%5Clambda)   | \Lambda | ![\Lambda](https://math.jianshu.com/math?formula=%5CLambda) | \mu      | ![\mu](https://math.jianshu.com/math?formula=%5Cmu)           | M        | ![M](https://math.jianshu.com/math?formula=M)                 |
| \nu      | ![\nu](https://math.jianshu.com/math?formula=%5Cnu)           | N       | ![N](https://math.jianshu.com/math?formula=N)               | \xi      | ![\xi](https://math.jianshu.com/math?formula=%5Cxi)           | \Xi      | ![\Xi](https://math.jianshu.com/math?formula=%5CXi)           |
| o        | ![o](https://math.jianshu.com/math?formula=o)                 | O       | ![O](https://math.jianshu.com/math?formula=O)               | \pi      | ![\pi](https://math.jianshu.com/math?formula=%5Cpi)           | \Pi      | ![\Pi](https://math.jianshu.com/math?formula=%5CPi)           |
| \rho     | ![\rho](https://math.jianshu.com/math?formula=%5Crho)         | P       | ![P](https://math.jianshu.com/math?formula=P)               | \sigma   | ![\sigma](https://math.jianshu.com/math?formula=%5Csigma)     | \Sigma   | ![\Sigma](https://math.jianshu.com/math?formula=%5CSigma)     |
| \tau     | ![\tau](https://math.jianshu.com/math?formula=%5Ctau)         | T       | ![T](https://math.jianshu.com/math?formula=T)               | \upsilon | ![\upsilon](https://math.jianshu.com/math?formula=%5Cupsilon) | \Upsilon | ![\Upsilon](https://math.jianshu.com/math?formula=%5CUpsilon) |
| \phi     | ![\phi](https://math.jianshu.com/math?formula=%5Cphi)         | \Phi    | ![\Phi](https://math.jianshu.com/math?formula=%5CPhi)       | \chi     | ![\chi](https://math.jianshu.com/math?formula=%5Cchi)         | X        | ![X](https://math.jianshu.com/math?formula=X)                 |
| \psi     | ![\psi](https://math.jianshu.com/math?formula=%5Cpsi)         | \Psi    | ![\Psi](https://math.jianshu.com/math?formula=%5CPsi)       | \omega   | ![\omega](https://math.jianshu.com/math?formula=%5Comega)     | \Omega   | ![\Omega](https://math.jianshu.com/math?formula=%5COmega)     |

**部分字母有变量专用形式，以 `\var-` 开头。**

| 小写形式 | 大写形式 | 变量形式    | 显示                                                                                                                          |
| ---------- | ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| \epsilon | E        | \varepsilon | ![\epsilon \mid E \mid \varepsilon](https://math.jianshu.com/math?formula=%5Cepsilon%20%5Cmid%20E%20%5Cmid%20%5Cvarepsilon)     |
| \theta   | \Theta   | \vartheta   | ![\theta \mid \Theta \mid \vartheta](https://math.jianshu.com/math?formula=%5Ctheta%20%5Cmid%20%5CTheta%20%5Cmid%20%5Cvartheta) |
| \rho     | P        | \varrho     | ![\rho \mid P \mid \varrho](https://math.jianshu.com/math?formula=%5Crho%20%5Cmid%20P%20%5Cmid%20%5Cvarrho)                     |
| \sigma   | \Sigma   | \varsigma   | ![\sigma \mid \Sigma \mid \varsigma](https://math.jianshu.com/math?formula=%5Csigma%20%5Cmid%20%5CSigma%20%5Cmid%20%5Cvarsigma) |
| \phi     | \Phi     | \varphi     | ![\phi \mid \Phi \mid \varphi](https://math.jianshu.com/math?formula=%5Cphi%20%5Cmid%20%5CPhi%20%5Cmid%20%5Cvarphi)             |

### 输入其它特殊字符

**若需要显示更大或更小的字符，在符号前插入 `\large` 或 `\small` 命令。**
若找不到需要的符号，使用 [$ \rm{Detexify^2} $](http://detexify.kirelabs.org/classify.html) 来画出想要的符号。

#### (1)．关系运算符

| 输入     | 显示                                                        | 输入       | 显示                                                            | 输入      | 显示                                                          | 输入       | 显示                                                            |
| ---------- | ------------------------------------------------------------- | ------------ | ----------------------------------------------------------------- | ----------- | --------------------------------------------------------------- | ------------ | ----------------------------------------------------------------- |
| \pm      | ![\pm](https://math.jianshu.com/math?formula=%5Cpm)           | \times     | ![\times](https://math.jianshu.com/math?formula=%5Ctimes)         | \div      | ![\div](https://math.jianshu.com/math?formula=%5Cdiv)           | \mid       | ![\mid](https://math.jianshu.com/math?formula=%5Cmid)             |
| \nmid    | ![\nmid](https://math.jianshu.com/math?formula=%5Cnmid)       | \cdot      | ![\cdot](https://math.jianshu.com/math?formula=%5Ccdot)           | \circ     | ![\circ](https://math.jianshu.com/math?formula=%5Ccirc)         | \ast       | ![\ast](https://math.jianshu.com/math?formula=%5Cast)             |
| \bigodot | ![\bigodot](https://math.jianshu.com/math?formula=%5Cbigodot) | \bigotimes | ![\bigotimes](https://math.jianshu.com/math?formula=%5Cbigotimes) | \bigoplus | ![\bigoplus](https://math.jianshu.com/math?formula=%5Cbigoplus) | \leq       | ![\leq](https://math.jianshu.com/math?formula=%5Cleq)             |
| \geq     | ![\geq](https://math.jianshu.com/math?formula=%5Cgeq)         | \neq       | ![\neq](https://math.jianshu.com/math?formula=%5Cneq)             | \approx   | ![\approx](https://math.jianshu.com/math?formula=%5Capprox)     | \equiv     | ![\equiv](https://math.jianshu.com/math?formula=%5Cequiv)         |
| \sum     | ![\sum](https://math.jianshu.com/math?formula=%5Csum)         | \prod      | ![\prod](https://math.jianshu.com/math?formula=%5Cprod)           | \coprod   | ![\coprod](https://math.jianshu.com/math?formula=%5Ccoprod)     | \backslash | ![\backslash](https://math.jianshu.com/math?formula=%5Cbackslash) |

### (2)．集合运算符

| 输入      | 显示                                                          | 输入      | 显示                                                          | 输入      | 显示                                                          |
| ----------- | --------------------------------------------------------------- | ----------- | --------------------------------------------------------------- | ----------- | --------------------------------------------------------------- |
| \emptyset | ![\emptyset](https://math.jianshu.com/math?formula=%5Cemptyset) | \in       | ![\in](https://math.jianshu.com/math?formula=%5Cin)             | \notin    | ![\notin](https://math.jianshu.com/math?formula=%5Cnotin)       |
| \subset   | ![\subset](https://math.jianshu.com/math?formula=%5Csubset)     | \supset   | ![\supset](https://math.jianshu.com/math?formula=%5Csupset)     | \subseteq | ![\subseteq](https://math.jianshu.com/math?formula=%5Csubseteq) |
| \supseteq | ![\supseteq](https://math.jianshu.com/math?formula=%5Csupseteq) | \bigcap   | ![\bigcap](https://math.jianshu.com/math?formula=%5Cbigcap)     | \bigcup   | ![\bigcup](https://math.jianshu.com/math?formula=%5Cbigcup)     |
| \bigvee   | ![\bigvee](https://math.jianshu.com/math?formula=%5Cbigvee)     | \bigwedge | ![\bigwedge](https://math.jianshu.com/math?formula=%5Cbigwedge) | \biguplus | ![\biguplus](https://math.jianshu.com/math?formula=%5Cbiguplus) |

### (3)．对数运算符

| 输入 | 显示                                                | 输入 | 显示                                              | 输入 | 显示                                              |
| ------ | ----------------------------------------------------- | ------ | --------------------------------------------------- | ------ | --------------------------------------------------- |
| \log | ![\log](https://math.jianshu.com/math?formula=%5Clog) | \lg  | ![\lg](https://math.jianshu.com/math?formula=%5Clg) | \ln  | ![\ln](https://math.jianshu.com/math?formula=%5Cln) |

### (4)．三角运算符

| 输入     | 显示                                                          | 输入 | 显示                                                | 输入     | 显示                                                          |
| ---------- | --------------------------------------------------------------- | ------ | ----------------------------------------------------- | ---------- | --------------------------------------------------------------- |
| 30^\circ | ![30^\circ](https://math.jianshu.com/math?formula=30%5E%5Ccirc) | \bot | ![\bot](https://math.jianshu.com/math?formula=%5Cbot) | \angle A | ![\angle A](https://math.jianshu.com/math?formula=%5Cangle%20A) |
| \sin     | ![\sin](https://math.jianshu.com/math?formula=%5Csin)           | \cos | ![\cos](https://math.jianshu.com/math?formula=%5Ccos) | \tan     | ![\tan](https://math.jianshu.com/math?formula=%5Ctan)           |
| \csc     | ![\csc](https://math.jianshu.com/math?formula=%5Ccsc)           | \sec | ![\sec](https://math.jianshu.com/math?formula=%5Csec) | \cot     | ![\cot](https://math.jianshu.com/math?formula=%5Ccot)           |

### (5)．微积分运算符

| 输入    | 显示                                                      | 输入   | 显示                                                    | 输入   | 显示                                                    |
| --------- | ----------------------------------------------------------- | -------- | --------------------------------------------------------- | -------- | --------------------------------------------------------- |
| \int    | ![\int](https://math.jianshu.com/math?formula=%5Cint)       | \iint  | ![\iint](https://math.jianshu.com/math?formula=%5Ciint)   | \iiint | ![\iiint](https://math.jianshu.com/math?formula=%5Ciiint) |
| \iiiint | ![\iiiint](https://math.jianshu.com/math?formula=%5Ciiiint) | \oint  | ![\oint](https://math.jianshu.com/math?formula=%5Coint)   | \prime | ![\prime](https://math.jianshu.com/math?formula=%5Cprime) |
| \lim    | ![\lim](https://math.jianshu.com/math?formula=%5Clim)       | \infty | ![\infty](https://math.jianshu.com/math?formula=%5Cinfty) | \nabla | ![\nabla](https://math.jianshu.com/math?formula=%5Cnabla) |

### (6)．逻辑运算符

| 输入     | 显示                                                        | 输入       | 显示                                                            | 输入 | 显示 |
| ---------- | ------------------------------------------------------------- | ------------ | ----------------------------------------------------------------- | ------ | ------ |
| \because | ![\because](https://math.jianshu.com/math?formula=%5Cbecause) | \therefore | ![\therefore](https://math.jianshu.com/math?formula=%5Ctherefore) |
| \forall  | ![\forall](https://math.jianshu.com/math?formula=%5Cforall)   | \exists    | ![\exists](https://math.jianshu.com/math?formula=%5Cexists)       | \not\subset | ![\not\subset](https://math.jianshu.com/math?formula=%5Cnot%5Csubset) |
| \not<    | ![\not<](https://math.jianshu.com/math?formula=%5Cnot%3C)     | \not>      | ![\not>](https://math.jianshu.com/math?formula=%5Cnot%3E)         | \not= | ![\not=](https://math.jianshu.com/math?formula=%5Cnot%3D) |

### (7)．戴帽符号

| 输入       | 显示                                                                | 输入            | 显示                                                                          |
| ------------ | --------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------- |
| \hat{xy}   | ![\hat{xy}](https://math.jianshu.com/math?formula=%5Chat%7Bxy%7D)     | \widehat{xyz}   | ![\widehat{xyz}](https://math.jianshu.com/math?formula=%5Cwidehat%7Bxyz%7D)     |
| \tilde{xy} | ![\tilde{xy}](https://math.jianshu.com/math?formula=%5Ctilde%7Bxy%7D) | \widetilde{xyz} | ![\widetilde{xyz}](https://math.jianshu.com/math?formula=%5Cwidetilde%7Bxyz%7D) |
| \check{x}  | ![\check{x}](https://math.jianshu.com/math?formula=%5Ccheck%7Bx%7D)   | \breve{y}       | ![\breve{y}](https://math.jianshu.com/math?formula=%5Cbreve%7By%7D)             |
| \grave{x}  | ![\grave{x}](https://math.jianshu.com/math?formula=%5Cgrave%7Bx%7D)   | \acute{y}       | ![\acute{y}](https://math.jianshu.com/math?formula=%5Cacute%7By%7D)             |

### (8)．连线符号

| 输入                                           | 显示                                                                                                                                                            |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \fbox{a+b+c+d}                                 | ![\fbox{a+b+c+d}](https://math.jianshu.com/math?formula=%5Cfbox%7Ba%2Bb%2Bc%2Bd%7D)                                                                               |
| \overleftarrow{a+b+c+d}                        | ![\overleftarrow{a+b+c+d}](https://math.jianshu.com/math?formula=%5Coverleftarrow%7Ba%2Bb%2Bc%2Bd%7D)                                                             |
| \overrightarrow{a+b+c+d}                       | ![\overrightarrow{a+b+c+d}](https://math.jianshu.com/math?formula=%5Coverrightarrow%7Ba%2Bb%2Bc%2Bd%7D)                                                           |
| \overleftrightarrow{a+b+c+d}                   | ![\overleftrightarrow{a+b+c+d}](https://math.jianshu.com/math?formula=%5Coverleftrightarrow%7Ba%2Bb%2Bc%2Bd%7D)                                                   |
| \underleftarrow{a+b+c+d}                       | ![\underleftarrow{a+b+c+d}](https://math.jianshu.com/math?formula=%5Cunderleftarrow%7Ba%2Bb%2Bc%2Bd%7D)                                                           |
| \underrightarrow{a+b+c+d}                      | ![\underrightarrow{a+b+c+d}](https://math.jianshu.com/math?formula=%5Cunderrightarrow%7Ba%2Bb%2Bc%2Bd%7D)                                                         |
| \underleftrightarrow{a+b+c+d}                  | ![\underleftrightarrow{a+b+c+d}](https://math.jianshu.com/math?formula=%5Cunderleftrightarrow%7Ba%2Bb%2Bc%2Bd%7D)                                                 |
| \overline{a+b+c+d}                             | ![\overline{a+b+c+d}](https://math.jianshu.com/math?formula=%5Coverline%7Ba%2Bb%2Bc%2Bd%7D)                                                                       |
| \underline{a+b+c+d}                            | ![\underline{a+b+c+d}](https://math.jianshu.com/math?formula=%5Cunderline%7Ba%2Bb%2Bc%2Bd%7D)                                                                     |
| \overbrace{a+b+c+d}^{Sample}                   | ![\overbrace{a+b+c+d}^{Sample}](https://math.jianshu.com/math?formula=%5Coverbrace%7Ba%2Bb%2Bc%2Bd%7D%5E%7BSample%7D)                                             |
| \underbrace{a+b+c+d}_{Sample}                  | ![\underbrace{a+b+c+d}_{Sample}](https://math.jianshu.com/math?formula=%5Cunderbrace%7Ba%2Bb%2Bc%2Bd%7D_%7BSample%7D)                                             |
| \overbrace{a+\underbrace{b+c}_{1.0}+d}^{2.0}   | ![\overbrace{a+\underbrace{b+c}_{1.0}+d}^{2.0}](https://math.jianshu.com/math?formula=%5Coverbrace%7Ba%2B%5Cunderbrace%7Bb%2Bc%7D_%7B1.0%7D%2Bd%7D%5E%7B2.0%7D)   |
| \underbrace{a\cdot a\cdots a}_{b\text{ times}} | ![\underbrace{a\cdot a\cdots a}_{b\text{ times}}](https://math.jianshu.com/math?formula=%5Cunderbrace%7Ba%5Ccdot%20a%5Ccdots%20a%7D_%7Bb%5Ctext%7B%20times%7D%7D) |

#### (9)．箭头符号

- 推荐使用符号：

|输入|显示|输入|显示|输入|显示|输入|显示|输入|显示|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|\to| $ \to $ | \mapsto| $ \mapsto $ | \implies| $ \implies $ | \iff| $ \iff $ | \impliedby| $ \impliedby $ |

- 其它可用符号：

|输入|显示|输入|显示|
|:--:|:--:|:--:|:--:|
|\uparrow|![\uparrow](https://math.jianshu.com/math?formula=%5Cuparrow)|\Uparrow|![\Uparrow](https://math.jianshu.com/math?formula=%5CUparrow)|
|\downarrow|![\downarrow](https://math.jianshu.com/math?formula=%5Cdownarrow)|\Downarrow|![\Downarrow](https://math.jianshu.com/math?formula=%5CDownarrow)|
|\leftarrow|![\leftarrow](https://math.jianshu.com/math?formula=%5Cleftarrow)|\Leftarrow|![\Leftarrow](https://math.jianshu.com/math?formula=%5CLeftarrow)|
|\rightarrow|![\rightarrow](https://math.jianshu.com/math?formula=%5Crightarrow)|\Rightarrow|![\Rightarrow](https://math.jianshu.com/math?formula=%5CRightarrow)|
|\leftrightarrow|![\leftrightarrow](https://math.jianshu.com/math?formula=%5Cleftrightarrow)|\Leftrightarrow|![\Leftrightarrow](https://math.jianshu.com/math?formula=%5CLeftrightarrow)|
|\longleftarrow|![\longleftarrow](https://math.jianshu.com/math?formula=%5Clongleftarrow)|\Longleftarrow|![\Longleftarrow](https://math.jianshu.com/math?formula=%5CLongleftarrow)|
|\longrightarrow|![\longrightarrow](https://math.jianshu.com/math?formula=%5Clongrightarrow)|\Longrightarrow|![\Longrightarrow](https://math.jianshu.com/math?formula=%5CLongrightarrow)|
|\longleftrightarrow|![\longleftrightarrow](https://math.jianshu.com/math?formula=%5Clongleftrightarrow)|\Longleftrightarrow|![\Longleftrightarrow](https://math.jianshu.com/math?formula=%5CLongleftrightarrow)|

### 如何进行字体转换

若要对公式的某一部分字符进行字体转换，可以用 `{\字体 {需转换的部分字符}}` 命令，其中 `\字体` 部分可以参照下表选择合适的字体。一般情况下，公式默认为意大利体 ![italic](https://math.jianshu.com/math?formula=italic) 。
示例中 **全部大写** 的字体仅大写可用。

|输入|说明|显示|输入|说明|显示|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|\rm|罗马体|![\rm{Sample}](https://math.jianshu.com/math?formula=%5Crm%7BSample%7D)|\cal|花体|![\cal{SAMPLE}](https://math.jianshu.com/math?formula=%5Ccal%7BSAMPLE%7D)|
|\it|意大利体|![\it{Sample}](https://math.jianshu.com/math?formula=%5Cit%7BSample%7D)|\Bbb|黑板粗体|![\Bbb{SAMPLE}](https://math.jianshu.com/math?formula=%5CBbb%7BSAMPLE%7D)|
|\bf|粗体|![\bf{Sample}](https://math.jianshu.com/math?formula=%5Cbf%7BSample%7D)|\mit|数学斜体|![\mit{SAMPLE}](https://math.jianshu.com/math?formula=%5Cmit%7BSAMPLE%7D)|
|\sf|等线体|![\sf{Sample}](https://math.jianshu.com/math?formula=%5Csf%7BSample%7D)|\scr|手写体|![\scr{SAMPLE}](https://math.jianshu.com/math?formula=%5Cscr%7BSAMPLE%7D)|
|\tt|打字机体|![\tt{Sample}](https://math.jianshu.com/math?formula=%5Ctt%7BSample%7D)|
|\frak|旧德式字体|![\frak{Sample}](https://math.jianshu.com/math?formula=%5Cfrak%7BSample%7D)|

转换字体十分常用，例如在积分中：

```
\begin{array}{cc}
\mathrm{Bad} & \mathrm{Better} \\
\hline \\
\int_0^1 x^2 dx & \int_0^1 x^2 \,{\rm d}x
\end{array}
```

$$
\begin{array}{cc}
\mathrm{Bad} & \mathrm{Better} \\
\hline \\
\int_0^1 x^2 dx & \int_0^1 x^2 \,{\rm d}x
\end{array}
$$

注意比较两个式子间 ![dx](https://math.jianshu.com/math?formula=dx)与 ![{\rm d} x](https://math.jianshu.com/math?formula=%7B%5Crm%20d%7D%20x)的不同。
使用 `\operatorname` 命令也可以达到相同的效果，详见 [定义新的符号 \operatorname](https://www.jianshu.com/p/4460692eece4#1%E5%AE%9A%E4%B9%89%E6%96%B0%E7%9A%84%E7%AC%A6%E5%8F%B7-operatorname) 。

### 大括号和行标的使用

使用 `\left` 和 `\right` 来创建自动匹配高度的 (圆括号)，[方括号] 和 {花括号} 。
在每个公式末尾前使用 `\tag{行标}` 来实现行标。

```
$$
f\left(
   \left[ 
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
\tag{行标}
$$
```

$$
f\left(
   \left[ 
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
\tag{行标}
$$

如果你需要在不同的行显示对应括号，可以在每一行对应处使用 `\left.` 或 `\right.` 来放一个"影子"括号：

```
$$
\begin{aligned}
a=&\left(1+2+3+  \cdots \right. \\
& \cdots+ \left. \infty-2+\infty-1+\infty\right)
\end{aligned}
$$
```

$$
\begin{aligned}
a=&\left(1+2+3+  \cdots \right. \\
& \cdots+ \left. \infty-2+\infty-1+\infty\right)
\end{aligned}
$$

如果你需要将行内显示的分隔符也变大，可以使用 `\middle` 命令：

```
$$
\left\langle  
  q
\middle\|
  \frac{\frac{x}{y}}{\frac{u}{v}}
\middle| 
   p 
\right\rangle
$$
```

$$
\left\langle  
  q
\middle\|
  \frac{\frac{x}{y}}{\frac{u}{v}}
\middle| 
   p 
\right\rangle
$$

### 15．其它命令

#### (1)．定义新的符号 \operatorname

查询 [关于此命令的定义](https://links.jianshu.com/go?to=http%3A%2F%2Fmeta.math.stackexchange.com%2Fquestions%2F5020%2Fmathjax-basic-tutorial-and-quick-reference%2F15077%2315077) 和 [关于此命令的讨论](https://links.jianshu.com/go?to=http%3A%2F%2Fmeta.math.stackexchange.com%2Fsearch%3Fq%3Doperatorname) 来进一步了解此命令。

```
$$ \operatorname{Symbol} A $$
```

$$
\operatorname{Symbol} A
$$

#### (2)．添加注释文字 \text

在 `\text {文字}` 中仍可以使用 `$公式$` 插入其它公式。

```
$$ f(n)= \begin{cases} n/2, & \text {if $n$ is even} \\ 3n+1, & \text{if $n$ is odd} \end{cases} $$
```

$$
f(n)= \begin{cases} n/2, & \text {if $n$ is even} \\ 3n+1, & \text{if $n$ is odd} \end{cases}
$$

#### (3)．在字符间加入空格

有四种宽度的空格可以使用： `\,`、`\;`、`\quad` 和 `\qquad` 。

```
$$ a \, b \mid a \; b \mid a \quad b \mid a \qquad b $$
```

$$
a \, b \mid a \; b \mid a \quad b \mid a \qquad b
$$

当然，使用 `\text {n个空格}` 也可以达到同样效果。

#### (4)．更改文字颜色

使用 `\color{颜色}{文字}` 来更改特定的文字颜色。
更改文字颜色 **需要浏览器支持** ，如果浏览器不知道你所需的颜色，那么文字将被渲染为黑色。
对于较旧的浏览器（HTML4与CSS2），以下颜色是被支持的：

| 输入   | 显示                                                                                        | 输入    | 显示                                                                                          |
| -------- | --------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------- |
| black  | ![\color{black}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bblack%7D%7Btext%7D)   | grey    | ![\color{grey}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bgrey%7D%7Btext%7D)       |
| silver | ![\color{silver}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bsilver%7D%7Btext%7D) | white   | ![\color{white}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bwhite%7D%7Btext%7D)     |
| maroon | ![\color{maroon}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bmaroon%7D%7Btext%7D) | red     | ![\color{red}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bred%7D%7Btext%7D)         |
| yellow | ![\color{yellow}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Byellow%7D%7Btext%7D) | lime    | ![\color{lime}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Blime%7D%7Btext%7D)       |
| olive  | ![\color{olive}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bolive%7D%7Btext%7D)   | green   | ![\color{green}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bgreen%7D%7Btext%7D)     |
| teal   | ![\color{teal}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bteal%7D%7Btext%7D)     | auqa    | ![\color{auqa}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bauqa%7D%7Btext%7D)       |
| blue   | ![\color{blue}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bblue%7D%7Btext%7D)     | navy    | ![\color{navy}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bnavy%7D%7Btext%7D)       |
| purple | ![\color{purple}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bpurple%7D%7Btext%7D) | fuchsia | ![\color{fuchsia}{text}](https://math.jianshu.com/math?formula=%5Ccolor%7Bfuchsia%7D%7Btext%7D) |

对于较新的浏览器（HTML5与CSS3），额外的124种颜色将被支持：
输入 `\color {#rgb} {text}` 来自定义更多的颜色，其中 `#rgb` 的 `r` `g` `b` 可输入 `0-9` 和 `a-f` 来表示红色、绿色和蓝色的纯度（饱和度）。

```
\begin{array}{|rrrrrrrr|}\hline
\verb+#000+ & \color{#000}{text} & & &
\verb+#00F+ & \color{#00F}{text} & & \\
& & \verb+#0F0+ & \color{#0F0}{text} &
& & \verb+#0FF+ & \color{#0FF}{text}\\
\verb+#F00+ & \color{#F00}{text} & & &
\verb+#F0F+ & \color{#F0F}{text} & & \\
& & \verb+#FF0+ & \color{#FF0}{text} &
& & \verb+#FFF+ & \color{#FFF}{text}\\
\hline
\end{array}
```

$$
\begin{array}{|rrrrrrrr|}\hline
\verb+#000+ & \color{#000}{text} & & &
\verb+#00F+ & \color{#00F}{text} & & \\
& & \verb+#0F0+ & \color{#0F0}{text} &
& & \verb+#0FF+ & \color{#0FF}{text}\\
\verb+#F00+ & \color{#F00}{text} & & &
\verb+#F0F+ & \color{#F0F}{text} & & \\
& & \verb+#FF0+ & \color{#FF0}{text} &
& & \verb+#FFF+ & \color{#FFF}{text}\\
\hline
\end{array}
$$

```
\begin{array}{|rrrrrrrr|}
\hline
\verb+#000+ & \color{#000}{text} & \verb+#005+ & \color{#005}{text} & \verb+#00A+ & \color{#00A}{text} & \verb+#00F+ & \color{#00F}{text}  \\
\verb+#500+ & \color{#500}{text} & \verb+#505+ & \color{#505}{text} & \verb+#50A+ & \color{#50A}{text} & \verb+#50F+ & \color{#50F}{text}  \\
\verb+#A00+ & \color{#A00}{text} & \verb+#A05+ & \color{#A05}{text} & \verb+#A0A+ & \color{#A0A}{text} & \verb+#A0F+ & \color{#A0F}{text}  \\
\verb+#F00+ & \color{#F00}{text} & \verb+#F05+ & \color{#F05}{text} & \verb+#F0A+ & \color{#F0A}{text} & \verb+#F0F+ & \color{#F0F}{text}  \\
\hline
\verb+#080+ & \color{#080}{text} & \verb+#085+ & \color{#085}{text} & \verb+#08A+ & \color{#08A}{text} & \verb+#08F+ & \color{#08F}{text}  \\
\verb+#580+ & \color{#580}{text} & \verb+#585+ & \color{#585}{text} & \verb+#58A+ & \color{#58A}{text} & \verb+#58F+ & \color{#58F}{text}  \\
\verb+#A80+ & \color{#A80}{text} & \verb+#A85+ & \color{#A85}{text} & \verb+#A8A+ & \color{#A8A}{text} & \verb+#A8F+ & \color{#A8F}{text}  \\
\verb+#F80+ & \color{#F80}{text} & \verb+#F85+ & \color{#F85}{text} & \verb+#F8A+ & \color{#F8A}{text} & \verb+#F8F+ & \color{#F8F}{text}  \\
\hline
\verb+#0F0+ & \color{#0F0}{text} & \verb+#0F5+ & \color{#0F5}{text} & \verb+#0FA+ & \color{#0FA}{text} & \verb+#0FF+ & \color{#0FF}{text}  \\
\verb+#5F0+ & \color{#5F0}{text} & \verb+#5F5+ & \color{#5F5}{text} & \verb+#5FA+ & \color{#5FA}{text} & \verb+#5FF+ & \color{#5FF}{text}  \\
\verb+#AF0+ & \color{#AF0}{text} & \verb+#AF5+ & \color{#AF5}{text} & \verb+#AFA+ & \color{#AFA}{text} & \verb+#AFF+ & \color{#AFF}{text}  \\
\verb+#FF0+ & \color{#FF0}{text} & \verb+#FF5+ & \color{#FF5}{text} & \verb+#FFA+ & \color{#FFA}{text} & \verb+#FFF+ & \color{#FFF}{text}  \\
\hline
\end{array}
```

$$
\begin{array}{|rrrrrrrr|}
\hline
\verb+#000+ & \color{#000}{text} & \verb+#005+ & \color{#005}{text} & \verb+#00A+ & \color{#00A}{text} & \verb+#00F+ & \color{#00F}{text}  \\
\verb+#500+ & \color{#500}{text} & \verb+#505+ & \color{#505}{text} & \verb+#50A+ & \color{#50A}{text} & \verb+#50F+ & \color{#50F}{text}  \\
\verb+#A00+ & \color{#A00}{text} & \verb+#A05+ & \color{#A05}{text} & \verb+#A0A+ & \color{#A0A}{text} & \verb+#A0F+ & \color{#A0F}{text}  \\
\verb+#F00+ & \color{#F00}{text} & \verb+#F05+ & \color{#F05}{text} & \verb+#F0A+ & \color{#F0A}{text} & \verb+#F0F+ & \color{#F0F}{text}  \\
\hline
\verb+#080+ & \color{#080}{text} & \verb+#085+ & \color{#085}{text} & \verb+#08A+ & \color{#08A}{text} & \verb+#08F+ & \color{#08F}{text}  \\
\verb+#580+ & \color{#580}{text} & \verb+#585+ & \color{#585}{text} & \verb+#58A+ & \color{#58A}{text} & \verb+#58F+ & \color{#58F}{text}  \\
\verb+#A80+ & \color{#A80}{text} & \verb+#A85+ & \color{#A85}{text} & \verb+#A8A+ & \color{#A8A}{text} & \verb+#A8F+ & \color{#A8F}{text}  \\
\verb+#F80+ & \color{#F80}{text} & \verb+#F85+ & \color{#F85}{text} & \verb+#F8A+ & \color{#F8A}{text} & \verb+#F8F+ & \color{#F8F}{text}  \\
\hline
\verb+#0F0+ & \color{#0F0}{text} & \verb+#0F5+ & \color{#0F5}{text} & \verb+#0FA+ & \color{#0FA}{text} & \verb+#0FF+ & \color{#0FF}{text}  \\
\verb+#5F0+ & \color{#5F0}{text} & \verb+#5F5+ & \color{#5F5}{text} & \verb+#5FA+ & \color{#5FA}{text} & \verb+#5FF+ & \color{#5FF}{text}  \\
\verb+#AF0+ & \color{#AF0}{text} & \verb+#AF5+ & \color{#AF5}{text} & \verb+#AFA+ & \color{#AFA}{text} & \verb+#AFF+ & \color{#AFF}{text}  \\
\verb+#FF0+ & \color{#FF0}{text} & \verb+#FF5+ & \color{#FF5}{text} & \verb+#FFA+ & \color{#FFA}{text} & \verb+#FFF+ & \color{#FFF}{text}  \\
\hline
\end{array}
$$

#### (5)．添加删除线

使用删除线功能必须声明 `$$` 符号。
在公式内使用 `\require{cancel}` 来允许 **片段删除线** 的显示。
声明片段删除线后，使用 `\cancel{字符}`、`\bcancel{字符}`、`\xcancel{字符}` 和 `\cancelto{字符}` 来实现各种片段删除线效果。

```
$$
\require{cancel}\begin{array}{rl}
\verb|y+\cancel{x}| & y+\cancel{x}\\
\verb|\cancel{y+x}| & \cancel{y+x}\\
\verb|y+\bcancel{x}| & y+\bcancel{x}\\
\verb|y+\xcancel{x}| & y+\xcancel{x}\\
\verb|y+\cancelto{0}{x}| & y+\cancelto{0}{x}\\
\verb+\frac{1\cancel9}{\cancel95} = \frac15+& \frac{1\cancel9}{\cancel95} = \frac15 \\
\end{array}
$$
```

使用 `\require{enclose}` 来允许 **整段删除线** 的显示。
声明整段删除线后，使用 `\enclose{删除线效果}{字符}` 来实现各种整段删除线效果。
其中，删除线效果有 `horizontalstrike`、`verticalstrike`、`updiagonalstrike` 和 `downdiagonalstrike`，可叠加使用。

```
$$
\require{enclose}\begin{array}{rl}
\verb|\enclose{horizontalstrike}{x+y}| & \enclose{horizontalstrike}{x+y}\\
\verb|\enclose{verticalstrike}{\frac xy}| & \enclose{verticalstrike}{\frac xy}\\
\verb|\enclose{updiagonalstrike}{x+y}| & \enclose{updiagonalstrike}{x+y}\\
\verb|\enclose{downdiagonalstrike}{x+y}| & \enclose{downdiagonalstrike}{x+y}\\
\verb|\enclose{horizontalstrike,updiagonalstrike}{x+y}| & \enclose{horizontalstrike,updiagonalstrike}{x+y}\\
\end{array}
$$
```

此外， `\enclose` 命令还可以产生包围的边框和圆等，参见 [MathML Menclose Documentation](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FMathML%2FElement%2Fmenclose) 以查看更多效果。

# 二、矩阵使用参考



# 

