<script setup lang="ts">
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
    <section class="buttons">
      <button type="button" @click="addition" v-if="counter < 10" calss="buttons__increment">Increment</button>
      <button type="button" @click="subtraction" v-if="counter> 0" class="buttons__decrement">Decrement</button>
    </section>
    
</template>

<style lang="scss" scoped>
    $blue: blue;
    $red: red;
    .counter{
      font-size: 3em;
    }
    .buttons{
      display: flex;
      background-color: rgba(255, 255, 255, 0.699);
      color: rgba(0, 0, 0, 0.725);
      width: 50vh;
      padding: 1em;
      
    }
    .buttons__increment {
      display: flex;
      
      background-color: $blue;
      margin-left: 2em;
      padding-left: 2em;
    }

    .buttons__decrement{
      background-color: $red;
      padding-right: 2em;
      margin-right: 2em;
    }



  
</style>