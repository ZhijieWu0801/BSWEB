<template>
    <div class="petInboundContainer">
        <!-- <div @click="aaa">aaaaaaa</div> -->
        <Dialogs
            @Ok="okHandle"
            @Cancel="CancelHandle"
            :cancelText="cancelText"
            :title="title"
        >
            <template>
                <div class="slotContainer">
                    <div
                        class="itemContainer"
                        v-for="(item, index) in renderList"
                        :key="index"
                    >
                        <span class="itemText"> {{ item.lable }}：</span>

                        <input
                            v-if="
                                item.type !== 'select' && item.type !== 'file'
                            "
                            class="itemInput"
                            :type="item.type"
                            v-model="renderList[index].value"
                        />
                        <select
                            v-else-if="item.type === 'select'"
                            name=""
                            id=""
                            v-model="renderList[index].value"
                        >
                            <option
                                :value="opt.value"
                                v-for="(opt, i) in item.child"
                                :key="i"
                            >
                                {{ opt.lable }}
                            </option>
                        </select>
                        <template v-else-if="item.type === 'file'">
                            <input
                                class="itemInput"
                                :type="item.type"
                                @change="handleFileInputChange"
                            />
                            <img
                                :src="base64Image"
                                alt=""
                                style="width: 500px"
                            />
                        </template>
                    </div>
                </div>
                <div>
                    <input type="file" @change="handleFileInputChange" />
                    <button @click="convertImageToBase64">
                        Convert to Base64
                    </button>
                    <img
                        :src="base64Image"
                        class="upImg"
                        alt="Converted Image"
                        style="width: 500px"
                    />
                </div>
            </template>
        </Dialogs>
    </div>
</template>

<script>
    import { forecastByPy, addPet, search,upload } from "@/api/Api.js";
    import Dialogs from "@/components/Dialog.vue";
    // import store from "@/store";
    export default {
        data() {
            const serialMap = {};
            return {
                base64Image: "",
                title: "动物入站",
                cancelText: "清空",
                addpetData: {},
                renderList: [
                    {
                        lable: "宠物种类",
                        value: "",
                        type: "select",
                        child: [
                            {
                                value: "猫",
                                lable: "猫",
                            },
                            {
                                value: "狗",
                                lable: "狗",
                            },
                        ],
                    },
                    { lable: "宠物编号", value: "", type: "text" },
                    { lable: "宠物名字", value: "", type: "text" },
                    { lable: "宠物主人电话", value: "", type: "text" },
                    { lable: "宠物照片", value: "", type: "file" },
                    // { lable: "宠物照片", value: "", type: "image" },
                ],
                petImgBase64: "",
            };
        },
        components: {
            Dialogs,
        },
        methods: {
            aaa() {
                this.$store.commit("setLoading", true);
                console.log(this.$store.state);
            },
            getPetImgBase64() {},
            handleFileInputChange(event) {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    this.base64Image = reader.result;
                    this.petImgBase64 = reader.result;
                };
                reader.readAsDataURL(file);
            },
            convertImageToBase64() {
                const data = {
                    img: this.base64Image,
                };
                // 这里可以发送 base64Image 到后端处理
                // this.$axios.post(`${this.$baseUrl}/api/serve/PY`, {
                //     image: this.base64Image,
                // });
                console.log(data);
                // search(data);
                upload({serial:"111111111",img:this.base64Image})
                // forecastByPy(data);
                // console.log("Base64 Image:", { aaa: this.base64Image });
            },
            okHandle() {
                console.log(this.renderList);
                this.addpetData = {
                    species: this.renderList[0].value,
                    // serial: this.renderList[1].value,
                    name: this.renderList[2].value,
                    master: this.renderList[3].value,
                    img: this.base64Image,
                };
                this.$store.commit("setLoading", true);

                addPet(this.addpetData).then(() => {
                    this.$store.commit("setLoading", false);
                });
            },
            //     this.$axios.post(
            //         `${this.$baseUrl}/api/pet/addPet`,
            //         this.addpetData
            //     );
            // },
            CancelHandle() {
                // 取消清除数据
                this.renderList.forEach((item) => {
                    item.value = null;
                });
                this.base64Image = null;
                //   this.renderList[0].value = null;
                //   this.renderList[1].value = null;
                //   this.renderList[2].value = null;
                //   this.renderList[3].value = null;
            },
        },
    };
</script>

<style lang="less">
    .petInboundContainer {
        .upImg {
        }
    }
</style>