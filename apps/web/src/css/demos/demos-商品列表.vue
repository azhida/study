<template>
    <div class="main" >

        <div class="list">
            <div class="item" v-for="i in 10">
                <p class="img"><img src="" :alt="'商品图片'+i"></p>
                <p class="name">商品名称{{ i }}</p>
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
    mounted(){
        
    },
    methods:{
          
    }
}
</script>

<style scoped lang="scss">

    .main{
        width: 350px;
        height: 500px;
        overflow: auto;        
        border: 1px solid red;

        .list{
            padding: 10px;            
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .item{
                width: calc(50% - 5px);
                border: 1px solid blue;

                .img{
                    width: 100%;
                    height: 100px;
                }
                .name{

                }
            }
        }
        
    }
</style>