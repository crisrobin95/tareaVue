<script setup  lang="ts">
import TheTitle from './TheTitle.vue';
import { useCounterStore} from '../stores/counter';
import {  ref,watch } from 'vue';

const counterStore = useCounterStore();

const counterTitle = ref('');

watch(() => counterStore.counter, (newValue) => {
  if (newValue === 0) {
    counterTitle.value = 'Estás en el valor mínimo';
  } else if (newValue === 10) {
    counterTitle.value = 'Estás en el valor máximo';
  } else {
    counterTitle.value = 'Estás en los parámetros adecuados';
  }
});



</script>

<template>
    <TheTitle>Contador: {{ counterTitle }}</TheTitle>
    <h4 class="counter" :class="{ 'counter--ten': counterStore.counter === 10 }">{{ counterStore.counter }}</h4>
    <h4>{{ counterStore.double }}</h4  >

    <section class="buttons">
      <button type="button" @click="counterStore.addition" v-if="counterStore.counter < 10" class="buttons__increment">Increment</button>
      <button type="button" @click="counterStore.subtraction" v-if="counterStore.counter > 0" class="buttons__decrement">Decrement</button>
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