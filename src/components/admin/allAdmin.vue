<template>
  <div class="allAdmin">
    <Table :tableData="tableData" :tableTitle="tableTitle"></Table>
  </div>
</template>

<script>
import Tables from "@/components/Table.vue";
export default {
  components: {
    Tables,
  },
  data() {
    return {
      tableTitle: [{ prop: "aaa", label: "bbb" }],
      tableData: [],
    };
  },
};
</script>

<style>
</style>