<template>
    <div class="relative">
        <div
            class="flex flex-row justify-end gap-4 p-6 font-sans text-xs md:text-sm md:mr-8 top-0 fixed w-full"
        >
            <p
                class="hover:scale-105 cursor-pointer"
                @click="$emit('aboutAnchor')"
            >
                ABOUT
            </p>
            <p
                class="hover:scale-105 cursor-pointer"
                @click="$emit('projectsAnchor')"
            >
                PROJECTS
            </p>
            <p
                class="hover:scale-105 cursor-pointer"
                @click="$emit('contactAnchor')"
            >
                CONTACT
            </p>
            <a href="https://github.com/htippins" target="_blank">
                <font-awesome-icon
                    :icon="['fab', 'github']"
                    size="lg"
                    class="ml-4 hover:scale-125 ease-in-out duration-[600ms] cursor-pointer"
            /></a>
            <a
                href="https://www.linkedin.com/in/holly-tippins/"
                target="_blank"
            >
                <font-awesome-icon
                    :icon="['fab', 'linkedin']"
                    size="lg"
                    class="hover:scale-125 ease-in-out duration-[600ms] cursor-pointer"
            /></a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {},
};
</script>
