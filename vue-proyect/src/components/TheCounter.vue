<script setup  lang="ts">
import TheTitle from './TheTitle.vue';
import { useCounter } from '@/composable/counter.vue';

const {counter, addition, subtraction} = useCounter();

</script>

<template>
    <TheTitle>Contador: </TheTitle>
    <p class="counter" :class="{ 'counter--ten': counter === 10 }">{{ counter }}</p>
    <section class="buttons">
      <button type="button" @click="addition" v-if="counter < 10" class="buttons__increment">Increment</button>
      <button type="button" @click="subtraction" v-if="counter> 0" class="buttons__decrement">Decrement</button>
    </section>
    
</template>

<style lang="scss" scoped>

    $blue: blue;
    $red: red;
    $green: green;

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
      
      background-color: $blue;
      
    }
    .counter--ten{
      color:$green;
    }

    .buttons__decrement{
      background-color: $red;
    }

</style>