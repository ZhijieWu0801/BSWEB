<template>
    <div class="addMyPet">
        <div class="container">
            <div class="top">
                <div class="item" v-for="item in info" :key="item.label">
                    <div class="label">{{ item.label }}</div>
                    <template v-if="item.type === 'select'">
                        <select class="value" v-model="form[item.value]">
                            <option
                                class="value"
                                :value="i.value"
                                v-for="i in item.child"
                                :key="i.value"
                            >
                                {{ i.label }}
                            </option>
                        </select>
                    </template>
                    <template v-else>
                        <input
                            class="value"
                            :type="item.type"
                            v-model="form[item.value]"
                        />
                    </template>
                    <!-- <div class="value">{{ item.value }}</div> -->
                </div>
            </div>
            <div class="button">
                <!-- <div class="img"></div> -->
                <input
                    type="file"
                    id="file"
                    style="visibility: hidden"
                    @change="chooseImg"
                />
                <label
                    for="file"
                    :style="{ backgroundImage: `url('${base64Image}')` }"
                    ><span v-if="!base64Image">点击上传文件</span></label
                >
                <!-- <img src="" alt=""> -->
            </div>
        </div>
        <button class="btn" @click.stop="addPet">确定</button>
    </div>
</template>

<script>
    const dog = require("@/assets/img/dog.png");
    import { addPet } from "@/api/Api.js";
    export default {
        data() {
            return {
                base64Image: "",
                info: [
                    { label: "名字", value: "name", type: "text" },
                    {
                        label: "性别",
                        value: "sex",
                        type: "select",
                        child: [
                            {
                                value: 1,
                                label: "雄性",
                            },
                            {
                                value: 2,
                                label: "雌性",
                            },
                        ],
                    },
                    {
                        label: "种类",
                        value: "species",
                        type: "select",
                        child: [
                            {
                                value: "猫",
                                label: "猫",
                            },
                            {
                                value: "狗",
                                label: "狗",
                            },
                        ],
                    },
                    { label: "出生日期", value: "birth", type: "date" },
                    { label: "疫苗情况", value: "vaccine", type: "text" },
                    { label: "健康状况", value: "health", type: "text" },
                    { label: "描述", value: "description", type: "textarea" },
                ],
                select: [
                    {
                        value: "猫",
                        label: "猫",
                    },
                    {
                        value: "狗",
                        label: "狗",
                    },
                ],
                form: {
                    name: "",
                    sex: "",
                    species: "",
                    birth: "",
                    vaccine: "",
                    health: "",
                    description: "",
                    masterId: this.$store.state.ID,
                },
            };
        },
        computed: {
            select: () => {},
        },
        methods: {
            chooseImg(event) {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    this.base64Image = reader.result;

                    // this.petImgBase64 = reader.result;
                };
                reader.readAsDataURL(file);
                console.log(event.target.files[0]);
            },
            addPet() {
                this.form.img = this.base64Image;
                addPet(this.form).then((r) => {
                    console.log(r);
                });
            },
        },
    };
</script>

<style lang="less">
    .addMyPet {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0 50px;
        background-color: aquamarine;
        .container {
            width: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            background-color: #a4c9b769;
    border: 3px solid #6ddadc;
            .top {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: row;
                flex-wrap: wrap;
                .item {
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    .label {
                        margin-right: 10px;
                        width: 80px;
                        text-align: left;
                    }
                    .value {
                        width: 100px;
                    }
                }
            }
            .button {
                label {
                    width: 300px;
                    height: 300px;
                    border: 1px solid;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    object-fit: fill;
                    background-position: center;
                }
            }
        }
        .btn {
            width: 100px;
            height: 50px;
        }
    }
</style>