<template>
  <div class="petInboundContainer">
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
              v-if="item.type !== 'select'"
              class="itemInput"
              :type="item.type"
              v-model="renderList[index].value"
            />
            <select v-else name="" id="" v-model="renderList[index].value">
              <option
                :value="opt.value"
                v-for="(opt, i) in item.child"
                :key="i"
              >
                {{ opt.lable }}
              </option>
            </select>
          </div>
        </div>
      </template>
    </Dialogs>
  </div>
</template>

<script>
import Dialogs from "@/components/Dialog.vue";
export default {
  data() {
    return {
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
              value: 1,
              lable: "aaa",
            },
            {
              value: 2,
              lable: "bbb",
            },
            {
              value: 3,
              lable: "ccc",
            },
            {
              value: 4,
              lable: "ddd",
            },
            {
              value: 5,
              lable: "eee",
            },
            {
              value: 6,
              lable: "fff",
            },
          ],
        },
        { lable: "宠物编号", value: "", type: "text" },
        { lable: "宠物名字", value: "", type: "text" },
        { lable: "宠物主人电话", value: "", type: "text" },
        { lable: "宠物照片", value: "", type: "image" },
      ],
    };
  },
  components: {
    Dialogs,
  },
  methods: {
    okHandle() {
      console.log(this.renderList);
      this.addpetData = {
        species: this.renderList[0].value,
        serial: this.renderList[1].value,
        name: this.renderList[2].value,
        master: this.renderList[3].value,
      };
      this.$axios.post(`${this.$baseUrl}/api/pet/addPet`, this.addpetData);
    },
    CancelHandle() {
      // 取消清除数据
      this.renderList.forEach((item) => {
        item.value = null;
      });
      //   this.renderList[0].value = null;
      //   this.renderList[1].value = null;
      //   this.renderList[2].value = null;
      //   this.renderList[3].value = null;
    },
  },
};
</script>

<style>
</style>