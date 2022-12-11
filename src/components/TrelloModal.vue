<template>
    <div
        class="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-[#000000da] font-sans"
        @click="$emit('close-trello')"
    >
        <div
            id="modal"
            class="bg-white h-[400px] w-1/3 mt-20 p-10 rounded-lg"
            @click.stop
        >
            <div id="container" class="flex justify-center flex-col gap-4">
                <h1 class="text-center font-serif text-lg">
                    Trello inspired Kanban board (WIP)
                </h1>
                <div>
                    <p>> Built with Vue.js</p>
                    <br />
                    <embed
                        src="https://tremolo-todo.netlify.app/"
                        type=""
                        class="w-full"
                    />
                    <p>
                        <br />
                        Check out the app
                        <a
                            href="https://tremolo-todo.netlify.app"
                            target="_blank"
                            class="hover:bg-[#FBC33D]"
                            >here</a
                        >
                    </p>
                    <a
                        href="https://github.com/htippins/tremolo-app"
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
            this.$emit('close-trello');
        },
    },
};
</script>
