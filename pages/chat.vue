<template>
    <div class="bg-transparent lg:p-2 h-[92vh]">
        <div class="bg-white lg:rounded-xl h-full flex">
            <div class="w-[30%] bg-white rounded-l-xl border-r-2 overflow-y-scroll chatSidebar">

                <div class="sticky top-0 bg-white z-50">

                    <h1 class="px-4 pt-4 text-2xl">Messages</h1>

                    <div class="w-full p-4">
                        <input type="search" name="" id="" placeholder="Search..." autofocus="false" autocomplete="false"
                            class="w-full px-2 ring-1 ring-gray-100 outline-none active:ring-[#08364a]/50 rounded-lg h-9 font-Nunito text-sm active:text-zinc-900">
                    </div>
                </div>

                <div class=" h-full">
                    <ul role="list" class=" divide-y divide-slate-200 ">


                        <li
                            class="flex px-4 py-4 first:pt-0 last:pb-0 justify-between hover:bg-[#21b9ee]/10 cursor-pointer">
                            <div class="w-[85%] flex truncate overflow-hidden">
                                <v-avatar image="/images/avtar.jpg" variant="flat" size="default"></v-avatar>
                                <div class="ml-3 overflow-hidden ">
                                    <p class="text-[1rem] font-medium text-slate-900">Yuliya</p>
                                    <p class="text-xs text-slate-500 truncate">??</p>
                                </div>
                            </div>
                            <div class="flex flex-col text-xs gap-1">
                                <p class="text-[#08364a] font-semibold text-[0.7rem]">7:39 am</p>
                                <p class="text-right text-[0.6rem]">
                                    <span
                                        class="bg-[#08364a] text-white rounded-full px-1.5 py-0.5 text-right w-auto">46</span>
                                </p>
                            </div>
                        </li>
                        <li class="flex px-4 py-4 justify-between hover:bg-[#21b9ee]/10 cursor-pointer">
                            <div class="w-[85%] flex truncate overflow-hidden">
                                <v-avatar image="/images/avtar.jpg" variant="flat" size="default"></v-avatar>
                                <div class="ml-3 overflow-hidden ">
                                    <p class="font-medium text-slate-900 text-[1rem]">Nathan</p>
                                    <p class="text-xs text-slate-500 truncate">Hello Vikrant ,Are you there ???????</p>
                                </div>
                            </div>
                            <div class="flex flex-col text-xs gap-1">
                                <p class="text-[#08364a] font-semibold text-[0.7rem]">Yesterday</p>
                                <p class="text-right text-[0.6rem]">
                                    <span
                                        class="bg-[#08364a] text-white rounded-full px-1.5 py-0.5 text-right w-auto">2</span>
                                </p>
                            </div>
                        </li>
                        <li class="flex px-4 py-4  justify-between hover:bg-[#21b9ee]/10 cursor-pointer">
                            <div class="w-[85%] flex truncate overflow-hidden">
                                <v-avatar image="/images/avtar.jpg" variant="flat" size="default"></v-avatar>
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-[1rem] font-medium text-slate-900">Glen Shelton</p>
                                    <p class="text-xs text-slate-500 truncate">Leadheroes Dashboard looking great</p>
                                </div>
                            </div>
                            <div class="flex flex-col text-xs gap-1">
                                <p class="text-[#08364a] font-medium text-[0.7rem]">9:30 am</p>
                                <!-- <p class="text-right text-[0.6rem]">
                                <span class="bg-[#08364a] text-white rounded-full px-1.5 py-0.5 text-right w-auto">46</span>
                            </p> -->
                            </div>
                        </li>
                        <li class="flex px-4 py-4  justify-between hover:bg-[#21b9ee]/10 cursor-pointer">
                            <div class="w-[85%] flex truncate overflow-hidden">
                                <v-avatar image="/images/avtar.jpg" variant="flat" size="default"></v-avatar>
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-[1rem] font-medium text-slate-900">Glen Shelton 2</p>
                                    <p class="text-xs text-slate-500 truncate">Leadheroes Dashboard looking great</p>
                                </div>
                            </div>
                            <div class="flex flex-col text-xs gap-1">
                                <p class="text-[#08364a] font-medium text-[0.7rem]">03/01/24</p>
                                <!-- <p class="text-right text-[0.6rem]">
                                <span class="bg-[#08364a] text-white rounded-full px-1.5 py-0.5 text-right w-auto">46</span>
                            </p> -->
                            </div>
                        </li>
                        <li
                            class="flex px-4 py-4 first:pt-0 last:pb-0 justify-between hover:bg-[#21b9ee]/10 cursor-pointer">
                            <div class="w-[85%] flex truncate overflow-hidden">
                                <v-avatar image="/images/avtar.jpg" variant="flat" size="default"></v-avatar>
                                <div class="ml-3 overflow-hidden ">
                                    <p class="text-[1rem] font-medium text-slate-900">Yuliya</p>
                                    <p class="text-xs text-slate-500 truncate">Hello Vikrant ???</p>
                                </div>
                            </div>
                            <div class="flex flex-col text-xs gap-1">
                                <p class="text-[#08364a] font-semibold text-[0.7rem]">7:39 am</p>
                                <p class="text-right text-[0.6rem]">
                                    <span
                                        class="bg-[#08364a] text-white rounded-full px-1.5 py-0.5 text-right w-auto">99+</span>
                                </p>
                            </div>
                        </li>
                        <li class="flex px-4 py-4 justify-between hover:bg-[#21b9ee]/10 cursor-pointer">
                            <div class="w-[85%] flex truncate overflow-hidden">
                                <v-avatar image="/images/avtar.jpg" variant="flat" size="default"></v-avatar>
                                <div class="ml-3 overflow-hidden ">
                                    <p class="font-medium text-slate-900 text-[1rem]">Nathan</p>
                                    <p class="text-xs text-slate-500 truncate">Hello Vikrant ,Are you there ???????</p>
                                </div>
                            </div>
                            <div class="flex flex-col text-xs gap-1">
                                <p class="text-[#08364a] font-semibold text-[0.7rem]">Yesterday</p>
                                <p class="text-right text-[0.6rem]">
                                    <span
                                        class="bg-[#08364a] text-white rounded-full px-1.5 py-0.5 text-right w-auto">2</span>
                                </p>
                            </div>
                        </li>
                        <li class="flex px-4 py-4  justify-between hover:bg-[#21b9ee]/10 cursor-pointer">
                            <div class="w-[85%] flex truncate overflow-hidden">
                                <v-avatar image="/images/avtar.jpg" variant="flat" size="default"></v-avatar>
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-[1rem] font-medium text-slate-900">Glen Shelton</p>
                                    <p class="text-xs text-slate-500 truncate">Leadheroes Dashboard looking great</p>
                                </div>
                            </div>
                            <div class="flex flex-col text-xs gap-1">
                                <p class="text-[#08364a] font-medium text-[0.7rem]">9:30 am</p>
                                <!-- <p class="text-right text-[0.6rem]">
                                <span class="bg-[#08364a] text-white rounded-full px-1.5 py-0.5 text-right w-auto">46</span>
                            </p> -->
                            </div>
                        </li>
                        <li class="flex px-4 py-4  justify-between hover:bg-[#21b9ee]/10 cursor-pointer">
                            <div class="w-[85%] flex truncate overflow-hidden">
                                <v-avatar image="/images/avtar.jpg" variant="flat" size="default"></v-avatar>
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-[1rem] font-medium text-slate-900">Glen Shelton 2</p>
                                    <p class="text-xs text-slate-500 truncate">Leadheroes Dashboard looking great</p>
                                </div>
                            </div>
                            <div class="flex flex-col text-xs gap-1">
                                <p class="text-[#08364a] font-medium text-[0.7rem]">03/01/24</p>
                                <!-- <p class="text-right text-[0.6rem]">
                                <span class="bg-[#08364a] text-white rounded-full px-1.5 py-0.5 text-right w-auto">46</span>
                            </p> -->
                            </div>
                        </li>
                        <li class="flex px-4 py-4  justify-between hover:bg-[#21b9ee]/10 cursor-pointer">
                            <div class="w-[85%] flex truncate overflow-hidden">
                                <v-avatar image="/images/avtar.jpg" variant="flat" size="default"></v-avatar>
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-[1rem] font-medium text-slate-900">Glen Shelton</p>
                                    <p class="text-xs text-slate-500 truncate">Leadheroes Dashboard looking great</p>
                                </div>
                            </div>
                            <div class="flex flex-col text-xs gap-1">
                                <p class="text-[#08364a] font-medium text-[0.7rem]">9:30 am</p>
                                <!-- <p class="text-right text-[0.6rem]">
                                <span class="bg-[#08364a] text-white rounded-full px-1.5 py-0.5 text-right w-auto">46</span>
                            </p> -->
                            </div>
                        </li>
                        <li class="flex px-4 py-4  justify-between hover:bg-[#21b9ee]/10 cursor-pointer">
                            <div class="w-[85%] flex truncate overflow-hidden">
                                <v-avatar image="/images/avtar.jpg" variant="flat" size="default"></v-avatar>
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-[1rem] font-medium text-slate-900">Glen Shelton 2</p>
                                    <p class="text-xs text-slate-500 truncate">Leadheroes Dashboard looking great</p>
                                </div>
                            </div>
                            <div class="flex flex-col text-xs gap-1">
                                <p class="text-[#08364a] font-medium text-[0.7rem]">03/01/24</p>
                                <!-- <p class="text-right text-[0.6rem]">
                                <span class="bg-[#08364a] text-white rounded-full px-1.5 py-0.5 text-right w-auto">46</span>
                            </p> -->
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="w-[70%] chat-box rounded-r-xl relative">

                <!-- Profile Bar -->
                <div class="w-full shadow px-7 py-2 flex justify-between items-center">
                    <div class="w-[85%] flex truncate overflow-hidden">
                        <v-avatar image="/images/avtar.jpg" variant="flat" size="default"></v-avatar>
                        <div class="ml-3 overflow-hidden ">
                            <p class="text-[1rem] font-medium text-slate-900">Yuliya</p>
                            <p class="text-xs text-green-500 truncate">Online</p>
                            <!-- <p class="text-xs text-gray-500 truncate">Offline</p> -->
                        </div>
                    </div>
                    <div class="flex gap-5">
                        <button class="hover:text-[#08364a]">
                            <i class="fa-duotone fa-video text-xl"></i>
                        </button>
                        <button class="hover:text-[#08364a]">
                            <i class="fa-duotone fa-phone-volume text-xl"></i>
                        </button>
                    </div>
                </div>

                
                    <div class="w-full bg-white flex flex-col ">
                        <!-- Left message -->
                        <div class="flex items-end mb-2">
                        <div class="bg-blue-500 rounded-lg p-2 max-width-80">
                            <p>This is a left message</p>
                            <small class="text-xs text-right block">12:30 PM</small>
                        </div>
                        </div>

                        <!-- Right message -->
                        <div class="flex justify-end mb-2">
                        <div class="bg-green-500 rounded-lg p-2 max-width-80">
                            <p>This is a right message with a longer content to test the width of the message box.</p>
                            <small class="text-xs text-right block">1:45 PM</small>
                        </div>
                        </div>
                    </div>
                

                <!-- message Type Area -->
                <div class="w-full flex justify-center items-center pb-4 absolute bottom-0">
                    <div
                        class="flex w-[93%] px-2 bg-white rounded-full justify-center items-center ring-1 ring-[#08364a]/20">
                        <input type="text" placeholder="Message" autofocus
                            class="w-[85%] bg-white px-2 h-11 border-none outline-none rounded-l-full" />
                        <button class="h-10 w-10 hover:text-[#08364a] hover:drop-shadow">
                            <i class="fa-duotone fa-file-contract text-xl"></i>
                        </button>
                        <button class="h-10 w-10 hover:text-[#08364a]">
                            <i class="fa-duotone fa-paperclip text-xl"></i>
                        </button>
                        <button class="h-10 w-10 rounded-r-full hover:text-[#08364a] ">
                            <i class="fa-duotone fa-paper-plane text-xl"></i>
                        </button>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard'
})
</script>