<template>
    <div
        class="flex flex-row justify-end gap-4 p-6 font-sans text-sm md:text-xm md:mr-8"
    >
        <p class="hover:scale-105 cursor-pointer">ABOUT</p>
        <router-link to="/projects" class="hover:scale-105 cursor-pointer"
            ><p>PROJECTS</p></router-link
        >
        <p class="hover:scale-105 cursor-pointer">CONTACT</p>
        <font-awesome-icon
            :icon="['fab', 'github']"
            size="lg"
            class="ml-4 hover:scale-125 ease-in-out duration-[600ms] cursor-pointer"
        />
        <font-awesome-icon
            :icon="['fab', 'linkedin']"
            size="lg"
            class="hover:scale-125 ease-in-out duration-[600ms] cursor-pointer"
        />
    </div>
</template>

<script></script>
