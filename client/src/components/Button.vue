<template>
    <button @click="onClick">{{ buttonText }}</button>
</template>

<script>
    export default {
        name: 'AppButton',
        props: {
            buttonText: String,
        },
        methods: {
            onClick() {
                this.$emit('onClick');
            }
        }
    }
</script>

<style scoped>
    button {
        position: relative;
        background-color: rgba(0,0,0,0.8);
        padding: 30px 100px;
        font-size: 1.3rem;
        cursor: pointer;
    }
    button:before {
        content: "";
        position: absolute;
        z-index: 1;
        top: 1px;
        right: 1px;
        bottom: 1px;
        left: 1px;
        border: 1px solid rgb(255, 255, 255, 0.2);
        transition: all ease-in-out .2s;
    }

    button:hover:before {
        border: 1px solid rgba(255, 0, 0, 0.7);
    }
</style>