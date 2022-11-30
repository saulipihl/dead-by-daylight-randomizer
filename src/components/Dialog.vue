<template>
    <section v-if="visible" class="dialog-area" @click="closeDialog()">
        <div v-on:click.stop class="dialog-container">
            <div class="dialog-content">
                <slot />
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AppDialog',
        methods: {
            closeDialog() {
                this.$emit('closeDialog');
            }
        },
        props: {
            visible: Boolean,
        },
    }
</script>

<style scoped>
    .dialog-area {
        z-index: 100;
        width: 100vw;
        height: 100vh;
        background-color: rgb(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
    }
    .dialog-container {
        position: absolute;
        width: 50%;
        height: 70%;
        left: 25%;
        top: 15%;
        background: black;
        border: 1px solid rgb(255, 255, 255, 0.3);
        border-radius: 15px;
        overflow: hidden;
    }
    .dialog-content {
        margin: 20px;
        height: -webkit-fill-available;
        overflow: auto;
    }
</style>