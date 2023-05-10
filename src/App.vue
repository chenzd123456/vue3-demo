```
<template>
  <div>
    <!-- 创建一个size为small的复选框 -->
    <CheckBox id="CheckBox1" size="small" v-model="isChecked1">
      Small CheckBox
    </CheckBox>
    <!-- 创建一个size为normal的复选框 -->
    <CheckBox id="CheckBox2" size="normal" v-model="isChecked2">
      Normal CheckBox
    </CheckBox>
    <!-- 创建一个size为large的复选框 -->
    <CheckBox id="CheckBox3" size="large" v-model="isChecked3">
      Large CheckBox
    </CheckBox>
  </div>
</template>

<script>
import CheckBox from "@/components/CheckBox.vue";
export default {
  components: {
    CheckBox,  // 引入CheckBox组件
  },
  data() {
    return {
      isChecked1: false,  // 初始化isChecked1为false
      isChecked2: true,   // 初始化isChecked2为true
      isChecked3: false,  // 初始化isChecked3为false
    };
  },
};
</script>
```
