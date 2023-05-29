<template>
    <Teleport to="body">
        <div class="overlay" v-show="active" @click.stop="emitClose">
            <div class="modal">
                <slot></slot>
                <button @click="emitClose">Close</button>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({ active: false });
const emit = defineEmits(["close"]);

function emitClose() {
    emit('close');
}

function onEscDown(event) {
    if (event.keyCode === 27) {
        emitClose()
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    position: relative;
    z-index: 999;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
