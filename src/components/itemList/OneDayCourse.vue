<!-- 一天的课程 -->
<template>
    <div class="OneDayCourseContainer">
        <!-- <div class="title">{{ title }}</div> -->
        <OneCourse
            v-for="(item, index) in oneDayList"
            :key="index"
            :courseImageSrc="item.courseImageSrc"
            :courseTime="item.courseTime"
            :createAt="item.createAt"
            :name="item.name"
            :showBtn="true"
            @showBtnClick="oneClick(item)"
        >
        </OneCourse>
    </div>
</template>

<script>
    import OneCourse from "@/components/itemList/OneCourse"; 
    export default {
        components: {
            OneCourse, 
        },
        props: {
            oneDayList: {
                type: Array,
            },
            title: {
                default: "今天",
                type: String,
            },
        },
        data() {
            return {
                // oneDayList: [
                //     {
                //         courseImageSrc: img,
                //         courseTime: "00:10",
                //         createAt: 10,
                //         playTitle: "这是一个标题",
                //     },
                //     {
                //         courseImageSrc: img,
                //         courseTime: "00:10",
                //         createAt: 10,
                //         playTitle: "这是一个标题",
                //     },
                //     {
                //         courseImageSrc: img,
                //         courseTime: "00:10",
                //         createAt: 10,
                //         playTitle: "这是一个标题",
                //     },
                //     {
                //         courseImageSrc: img,
                //         courseTime: "00:10",
                //         createAt: 10,
                //         playTitle: "这是一个标题",
                //     },
                //     {
                //         courseImageSrc: img,
                //         courseTime: "00:10",
                //         createAt: 10,
                //         playTitle: "这是一个标题",
                //     },
                //     {
                //         courseImageSrc: img,
                //         courseTime: "00:10",
                //         createAt: 10,
                //         playTitle: "这是一个标题",
                //     },
                //     {
                //         courseImageSrc: img,
                //         courseTime: "00:10",
                //         createAt: 10,
                //         playTitle: "这是一个标题",
                //     },
                // ],
            };
        },
        methods: {
            oneClick(item){
                console.log(item.serial);
                this.$router.push({path:"/petInfo",query:{serial:item.serial}})
                
            }
        }
    };
</script>

<style lang="less">
    .OneDayCourseContainer {
        .title {
            padding-top: 15px;
            font-weight: 400;
            font-size: 13px;
            color: #333333;
            margin-bottom: 15px;
            margin-left: 6px;
        }
    }
</style>