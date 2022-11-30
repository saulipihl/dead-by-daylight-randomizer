<template>
  <div class>
    <header>
      <AppHeader @onPerkTargetSelected="selectPerkTarget" :selectedPerkTarget="selectedPerkTarget"/>
    </header>
    <main>
      <section class="buttons">
        <div>&nbsp;</div>
        <AppButton @onClick="randomizePerks" buttonText="RANDOMIZE"></AppButton>
        <AppButton @onClick="openIncludePerksDialog" buttonText="INCLUDE PERKS" buttonSize="small"></AppButton>
      </section>
      <AppPerks :perks="randomizedPerks"></AppPerks>
      <AppDialog :visible="includePerksDialogOpen" @closeDialog="closeDialog()">
        <AppIncludePerks :perks="selectedPerkTarget === 'survivor' ? allSurvivorPerks : allKillerPerks"></AppIncludePerks>
      </AppDialog>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import AppButton from './components/Button.vue';
import AppPerks from './components/Perks.vue';
import AppDialog from './components/Dialog.vue';
import AppIncludePerks from './components/IncludePerks.vue';
import PerkData from './assets/perk-data.json';
import { getRandomIndex, getPerkLocalStorageKey } from './common/functions.js';
document.title = 'DBD Randomizer';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppButton,
    AppPerks,
    AppDialog,
    AppIncludePerks,
  },
  methods: {
    randomizePerks() {
      const perkArray = (this.selectedPerkTarget === 'survivor'
        ? this.allSurvivorPerks
        : this.allKillerPerks).filter(perk => perk.included === true);
      this.chooseRandomPerks(perkArray)
    },

    chooseRandomPerks(perkArray) {
      const indexes = [];
      while (indexes.length < perkArray.length) {
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
      this.randomizedPerks = [];
    },

    openIncludePerksDialog() {
      this.includePerksDialogOpen = true;
    },

    closeDialog() {
      storeIncludedValues([...this.allSurvivorPerks, ...this.allKillerPerks]);
      this.includePerksDialogOpen = false;

      function storeIncludedValues(perkArray) {
        console.log(perkArray)
        perkArray.map(perk => {
          localStorage.setItem(getPerkLocalStorageKey(perk.name), perk.included)
        });
      }
    },
  },
  data: function() {
    return {
      allKillerPerks: [],
      allSurvivorPerks: [],
      randomizedPerks: [],
      selectedPerkTarget: 'survivor',
      includePerksDialogOpen: false,
    };
  },
  beforeMount() {
    this.allKillerPerks = PerkData.filter(perk => perk.target === "killer")
      .map(perk => { return { ...perk, included: getIncludedFromLocalStorage(perk.name) }  });
    this.allSurvivorPerks = PerkData.filter(perk => perk.target === "survivor")
      .map(perk => { return { ...perk, included: getIncludedFromLocalStorage(perk.name) }  });

    function getIncludedFromLocalStorage(perkName) {
      const value = localStorage.getItem(getPerkLocalStorageKey(perkName))
      if (value === null || value === 'true') {
        return true;
      }

      return false;
    }
  }
}
</script>

<style>
  ::-webkit-scrollbar {
      width: 8px;
      border-radius: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      background: #3d3d3d;
      border-radius: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: rgb(180, 0, 0);
      border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: rgb(131, 0, 0);
  }

  input[type='checkbox'] {
    accent-color: rgb(177, 0, 0);
  }

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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
  }
  .buttons {
    width: 100vw;
    display: grid;
    grid-template-columns: 20% 60% 20%;
  }

  .buttons * {
    display: flex;
    justify-self: center;
    align-self: center;
    margin-bottom: auto;
  }
</style>
