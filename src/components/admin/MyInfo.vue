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
    </div>
</template>

<script>
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
                    // birthday: {
                    //     value: this.$store.state.BIRTH || "--",
                    //     lable: "生日",
                    // },
                },
            };
        },
        mounted() {
            console.log(this.myInfo);
        },
    };
</script>

<style lang="less">
    .MyInfoContainer {
        padding-top: 50px;
        padding-left: 0;
        .itemContainer {
            display: flex;
            .lable {
                flex: 0 0 100px;
            }
            .value {
                flex: 0 0 auto;
            }
        }
    }
</style>