<template>
    <button class="button" @click="refresh()">刷新</button>
    <div class="main">
        <div class="box" v-for="(item,index) in bubbleItems">
            <div class="item" :style="itemStyle(item,index)" >
                <div class="name">{{ item.name }} </div>
                <div class="value">{{ item.value }}</div>
            </div>
        </div>
        
    </div>
</template>

<script>
import * as _ from 'lodash-es'

export default{
    data(){
        return {
            maxValue: 61,
            bubbleItems: [
                {name:'A',value:1, startColor:'#251571',endColor:'#5a41dd'},
                {name:'A+',value:2, startColor:'#251571',endColor:'#24ac82'},
                {name:'B',value:3, startColor:'#251571',endColor:'#0173e4'},
                {name:'B+',value:4, startColor:'#251571',endColor:'#926710'},
                {name:'C',value:60, startColor:'#251571',endColor:'#5a41dd'},
                {name:'C+',value:61, startColor:'#251571',endColor:'#5a41dd'},
            ]
        }
    },
    mounted() {
        this.bubbleItems = _.shuffle(this.bubbleItems)

    },
    methods:{
        refresh(){
            this.bubbleItems = _.shuffle(this.bubbleItems)
        },
        itemStyle(item,index){
            var width = (item.value * 20).toString() + 'px';
            var transform = '';
            if (item.value != this.maxValue) {
                // 判断是否是 偶数
                var diffValue = (this.maxValue - item.value) / 2
                transform = index % 2 == 0 ? 'translateY(' + diffValue + 'px)' : 'translateY(-' + diffValue + 'px)';
            }
            
            return {
                width: width,
                height: width,
                transform: transform,
                'background-image': 'radial-gradient(circle, ' + item.startColor + ', ' + item.endColor + ')'
            }
        }
    }
}
</script>

<style scoped>
    .button{
        margin: 10px 0;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: #10b981;
        color: #fff;
    }

    .main{
        /* font-size: 12px; */
        min-height: 300px;
        background-color: #031c4c;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .item{
        min-width: 70px;
        min-height: 70px;
        max-width: 280px;
        max-height: 280px;
        color: #fff;
        font-weight:bold;
        border: 0px solid red;
        border-radius: 50%;
        /* background-image: radial-gradient(circle, #251571, #5a41dd); */
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }



    
</style>