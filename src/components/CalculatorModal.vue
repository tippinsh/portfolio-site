<template>
    <div
        class="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-[#000000da] font-sans"
        @click="$emit('close-calc')"
    >
        <div
            id="modal"
            class="bg-white h-[520px] md:h-[420px] w-10/12 md:w-1/3 mt-20 p-10 rounded-lg"
            @click.stop
        >
            <div id="container" class="flex justify-center flex-col gap-4">
                <h1 class="text-center font-serif text-lg">
                    The Mental Health Nurse's Medication App (WIP)
                </h1>
                <div>
                    <p>> Built with vanilla JS and Tailwind</p>
                    <p>
                        > Tailored specifically towards mental health nurses.
                        The app features key information about commonly
                        prescribed psychotropic medication inc. side-effects and
                        contraindications.
                    </p>
                    <p>
                        > Medication calculator that automates the calculations
                        that nurse's typically do manually.
                    </p>
                    <p>
                        > Calculates whether calculated dose exeeds the max-dose
                        of the chosen medication.
                    </p>
                    <p>> Mobile-first responsive design.</p>
                    <br />
                    <p>
                        Check out the app
                        <a
                            href="https://psychnurse-drugbuddy.netlify.app"
                            target="_blank"
                            class="hover:bg-[#FBC33D]"
                            >here</a
                        >
                    </p>
                    <a
                        href="https://github.com/htippins/medication-calculator"
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
            this.$emit('close-calc');
        },
    },
};
</script>
