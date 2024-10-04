<template>    
      <ion-footer>  
        <ion-tab-bar slot="bottom">  
          <ion-tab-button @click="gotoHome">  
            <i class="fas fa-home"></i>  
            <ion-label>Inicio</ion-label>  
          </ion-tab-button> 

          <ion-tab-button @click="gotoSearch">  
            <i class="fas fa-search"></i> 
            <ion-label>Buscar</ion-label>  
          </ion-tab-button> 
  
          <ion-tab-button @click="gotoProfile">  
            <img :src="image" alt="Perfil" style="width: 25px; height: 25px; border-radius:50%;" > <!-- Use an icon for profile or load the image -->  
            <ion-label>Perfil</ion-label>  
          </ion-tab-button>  
        </ion-tab-bar>  
      </ion-footer>   
  </template>  
  
  <script setup lang="ts">  
  import { IonFooter, IonTabBar, IonTabButton } from '@ionic/vue';  
  import { ref, onMounted } from 'vue';  
  import { useRouter } from 'vue-router';  
  import useUserStore from '../store/userStore';  
  import useRecipeStore from '@/store/recipeStore';  
  
  const userStore = useUserStore();  
  const recipeStore = useRecipeStore();  
  const isLoggedIn = ref(false);  
  const userName = ref('');  
  const image = ref('');  
  const userLog = ref();  
  const router = useRouter();  
  const recipes = ref([]);  
  const users = ref([]);  
  
  onMounted(async () => {  
    const user = localStorage.getItem('currentUser'); 
    if (user) {  
      isLoggedIn.value = true;  
      userLog.value = user;  
      users.value = await userStore.fetchUser(JSON.parse(user).id);  
      userName.value = users.value.nombreUsuario;  
      image.value = users.value.image;  
    }  
    recipes.value = await recipeStore.fetchRecipebyUsers(); 
  });  
  
  function gotoHome() {  
    router.push('/');  
  }  
  
  async function gotoProfile() {  
    router.push({  
      path: `/profile/${users.value.id}/${users.value.nombre}/${users.value.apellido}/${users.value.nombreUsuario}/${users.value.correo}/${encodeURIComponent(users.value.image)}`,  
    });  
  }  

  async function gotoSearch() {  
    router.push({path: '/searchBar'}) 
  }  
  </script>  
  
  <style scoped>  
  /* Tu estilo actual */  
  .image-container {  
    display: flex;  
    justify-content: center;  
    align-items: center;  
    height: 250px;  
  }  
  
  .image-container img {  
    max-width: 100%;  
    max-height: 100%;  
    border-radius: 8px;  
  }  
  
  .stars {  
    display: flex;  
    padding-left: 10px;  
  }  
  
  .star {  
    font-size: 24px;  
    color: lightgray;  
    margin-right: 2px;  
    position: relative;  
  }  
  
  .star.filled {  
    color: gold;  
  }  
  
  .title-stars-container {  
    display: flex;  
    align-items: center;  
  }  
  
  /* Adicional para el footer */  
  ion-footer {  
    background-color: white; /* Puedes cambiar el color de fondo según el diseño deseado */  
  }  
  </style>