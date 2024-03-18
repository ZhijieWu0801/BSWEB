<template>
  <div class="tableContainer">
    <el-table :data="tableData" stripe style="width: 100%;height: 100%;" >
      <el-table-column
        align="center"
        header-align="center"
        :prop="title.prop"
        :label="title.label"
        :width="title.width"
        v-for="(title, index) in tableTitle"
        :key="index"
      >
      </el-table-column>
      <!-- <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    tableTitle: {
      type: Array,
      default: () => [{ prop: "", label: "", width: "" }],
    },
  },
  mounted() {
    console.log(this.tableData, this.tableTitle);
  },
};
</script>

<style>
</style>