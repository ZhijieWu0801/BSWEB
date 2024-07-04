<template>
    <div class="glanceContainer">
        <div class="glaceList">
            <div
                class="item"
                v-for="item in petList"
                :key="item.serial"
                @click.stop="showParticulars(item)"
            >
                <div class="left">
                    <div class="img">
                        <img :src="item.img" alt="宠物图片" />
                    </div>
                </div>
                <div class="right">
                    <div class="info">
                        <div class="label">名字：</div>
                        <div class="value">{{ item.PName || "暂无" }}</div>
                    </div>
                    <div class="info">
                        <div class="label">编号：</div>
                        <div class="value">{{ item.serial }}</div>
                    </div>
                    <div class="info">
                        <div class="label">品种：</div>
                        <div class="value">{{ item.species }}</div>
                    </div>
                </div>
            </div>
            <!-- <Page/> -->
        </div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 30, 40]"
            :page-size="page.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        >
        </el-pagination>
        <div class="dialogContainer" v-if="dialogShow">
            <div class="mask" @click.self="close">
                <div class="content">
                    <div class="left">
                        <div class="item">
                            <div class="label">宠物编号：</div>
                            <div class="value">{{ info.serial }}</div>
                        </div>
                        <div class="item">
                            <div class="label">宠物名字：</div>
                            <div class="value">{{ info.PName || "暂无" }}</div>
                        </div>
                        <div class="item">
                            <div class="label">宠物种类：</div>
                            <div class="value">{{ info.species }}</div>
                        </div>
                        <div class="item">
                            <div class="label">宠物性别：</div>
                            <div class="value">{{ info.PSex || "暂无" }}</div>
                        </div>
                        <div class="item">
                            <div class="label">出生日期：</div>
                            <div class="value">{{ info.PBirth || "暂无" }}</div>
                        </div>
                        <div class="item">
                            <div class="label">健康状况：</div>
                            <div class="value">
                                {{ info.PHealth || "暂无" }}
                            </div>
                        </div>
                        <div class="item">
                            <div class="label">疫苗情况：</div>
                            <div class="value">
                                {{ info.PVaccine || "暂无" }}
                            </div>
                        </div>
                        <div class="item">
                            <div class="label">宠物描述：</div>
                            <div class="value">
                                {{ info.PDescription || "暂无" }}
                            </div>
                        </div>

                        <div class="item">
                            <div class="label">退还原因：</div>
                            <div class="value">
                                {{ info.returnReason || "暂无" }}
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <img :src="info.img" alt="" />
                    </div>
                </div>
                <button @click.stop="apply">申请领养</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { getAllPets } from "@/api/Api.js";
    import Page from "@/components/common/Page.vue";
    const dog = require("@/assets/img/dog.png");
    const cat = require("@/assets/img/cat.png");
    export default {
        data() {
            return {
                page: {
                    page: 1,
                    pageSize: 10,
                },
                petList: [],
                info: {},
                dialogShow: false,
                currentPage: 0,
                total: 0,
            };
        },
        components() {
            Page;
        },
        mounted() {
            const page = {
                noneMaster:true,
                pageSize: 10,
                page: 1,
            };
            getAllPets(page).then((r) => {
                r.data.data.data.forEach((element) => {
                    if (!element.img) {
                        const isM = /^M/.test(element.serial);
                        isM ? (element.img = cat) : (element.img = dog);
                    }
                });
                this.total = r.data.data.total;
                this.petList = r.data.data.data;
                console.log(this.petList);
            });
        },
        methods: {
            handleSizeChange(e) {
                this.page.pageSize = e;
                console.log(e);
            },
            handleCurrentChange(e) {
                this.page.page = e;
                this.page.noneMaster = true;
                // getAllPets(this.page)
                getAllPets(this.page).then((r) => {
                    r.data.data.data.forEach((element) => {
                        if (!element.img) {
                            const isM = /^M/.test(element.serial);
                            isM ? (element.img = cat) : (element.img = dog);
                        }
                    });
                    this.total = r.data.data.total;
                    this.petList = r.data.data.data;
                    console.log(this.petList);
                });
            },
            showParticulars(item) {
                this.dialogShow = true;
                this.info = item;
                console.log(this.info);
            },
            close() {
                // console.log(1111);
                this.dialogShow = false;
            },
            apply() {
                const data = {
                    id: this.$store.state.TEL, // 发送消息的主体的id
                    message: {
                        type: 1, // 领养
                        result: true, //同意
                        petSerial: this.info.serial, //宠物编号
                        masterTel: this.$store.state.TEL, // 我的电话
                        masterId: this.$store.state.TEL, // 用户id用于查找是哪个ws发来的消息//不必，可以使用tel
                    },
                };
                this.$bus.$emit("sendMessageToServe", data);
            },
        },
    };
</script>

<style lang="less">
    .glanceContainer {
        width: 100%;
        height: 100%;
        .glaceList {
            width: 100%;
            height: 90%;
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            flex-wrap: wrap;
            overflow: auto;
            margin-bottom: 20px;
            .item {
                width: 45%;
                background-color: aqua;
                margin: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                .left {
                    height: 97%;
                    overflow: hidden;
                    width: 35%;
                    margin: 0 15px 0 5px;
                    .img {
                        width: 100%;
                        > img {
                            width: 100%;
                        }
                    }
                }
                .right {
                    flex: 1 1 auto;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    flex-direction: column;
                    .info {
                        display: flex;
                        flex-direction: row;
                        margin: 15px 0;
                    }
                }
            }
        }
        .dialogContainer {
            width: 100%;
            height: 100%;
            position: fixed;
            left: 0;
            top: 0;
            .mask {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                background-color: #00000079;
                width: 100%;
                height: 100%;
                .content {
                    padding: 20px;
                    background-color: #ffffff;
                    display: flex;
                    justify-content: space-between;
                    align-items: space-between;
                    flex-direction: row;
                    .left {
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        .item {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            .label {
                                flex: 0 1 80px;
                            }
                        }
                    }
                    .right {
                        width: 300px;
                        margin-left: 20px;
                        > img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>