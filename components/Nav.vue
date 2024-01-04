<template>
    <nav class="w-full bg-[#fffefe] shadow-sm px-5 lg:px-20 py-3 z-50 fixed flex justify-between top-0 inset-x-0">

        <!-- Logo -->
        <div id="logo" class="flex items-center gap-2">

            <div>
                <i class="fa-regular fa-bars text-xl mr-2 block lg:hidden"></i>
            </div>
            <div class=" bg-[#21130d] h-8 w-8 p-1 rounded-md text-white  flex justify-center items-center tracking-widest">
                LS
            </div>
            <h1 class=" font-semibold text-xl">
                Hire
                <span class=" font-light ">Heroes</span>
            </h1>
        </div>

        <div class="flex items-center gap-5 md:gap-8 md:pr-2">

            <div class=" cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>

            </div>

            <v-badge :content="0" class=" cursor-pointer ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>

            </v-badge>


            <v-menu open-on-hover class="shadow-none profileMenu font-Nunito">

                <template v-slot:activator="{ props }">

                    <span class="flex justify-center items-center gap-1 text-md hover:text-blue-600 cursor-pointer"
                        v-bind="props">
                        <v-avatar image="/images/avtar.jpg" variant="flat" size="small" class="bg-red-800"></v-avatar>
                    </span>
                </template>


                <v-list class="mt-2.5 px-0 cursor-pointer" elevation="0">

                    <v-list-item>
                        <div class="flex justify-start items-center gap-3 mb-5">
                            <v-avatar image="/images/avtar.jpg" variant="flat" size="default" class="bg-red-800"></v-avatar>
                            <div class="flex flex-col justify-start items-start">
                                <span class="text-md font-semibold">Vikrant Talwar</span>
                                <span class=" text-xs text-gray-500">@vikrant</span>
                            </div>
                        </div>
                    </v-list-item>

                    <v-list-item v-for="(item, index) in items" :key="index">
                        <div
                            class="flex px-2 py-2 justify-start items-center rounded-lg gap-3 w-44 hover:text-blue-600 hover:bg-gray-100">
                            <i :class="['fa-regular', item.icon]"></i>
                            <span>{{ item.title }}</span>
                        </div>
                    </v-list-item>

                </v-list>

            </v-menu>

        </div>

    </nav>
</template>

<script setup>
const items = [
    { title: 'Profile', icon: 'fa-user' },
    { title: 'Support', icon: 'fa-tickets' },
    // { title: 'Settings', icon: 'fa-gears' },
    { title: 'SignOut', icon: 'fa-arrow-up-left-from-circle' },
]
</script>

<style lang="scss" scoped></style>