<template>
    <div class="main" >

        <div class="left">
            <div class="box">
                <div class="header">
                    header
                </div>
                <div class="ding">
                    ding - 透明背景
                </div>
                <div class="content">
                    <div v-for="i in 10" :key="i">content {{i}}</div>
                </div>
            </div>
        </div>

        <div class="right">
            <div class="box">
                <div class="header">
                    header
                </div>
                <div class="ding" style="background-color: #fff;">
                    ding - 不透明背景
                </div>
                <div class="content">
                    <div v-for="i in 10" :key="i">content {{i}}</div>
                </div>
            </div>
        </div>
        
    </div>
</template>


<script>
import * as _ from 'lodash-es'

export default{
    data(){
        return {
           
        }
    },
    methods:{
       
    }
}
</script>

<style scoped>

    .main{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        border: 1px solid red;
    }

    .left,.right{
        width: 50%;
        height: 500px;
        border: 1px solid red;
        overflow: scroll;
    }

    .box{
        
    }

    .header{
        height: 100px;
        border: 1px solid blue;
    }

    .ding{
        height: 100px;
        border: 1px solid red;
        position: sticky;
        top: 0;
        /* background-color: #fff; */
    }

    .content{
        height: 800px;
        border: 1px solid #000;
    }

    
</style>