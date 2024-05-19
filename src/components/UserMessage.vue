<template>
    <div class="messageContainer">
        <div v-if="serveMessage.length" class="messageItem">
            <div
                class="item"
                v-for="(item, index) in serveMessage"
                :key="index"
                @click="showDialog(item)"
            >
                <span>{{ item.userId }}</span
                >的<span>{{ item.type }}</span
                >申请
            </div>
        </div>
        <div v-else>暂无申请</div>
        <div class="dialog" v-if="dialogShow">
            <div class="userInfoContainer">
                <div class="userItem MAddress">
                    <div class="label">用户地址</div>
                    <div class="value">{{ userInfo.MAddress }}</div>
                </div>
                <div class="userItem MPName">
                    <div class="label">用户名字</div>
                    <div class="value">{{ userInfo.MPName }}</div>
                </div>
                <div class="userItem MTel">
                    <div class="label">用户电话</div>
                    <div class="value">{{ userInfo.MTel }}</div>
                </div>
            </div>
            <div class="petInfoContainer">
                <div class="PName">
                    <div class="label">宠物名字</div>
                    <div class="value">{{ petInfo.PName || "暂无" }}</div>
                </div>
                <div class="PetMasterId">
                    <div class="label">宠物主人电话</div>
                    <div class="value">
                        {{ petInfo.petMaster ? petInfo.petMaster.MTel : "暂无主人" }}
                    </div>
                </div>
                <div class="createAt">
                    <div class="label">宠物入站时间</div>
                    <div class="value">{{ petInfo.createAt }}</div>
                </div>
                <div class="id">
                    <div class="label">宠物ID</div>
                    <div class="value">{{ petInfo.id }}</div>
                </div>
                <div class="img">
                    <div class="label">宠物图片</div>
                    <div class="value" style="width: 200px">
                        <img
                            :src="petInfo.img"
                            alt="暂无图片"
                            style="width: 100%"
                        />
                    </div>
                </div>
                <div class="returnReason">
                    <div class="label">宠物退还原因</div>
                    <div class="value">
                        {{ petInfo.returnReason || "暂无" }}
                    </div>
                </div>
                <div class="serial">
                    <div class="label">宠物编号</div>
                    <div class="value">{{ petInfo.serial }}</div>
                </div>
                <div class="species">
                    <div class="label">宠物种类</div>
                    <div class="value">{{ petInfo.species }}</div>
                </div>
            </div>
            <div class="refuseMessage">
                <div class="label">拒绝原因</div>
                <div class="value">
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                        v-model="refuseMessage"
                    ></textarea>
                </div>
            </div>
            <div class="btn">
                <div class="agree" @click="agree">同意</div>
                <div class="refuse" @click="refuse">拒绝</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getPetBySerial, linkPet, getMasterByTel } from "@/api/Api.js";
    export default {
        data() {
            return {
                serveMessage: [
                    {
                        userId: "",
                        petSerial: "",
                        type: "",
                    },
                ], //服务器来的消息
                dialogShow: false,
                userInfo: {},
                petInfo: {},
                refuseMessage: "",
            };
        },
        methods: {
            showDialog(item) {
                this.$store.commit("setLoading", true);
                //补充通过电话拿用户信息，通过拿宠物信息
                getMasterByTel({ tel: "11111111111122" }).then((r) => {
                // getMasterByTel({ tel: item.userId }).then((r) => {
                    console.log(r.data.data,9988);
                    this.userInfo = r.data.data;
                    console.log(this.userInfo, 6699);
                });
                getPetBySerial({ serial: "M-202405051113560099" }).then((r) => {
                // getPetBySerial({ serial: item.petSerial }).then((r) => {
                    console.log(1111, r.data.data);
                    this.petInfo = r.data.data;

                    this.dialogShow = true;
                    this.$store.commit("setLoading", false);
                });
            },
            agree() {
                linkPet({
                    tel: this.userInfo.MTel,
                    serial: this.petInfo.serial,
                }).then((r) => {
                    console.log(r.data);
                    const data = {
                        id: this.$store.state.TEL, // 发送消息的主体的id
                        message: {
                            result: true, //同意
                            petSerial: this.petInfo.serial, //宠物编号
                            masterTel: this.userInfo.MTel, // 主人电话
                            masterId: this.userInfo.id, // 用户id用于查找是哪个ws发来的消息//不必，可以使用特里查
                        },
                    };
                    this.$bus.$emit("sendMessageToServe", data);
                });
            },
            refuse() {
                //拒绝用户申请
                const data = {
                    id: this.$store.state.TEL, // 发送消息的主体的id
                    message: {
                        result: false, //拒绝
                        petSerial: this.petInfo.serial, //宠物编号
                        masterTel: this.userInfo.MTel, // 主人电话
                        masterId: this.userInfo.id, // 用户id用于查找是哪个ws发来的消息
                        refuseMessage: this.refuseMessage, //拒绝原因
                    },
                };
                this.$bus.$emit("sendMessageToServe", data);
            },
        },
    };
</script>

<style>
</style>