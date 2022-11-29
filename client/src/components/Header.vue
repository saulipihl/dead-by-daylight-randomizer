<template>
  <div class="header-container">
    <div class="logo-section">
      <img id="logo" src="@/assets/images/dbd-icon.svg"/>
      <h2>DEAD BY DAYLIGHT RANDOMIZER</h2>
    </div>
    <div class="actions">
      <button>Survivor</button>
      <button>Killer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    gap: 2rem;
  }

  .actions button {
    border: none;
    background: none;
    font-size: 1rem;
    cursor: pointer;
  }

  .actions button:hover {
    color: red;
    transition: color 0.2s;
  }
</style>
