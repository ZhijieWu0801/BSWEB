<!-- 一个课程 -->
<template>
    <div class="courseContainer">
        <div class="left">
            <img :src="courseImageSrc" alt="" />
            <div class="time">{{courseTime}}</div>
        </div>
        <div class="right">
            <div class="title">{{name}}</div>
            <div class="button">
                <div class="createAt">
                    <div class="playImg"></div>
                    <div class="playText">入站时间{{ createAt }}</div>
                </div>
                <div class="btn" v-if="showBtn" @click.self="showBtnClick">{{ btnText }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            courseImageSrc: {
                type: String,
            },
            courseTime: {
                type: String,
            },
            createAt: {
                default: "",
                type: String,
            },
            name: {
                default: "标题",
                type: String,
            },
            btnText: {
                default: "查看详情",
                type: String,
            },
            showBtn: {
                default: false,
                type: Boolean,
            },
        },
        methods:{
            showBtnClick(){
                this.$emit("showBtnClick")
            }
        }
    };
</script>

<style lang="less">
    .courseContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin-bottom: 10px;
        .left {
            margin-right: 16px;
            position: relative;
            > img {
                width: 136px;
                height: 91px;
                object-fit: cover;
            }
            .time {
                position: absolute;
                right: 8px;
                bottom: 12px;
                font-weight: 400;
                font-size: 10px;
                color: #ffffff;
            }
        }
        .right {
            flex: 1 1 auto;
            height: 91px;
            display: flex;
            justify-content: space-between;
            align-items: space-between;
            flex-direction: column;
            .title {
                margin-top: 8px;
                font-size: 14px;
                color: #333333;
            }
            .button {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                .createAt {
                    font-weight: 400;
                    font-size: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    .playImg {
                        width: 16px;
                        height: 16px;
                        // background-image: url(@/assets/img/oneCourse/play_icon.png);
                        background-size: 100% 100%;
                        margin-right: 4px;
                    }
                }
                .btn {
                    width: 82px;
                    height: 26px;
                    background: radial-gradient(
                        0% 129% at 28% 29%,
                        #aa1e28 0%,
                        #aa1e28 100%
                    );
                    border-radius: 13px;
                    font-size: 12px;
                    color: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
</style>