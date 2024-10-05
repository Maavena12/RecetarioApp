<template>  
    <ion-content>
        <ion-card v-if="recipe && ingredients.length">  
            <div class="image-container">
                <img :src="recipe.imagen" alt="Image of {{ recipe.nombre }}" />  
            </div>
            <ion-card-header class="card-header">  
                <ion-card-title>{{ recipe.nombre }} ({{ number }}) </ion-card-title>  
                <div class="stars">  
                    <span  
                        v-for="star in 5"  
                        :key="star"  
                        class="star"  
                        :class="{ filled: star <= Math.floor(number), // Estrellas llenas  
                            half: star === Math.ceil(number) && number % 1 !== 0 // Estrella media
                        }"  
                    >  
                        ★  
                    </span> 
                </div>  
            </ion-card-header> 
            <ion-card-content> 
                <h2>Descripción</h2> 
                <p>{{ recipe.descripcion }}</p>
                <br>
                <h2>Ingredientes</h2>  
                <ul>  
                    <li v-for="ingredient in ingredients" :key="ingredient.id">{{ ingredient.cantidad }} de {{ ingredient.nombre }}</li>  
                </ul>  
                <h2>Preparación</h2>  
                <p>{{ recipe.preparacion }}</p>
                <br>
                <div v-if="users">
                    <h2>Comentarios:</h2> 
                    <div class="user-list">
                        <div v-for="(user, index) in users" :key="user.id" class="user-item">
                          <img :src="user.image" :alt="user.nombre" class="user-image" />
                          <span class="user-name" style="padding-right: 10px;">{{ user.nombreUsuario }}:</span>
                          <span class="user-name">{{ reviews[index].comentario }}</span>
                          <div class="stars">  
                            <span  
                                v-for="star in 5"  
                                :key="star"  
                                class="star"  
                                :class="{ filled: star <= Math.floor(reviews[index].estrellas), // Estrellas llenas  
                                    half: star === Math.ceil(reviews[index].estrellas) && reviews[index].estrellas % 1 !== 0 // Estrella media
                                }"  
                            >  
                                ★  
                            </span> 
                          </div>  
                        </div>
                    </div>

                    <div v-if="!LogInUser">
                        <h3>Agregar Comentario</h3>
                        <textarea v-model="newComment" placeholder="Escribe tu comentario aquí..." rows="4" class="comment-input"></textarea>
                        <h3>Agregar Calificación</h3>
                        <div class="rating-container">
                            <div class="stars">  
                                <span  
                                    v-for="star in 5"  
                                    :key="star"  
                                    class="star"  
                                    :class="{ filled: star <= Math.floor(rating), // Estrellas llenas  
                                        half: star === Math.ceil(rating) && rating % 1 !== 0 // Estrella media
                                    }"  
                                >  
                                    ★  
                                </span> 
                            </div>
                            <div class="rating-control">
                                <button @click="decreaseRating">⬇️</button>
                                <span class="current-rating">{{ rating.toFixed(1) }}</span>
                                <button @click="increaseRating">⬆️</button>
                            </div>
                        </div>
                        <ion-button color="primary" @click="submitComment">Enviar Comentario</ion-button>
                    </div>
                </div>
            </ion-card-content>  
        </ion-card>  
        <p v-else>Cargando...</p>
    </ion-content>
</template> 
  
<script setup lang="ts">  
import { ref, onMounted } from 'vue';  
import { useRoute } from 'vue-router'; 
import useIngredientStore from '@/store/ingredientStore';
import useRecipeStore from '@/store/recipeStore';
import { Ingredient } from '@/interface/ingredient';
import useReviewStore from '@/store/reviewsStore';
import useUserStore from '@/store/userStore';
import { User } from '@/interface/user';
import { Review } from '@/interface/review'

const ingredientStore = useIngredientStore();
const recipeStore = useRecipeStore();
const reviewStore = useReviewStore();
const userStore = useUserStore();
const route = useRoute();

const recipe = ref();
const ingredients = ref<Ingredient[]>([]);
const letter = ref(false)
const reviews = ref()
const number = ref(0)
const users = ref<User[]>([])
const LogInUser = ref(false)
const user = ref()
const newComment = ref('');
const rating = ref(0);


onMounted(async () => {
    user.value = localStorage.getItem('currentUser');
    letter.value = await containsLetter(route.params.id)
    if (letter.value){
        const recipeId = route.params.id as string;
        recipe.value = await recipeStore.fetchRecipebyId(recipeId);
        ingredients.value = await ingredientStore.fetchIngredientsbyId(recipeId);
        reviews.value = await reviewStore.fetchReviewsbyId(recipeId)
        await getUsers()
        number.value = await calculateAverage() ?? 0
        await isLogInUser()
    } else {
        const recipeId = Number(route.params.id);
        recipe.value = await recipeStore.fetchRecipebyId(recipeId);
        ingredients.value = await ingredientStore.fetchIngredientsbyId(recipeId);
        reviews.value = await reviewStore.fetchReviewsbyId(recipeId)
        console.log('eeeeee', reviews.value)
        await getUsers()
        number.value = await calculateAverage() ?? 0
        await isLogInUser()
    }
}); 

async function getUsers(){
    for(let i = 0; reviews.value.length > i; i++){
        const resp = await userStore.fetchUser(reviews.value[i].idUser)
        users.value.push(resp)
    }
}

async function isLogInUser(){
    if(Number(JSON.parse(user.value).id) !== recipe.value.idUser){
        for(let i = 0; reviews.value.length > i; i++){
            if (reviews.value[i].idUser === Number(JSON.parse(user.value).id)){
                LogInUser.value = true
            } else{
                LogInUser.value = false
            }
        }
    } else {
        LogInUser.value = true
    }
}

async function containsLetter(variable: any) {  
    const regex = /[a-zA-Z]/; // Expresión regular para letras  
    return regex.test(variable);  
}

async function calculateAverage() {  
    const values = reviews.value.map((item: { estrellas: any; }) => item.estrellas); 
    let average;

    if (values.length === 0) {  
        average = null;  
        return;  
    }  

    // Calcular el promedio  
    const sum = values.reduce((acc: any, num: any) => acc + num, 0);  
    average = sum / values.length;  
    return average;
} 

function increaseRating() {
    if (rating.value < 4.5) {
        rating.value = parseFloat((rating.value + 0.5).toFixed(1));
    } else {
        rating.value = 5;
    }
}

function decreaseRating() {
    if (rating.value > 0.5) {
        rating.value = parseFloat((rating.value - 0.5).toFixed(1));
    } else {
        rating.value = 0;
    }
}

// Función para enviar el comentario
async function submitComment() {
    if (newComment.value.trim() === '' || rating.value === 0) {
        alert('Por favor, escribe un comentario y selecciona una calificación.');
        return;
    }
    
    // Aquí iría la lógica para enviar el nuevo comentario.
    const commentData: Review = {
        idUser: Number(JSON.parse(user.value.id)),
        idRecipe: Number(route.params.id),
        comentario: newComment.value,
        estrellas: Number(rating.value)
    };

    await reviewStore.addReview(commentData)
    alert('Comentario y reseña agregado con éxito')
}
</script>  
  
<style scoped>  
    ion-card {  
        margin: 16px;  
    }
    .image-container {
        width: 100%;
        height: 250px; 
    }
    .image-container img {
        width: auto; 
        height: 100%; 
        object-fit: cover; 
    }

    .card-header {  
        display: block ruby;   
    }  
    
    .recipe-title {  
        margin-right: 10px; /* Espaciado entre el título y las estrellas */  
    }  
    
    .stars {  
        display: flex;  
        padding-left: 3px;   
    }  
    
    .star {  
        font-size: 24px; /* Cambia el tamaño de las estrellas según necesidad */  
        color: lightgray; /* Color para las estrellas no llenas */  
        margin-right: 2px; /* Espaciado entre las estrellas */  
        position: relative; /* Permite posicionar la estrella media */  
    }  
    
    .star.filled {  
        color: gold; /* Color para las estrellas llenas */  
    }  
    
    .star.half::before {  
        content: '★'; /* Contenido de la estrella media */  
        color: gold; /* Color de la parte llena de la estrella */  
        position: absolute; /* Posiciona en el mismo lugar que la estrella */  
        left: 0; /* Mantiene igual a la estrella vacía */  
        width: 50%; /* Ocupa el 50% del ancho */  
        overflow: hidden; /* Ocultar parte no deseada de la estrella */  
    }   
    
    .user-list {
        display: flex;
        flex-direction: column; /* Para apilar los usuarios verticalmente */
      }
      
      .user-item {
        display: flex;
        align-items: center; /* Alinear verticalmente la imagen y el texto */
        margin: 10px 0; /* Espacio entre cada usuario */
      }
      
      .user-image {
        width: 40px; /* Tamaño de la imagen */
        height: 40px; /* Tamaño de la imagen */
        border-radius: 50%; /* Hace la imagen redonda si es necesario */
        margin-right: 10px; /* Espaciado entre la imagen y el nombre */
      }
      
      .user-name {
        font-size: 16px; /* Tamaño de la fuente del nombre */
      }

      .comment-section {
        margin-top: 20px;
    }
    
    .comment-input {
        width: 100%; /* Hace que el textarea ocupe todo el ancho del contenedor */
        height: 100px; /* Ajusta la altura para que sea adecuada */
        resize: none; /* Evita que el usuario pueda redimensionar el textarea */
        padding: 10px; /* Espaciado interno para mayor comodidad */
        font-size: 16px; /* Fuente legible */
    }

    .star-rating {
    display: flex;
    margin: 10px 0; /* Espacio encima y debajo de las estrellas */
}

.star {
    font-size: 24px; /* Tamaño de las estrellas */
    color: lightgray; /* Color inicial de las estrellas vacías */
    margin-right: 2px; /* Espaciado entre estrellas */
    cursor: pointer; /* Cambia el cursor a puntero al pasar el mouse sobre las estrellas */
}

.star.filled {
    color: gold; 
}

.star.half-filled {
    color: gold; 
}

.rating-container {
    display: flex; /* Usar flexbox para alinear los elementos */
    align-items: center; /* Centrar verticalmente los elementos */
    gap: 10px; /* Espacio entre los elementos */
}
</style>