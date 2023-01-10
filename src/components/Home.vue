<template>
    <the-header
        @aboutAnchor="scrollToAnchorPoint('about')"
        @projectsAnchor="scrollToAnchorPoint('projects')"
        @contactAnchor="scrollToAnchorPoint('contact')"
    ></the-header>
    <section class="h-[400px] md:h-full">
        <div
            class="flex justify-center md:grid md:grid-cols-2 md:h-full md:mt-48"
        >
            <div class="hidden md:block md:h-full md:w-full md:pt-16">
                <img src="../assets/tall-building.jpg" class="object-contain" />
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
    <section ref="projects" class="pb-10">
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
                <h2 class="text-lg md:text-xl">Sokoban GUI</h2>
            </div>
            <div
                class="flex items-center justify-center p-4 h-48 md:h-52 w-10/12 md:w-full cursor-pointer transition-all ease-in delay-100 hover:translate-x-1 hover:scale-105 bg-stone-300 rounded-lg"
                @click="calculatorModal = true"
            >
                <h2 class="text-lg md:text-xl">
                    Medication calculator for nurses
                </h2>
            </div>
            <div
                class="flex items-center justify-center p-4 h-48 md:h-52 w-10/12 md:w-full cursor-pointer transition ease-in-out delay-50 hover:translate-x-1 hover:scale-105 bg-stone-300 rounded-lg"
                @click="trelloModal = true"
            >
                <h2 class="text-lg md:text-xl">Trello clone</h2>
            </div>
            <div
                class="flex items-center justify-center p-4 h-48 md:h-52 w-10/12 md:w-full cursor-pointer transition ease-in-out delay-50 hover:translate-x-1 hover:scale-105 bg-stone-300 rounded-lg"
                @click="hpmodal = true"
            >
                <h2 class="text-lg md:text-xl">House plant calculator</h2>
            </div>
        </div>
        <!-- <div class="flex justify-center align-center w-full pt-6 pb-6">
            <font-awesome-icon :icon="['fa', 'code']" size="2xl" class="" />
        </div>
        <div class="flex justify-center gap-4">
            <font-awesome-icon :icon="['fab', 'square-js']" size="xl" />
            <font-awesome-icon :icon="['fab', 'vuejs']" size="xl" />
            <font-awesome-icon :icon="['fab', 'laravel']" size="xl" />
        </div> -->
    </section>
    <section class="bg-[#0F1923] pb-3" ref="contact">
        <div>
            <h1
                class="text-center mb-2 md:mb-2 text-2xl md:text-4xl font-serif pt-10 text-white pb-12"
            >
                Let's chat
            </h1>
            <div class="flex justify-center pb-20">
                <form
                    ref="form"
                    @submit.prevent="sendEmail"
                    class="flex flex-col md:w-1/3 gap-4 appearance-none"
                >
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        :value="inputFieldReset"
                        class="py-2 outline-none bg-inherit text-white border-b-2 border-white-200 tracking-tight text-sm"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="sender_email"
                        :value="inputFieldReset"
                        class="py-2 outline-none bg-inherit text-white border-b-2 border-white-200 tracking-tight text-sm"
                    />
                    <textarea
                        type="text"
                        :value="inputFieldReset"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        cols="33"
                        class="py-2 outline-none bg-inherit text-white border-b-2 border-white-200 tracking-tight text-sm resize-none"
                    />
                    <button
                        class="px-2 py-1 self-end text-slate-300 text-sm"
                        type="submit"
                        name="send"
                    >
                        Send &#8594;
                    </button>
                </form>
            </div>
        </div>
        <div class="flex justify-between px-4 text-slate-100 text-sm">
            <div>
                <p>Copyright &copy Holly Tippins All Rights Reserved</p>
            </div>
            <div>
                <a href="https://github.com/htippins" target="_blank">
                    <font-awesome-icon
                        :icon="['fab', 'github']"
                        size="lg"
                        class="ml-4 hover:scale-125 ease-in-out duration-[600ms] cursor-pointer pr-3"
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
import emailjs from 'emailjs-com';

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
            inputFieldReset: null,
        };
    },
    methods: {
        scrollToAnchorPoint(refName) {
            const el = this.$refs[refName];
            el.scrollIntoView({ behaviour: 'smooth' });
        },
        sendEmail() {
            emailjs
                .sendForm(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    this.$refs.form,
                    import.meta.env.VITE_USER_ID
                )
                .then(
                    () => {
                        alert('Message sent');
                        this.$refs.form.reset();
                    },
                    (error) => {
                        alert('Message not sent', error);
                    }
                );
        },
    },
};
</script>
