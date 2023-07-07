<template>
    <div class="slider">
        <input type="range" class="slider-input" :min="min" :max="max" :value="modelValue" @input="onInput"
            ref="input_ref" />
        <span class="slider-value" :style="{ left: offset }">{{ modelValue }}</span>
    </div>
</template>
  
<script setup>
import { computed, ref } from 'vue';

// 组件属性定义
const props = defineProps({
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    modelValue: {
        type: Number,
        default: 0,
    }
});

const emit = defineEmits(['update:modelValue'])

const onInput = (event) => {
    emit('update:modelValue', parseInt(event.target.value));
}

const input_ref = ref(null)

const offset = computed(() => {
    const offset = props.modelValue / (props.max - props.min) * (input_ref?.value?.clientWidth - 20) + 'px'
    return offset;
});

</script>
  
<style lang='scss' scoped>
.slider {
    margin: 20px auto;

    .slider-input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 2rem;
        border-radius: 1rem;
        background-color: #ddd;
        outline: none;
        opacity: 0.7;
        transition: opacity 0.2s;
    }

    .slider-input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
        background-color: #42b983;
        cursor: pointer;
        position: relative;
    }

    // .slider-input[type="range"]::-moz-range-thumb {
    //     width: 2rem;
    //     height: 2rem;
    //     border-radius: 2rem;
    //     background-color: #42b983;
    //     cursor: pointer;
    // }

    .slider-value {
        top: 0rem;
        position: absolute;
        text-align: center;
    }
}
</style>
  