## 多格式文件流解析器
composer url: https://packagist.org/packages/rodenastyle/stream-parser

```
composer require rodenastyle/stream-parser
```

用法：routes/web.php 添加路由
```
use Tightenco\Collect\Support\Collection;
use Rodenastyle\StreamParser\StreamParser;

Route::get('xml', function() {
    StreamParser::xml("https://www.w3schools.com/xml/plant_catalog.xml")->each(function(Collection $item){
        dump($item);
    });
});

Route::get('json', function() {
    StreamParser::json('https://unpkg.com/province-city-china@2.0.5/dist/data.json')->each(function(Collection $item){
        dump($item);
    });
});

Route::get('csv', function() {
    StreamParser::csv('https://unpkg.com/province-city-china/dist/data.csv')->each(function(Collection $item){
        dump($item);
    });
});
```

[教程](https://learnku.com/courses/laravel-package/2019/php-7-stream-parser-supports-multi-format-file-stream-parser-rodenastylestream-parser/3834)