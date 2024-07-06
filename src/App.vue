<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeroComponent from './components/HeroComponent.vue'
import { ref } from 'vue'

const products = ref([
    {
        title: 'Interior Lamp',
        price: 35,
        currency: '$',
        image: new URL('@/assets/images/hero-product-01.jpg', import.meta.url).href
    },
    {
        title: 'Wooden Table',
        price: 335,
        currency: '$',
        image: new URL('@/assets/images/hero-product-02.png', import.meta.url).href
    }
])
const benefits = ref(['Handmade', 'High quality furniture', 'Wide range of items'])
</script>

<template>
  <header>
    <div class="wrapper ">
        <hero-component 
            :items="products" 
            title="Best Modern Home Furniture Store" 
            subtitle="Shop for modern home furniture that complements your style." 
            :benefits=benefits
            class="relative z-10" 
        />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
    .wrapper:before {
        content: '';
        display: block;
        position: fixed;
        width: 50%;
        min-height: 100vh;
        height: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(180deg, #FFF 22.5%, #FBFAFF 100%);
        z-index: 1;
    }
</style>
