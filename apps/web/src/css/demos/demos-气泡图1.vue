<template>
    <button class="button" @click="refresh()">刷新</button>
    <div class="main" :style="{width: maxWidth +'px', height: maxHeight + 'px'}">
        <div class="box" v-for="(item,index) in bubbleItems">
            <div class="item" :style="itemStyle(item,index)" title="aaa">
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
            maxWidth: 500,
            maxHeight: 200,
            maxValue: 0,
            sumValue: 0,
            baseWidth: 0, // 基础宽度
            bubbleItems: [
                {name:'A',value:1, startColor:'#251571',endColor:'#5a41dd'},
                {name:'A+',value:2, startColor:'#251571',endColor:'#24ac82'},
                {name:'B',value:3, startColor:'#251571',endColor:'#0173e4'},
                {name:'B+',value:4, startColor:'#251571',endColor:'#926710'},
                {name:'C',value:6, startColor:'#251571',endColor:'#5a41dd'},
                {name:'C+',value:7, startColor:'#251571',endColor:'#5a41dd'},
            ]
        }
    },
    mounted() {
        this.bubbleItems = _.shuffle(this.bubbleItems);       
        this.calculateValues();
    },
    methods:{
        calculateValues(){
            this.maxValue = 0;
            this.sumValue = 0;
            this.bubbleItems.forEach((e,i) => {          
                this.sumValue += e.value;
                if (e.value > this.maxValue) {
                    this.maxValue = e.value;
                }            
            })
            var widthValue = this.maxWidth / (this.sumValue + this.bubbleItems.length);
            var heightValue = this.maxHeight / this.maxValue;
            this.baseWidth = widthValue < heightValue ? widthValue : heightValue;
        },
        refresh(){
            this.bubbleItems = _.shuffle(this.bubbleItems)
        },
        itemStyle(item,index) {
            var widthValue = item.value * this.baseWidth;
            var transform = '';
            if (item.value != this.maxValue) {
                var diffValue = this.maxHeight - widthValue;
                var offsetValue = _.random(-diffValue, diffValue);
                transform = 'translateY(' + (offsetValue / 2) + 'px)';
            }
            
            return {
                width: widthValue + 'px',
                height: widthValue + 'px',
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
        /* min-height: 300px; */
        padding: 10px 0;
        background-color: #031c4c;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .item{
        /* min-width: 70px;
        min-height: 70px;
        max-width: 280px;
        max-height: 280px; */
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