<template>
    <AppButton buttonText="Select all" buttonSize="tiny" @onClick="selectAll()"></AppButton>
    <AppButton buttonText="Clear all" buttonSize="tiny" @onClick="clearAll()"></AppButton>
    <div v-for="perk in perks" :key="getKey(perk)">
        <input :id="getKey(perk)" type="checkbox" v-model="perk.included" />
        <label :for="getKey(perk)">{{ perk.name }}</label>
    </div>
</template>

<script>
    import AppButton from './Button.vue';
    import { getPerkKey } from '../common/functions';
    export default {
        name: 'AppIncludePerks',
        components: {
            AppButton,
        },
        props: {
            perks: Array,
        },
        methods: {
            getKey(perk) {
                return getPerkKey('IncludedPerksComponent', perk);
            },
            selectAll() {
                this.perks.map(perk => perk.included = true);
            },
            clearAll() {
                this.perks.map(perk => perk.included = false);
            }
        }
    }
</script>

<style scoped>
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #3d3d3d;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(180, 0, 0);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(88, 0, 0);
    }
</style>