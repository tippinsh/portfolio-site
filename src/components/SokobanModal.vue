<template>
    <div
        class="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-[#000000da] font-sans"
        @click="$emit('close-sokoban')"
    >
        <div
            id="modal"
            class="bg-white h-[550px] md:h-[520px] w-10/12 md:w-1/3 mt-20 p-10 rounded-lg"
            @click.stop
        >
            <div id="container" class="flex justify-center flex-col gap-4">
                <h1 class="text-center font-serif text-lg">Sokoban GUI</h1>
                <div>
                    <p>> Built with Java</p>
                    <p>
                        > Final project for my object-orientated programming
                        module
                    </p>
                    <p>> Level chooser with 60 Sokoban levels</p>
                    <p>> Implements undo, clear, save and load features</p>
                    <div
                        style="
                            width: 100%;
                            height: 0;
                            padding-bottom: 58%;
                            position: relative;
                        "
                    >
                        <iframe
                            src="https://giphy.com/embed/ufMc40h6Iz91FxXJUD"
                            width="100%"
                            height="100%"
                            style="position: absolute"
                            frameBorder="0"
                            class="mt-10"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close-sokoban');
        },
    },
};
</script>
