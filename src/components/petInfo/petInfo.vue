<template>
    <div class="petInfoContainer">
        <div class="petInfo">
            <div class="id">宠物ID：{{ petInfo.id }}</div>
            <div class="serial">宠物编号：{{ petInfo.serial }}</div>
            <div class="species">宠物类型：{{ petInfo.species }}</div>
            <div class="PName">宠物名称：{{ petInfo.PName }}</div>
            <div class="PImg">
                宠物图片： <img :src="petInfo.PetImg" class="petImg" />
            </div>
            <div class="createTime">宠物入站时间：{{ petInfo.CreateAt }}</div>
            <div class="MTel">主人电话：{{ petInfo.petMaster.MTel }}</div>
            <div class="MName">主人名字：{{ petInfo.petMaster.MPName }}</div>
            <div class="MAddress">
                主人地址：{{ petInfo.petMaster.MAddress }}
            </div>
        </div>
        <div class="apply" @click="applyPet">申请领养</div>
    </div>
</template>

<script>
    import { getPetBySerial, linkPet } from "@/api/Api.js";

    const nameMap = {
        PetMasterId: "主人id",
    };
    export default {
        data() {
            return {
                petInfo: {
                    petMaster: {},
                },
            };
        },
        mounted() {
            console.log(this.$route.query);
            getPetBySerial({ serial: this.$route.query.serial }).then((r) => {
                this.petInfo = r.data.data;
                console.log(this.petInfo);
                for (const key in this.petInfo) {
                    if (!this.petInfo[key]) {
                        this.petInfo[key] = "--";
                    }
                }
                for (const key in this.petInfo.petMaster) {
                    if (!this.petInfo.petMaster[key]) {
                        this.petInfo.petMaster[key] = "--";
                    }
                }
            });
        },
        methods: {
            applyPet() {
                console.log(this.$store.state);
                if (this.petInfo.PetMasterId) {
                    return this.$Message.error("该宠物已有主人");
                }
                const data = {
                    tel: this.$store.state.TEL,
                    serial: this.petInfo.serial,
                };
                linkPet(data).then((r) => {
                    console.log(r.data);
                    this.$Message.success(r.data.msg);
                });
            },
        },
    };
</script>

<style lang="less">
    .petInfoContainer {
        text-align: left;
        .apply {
            position: fixed;
            right: 10px;
            bottom: 50px;
        }
        .petImg {
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
    }
</style>