<template>
    <div class="MyInfoContainer">
        <ul>
            <li v-for="(item, index) in myInfo" :key="index">
                <div class="itemContainer">
                    <div class="lable">{{ item.lable }}</div>
                    <div class="value">{{ item.value }}</div>
                </div>
            </li>
        </ul>
        <div class="text">我的宠物列表：</div>
        <div class="petList">
            <div
                class="item"
                v-for="item in petList"
                :key="item.serial"
                @click="petClick(item)"
            >
                <div class="left">
                    <img :src="item.img" alt="照片" />
                </div>
                <div class="right">
                    <div class="rightItem">
                        <div class="label">编号：</div>
                        <div class="value">{{ item.serial }}</div>
                    </div>
                    <div class="rightItem">
                        <div class="label">姓名：</div>
                        <div class="value">{{ item.PName }}</div>
                    </div>
                    <div class="rightItem">
                        <div class="label">性别：</div>
                        <div class="value">{{ item.PSex }}</div>
                    </div>
                    <div class="rightItem">
                        <div class="label">疫苗情况：</div>
                        <div class="value">{{ item.PVaccine }}</div>
                    </div>
                    <div class="rightItem">
                        <div class="label">描述：</div>
                        <div class="value">{{ item.PDescription }}</div>
                    </div>
                    <div class="rightItem">
                        <div class="label">生日：</div>
                        <div class="value">{{ item.PBirth }}</div>
                    </div>
                    <div class="rightItem">
                        <div class="label">种类：</div>
                        <div class="value">{{ item.species }}</div>
                    </div>
                    <div class="rightItem">
                        <div class="label">健康状况：</div>
                        <div class="value">{{ item.PHealth }}</div>
                    </div>
                </div>
            </div>
        </div>
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
                            <input
                                class="value"
                                type="text"
                                v-model="info.PName"
                            />
                            <!-- <div class="value">{{  || "暂无" }}</div> -->
                        </div>
                        <div class="item">
                            <div class="label">宠物种类：</div>
                            <input
                                class="value"
                                type="text"
                                v-model="info.species"
                            />

                            <!-- <div class="value">{{ info.species }}</div> -->
                        </div>
                        <div class="item">
                            <div class="label">宠物性别：</div>
                            <!-- <input
                                class="value"
                                type="text"
                                v-model="info.PSex"
                            /> -->
                            <select name="" id="" v-model="info.PSex">
                                <option value="1">雄性</option>
                                <option value="2">雌性</option>

                            </select>
                            <!-- <div class="value">{{ info.PSex || "暂无" }}</div> -->
                        </div>
                        <div class="item">
                            <div class="label">出生日期：</div>
                            <input
                                class="value"
                                type="date"
                                v-model="info.PBirth"
                            />
                            <!-- <div class="value">{{ info.PBirth || "暂无" }}</div> -->
                        </div>
                        <div class="item">
                            <div class="label">健康状况：</div>
                            <input
                                class="value"
                                type="text"
                                v-model="info.PHealth"
                            />
                            <!-- <div class="value">
                                {{ info.PHealth || "暂无" }}
                            </div> -->
                        </div>
                        <div class="item">
                            <div class="label">疫苗情况：</div>
                            <input
                                class="value"
                                type="text"
                                v-model="info.PVaccine"
                            />
                            <!-- <div class="value">
                                {{ info.PVaccine || "暂无" }}
                            </div> -->
                        </div>
                        <div class="item">
                            <div class="label">宠物描述：</div>
                            <input
                                class="value"
                                type="text"
                                v-model="info.PDescription"
                            />
                            <!-- <div class="value">
                                {{ info.PDescription || "暂无" }}
                            </div> -->
                        </div>

                        <!-- <div class="item">
                            <div class="label">退还原因：</div>
                            <div class="value">
                                {{ info.returnReason || "暂无" }}
                            </div>
                        </div> -->
                    </div>
                    <div class="right">
                        <img :src="info.img" alt="" />
                        <!-- <input type="file" placeholder="上传文件"> -->
                        <input type="file" @change="handleFileInputChange" />
                    </div>
                </div>
                <button @click.stop="changeInfo">确认修改</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { getMasterPetByTel, updataPet } from "@/api/Api.js";
    export default {
        data() {
            return {
                myInfo: {
                    id: { value: this.$store.state.ID || "--", lable: "ID" },
                    tel: { value: this.$store.state.TEL || "--", lable: "电话" },
                    name: {
                        value: this.$store.state.NAME || "--",
                        lable: "姓名",
                    },
                    // limit: {
                    //     value: this.$store.state.LIMIT || "--",
                    //     lable: "权限",
                    // },
                    // tissue: {
                    //     value: this.$store.state.TISSUE || "--",
                    //     lable: "组织",
                    // },
                    address: {
                        value: this.$store.state.ADDRESS || "--",
                        lable: "家庭地址",
                    },
                    birthday: {
                        value: this.$store.state.BIRTH || "--",
                        lable: "生日",
                    },
                },
                info: {},
                petList: [],
                dialogShow: false,
            };
        },
        created() {
            getMasterPetByTel({ tel: this.$store.state.TEL }).then(
                (r) => (this.petList = r.data.data)
            );
        },
        mounted() {
            console.log(this.myInfo);
        },
        methods: {
            handleFileInputChange(event) {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    this.info.img = reader.result;
                    // this.petImgBase64 = reader.result;
                };
                reader.readAsDataURL(file);
            },
            close() {
                // console.log(1111);
                this.dialogShow = false;
            },
            changeInfo() {
                // const data = {
                //     sex: this.info.PSex,
                //     description: "PDescription",
                //     health: "PHealth",
                //     sex: "PSex",
                //     sex: "PSex",
                //     name: "PName",
                //     master: "PetMaster",
                //     masterId: "PetMasterId",
                //     species: "species",
                //     serial: "serial",
                //     img_B: "PetImg",
                //     serial,
                //     species,
                //     PName,
                //     PetMasterTel: this.$store.state.TEL,
                // };
                this.info.PetMasterTel = this.$store.state.TEL
                console.log(this.info);
                updataPet(this.info);
            },
            petClick(item) {
                this.dialogShow = true;
                this.info = item;
            },
        },
    };
</script>

<style lang="less">
    .MyInfoContainer {
        padding: 50px;
        // padding-left: 0;
        .itemContainer {
            display: flex;
            .lable {
                flex: 0 0 100px;
                display: flex;
                align-items: center;
            }
            .value {
                flex: 0 0 auto;
            }
        }
        .petList {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            .text {
                font-size: 24px;
                text-align: left;
                margin: 15px 0;
            }
            .item {
                background-color: aquamarine;
                width: 45%;
                margin: 20px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: row;
                .left {
                    width: 300px;
                    height: 300px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 15px;
                    img {
                        width: 100%;
                    }
                }
                .right {
                    display: flex;
                    justify-content: center;
                    align-items: space-around;
                    flex-direction: column;
                    .rightItem {
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        // margin-bottom: 10px;
                        .label {
                            width: 100px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        .value {
                            flex: 1 1;
                        }
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
                            max-width: 300px;
                        }
                    }
                }
            }
        }
    }
</style>