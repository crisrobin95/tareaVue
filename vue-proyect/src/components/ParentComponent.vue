<script setup  lang="ts">
    import ChildComponent from './ChildComponent.vue';
    import { ref } from 'vue';
    import { provide } from 'vue';

    const messageFromChild = ref('');
    
    function eventClickCustom(payload) {
        messageFromChild.value = payload;
    }
    provide('comunication', "Este mensaje esta provisto por el padre al hijo mediante provide e inject");


</script>

<template>
    <section>
        <h4><ChildComponent @eventClick="eventClickCustom"/></h4>
        <h2>{{ messageFromChild }}</h2>
    </section>
</template>

<style scoped>

</style>