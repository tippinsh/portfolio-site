<template>
    <div
        class="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-[#000000da] font-sans"
        @click="$emit('close-house-plant')"
    >
        <div
            id="modal"
            class="bg-white h-[380px] md:h-[350px] w-2/3 md:w-1/3 mt-20 p-10 rounded-lg"
            @click.stop
        >
            <div id="container" class="flex justify-center flex-col gap-4">
                <h1 class="text-center font-serif text-lg">
                    House Plant Calculator App
                </h1>
                <div>
                    <p>> Built with vanilla JS</p>
                    <p>
                        > Simple app built with JavaScript. The chooses their
                        house plant and inputs when the plant was last watered.
                        The App takes into consideration the season to calculate
                        when the plant should be watered next.
                    </p>
                    <br />
                    <p>
                        Check out the app on Netlify
                        <a
                            href="https://when-to-water.netlify.app"
                            target="_blank"
                            class="hover:bg-[#FBC33D]"
                            >here</a
                        >
                    </p>
                    <a
                        href="https://github.com/htippins/housePlantApp"
                        target="_blank"
                        class="hover:bg-[#FBC33D]"
                        >Source code</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close-house-plant');
        },
    },
};
</script>
