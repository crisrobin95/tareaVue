<script setup lang="ts">
    import { defineEmits } from 'vue';
    const emit = defineEmits(["eventClick"]);

    function eventClick() {
        emit("eventClick",  "hola desde el hijo");
    };
</script>

<template>
    <section>
        <button @click="eventClick" class="button">Emitir el evento al padre</button>
    </section>
</template>


<style scoped lang="scss">
    .button{
        background-color: rgb(58, 57, 57);
        margin-top: 2em;
        border: solid 0.5em white;
        border-radius: 1em;
    }
</style>