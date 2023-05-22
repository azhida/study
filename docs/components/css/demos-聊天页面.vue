<template>
    <div class="main" >

        <div class="box boxA">
            <h4>聊天对象: B</h4>
            <div class="msgs" ref="msgsA" :key="updateKeyA">                
                <div class="msg" :class="[msg.user_id=='A' ? 'msg-right' : 'msg-left']" v-for="msg in msgs">
                    <!-- 头像 -->
                    <div class="avatar">{{ msg.user_id }}</div>
                    <!-- 消息 -->
                    <div class="msg-content">{{msg.msg}}</div>
                </div>
                <div class="load-pre-page" @click="loadPrePage">点击加载上一页</div>
            </div>
            <div class="input">
                <textarea placeholder="在这里输入聊天内容" v-model="inputValueA"></textarea>
            </div>
            <div class="button">
                <span @click="sendA">发送</span>
            </div>
        </div>    

        <div class="box boxB">
            <h4>聊天对象: A</h4>
            <div class="msgs">
                <div class="msg" :class="[msg.user_id=='B' ? 'msg-right' : 'msg-left']" v-for="msg in msgs">
                    <!-- 头像 -->
                    <div class="avatar">{{ msg.user_id }}</div>
                    <!-- 消息 -->
                    <div class="msg-content">{{msg.msg}}</div>
                </div>
            </div>
            <div class="input">
                <textarea placeholder="在这里输入聊天内容" v-model="inputValueB"></textarea>
            </div>
            <div class="button">
                <span @click="sendB">发送</span>
            </div>
        </div> 
        
    </div>
</template>


<script>
import * as _ from 'lodash-es'

export default{
    data(){
        return {
            updateKeyA: 0,
            updateKeyB: 0,
            page: 0,
            inputValueA: '',
            inputValueB: '',
            msgs:[
                {user_id: 'A', msg: '消息1'},
                {user_id: 'B', msg: '消息2'},
            ]
        }
    },
    mounted(){
        this.makeMsgs('init')
    },
    methods:{
        makeMsgs(action) {
            var list = [];
            for (var i = 0; i < 15; i++) {
                list.push({
                    user_id: _.sample(['A', 'B']),
                    msg: '消息' + i + '- page:' + this.page
                })
            }            
            console.log(list, 'aaa');
            if (action == 'init') {
                this.msgs = list.reverse()
            } else {
                this.msgs = this.msgs.concat(list.reverse());
            }            
        },
        loadPrePage(){
            this.page++;
            this.makeMsgs()
        },
        sendA() {
            console.log(this.inputValueA);
            if (!this.inputValueA) return false;
            this.msgs.unshift({
                user_id: 'A',
                msg: this.inputValueA
            })
            this.inputValueA = ''

            // 将滚动条置底
            this.updateKeyA++;
        },
        sendB() {
            console.log(this.inputValueB);
            if (!this.inputValueB) return false;
            this.msgs.unshift({
                user_id: 'B',
                msg: this.inputValueB
            })
            this.inputValueB = ''

            // 将滚动条置底
            this.updateKeyB++;
        }      
    }
}
</script>

<style scoped lang="scss">

    .main{
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        border: 1px solid red;

        .box{
            width: 50%;
            height: 500px;
            display: flex;
            flex-direction: column;
            background-color: #f5f5f5;
            
            .msgs {
                flex: 1;
                overflow-y: auto;
                display: flex;
                flex-direction: column-reverse;
                border: 1px solid gray;

                .load-pre-page{
                    color: #ff0000;
                    padding: 5px 0;
                    cursor: pointer;
                    text-align: center;
                }

                .msg {
                    margin: 10px;
                    display: flex;
                    gap: 10px;

                    .avatar {
                        width: 40px;
                        height: 40px;
                        line-height: 40px;
                        background-color: grey;
                        text-align: center;

                        image {
                            width: 100%;
                            height: 100%;
                            border-radius: 5px;
                        }
                    }

                    .msg-content {
                        background-color: #fff;
                        display: flex;
                        align-items: center;
                        padding: 0 10px;
                        border-radius: 5px;
                    }

                    &.msg-left {
                        .msg-content {
                            border-top-left-radius: 0;
                        }
                    }

                    &.msg-right {
                        flex-direction: row-reverse;

                        .msg-content {
                            background-color: #95ec69;
                            border-top-right-radius: 0;
                        }
                    }
                }
            }

            .input{
                textarea{
                    border: 1px solid red;
                    width: 100%;
                    padding: 10px;
                }
            }

            .button{
                display: flex;
                justify-content: right;
                span{
                    padding: 5px 10px;
                    margin: 10px 20px;
                    background-color: #e9e9e9;
                    color: #5fc191;
                    cursor: pointer;
                }
            }
        }

        .box1{
            border: 1px solid blue;
            height: 500px;
        }

        .box2{
            border: 1px solid blue;
        }
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