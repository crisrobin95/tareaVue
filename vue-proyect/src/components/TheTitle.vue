<script setup lang="ts">
  
    
</script>
<template>
    <h1 class="title"><slot/></h1>

</template>


<style lang="scss" scoped>
    $colorTitle: green;
    $fontMono: 'Ubuntu Mono', monospace;
    .title{
        font-family: $fontMono;
        color: $colorTitle;
    }
</style>