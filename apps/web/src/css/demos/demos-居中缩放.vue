<template>
    <div class="main">
        原始展示：
        <div class="box">
            <div class="init" v-for="i in 5">
                <span >start-- 这里的文字很长很长 --end</span>
            </div>
        </div>

        缩放后展示：
        <div class="box">
            <div class="item" v-for="i in 5">
                <span>start-- 这里的文字很长很长 --end</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .main{
        font-size: 12px;        
    }

    .box{
        width: 100px;
        height: 100px;
        border: 1px solid red;
        margin: 20px 0;
    }

    .init{
        border: 1px solid gray;
        height: 20%;
        position: relative;
    }

    .init span{
        border: 0px solid blue;
        white-space: nowrap;
    }

    .item{
        border: 1px solid gray;
        height: 20%;
        position: relative;
    }

    .item span{
        color: red;
        position: absolute;
        top: 50%;
        left: 50%;
        white-space: nowrap;
        border: 0px solid blue;
        transform: translate(-50%, -50%) scale(48%);
    }

    
</style>