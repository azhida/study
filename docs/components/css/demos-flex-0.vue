<template>
    <div class="main">
        <div class="list">
            <div class="item" v-for="i in 10">{{ i }}</div>
        </div>
        <div class="button">按钮</div>
    </div>
</template>
<style scoped>
    .main{
        border: 1px solid red;
        width: 300px;
        height: 500px;
        display: flex;
        flex-direction: column;
    }
    .list{
        flex: 1;
        overflow-y: scroll;
    }
    .item{
        height: 100px;
        border: 1px solid blue;
    }
    .button{
        height: 50px;
        line-height: 50px;
        background-color: #B5BCC6;
        margin-top: 20px;
        text-align: center;
    }
</style>