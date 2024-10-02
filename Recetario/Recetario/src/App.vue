<template>
  <ion-app> 
    <Header/>
    <router-view />
    <Footer v-if="!isLoginOrRegister" /> 
  </ion-app> 
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue';
import 'ionicons/icons';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

// Determina si la ruta actual es /login o /register
const isLoginOrRegister = computed(() => {
  return route.path === '/login' || route.path === '/register';
});
</script>
