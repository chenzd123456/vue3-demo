<template>
    <!-- 使用Teleport从当前组件移入到body根元素下 -->
    <Teleport to="body">
      <!-- 蒙层，用于遮盖原本内容 -->
      <div class="overlay" v-show="active" @click.stop="emitClose">
        <!-- 模态框 -->
        <div class="modal">
          <!-- 显示用户传递的内容，用于展示模态框的具体信息 -->
          <slot></slot>
          <!-- 用于关闭模态框的按钮 -->
          <button @click="emitClose">Close</button>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue'
  
  // 定义控制模态框是否展示的prop属性
  const props = defineProps({
    active: false,
  });
  
  // 定义close事件的函数
  const emit = defineEmits(["close"]);
  
  function emitClose() {
    // 调用close事件，传递给父组件进行处理
    emit('close');
  }
  
  function onEscDown(event) {
    if (event.keyCode === 27) { // ESC键的keyCode是27
      emitClose(); // 发射关闭事件
    }
  }
  
  // 在组件 mount 时注册按键事件的监听器
  onMounted(() => {
    window.addEventListener('keydown', onEscDown)
  })
  
  // 在组件 unmount 时移除按键事件的监听器
  onUnmounted(() => {
    window.removeEventListener('keydown', onEscDown)
  })
  
  </script>
  
  <style scoped>
  .overlay {
    position: fixed; /* 创建一个绝对定位的元素 */
    top: 0; /* 距离顶部为0 */
    left: 0; /* 距离左侧为0 */
    width: 100%; /* 占据100%的横向空间 */
    height: 100%; /* 占据100%的纵向空间 */
    background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
    display: flex; /* 设置为flex布局 */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
  }
  
  .modal {
    position: relative; /* 相对定位 */
    z-index: 999; /* 设置在最上层 */
    background-color: white; /* 白色背景 */
    padding: 20px; /* 内部的边距为20px */
    border-radius: 8px; /* 圆角为8px */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影效果 */
  }
  </style>
  