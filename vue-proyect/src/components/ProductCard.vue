<script setup lang="ts">
import product from '@/data/mock';
</script>

<template>
    <h1>Elige un producto: </h1>
     <section v-for="(item, key) in product" :key="product" class="product">
        <h4 class="product__tittle">{{ item.title }}</h4>
        <img :src="item.img" :alt="item.title" class="product__img">
        <p class="product__description">{{ item.description }}</p>
        <button class="product__price">{{ item.price }}€</button>
    </section>
</template>


<style lang="scss" scoped>
    
    $card-width: 15.62em;
    $card-margin: 1.25em;
    $border-radius: 0.5em;
    $box-shadow: 0 0.25em 8em rgba(86, 84, 84, 0.1);
    $button-bg: #007bff;
    $button-color: white;

    .product {
        display: inline-block; 
        width: $card-width;
        margin: $card-margin;
        border: 0.06em solid #ddd;
        border-radius: $border-radius;
        box-shadow: $box-shadow;
        padding: 0.9em;
        text-align: center;
        vertical-align: top;
    }

    .product__tittle {
        margin-top: 0;
        margin-bottom: 0.6em;
        text-decoration: underline;
    }

    .product__img {
        width: 100%; 
        height: auto;
        max-height: 9.30em; 
        object-fit: contain; 
        margin-bottom: 10px;
    }

    .product__description {
        margin-bottom: 0.9em;
    }

    .product__price {
        background-color: $button-bg;
        color: $button-color;
        padding: 0.6em 0.9em; 
        border: none;
        border-radius: $border-radius;
        cursor: pointer;
        width: 90%; 
        
        
    }

    h1 {
        text-align: center;
        margin-bottom: 1.25em;
    }
    
    
    
</style>