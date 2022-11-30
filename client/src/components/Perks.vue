<template>
    <div class="perks-container">
        <AppPerk v-for="(perk, index) in perks" :key="getKey(perk)" :class="[`perk-${index}`]" :perk="perk"></AppPerk>
    </div>
</template>

<script>
    import AppPerk from './Perk.vue';
    import { getPerkKey } from '../common/functions';
    export default {
        name: 'AppPerks',
        props: {
            perks: Array,
        },
        components: {
            AppPerk,
        },
        methods: {
            getKey(perk) {
                return getPerkKey('PerkComponent', perk);
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