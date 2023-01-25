<template>
    <div
        class="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-[#000000da] font-sans"
        @click="$emit('close-trello')"
    >
        <div
            id="modal"
            class="bg-white h-[500px] md:h-[350px] w-10/12 md:w-1/3 mt-20 p-10 rounded-lg"
            @click.stop
        >
            <div id="container" class="flex justify-center flex-col gap-4">
                <h1 class="text-center font-serif text-lg">
                    Trello inspired Kanban board (WIP)
                </h1>
                <div>
                    <p>
                        > Built with Vue.js and Laravel <br />
                        > The full stack version of this application is not
                        currently hosted online but you can view the source code
                        here: <br />
                        <a
                            href="https://github.com/htippins/tremolo-app"
                            target="_blank"
                            class="hover:bg-[#FBC33D]"
                            >Front-end</a
                        >
                        <br />
                        <a
                            href="https://github.com/htippins/tremolo-api"
                            target="_blank"
                            class="hover:bg-[#FBC33D]"
                            >Back-end API</a
                        >
                    </p>
                    <br />
                    <p>
                        The Vue app is currently hosted on Netfliy and can be
                        seen
                        <a
                            href="https://tremolo-todo.netlify.app"
                            target="_blank"
                            class="hover:bg-[#FBC33D]"
                            >here</a
                        >. However currently lacks any functionality at the
                        moment. I plan to host the full site in the near future.
                    </p>
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
