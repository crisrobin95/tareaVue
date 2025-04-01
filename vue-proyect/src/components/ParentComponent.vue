<script setup >
    import ChildComponent from './ChildComponent.vue';
    import { ref } from 'vue';

    const messageFromChild = ref('');
    
    function eventClickCustom(payload) {
        messageFromChild.value = payload;
  }

</script>

<template>
    <section>
        <h4><ChildComponent @eventClick="eventClickCustom"/></h4>
        <h2>{{ messageFromChild }}</h2>
    </section>
</template>

<style scoped>

</style>