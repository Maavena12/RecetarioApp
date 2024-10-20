<template>  
    <ion-content>   
      <ion-list>  
        <ion-item v-for="post in recipes" :key="post.id">  
          <ion-card @click="gotoInfo(post.id)">  
            <div class="image-container">  
              <img :src="post.imagen" alt="Foto de la publicación" />  
            </div>  
            <ion-card-content>  
              <div class="title-stars-container">  
                <ion-card-title>{{ post.nombre }}</ion-card-title>  
                <div class="stars">  
                  <span  
                    v-for="star in 5"  
                    :key="star"  
                    class="star"  
                    :class="{ filled: star <= Math.floor(Number(calculateAverage(post.reviews))), half: star === Math.ceil(Number(calculateAverage(post.reviews))) && Number(calculateAverage(post.reviews)) % 1 !== 0 }"  
                  >  
                    ★  
                  </span>  
                </div>  
                <ion-card-title>({{ post.reviews.length }})</ion-card-title>  
              </div>  
              <p>Realizado por: {{ post.users[0].nombreUsuario }}</p>  
            </ion-card-content>  
          </ion-card>  
        </ion-item>  
      </ion-list>  
    </ion-content>    
</template>  

<script setup lang="ts">  
import { IonContent } from '@ionic/vue';  
import { ref, onMounted } from 'vue';  
import { useRouter } from 'vue-router';  
import useUserStore from '../store/userStore';  
import useRecipeStore from '@/store/recipeStore';  
import { User } from '@/interface/user';
import { Recipe } from '@/interface/recipe';

const userStore = useUserStore();  
const recipeStore = useRecipeStore();  
const isLoggedIn = ref(false);  
const userName = ref('');  
const image = ref('');  
const userLog = ref();  
const router = useRouter();  
const recipes = ref<Recipe[]>([]);  
const users = ref<User | null>(null);  

onMounted(async () => {  
  const user = localStorage.getItem('currentUser');  
  if (user) {  
    isLoggedIn.value = true;  
    userLog.value = user;  
    users.value = await userStore.fetchUser(JSON.parse(user).id);  
    if (users.value) {  
      userName.value = users.value.nombreUsuario;  
      image.value = users.value.image;  
    }   
  }  
  recipes.value = await recipeStore.fetchRecipebyUsers();  
});  


function calculateAverage(reviews: any[]) {  
  if (reviews.length === 0) return 0;  
  const totalEstrellas = reviews.reduce((acc: any, review: { estrellas: any; }) => acc + review.estrellas, 0);  
  return (totalEstrellas / reviews.length).toFixed(1);  
}  

async function gotoInfo(id: number) {  
  router.push({ path: `/recipeInfo/${id}` });  
}  
</script>  

<style scoped>  
.image-container {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  height: 250px;  
}  

.image-container img {  
  width: 100%;  
  max-height: 100%;  
  border-radius: 8px;  
}  

ion-card {  
  width: 330px; /* Altura fija de la card */  
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

@media (min-width: 400px) {  
  ion-list {  
    display: flex;  
    justify-content: center; 
    flex-wrap: wrap;
    gap: 5px; 
  }  
}  

ion-footer {  
  background-color: white; /* Puedes cambiar el color de fondo según el diseño deseado */  
}  
</style>  