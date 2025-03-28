<script setup lang="ts">
    defineProps<{
        title: string;
    }>()
    
</script>
<template>
    <h1 class="title">{{ title }}</h1>

</template>


<style lang="scss" scoped>
    $colorTitle: green;
    $fontMono: 'Ubuntu Mono', monospace;
    .title{
        font-family: $fontMono;
        color: $colorTitle;
    }
</style>