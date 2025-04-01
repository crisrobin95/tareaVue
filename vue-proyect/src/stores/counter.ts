
import { defineStore } from 'pinia';
import { ref, computed} from 'vue';


export const useCounterStore = defineStore('counter', () => {
    const counter = ref(0);
    const double = computed(() => counter.value * 2);
  
    const addition = () => {
      counter.value++;
    };
  
    const subtraction = () => {
      counter.value--;
    };  
  
    return{
      counter,
      double,
      addition,
      subtraction
    }
  });