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
        title: "添加员工",
        cancelText: "清空",
        addAdminData: {},
        renderList: [
          { lable: "管理员电话", value: "", type: "text" },
          { lable: "管理员名字", value: "", type: "text" },
          { lable: "管理员权限", value: "", type: "text" },
          { lable: "管理员组织", value: "", type: "text" },
          { lable: "管理员地址", value: "", type: "text" },
          { lable: "管理员密码", value: "", type: "text" },
          { lable: "管理员生日", value: "", type: "datetime-local" },
        ],
      };
    },
    components: {
      Dialogs,
    },
    methods: {
      okHandle() {
        console.log(this.renderList);
        this.addAdminData = {
          tel: this.renderList[0].value,
          name: this.renderList[1].value,
          limit: this.renderList[2].value,
          tissue: this.renderList[3].value,
          address: this.renderList[4].value,
          pwd: this.renderList[5].value,
          birth: this.renderList[6].value,
        };
        this.$axios.post(`${this.$baseUrl}/api/admin/createAdmin`, this.addAdminData);
      },
      CancelHandle() {
        // 取消清除数据
        this.renderList.forEach((item) => {
          item.value = null;
        });
      },
    },
  };
  </script>
  
  <style>
  </style>