<template>
    <div
        class="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-[#000000da] font-sans"
        @click="$emit('close-search')"
    >
        <div
            id="modal"
            class="bg-white h-[350px] md:h-[300px] w-10/12 md:w-1/3 mt-20 p-10 rounded-lg"
            @click.stop
        >
            <div id="container" class="flex justify-center flex-col gap-4">
                <h1 class="text-center font-serif text-lg">LancsSearch site</h1>
                <div>
                    <p>
                        > SSR site built using Inertia with Vue.js, Laravel and
                        Tailwind.
                    </p>
                    <p>
                        > Born out of my work as a nurse. The purpose is to
                        centralise information for NHS and third sector
                        organisations that offer support with a variety of
                        mental health and social issues.
                    </p>
                    <p>
                        > Authentication, databases, login/logout and filters
                        data.
                    </p>
                    <p>
                        > To be hosted shortly. Source code is viewable
                        <a
                            href="https://github.com/htippins/lancs-search"
                            target="_blank"
                            class="hover:bg-[#FBC33D]"
                            >here</a
                        >.
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
            this.$emit('close-search');
        },
    },
};
</script>
