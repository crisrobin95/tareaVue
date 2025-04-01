<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import ParentComponent from './components/ParentComponent.vue';

</script>

<template>
  <nav class="link">
    <RouterLink to="/" class="link--component">Inicio</RouterLink>
    <RouterLink to="/Catalog" class="link--component">Catalogo</RouterLink> 
  </nav>
  <RouterView />
  <ParentComponent></ParentComponent>
</template>

<style lang="scss" scoped>
  .link{
    display: inline-block;
  }

</style>