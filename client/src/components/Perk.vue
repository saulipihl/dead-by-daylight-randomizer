<template>
    <div :style="{ 'backgroundImage': 'url(\'' + image() + '\')'}" class="perk-container">

    </div>
</template>

<script>
    export default {
        name: 'AppPerk',
        props: {
            perk: Object,
        },
        methods: {
            image() {
                return require(`../assets/images/${this.perk.target}-perks/${this.perk.imageName}.webp`);
            }
        }
    }
</script>

<style scoped>
    .perk-container {
        width: 120px;
        height: 120px;
        position: absolute;
        background-size: cover;
        background-color: blueviolet;
    }
</style>