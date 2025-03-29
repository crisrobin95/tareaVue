<script setup lang="ts">
  
    
</script>
<template>
    <h1 class="title"><slot></slot></h1>
</template>


<style lang="scss" scoped>
    $colorTitle: rgb(149, 45, 45);
    $fontMono: 'Ubuntu Mono', monospace;

    .title{
        font-family: $fontMono;
        color: $colorTitle;
       
    }
</style>