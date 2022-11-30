<template>
  <div class="header-container">
    <div class="logo-section">
      <img id="logo" src="@/assets/images/dbd-icon.svg"/>
      <h2>DEAD BY DAYLIGHT RANDOMIZER</h2>
    </div>
    <div class="actions">
      <button :class="{ selected: selectedPerkTarget === 'survivor' }" @click="selectPerkTarget('survivor')">Survivor</button>
      <button :class="{ selected: selectedPerkTarget === 'killer' }" @click="selectPerkTarget('killer')">Killer</button>
      <button @click="showAboutDialog()">
        <img id="about-logo" src="@/assets/images/about-icon.svg"/>
      </button>
    </div>
    <AppDialog :visible="aboutDialogOpen" @closeDialog="closeDialog()">
      <AppAbout></AppAbout>
    </AppDialog>
  </div>
</template>

<script>
import AppDialog from './Dialog.vue';
import AppAbout from './About.vue';
export default {
  name: 'AppHeader',
  components: {
    AppAbout,
    AppDialog,
  },
  data: function() {
    return {
      aboutDialogOpen: false,
    }
  },
  methods: {
    selectPerkTarget(perkTarget) {
      this.$emit('onPerkTargetSelected', perkTarget);
    },
    showAboutDialog() {
      this.aboutDialogOpen = true;
    },
    closeDialog() {
      this.aboutDialogOpen = false;
    },
  },
  props: {
    selectedPerkTarget: String,
  }
}
</script>

<style scoped>
  .header-container {
    height: 100px;
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;
  }

  h2 {
    margin: 0;
    align-self: center;
  }

  .logo-section {
    height: inherit;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-items: center;
    gap: 1rem;
  }

  .actions {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-items: center;
    gap: 4rem;
  }

  .actions button {
    border: none;
    background: none;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .actions button.selected {
    border-bottom: 3px solid red;
  }

  #about-logo {
    height: 20px;
    border: 1px solid white;
    border-radius: 25px;
    transition: all 0.2s;
  }
  
  .actions button:hover {
    color: red;
  }
  .actions #about-logo:hover {
    border-color: red;
  }
</style>
