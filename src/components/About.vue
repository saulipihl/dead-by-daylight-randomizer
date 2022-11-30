<template>
    <div class="about-dialog-content">
        <h1 class="about-dialog-header">ABOUT</h1>
        <p>Dead by Daylight icon is from https://icons8.com/</p>
        <p>Background image from https://blog.turtlebeach.com</p>
        <p>Perk icons are from https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight_Wiki</p>
    </div>
</template>

<script>
    export default {
        name: 'AppAbout',
    }
</script>

<style scoped>
  .about-dialog-content {
    text-align: center;
  }
  .about-dialog-header {
    padding-bottom: 10px;
    border-bottom: 1px solid;
  }
</style>