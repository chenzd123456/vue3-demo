<template>
    <Teleport to="body">
        <div class="overlay" v-show="active">
            <div class="modal">
                <slot></slot>
                <button @click="emit('close')">Close</button>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
const props = defineProps({ active: false })
const emit = defineEmits(["close"])
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
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
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
</style>
