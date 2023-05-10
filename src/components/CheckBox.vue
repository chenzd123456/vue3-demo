<template>
  <label :class="className" :id="id"> <!-- 绑定className和id这两个属性来改变CSS样式 -->
    <input type="checkbox" v-bind="$attrs" :checked="checked" @input="onInput" /> <!-- 将当前的modelValue属性赋值给checked并绑定一个点击事件来进行更新 -->
    <slot></slot> <!-- 在组件标签之间添加其他内容 -->
  </label>
</template>

<script setup>
import { defineEmits, ref, watch } from 'vue' //引入Vue.js的相关API
import classNames from 'classnames' //引入classnames库来帮助处理CSS class名称的动态绑定

const props = defineProps({ //定义'props'对象
  id: {
    type: String, //定义id属性的数据类型为字符串
    default: '' //设置默认值为空字符串
  },
  size: {
    type: String, //定义size属性的数据类型为字符串
    default: 'normal', //设置默认值为'normal'
    validator: (val) => ['small', 'normal', 'large'].includes(val) //定义一个验证方法，以确保传入值只包含在指定的三种值之一
  },
  modelValue: {
    type: [Boolean] //定义modelValue属性的数据类型为布尔类型
  }
})

const emit = defineEmits(['update:modelValue']) //使用Vue.js的defineEmits方法来定义一个名为'update:modelValue'的事件方法

const checked = ref(!!props.modelValue) //使用Vue.js的ref方法来定义一个名为'checked'的响应式变量，并将modelValue赋给它

const onInput = () => { //定义一个名为'onInput'的函数，用于处理点击事件，当用户单击复选框时调用此函数变更checked值
  checked.value = !checked.value
}

watch(
  () => checked.value, //监听checked响应式变量的变化
  (value) => {
    emit('update:modelValue', value) //当checked值改变时，使用之前定义的'update:modelValue'方法来触发与之相关的事件
  }
)

const className = classNames("checkbox", { //使用classNames方法来获取与组件相关的CSS类名称
  'checkbox__small': props.size === 'small', //判断当前大小是否为'small'
  'checkbox__normal': props.size === 'normal' || !props.size, //判断当前大小是否为'normal'或为未定义
  'checkbox__large': props.size === 'large' //判断当前大小是否为'large'
})
</script>
<style lang="scss" scoped>
.checkbox { //开始组件的CSS定义

  &__small { //当组件大小为'small'时应用以下样式

    font-size: 0.5rem;

    input[type=checkbox] {
      zoom: 80%; //缩小复选框大小
    }
  }

  &__normal { //当组件大小为'normal'时应用以下样式

    font-size: 1rem;

    input[type=checkbox] {
      zoom: 100%; //恢复正常大小
    }
  }

  &__large { //当组件大小为'large'时应用以下样式

    font-size: 2rem;

    input {
      zoom: 200% //放大复选框大小
    }
  }
}
</style>
