<!-- 我的收藏 -->
<template>
    <div
        class="MyCollectionContainer"
        :class="{ hidenFlow: isShowSelectRender }"
    >
        <!-- <Tabs /> -->
        <!-- <div class="selectContainer">
            <div class="select">
                <div
                    v-for="(select, index) in selectList"
                    @click="changeSelectRender(select, index)"
                    class="selectItem"
                    :class="{ active: index === activeIndex }"
                    :key="index"
                >
                    {{ select.label }}
                </div>
            </div>
            <div class="container" v-if="isShowSelectRender">
                <div
                    v-for="item in selectRender"
                    :key="item.id"
                    class="containerLabel"
                    :class="{ active: item.active }"
                    @click="selectRenderItemClick(item)"
                >
                    {{ item.label }}
                </div>
            </div>
            <div
                class="mask"
                v-if="isShowSelectRender"
                @click="closeSelect"
            ></div>
        </div> -->
        <CourseList :dataList="dataList"></CourseList>
    </div>
</template>

<script>
    import CourseList from "@/components/itemList/CourseList.vue";
    // import Tabs from "@/public/components/tabs/Tabs.vue";
    import { getAllPets } from "@/api/Api.js";
    // const img = require("@/assets/img/loading.png");
    export default {
        components: {
            CourseList,
            // Tabs,
        },
        data() {
            return {
                dataList: [
                    {
                        day: "昨天",
                        oneDayList: [
                            {
                                courseImageSrc: "",
                                courseTime: "00:10",
                                createAt: "10",
                                serial: "M-202404010712472650",
                                playTitle: "这是一个标题111",
                            },
                            {
                                courseImageSrc: "",
                                courseTime: "00:10",
                                createAt: "10",
                                playTitle: "这是一个标题",
                            },
                            {
                                courseImageSrc: "",
                                courseTime: "00:10",
                                createAt: "10",
                                playTitle: "这是一个标题",
                            },
                            {
                                courseImageSrc: "",
                                courseTime: "00:10",
                                createAt: "10",
                                playTitle: "这是一个标题",
                            },
                            {
                                courseImageSrc: "",
                                courseTime: "00:10",
                                createAt: "10",
                                playTitle: "这是一个标题",
                            },
                            {
                                courseImageSrc: "",
                                courseTime: "00:10",
                                createAt: "10",
                                playTitle: "这是一个标题",
                            },
                            {
                                courseImageSrc: "",
                                courseTime: "00:10",
                                createAt: "10",
                                playTitle: "这是一个标题",
                            },
                        ],
                    },
                    // {
                    //     day: "昨天",
                    //     oneDayList: [
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //     ],
                    // },
                    // {
                    //     day: "昨天",
                    //     oneDayList: [
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //     ],
                    // },
                    // {
                    //     day: "昨天",
                    //     oneDayList: [
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //         {
                    //             courseImageSrc: "",
                    //             courseTime: "00:10",
                    //             createAt: "10",
                    //             playTitle: "这是一个标题",
                    //         },
                    //     ],
                    // },
                ],
                selectList: [
                    {
                        label: "教程状态",
                        list: [
                            {
                                label: "正常",
                                value: 0,
                                id: 0,
                                active: false,
                            },
                            {
                                label: "已下架",
                                value: 1,
                                id: 1,
                                active: false,
                            },
                        ],
                    },
                    {
                        label: "收藏时间",
                        list: [
                            {
                                label: "7天内",
                                value: 0,
                                id: 0,
                                active: false,
                            },
                            {
                                label: "30天内",
                                value: 1,
                                id: 1,
                                active: false,
                            },
                            {
                                label: "90天内",
                                value: 2,
                                id: 2,
                                active: false,
                            },
                            {
                                label: "半年前",
                                value: 3,
                                id: 3,
                                active: false,
                            },
                            {
                                label: "一年前",
                                value: 4,
                                id: 4,
                                active: false,
                            },
                        ],
                    },
                ],
                selectRender: [], // 渲染的查询框的列表
                isShowSelectRender: false, // 是否展示下拉查询框
                activeIndex: -1, // 当前活动的下拉框是那个
                selectRenderIndex: -1, // 被选中的下拉框的项是哪个
            };
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                getAllPets()
                    .then((r) => {
                        console.log(r.data);
                        return r.data.data;
                    })
                    .then((r) => {
                        this.dataList[0].oneDayList = [];
                        r.forEach((i) => {
                            this.dataList[0].oneDayList.push({
                                courseImageSrc: i.PetImg, //图片
                                courseTime: "",
                                createAt: `${i.createdAt}`.split("T")[0], //创建时间
                                name: i.PName || "暂无", //名字
                            });
                        });
                    });
            },
            changeSelectRender(select, index) {
                if (index === this.activeIndex) {
                    this.isShowSelectRender = false;
                    this.activeIndex = -1;
                    return;
                }
                this.isShowSelectRender = true;
                this.activeIndex = index;
                this.selectRender = select.list;
            },
            selectRenderItemClick(item) {
                this.selectRender.forEach((i) => (i.active = false));
                item.active = !item.active;
            },
            closeSelect() {
                this.isShowSelectRender = false;
                this.activeIndex = -1;
            },
        },
    };
</script>

<style lang="less">
    .MyCollectionContainer {
        &.hidenFlow {
            overflow: hidden;
            height: calc(100vh - 88px);
        }
        .selectContainer {
            margin-top: 15px;
            background-color: #fff;
            position: relative;
            .select {
                display: flex;
                justify-content: start;
                padding-top: 15px;
                align-items: center;
                flex-direction: row;
                .selectItem {
                    width: 87px;
                    height: 26px;
                    background: #efefef;
                    border-radius: 13px;
                    font-weight: 400;
                    font-size: 13px;
                    color: #000000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    padding: 15px 0;
                    padding-right: 10px;
                    opacity: 0.6;
                    margin-right: 10px;
                    position: relative;
                    &.active {
                        opacity: 1;
                        &::after {
                            transform: translate(0, -50%) rotate(180deg);
                            //background-image: url(@/assets/img/collecation/shangjiantou_icon.svg);
                        }
                    }
                    &::after {
                        content: "";
                        width: 15px;
                        height: 15px;
                        //background-image: url(@/assets/img/collecation/xialajiantou_icon.svg);
                        background-size: 100% 100%;
                        position: absolute;
                        right: 5px;
                        top: 50%;
                        transition: transform 0.3s ease-in-out;
                        transform: translate(0, -50%);
                    }
                }
            }
            .container {
                position: absolute;
                width: 375px;
                background-color: #fff;
                top: 55px;
                left: 0;
                display: flex;
                justify-content: start;
                align-items: start;
                flex-direction: column;
                font-weight: 400;
                font-size: 13px;
                color: #585858;
                z-index: 101;
                padding-bottom: 15px;
                padding-left: 24px;
                border-radius: 0px 0px 25px 25px;
                .containerLabel {
                    width: 100%;
                    padding: 15px 0;
                    font-weight: 400;
                    font-size: 13px;
                    color: #585858;
                    position: relative;
                    &.active::after {
                        content: "";
                        display: block;
                        position: absolute;
                        //background-image: url("@/assets/img/collection/seelctActive_icon.png");
                        top: 50%;
                        right: 30.5px;
                        transform: translate(-50% -50%);
                        width: 12px;
                        height: 12px;
                        // background-color: red;
                        background-size: 100% 100%;
                    }
                }
            }
            .mask {
                position: absolute;
                top: 55px;
                left: 0;
                width: 100%;
                height: 100vh;
                z-index: 100;
                background-color: rgba(0, 0, 0, 0.5);
            }
        }
    }
</style>