<template>
    <the-header></the-header>
    <section class="h-[400px] md:h-full">
        <div
            class="flex justify-center md:grid md:grid-cols-2 md:h-full md:mt-48"
        >
            <div class="hidden md:block md:h-full md:w-full md:pt-16">
                <img
                    src="../assets/tall-building.jpg"
                    alt=""
                    class="object-contain"
                />
            </div>
            <div class="mt-32 md:h-full font-serif md:pl-12">
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
        <div
            class="grid grid-cols-1 pt-10 md:py-0 md:grid-cols-2 h-full bg-[#0F1923]"
        >
            <div
                class="flex justify-center flex-col pl-10 md:text-right pr-4 md:pr-12 md:gap-4"
            >
                <h1 class="text-lg md:text-xl font-extrabold text-[#FBC33D]">
                    ABOUT
                </h1>
                <div class="my-4 h-12">
                    <glitched-writer
                        :text="phrases"
                        :options="options"
                        :queue="{
                            loop: true,
                        }"
                        class="text-xl md:text-5xl font-serif text-[#F7E9E6]"
                    />
                </div>
                <p
                    class="text-zinc-400 pb-10 md:pb-0 text-sm md:text-sm tracking-tight"
                >
                    Lancashire-based developer. <br />
                    Passionate programmer with an emphasis on front-end
                    development and user-focused design.<br />
                    CODE Lancashire Bootcamp student. <br />
                    MSc Computer Science student at Northumbria University.
                </p>
            </div>
            <div class="md:flex md:justify-center md:content-center md:m-0">
                <img
                    src="../assets/lookingout.jpg"
                    alt="b&w photo of author looking out over city"
                    class="h-[600px] md:h-full"
                />
            </div>
        </div>
    </section>
    <section>
        <h1 class="pl-14 mt-10 text-2xl md:text-4xl font-serif">
            Recent Projects
        </h1>
        <div
            class="grid grid-cols-1 md:grid-cols-4 justify-items-center px-10 md:p-10 md:gap-4"
        >
            <div class="p-4 h-full w-full">
                <img
                    src="../assets/sokoban-front.jpg"
                    alt=""
                    class="cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 object-fill"
                    @click="sokobanModal = true"
                />
            </div>
            <div class="p-4 h-full w-full">
                <img
                    src="../assets/drug_buddy.png"
                    alt=""
                    class="cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105"
                />
            </div>
            <div class="p-4 h-full w-full">
                <img
                    src="../assets/trello.png"
                    alt=""
                    class="cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105"
                />
            </div>
            <div class="p-4 h-full w-full">
                <img
                    src="../assets/houseplant.png"
                    alt=""
                    class="cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 object-fill"
                />
            </div>
        </div>
    </section>
    <sokoban-modal
        v-show="sokobanModal"
        @close-sokoban="sokobanModal = false"
    ></sokoban-modal>
</template>

<script>
import SokobanModal from './SokobanModal.vue';

export default {
    components: {
        'sokoban-modal': SokobanModal,
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
            sokobanModal: false,
        };
    },
    methods: {},
};
</script>
