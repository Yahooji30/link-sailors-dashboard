<template>
    <div class="font-Nunito">
        <Nav />
        <Sidebar class="hidden lg:flex" />
        <main id="main" class="w-full lg:w-[82.80%] mt-15 ml-auto bg-gray">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>

</script>