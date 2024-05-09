<!-- 课程列表 -->
<template>
    <div class="FavoritesListConteiner">
        <template v-if="dataList?.length">
            <OneDayCourse
                :oneDayList="item.oneDayList"
                v-for="(item, index) in dataList"
                :key="index"
                :title="item.day"
            ></OneDayCourse>
        </template>
        <template v-else>
            <!-- <OneDayCourse :oneDayList="oneDayList" title="昨天"></OneDayCourse> -->
            <div>暂无</div>
        </template>
    </div>
</template>

<script>
    import OneDayCourse from "@/components/itemList/OneDayCourse";
    // const img = require("@/assets/img/loading.png");

    export default {
        components: {
            OneDayCourse,
        },
        props: {
            dataList: {
                type: Array,
            },
        },
        data() {
            return {
                stateList: [
                    {
                        value: "beijing",
                        label: "北京市",
                    },
                    {
                        value: "beijing",
                        label: "北京市",
                    },
                    {
                        value: "beijing",
                        label: "北京市",
                    },
                ],
                // oneDayList: [
                    // {
                    //     courseImageSrc: "",
                    //     courseTime: "00:10",
                    //     createAt: 10,
                    //     playTitle: "这是一个标题1111",
                    //     serial: "D-202404010201119727",
                    // },
                    // {
                    //     courseImageSrc: "",
                    //     courseTime: "00:10",
                    //     createAt: 10,
                    //     playTitle: "这是一个标题",
                    // },
                    // {
                    //     courseImageSrc: "",
                    //     courseTime: "00:10",
                    //     createAt: 10,
                    //     playTitle: "这是一个标题",
                    // },
                    // {
                    //     courseImageSrc: "",
                    //     courseTime: "00:10",
                    //     createAt: 10,
                    //     playTitle: "这是一个标题",
                    // },
                    // {
                    //     courseImageSrc: "",
                    //     courseTime: "00:10",
                    //     createAt: 10,
                    //     playTitle: "这是一个标题",
                    // },
                    // {
                    //     courseImageSrc: "",
                    //     courseTime: "00:10",
                    //     createAt: 10,
                    //     playTitle: "这是一个标题",
                    // },
                    // {
                    //     courseImageSrc: "",
                    //     courseTime: "00:10",
                    //     createAt: 10,
                    //     playTitle: "这是一个标题",
                    // },
                // ],
            };
        },
    };
</script>

<style lang="less">
    .FavoritesListConteiner {
        background-color: #fff;
        padding: 0 13px;
        .selectContainer {
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: row;
            .selectState {
                margin-right: 20px;
            }
            .selectState,
            .selectTime {
                select {
                    padding-left: 4px;
                    width: 87px;
                    font-size: 13px;
                    height: 26px;
                    line-height: 26px;
                    background: #efefef;
                    border-radius: 13px;
                    .ivu-select-dropdown {
                        width: 375px;
                        height: 95px;
                        background: #ffffff;
                        border-radius: 0px 0px 25px 25px;
                        z-index: 199;
                    }
                }
            }
        }
    }
</style>