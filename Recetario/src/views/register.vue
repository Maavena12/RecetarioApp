<template>  
    <ion-content class="ion-padding">  
      <h1>Registrar</h1>  
      <form @submit.prevent="registerUser()">  
        <ion-item>  
          <ion-label position="floating">Nombre</ion-label>  
          <ion-input type="text" v-model="name" @ionChange="handleChange('name', $event)" required></ion-input>  
        </ion-item>  
        <ion-item>  
          <ion-label position="floating">Apellido</ion-label>  
          <ion-input type="text" v-model="lastName" @ionChange="handleChange('lastName', $event)" required></ion-input>  
        </ion-item> 
        <ion-item>  
          <ion-label position="floating">Nombre de Usuario</ion-label>  
          <ion-input type="text" v-model="userName" @ionChange="handleChange('userName', $event)" required></ion-input>  
        </ion-item>
        <ion-item>  
          <ion-label position="floating">Correo</ion-label>  
          <ion-input type="email" v-model="email" @ionChange="handleChange('email', $event)" required></ion-input>  
        </ion-item>  
        <ion-item>  
          <ion-label position="floating">Contraseña</ion-label>  
          <ion-input type="password" v-model="password" @ionChange="handleChange('password', $event)" required></ion-input>  
        </ion-item>  
        <ion-item>
          <input type="file" @change="onImageChange" accept="image/*" />
        </ion-item>
        <ion-button expand="full" type="submit">Registrar</ion-button>  
        <p v-if="error" class="ion-text-center" style="color: red;">{{ error }}</p>  
      </form>  
    </ion-content>  
  </template>  
  
  <script setup lang="ts">  
  import { ref } from 'vue';  
  import useUserStore from '../store/userStore'; 
  import { useRouter } from 'vue-router';
  
  const userStore = useUserStore();  
  const name = ref('');
  const lastName = ref(''); 
  const userName = ref('');  
  const email = ref('');  
  const image = ref(''); 
  const password = ref('');  
  const error = ref('');
  const router = useRouter();  

  async function handleChange(field: string, event: any){
    if (field === 'name'){
      name.value = event.target.value;
    } else if (field === 'lastName') {
      lastName.value = event.target.value;
    } else if (field === 'userName') {
      userName.value = event.target.value;
    } else if (field === 'email') {
      email.value = event.target.value;
    } else if (field === 'password') {
      password.value = event.target.value;
    }
  };

  async function onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const maxSize = 2 * 1024 * 1024;
      if (file.size > maxSize) {
        alert('El archivo es demasiado grande. Máximo 2 MB permitido.');
        image.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        image.value = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  async function registerUser(){  
    error.value = ''; 

    try {  
      await userStore.register({   
        nombre: name.value,
        apellido: lastName.value,
        nombreUsuario: userName.value,   
        correo: email.value,   
        contraseña: password.value,
        image: image.value   
      }); 
      window.location.href = '/login'

    } catch (err) {  
        if (err instanceof Error) {  
            error.value = 'Error en el registro: ' + err.message; // Mostrar el mensaje del error  
        } else {  
            error.value = 'Error en el registro: ' + String(err); // Manejar otros tipos de error  
        }  
    }  
  };
  </script>  
  
  <style scoped>  
  /* Puedes agregar estilos personalizados aquí si es necesario */  
  </style>