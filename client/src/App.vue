<template>
  <div class>
    <header>
      <AppHeader @onPerkTargetSelected="selectPerkTarget" :selectedPerkTarget="selectedPerkTarget"/>
    </header>
    <main>
      <AppButton @onClick="randomizePerks" buttonText="RANDOMIZE"></AppButton>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import AppButton from './components/Button.vue';
document.title = 'DBD Randomizer';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppButton,
  },
  methods: {
    randomizePerks() {
      console.log('randomize');
    },
    selectPerkTarget(perkTarget) {
      this.selectedPerkTarget = perkTarget;
    },
      selectedPerkTarget: 'survivor',
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
  }
</style>
