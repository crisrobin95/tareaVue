<script  lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
export function useCounter() {
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
}
</script>