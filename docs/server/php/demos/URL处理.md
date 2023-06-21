# URL 处理

## 解析 URL

```php
<?php

$url = 'http://127.0.0.1:8080?a=1&b=2';
$url_arr = parse_url($url);
var_dump($url_arr);

```

结果

```
array(4) {
  ["scheme"]=>
  string(4) "http"
  ["host"]=>
  string(9) "127.0.0.1"
  ["port"]=>
  int(8080)
  ["query"]=>
  string(7) "a=1&b=2"
}
```

## 参数转数组

```php
<?php

$url = 'http://127.0.0.1:8080?a=1&b=2';
$url_query = parse_url($url, PHP_URL_QUERY);
var_dump($url_query);

$url_query_arr = [];
parse_str($url_query, $url_query_arr);
var_dump($url_query_arr);

```

结果

```
string(7) "a=1&b=2"

array(2) {
  ["a"]=>
  string(1) "1"
  ["b"]=>
  string(1) "2"
}
```

## 数组转参数

```php
<?php

$url = 'http://127.0.0.1:8080?a=1&b=2';
$url_query = parse_url($url, PHP_URL_QUERY);
var_dump($url_query);

$url_query_arr = [];
parse_str($url_query, $url_query_arr);
var_dump($url_query_arr);

```

结果

```
string(7) "a=1&b=2"

array(2) {
  ["a"]=>
  string(1) "1"
  ["b"]=>
  string(1) "2"
}
```

## 追加参数

```php
<?php

$url = 'http://127.0.0.1:8080?a=1&b=2';
$url_query = parse_url($url, PHP_URL_QUERY);
var_dump($url_query);

$url_query_arr = [];
parse_str($url_query, $url_query_arr);
var_dump($url_query_arr);

$add_query_arr = [
	'c' => 'ccc',
	'd' => 'ddd',
	"a" => 'aaa'
];
$url_query_arr = array_merge($url_query_arr, $add_query_arr);
var_dump($url_query_arr);

$url_query_str = http_build_query($url_query_arr);
var_dump($url_query_str);

$new_url = explode('?', $url)[0] . '?' . $url_query_str;
var_dump($new_url);
```

结果

```
string(7) "a=1&b=2"

array(2) {
  ["a"]=>
  string(1) "1"
  ["b"]=>
  string(1) "2"
}

array(4) {
  ["a"]=>
  string(3) "aaa"
  ["b"]=>
  string(1) "2"
  ["c"]=>
  string(3) "ccc"
  ["d"]=>
  string(3) "ddd"
}

string(21) "a=aaa&b=2&c=ccc&d=ddd"

string(43) "http://127.0.0.1:8080?a=aaa&b=2&c=ccc&d=ddd"
```