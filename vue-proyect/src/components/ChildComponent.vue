<script setup lang="ts">
    import { defineEmits } from 'vue';
    import { inject } from 'vue';

    const emit = defineEmits(["eventClick"]);
   

    function eventClick(){
        emit("eventClick",  "hola desde el hijo");
    };

    const comunication = inject('comunication');
</script>

<template>
    <section>
        <button @click="eventClick" class="button">Emitir el evento al padre</button>
        <p class="message">{{ comunication }}</p>
    </section>
</template>


<style scoped lang="scss">
    .button{
        background-color: rgb(58, 57, 57);
        margin-top: 2em;
        border: solid 0.5em white;
        border-radius: 1em;
    }
    .message{
        background-color: white;
        color: black;
        margin-top: 2em;
        width: 20%;
        border: white 1em solid;
    }
</style>