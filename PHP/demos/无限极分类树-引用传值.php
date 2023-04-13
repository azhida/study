<?php

function tree($array){
    //第一步 构造数据
    $items = [];
    foreach($array as $value){
        $items[$value['id']] = $value;
    }
    //第二部 遍历数据 生成树状结构
    $tree = [];
    foreach($items as $key => $item){
        if(isset($items[$item['pid']])){
            $items[$item['pid']]['children'][] = &$items[$key];
        }else{
            $tree[] = &$items[$key];
        }
    }
    return $tree;
}

$arr = [
    ['id' => 1, 'pid' => 0, 'name' => 'name1'],
    ['id' => 2, 'pid' => 1, 'name' => 'name2'],
    ['id' => 3, 'pid' => 2, 'name' => 'name3'],
];
$res = tree($arr);

var_dump($arr);