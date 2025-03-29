<script setup lang="ts">
  import TheCounter from './components/TheCounter.vue';
</script>

<template>
  <main class="main">
    
    <TheCounter>
      
    </TheCounter>
</main>
</template>

<style lang="scss" scoped>
  $gounMain: rgba(115, 115, 234, 0.662);
  $paddingMain: 2em;
  
  .main{
    background-color: $gounMain;
    padding: $paddingMain;
  }


</style>
