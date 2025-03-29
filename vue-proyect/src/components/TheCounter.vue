<script setup>
import TheTitle from './TheTitle.vue';
import { ref } from 'vue';

let counter = ref(0);

const addition = () => {
  counter.value++;
};

const subtraction = () => {
  counter.value--;
};


</script>

<template>
    <TheTitle>Titulo del contenedor</TheTitle>
    <p class="counter">{{ counter }}</p>
    <button type="button" @click="addition">Increment</button>
    <button type="button" @click="subtraction">Decrement</button>
    
</template>

<style lang="scss" scoped>
    
    $fontCount: 3em;
    $withBox: 10vh;
    
    .counter{
        font-size: $fontCount ;
        width: $withBox;
        
    }
</style>