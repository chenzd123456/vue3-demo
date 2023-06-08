<template>
    <component :is="tag" class="list">
        <li v-for="(list, index) in lists" :key="preName + '-' + index">
            <template v-if="typeof list === 'string'">{{ list }}</template>
            <template v-if="typeof list === 'object'">
                <p v-for="(item, subIndex) in list" :key="preName + '-' + index + '-' + subIndex">{{ item }}</p>
            </template>
        </li>
    </component>
</template>
<script setup>
const props = defineProps({
    name: 'TheList',
    isOrdered: {
        type: Boolean,
        default: "false",
    },
    lists: {
        type: Array,
        default: new Array([]),
    },
    preName: {
        type: String,
        default: "",
    }
});

const tag = computed(() => props.isOrdered ? 'ol' : 'ul');

</script>
<style scoped>
</style>