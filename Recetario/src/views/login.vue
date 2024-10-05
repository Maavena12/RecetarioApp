<template>  
    <ion-content class="ion-padding">  
      <h1>Inicio Sesión</h1>  
      <form @submit.prevent="loginUser()">  
        <ion-item>  
          <ion-label position="floating">Correo</ion-label>  
          <ion-input type="email" v-model="email" @ionChange="handleChange('email', $event)" required></ion-input>  
        </ion-item>  
        <ion-item>  
          <ion-label position="floating">Contraseña</ion-label>  
          <ion-input type="password" v-model="password" @ionChange="handleChange('password', $event)" required></ion-input>  
        </ion-item>  
        <p>Usuario de ejemplo para demo: carlos.lopez@example.com y 12345678</p>
        <ion-button expand="full" type="submit" :disabled="loading">Iniciar Sesión</ion-button>  
        <p v-if="loading" class="ion-text-center">Cargando...</p>  
        <p v-if="error" class="ion-text-center" style="color: red;">{{ error }}</p>  
      </form>  
      <p class="ion-text-center">
        No tienes cuenta, 
        <a href="/register" style="color: blue;">crea tu cuenta ahora aquí</a>
      </p>
    </ion-content>  
  </template>  
  
  <script setup lang="ts">  
  import useUserStore from '../store/userStore';  
  import { watch } from 'vue';
  import { ref } from 'vue';  
  import { useRouter } from 'vue-router';  
   
  const userStore = useUserStore();  
  const email = ref('');  
  const password = ref('');  
  const error = ref('');  
  const loading = ref(false);  
  const router = useRouter();  

  const isEmailValid = (email: string) => {  
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    return re.test(email);  
  };  
  async function handleChange(field: string, event: any){
    if ( field === 'email'){
      email.value = event.target.value;
    } else {
      password.value = event.target.value;
    }
  };

  async function loginUser () {  
    if (!isEmailValid(email.value)) {  
      error.value = "Por favor, introduce un correo electrónico válido.";  
      return;  
    }  
    
    if (password.value.length < 6) {  
      error.value = "La contraseña debe tener al menos 6 caracteres.";  
      return;  
    }  

    loading.value = true;  
    error.value = ''; // Resetear el error antes de intentar login  

    try {  
      await userStore.login(email.value, password.value);  
      router.push('/'); // Redirigir a la ruta protegida después de iniciar sesión  
    } catch (err) {  
        if (err instanceof Error) {  
            error.value = 'Error en el registro: ' + err.message; // Mostrar el mensaje del error  
        } else {  
            error.value = 'Error en el registro: ' + String(err); // Manejar otros tipos de error  
        }    
    } finally {  
      loading.value = false; // Detener el cargador  
    }  
  };   
  </script>  
  
  <style scoped>  
  /* Agrega estilos personalizados aquí si es necesario */  
  </style>