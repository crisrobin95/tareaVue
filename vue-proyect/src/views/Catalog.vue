<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();

</script>

<template>
    <h1>El contado de home esta en: {{ counterStore.counter }} </h1>
    <ProductCard></ProductCard>
</template>

<style lang="scss" scoped>

</style>