<script  lang="ts">
import { ref } from 'vue';
export function useCounter() {
  let counter = ref(0);

  const addition = () => {
    counter.value++;
  };

  const subtraction = () => {
    counter.value--;
  };  

  return{
    counter,
    addition,
    subtraction
  }
}
</script>