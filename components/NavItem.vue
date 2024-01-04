<template>
    <!-- sidebar w-full border-l-4 border-white hover:border-blue-600 hover:bg-slate-50 hover:ease-in-out flex gap-3 px-5 py-2.5 -->
    <NuxtLink :to="props.to"
        class="sidebar w-full flex gap-3 px-5 py-2.5 my-2 rounded-md hover:bg-[#21b9ee]/10 hover:text-[#08364a] hover:font-semibold">
        <!-- <i :class="['fa-duotone', icon, 'text-xl']"></i> hover:text-[#2596be]-->
        <slot name="icon"></slot>
        <span>{{ props.title }}</span>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['to', 'title', 'icon'])
</script>

<style lang="scss" scoped></style>