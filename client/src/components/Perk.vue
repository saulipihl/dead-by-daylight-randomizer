<template>
    <div :style="{ 'backgroundImage': 'url(\'' + image() + '\')'}" class="perk-container">
        <div class="tooltip-container">
            <span class="tooltiptext">{{ perk.name }}</span>
        </div>
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
            },
        }
    }
</script>

<style scoped>
    .perk-container {
        width: 120px;
        height: 120px;
        position: absolute;
        background-size: cover;
        background-color: #3a185a;
    }
    .tooltip-container {
        position: relative;
    }
    .tooltip-container .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        border: 3px solid red;
        padding: 5px 0;

        position: absolute;
        z-index: 1;
        rotate: -45deg;
        transform: translateX(90px) translateY(-20px);
    }

    .perk-container:hover .tooltiptext {
        visibility: visible;
    }
</style>