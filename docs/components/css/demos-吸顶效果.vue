<template>
    <div class="main" >

        <div class="box">
            <div class="header">
            header
        </div>
        
        <div class="ding">
            ding
        </div>

        <div class="content">
            content
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
        height: 500px;
        border: 1px solid red;
        overflow: scroll;
        
    }

    .box{

        

    }

    .header{
        height: 100px;
        background-color: gray;
    }

    .ding{
        height: 100px;
        background-color: red;
        position: sticky;
        top: 0;
    }

    .content{
        height: 800px;
        background-color: blue;
    }

    
</style>