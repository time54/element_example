<template>
  <div class="example">
    <div class="module-item">
      <span style="margin-right: 40px;">日期选择器:</span>
      <el-date-picker 
        v-model="dateVals" 
        type="daterange" 
        value-format="yyyy-MM-dd"
        range-separator="-" 
        start-placeholder="开始日期" 
        end-placeholder="结束日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DateTimePicker',
    data() {
      return {
        dateVals: ''
      }
    },
    methods: {
      defaultDate(){ //设置默认日期
        let date = new Date();
        let year = date.getFullYear().toString();
        let month = date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1).toString():(date.getMonth()+1).toString();
        let da = date.getDate() < 10 ? '0'+date.getDate().toString():date.getDate().toString();
        let beg = year + '-' + month + '-01';
        let end = year + '-' + month + '-' + da;
        this.dateVals = [beg,end];
      }
    },
    created() {
      this.defaultDate();
    }
  }

</script>

<style  lang="scss" scoped>

</style>