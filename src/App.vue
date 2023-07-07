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
    <br>
    <Button @click="showModal">
      这是一个按钮
    </Button>
    <Slider :min="0" :max="100" v-model="sliderValue" />
    <p>当前值: {{ sliderValue }}</p>
    <Modal :active="isModalActive" @close="closeModal">
      <p> this is a modal</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CheckBox from "@/components/CheckBox.vue";
import Modal from "@/components/Modal.vue";
import { Button } from "@/components/Button";
import { Slider } from "@/components/Slider";

const isChecked1 = ref(false); // 初始化isChecked1为false
const isChecked2 = ref(true);  // 初始化isChecked2为true
const isChecked3 = ref(false);  // 初始化isChecked3为false

const isModalActive = ref(false);  // 初始化isModalActive为false

const sliderValue = ref(10);

function showModal() {
  isModalActive.value = true;
}

function closeModal() {
  isModalActive.value = false;
}

</script>
```
