<template>
    <button class="button" @click="refresh()">刷新</button>
    <div class="main" :style="{width: maxWidth +'px', height: maxHeight + 'px'}">
        <div class="box"  v-for="(item,index) in bubbleItems" :key="index">
            <div class="item" :style="itemStyle(item,index)">
                <div class="label" :style="labelStyle(item)">
                    <div class="name">{{ item.name }}</div>
                    <div class="value">{{ item.value }}</div>
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
            maxWidth: 500,
            maxHeight: 200,
            minValue: 0,
            maxValue: 0,
            sumValue: 0,
            baseRate: 0, // 基础比率，表示 value = 1 时 占多少个像素(px)
            bubbleItems: [
                {name:'A',value:100, startColor:'#251571',endColor:'#5a41dd', symbolSize: 0},
                {name:'A+',value:200, startColor:'#251571',endColor:'#24ac82'},
                {name:'B',value:300, startColor:'#251571',endColor:'#0173e4'},
                {name:'B+',value:400, startColor:'#251571',endColor:'#926710'},
                {name:'C',value:600, startColor:'#251571',endColor:'#5a41dd'},
                {name:'C+',value:700, startColor:'#251571',endColor:'#5a41dd'},
                {name:'A',value:100, startColor:'#251571',endColor:'#5a41dd', symbolSize: 0},
                {name:'A+',value:200, startColor:'#251571',endColor:'#24ac82'},
                {name:'B',value:300, startColor:'#251571',endColor:'#0173e4'},
                {name:'B+',value:400, startColor:'#251571',endColor:'#926710'},
                {name:'C',value:600, startColor:'#251571',endColor:'#5a41dd'},
                {name:'C+',value:700, startColor:'#251571',endColor:'#5a41dd'},
            ]
        }
    },
    mounted() {
        this.bubbleItems = _.shuffle(this.bubbleItems);       
        this.calculateValues();
    },
    methods:{
        calculateValues(){
            this.minValue = _.maxBy(this.bubbleItems, 'value').value;
            this.maxValue = _.maxBy(this.bubbleItems, 'value').value;
            this.sumValue = _.sumBy(this.bubbleItems, 'value');

            // 先用x轴计算
            this.baseRate = (this.maxWidth - (this.bubbleItems.length + 1) * 5) / this.sumValue;
            if (this.baseRate * this.maxValue > this.maxHeight) {
                // 说明 最大的圆直径会超过容器的高度，需要用 x 轴来计算
                this.baseRate = (this.maxHeight - 10) / this.maxValue;
            }

            this.bubbleItems.forEach((e,i) => {
                e.symbolSize = e.value * this.baseRate;
                var diff = this.maxHeight - e.symbolSize;
                e.translateY =  _.random(-diff, diff) / 2;
                e.labelScale = this.getLabelScale(e.symbolSize)
            })

            console.log(this.bubbleItems, 'this.bubbleItems');
        },
        refresh(){
            this.bubbleItems = _.shuffle(this.bubbleItems);
            this.bubbleItems[_.random(0, this.bubbleItems.length)].value = _.random(10, 5000)
            this.bubbleItems[_.random(0, this.bubbleItems.length)].value = _.random(10, 5000)

            this.calculateValues();
        },
        itemStyle(item) {
            return {
                width: item.symbolSize + 'px',
                height: item.symbolSize + 'px',
                translate: '0 ' + item.translateY + 'px',
                'background-image': 'radial-gradient(circle, ' + item.startColor + ', ' + item.endColor + ')',              
            }
        },
        labelStyle(item){
            return {
                scale: item.labelScale
            }
        },
        getLabelScale(width) {
            var baseWidth = 70; // 基础宽度：width:70px;
            var baseSize = 12; // 基础字体大小：font-size:12px;

            var size = 1;
            if (width < 40) {
                size = 0.7;
            }
            else if (width < 50) {
                size = 0.8;
            } 
            else if (width < 60) {
                size = 0.9;
            } 
            else if (width < 70) {
                size = 1;
            } else if (width < 80) {
                size = 1.1;
            } else if (width < 90) {
                size = 1.2;
            } else if (width < 100) {
                size = 1.3;
            } 
            else if (width < 110) {
                size = 1.4;
            } 
            else {
                size = 1.5;
            }
            return size;
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
        padding: 10px 0;
        background-color: #031c4c;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        translate: 1;
    }

    .item{
        cursor: pointer;
        line-height: initial;
        color: #fff;
        border: 0px solid red;
        border-radius: 50%;
        font-size: 12px;
        /* background-image: radial-gradient(circle, #251571, #5a41dd); */
        position: relative;
    }

    .item:hover{
        scale: 1.1;
    }

    .item .label{
        border: 0px solid red;
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        /* transform: scale(1.5); */
    }
</style>