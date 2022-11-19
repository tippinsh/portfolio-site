<template>
    <the-header></the-header>
    <section class="h-full">
        <div
            class="flex flex-col font-serif md:flex-row md:justify-end md:content-center w-full pt-36 h-full pb-36 pl-10"
        >
            <div class="p-6 md:p-2 md:w-1/2 md:pl-16 h-full">
                <p class="text-sm md:text-lg pb-2">Hello, my name is Holly</p>
                <h1 class="text-2xl md:text-5xl">
                    I'm an aspiring<br />
                    <span class="text-[#FBC33D]">web developer</span>
                    based in the United Kingdom.
                </h1>
            </div>
        </div>

        <div class="relative w-full mt-80 h-full">
            <div class="absolute bottom-0 left-0 w-1/2">
                <img
                    src="../assets/tall-building.jpg"
                    alt=""
                    class="object-contain"
                />
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
                    Lancashire-based front-end developer. <br />
                    Creating user-focused, clean designs with Vue.
                </p>
            </div>
            <div class="flex justify-center content-center m-0">
                <img
                    src="../assets/self4.jpg"
                    alt="b&w photo of author looking out over city"
                    class="h-full"
                />
            </div>
        </div>
    </section>

    <!-- <div class="relative p-16">
        <hr class="w-1/2 absolute right-0" />
        <br /><br />
        <hr class="w-3/4 absolute right-0" />
        class="rounded-full w-64 h-64 md:w-72 md:h-72"
    </div> -->

    <!-- <section>
        <h1 class="font-sans text-xl text-center md:text-4xl">
            SKILLS AND ACADEMIC BACKGROUND
        </h1>
        <hr class="my-3 mx-auto bg-[#FBC33D] h-1 w-32 border-none" />
        <h2 class="font-serif text-center text-lg pt-4">Education</h2>
    </section> -->
</template>

<script>
export default {
    data() {
        return {
            phrases: ['Developer', 'Music-lover', 'Problem-solver', 'Bookworm'],
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
