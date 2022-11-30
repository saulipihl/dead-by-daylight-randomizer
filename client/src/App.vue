<template>
  <div class>
    <header>
      <AppHeader @onPerkTargetSelected="selectPerkTarget" :selectedPerkTarget="selectedPerkTarget"/>
    </header>
    <main>
      <AppButton @onClick="randomizePerks" buttonText="RANDOMIZE"></AppButton>
      <AppPerks :perks="randomizedPerks"></AppPerks>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import AppButton from './components/Button.vue';
import AppPerks from './components/Perks.vue';
import PerkData from './assets/perk-data.json';
import getRandomIndex from './common/functions.js';
document.title = 'DBD Randomizer';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppButton,
    AppPerks,
  },
  methods: {
    randomizePerks() {
      const perkArray = this.selectedPerkTarget === 'survivor'
        ? this.allSurvivorPerks
        : this.allKillerPerks;
      this.chooseRandomPerks(perkArray)
    },
    chooseRandomPerks(perkArray) {
      const indexes = [];
      while (indexes.length < 4) {
        const index = getRandomIndex(0, perkArray.length - 1);
        if (indexes.includes(index)) {
          continue;
        }
        indexes.push(index);
      }
      this.randomizedPerks = indexes.map(i => perkArray[i]);
    },
    selectPerkTarget(perkTarget) {
      this.selectedPerkTarget = perkTarget;
    },
  },
  data: function() {
    return {
      allKillerPerks: [],
      allSurvivorPerks: [],
      randomizedPerks: [],
      selectedPerkTarget: 'survivor',
    }
  },
  beforeMount() {
    this.allKillerPerks = PerkData.filter(perk => perk.target === "killer");
    this.allSurvivorPerks = PerkData.filter(perk => perk.target === "survivor");
  }
}
</script>

<style>
  #app, button {
    font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
    color: white;
  }
  html {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('~@/assets/images/background.png');
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
  }
  body {
    margin: 0px;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
  }
</style>
