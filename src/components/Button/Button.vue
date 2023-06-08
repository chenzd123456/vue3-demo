<template>
    <button :class="buttonClasses" :disabled="disabled" :autofocus="autofocus" :type="nativeType">
        <i v-if="loading" class="loading-icon"></i>
        <i v-else-if="icon" :class="`iconfont ${icon}`"></i>
        <span v-else>
            <slot></slot>
        </span>
    </button>
</template>
  
<script setup>
import { computed } from 'vue';
import classnames from 'classnames';
import { ButtonTypes, ButtonSizes } from './Button.constant.js'

const props = defineProps({
    size: {
        type: String,
        validator: (val) => ButtonSizes.includes(val),
        default: 'medium',
    },
    type: {
        type: String,
        validator: (val) => ButtonTypes.includes(val),
        default: 'primary',
    },
    plain: {
        type: Boolean,
        default: false,
    },
    round: {
        type: Boolean,
        default: false,
    },
    circle: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    icon: String,
    autofocus: {
        type: Boolean,
        default: false,
    },
    nativeType: {
        type: String,
        default: 'button',
    },
});

const buttonClasses = computed(() =>
    classnames('button', `button--${props.type}`, {
        'is-disabled': props.disabled,
        'is-loading': props.loading,
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        [`el-button--${props.size}`]: props.size !== '',
    })
);
</script>
  
<style lang="scss" scoped>
@import "./Button.scss";
</style>
  