<template></template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close-modal');
        },
    },
};
</script>
