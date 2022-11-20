<template>
    <the-header></the-header>
    <section class="h-full">
        <div class="grid grid-cols-2 h-full mt-48">
            <div class="h-full w-full pt-16">
                <img
                    src="../assets/tall-building.jpg"
                    alt=""
                    class="object-contain"
                />
            </div>
            <div class="h-full font-serif pl-12">
                <p class="text-sm md:text-lg pb-2">Hello, my name's Holly</p>
                <h1 class="text-2xl md:text-5xl">
                    I'm an aspiring<br />
                    <span class="text-[#FBC33D]">web developer</span><br />
                    based in the United Kingdom.
                </h1>
            </div>
        </div>
    </section>
    <section>
        <div class="grid grid-cols-2 h-full bg-[#0F1923]">
            <div class="flex justify-center flex-col text-right pr-24 gap-4">
                <h1 class="text-xl font-extrabold text-[#FBC33D]">ABOUT</h1>
                <div class="my-4 h-12">
                    <glitched-writer
                        :text="phrases"
                        :options="options"
                        :queue="{
                            loop: true,
                        }"
                        class="text-5xl font-serif text-[#F7E9E6]"
                    />
                </div>
                <p class="text-zinc-400 text-sm tracking-tight">
                    Lancashire-based developer. <br />
                    Passionate programmer with an emphasis on front-end
                    development and user-focused design.<br />
                    CODE Lancashire Bootcamp student. <br />
                    MSc Computer Science student at Northumbria University.
                </p>
            </div>
            <div class="flex justify-center content-center m-0">
                <img
                    src="../assets/lookingout.jpg"
                    alt="b&w photo of author looking out over city"
                    class="h-full"
                />
            </div>
        </div>
    </section>
    <section>
        <h1 class="pl-14 mt-10 text-4xl font-serif">Recent Projects</h1>
        <div class="grid grid-cols-4 justify-items-center p-10 gap-4">
            <div class="p-4 h-full drop-shadow-2xl">
                <img
                    src="../assets/sokoban-front.jpg"
                    alt=""
                    class="h-full cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:blur-sm"
                />
            </div>
            <div class="p-4">
                <img
                    src="../assets/drug_buddy.png"
                    alt=""
                    class="h-full cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:blur-sm"
                />
            </div>
            <div class="p-4">
                <img
                    src="../assets/trello.png"
                    alt=""
                    class="h-full cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:blur-sm"
                />
            </div>
            <div class="p-4">
                <img
                    src="../assets/houseplant.png"
                    alt=""
                    class="h-full cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:blur-sm"
                />
            </div>
        </div>
    </section>
</template>

<script>
import ProjectModal from './ProjectModal.vue';

export default {
    components: {
        'projects-modal': ProjectModal,
    },
    data() {
        return {
            phrases: [
                'Developer',
                'Music-lover',
                'Problem-solver',
                'Bookworm',
                'Programmer',
            ],
            options: {
                interval: [100, 250],
                delay: 0,
                steps: 0,
                changeChance: 0,
                maxGhosts: 0,
                oneAtATime: 1,
                glyphs: '',
                glyphsFromText: false,
                fillSpace: false,
                mode: 'erase_smart',
            },
        };
    },
};
</script>
