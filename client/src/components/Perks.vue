<template>
    <div class="perks-container">
        <AppPerk v-for="(perk, index) in perks" :key="getPerkKey(perk)" :class="[`perk-${index}`]" :perk="perk"></AppPerk>
    </div>
</template>

<script>
    import AppPerk from './Perk.vue';
    export default {
        name: 'AppPerks',
        props: {
            perks: Array,
        },
        components: {
            AppPerk,
        },
        methods: {
            getPerkKey(perk) {
                return `${perk.target}-${perk.name}-${perk.imageName}`;
            }
        },
    }
</script>

<style scoped>
    .perks-container {
        width: 270px;
        height: 270px;
        position: relative;
        transform: rotateZ(45deg);
    }
    .perk-1 {
        bottom: 0;
    }
    .perk-2 {
        right: 0;
    }
    .perk-3 {
        bottom: 0;
        right: 0;
    }
</style>