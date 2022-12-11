<template>
    <the-header
        @aboutAnchor="scrollToAnchorPoint('about')"
        @projectsAnchor="scrollToAnchorPoint('projects')"
    ></the-header>
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
                    based in the United <br />Kingdom.
                </h1>
            </div>
        </div>
    </section>
    <section ref="about">
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
                    <a
                        href="https://codelancashire.tech/"
                        target="_blank"
                        class="text-[#FBC33D] hover:opacity-80"
                        >CODE Lancashire</a
                    >
                    Bootcamp graduate. <br />
                    MSc Computer Science student at Northumbria University.
                </p>
            </div>
            <div
                class="md:flex md:justify-center md:content-center md:m-0 col-span-1"
            >
                <img
                    src="../assets/lookingout.jpg"
                    alt="b&w photo of author looking out over city"
                    class="h-[600px] md:h-full"
                />
            </div>
        </div>
    </section>
    <section ref="projects">
        <h1
            class="text-center mt-10 mb-10 md:mb-2 text-2xl md:text-4xl font-serif"
        >
            Recent Projects
        </h1>
        <div
            class="grid grid-cols-1 gap-6 md:grid-cols-4 justify-items-center px-10 md:p-10 md:gap-6"
        >
            <div
                class="flex items-center justify-center p-4 h-52 w-10/12 md:w-full cursor-pointer transition-all ease-in delay-100 hover:translate-x-1 hover:scale-105 bg-stone-300 rounded-lg"
                @click="sokobanModal = true"
            >
                <h2 class="text-xl">Sokoban GUI</h2>
            </div>
            <div
                class="flex items-center justify-center p-4 h-52 w-10/12 md:w-full cursor-pointer transition-all ease-in delay-100 hover:translate-x-1 hover:scale-105 bg-stone-300 rounded-lg"
                @click="calculatorModal = true"
            >
                <h2 class="text-xl">Medication calculator for nurses</h2>
            </div>
            <div
                class="flex items-center justify-center p-4 h-52 w-10/12 md:w-full cursor-pointer transition ease-in-out delay-50 hover:translate-x-1 hover:scale-105 bg-stone-300 rounded-lg"
                @click="trelloModal = true"
            >
                <h2 class="text-xl">Trello clone</h2>
            </div>
            <div
                class="flex items-center justify-center p-4 h-52 w-10/12 md:w-full cursor-pointer transition ease-in-out delay-50 hover:translate-x-1 hover:scale-105 bg-stone-300 rounded-lg"
                @click="hpmodal = true"
            >
                <h2 class="text-xl">House plant calculator</h2>
            </div>
        </div>
        <div class="flex justify-center align-center w-full pt-6 pb-6">
            <font-awesome-icon :icon="['fa', 'code']" size="2xl" class="" />
        </div>
        <div class="flex justify-center gap-4">
            <font-awesome-icon :icon="['fab', 'square-js']" size="xl" />
            <font-awesome-icon :icon="['fab', 'vuejs']" size="xl" />
            <font-awesome-icon :icon="['fab', 'laravel']" size="xl" />
        </div>
    </section>
    <section class="bg-[#0F1923]">
        <div>
            <h1
                class="text-center mt-10 mb-10 md:mb-2 text-2xl md:text-4xl font-serif pt-10 text-white"
            >
                Contact
            </h1>
            <div class="flex justify-center">
                <form
                    action=""
                    class="flex flex-col w-1/3 gap-4 appearance-none"
                >
                    <input
                        type="text"
                        placeholder="Name"
                        class="py-1 outline-none bg-inherit text-white border-b-2 border-white-200"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        class="py-1 outline-none bg-inherit text-white border-b-2 border-white-200"
                    />
                    <input
                        type="textarea"
                        placeholder="Message"
                        class="py-1 outline-none bg-inherit text-white border-b-2 border-white-200"
                    />
                    <button>Shoot</button>
                </form>
            </div>
        </div>
    </section>
    <sokoban-modal
        v-show="sokobanModal"
        @close-sokoban="sokobanModal = false"
    ></sokoban-modal>
    <calculator-modal
        v-show="calculatorModal"
        @close-calc="calculatorModal = false"
    ></calculator-modal>
    <trello-modal v-show="trelloModal" @close-trello="trelloModal = false">
    </trello-modal>
    <house-plant-modal
        v-show="hpmodal"
        @close-house-plant="hpmodal = false"
    ></house-plant-modal>
</template>

<script>
import SokobanModal from './SokobanModal.vue';
import CalculatorModal from './CalculatorModal.vue';
import TrelloModal from './TrelloModal.vue';
import HousePlantModal from './HousePlantModal.vue';

export default {
    components: {
        'sokoban-modal': SokobanModal,
        'calculator-modal': CalculatorModal,
        'trello-modal': TrelloModal,
        'house-plant-modal': HousePlantModal,
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
            calculatorModal: false,
            trelloModal: false,
            hpmodal: false,
        };
    },
    methods: {
        scrollToAnchorPoint(refName) {
            const el = this.$refs[refName];
            el.scrollIntoView({ behaviour: 'smooth' });
        },
    },
};
</script>
