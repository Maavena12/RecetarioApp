<template>  
    <ion-content>  
      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input  
          type="text"  
          v-model="searchQuery"  
          @input="filterRecipes"  
          placeholder="Buscar recetas..."  
          class="search-input"
        />
      </div>
  
      <ion-list>  
        <ion-item   
          v-for="recipe in filteredRecipes"   
          :key="recipe.id"   
          class="recipe-item" 
          @click="selectedRecipe(recipe.id)" 
        >  
          <img :src="recipe.imagen" alt="Imagen de receta" class="recipe-image" />  
          {{ recipe.nombre }}  
        </ion-item>  
        <ion-item v-if="!filteredRecipes.length && searchQuery">  
          No se encontraron recetas.  
        </ion-item>  
      </ion-list>  
    </ion-content>  
  </template>  
  
  <script setup lang="ts">  
  import { ref, onMounted } from 'vue';  
  import useRecipesStore from '@/store/recipeStore';  
import router from '@/router';
  
  const recipesStore = useRecipesStore();  
  const searchQuery = ref<string>('');  
  const filteredRecipes = ref(recipesStore.recipes);  
  
  const fetchRecipes = async () => {  
    await recipesStore.fetchRecipes();  
    filteredRecipes.value = recipesStore.recipes; // Inicializar con todas las recetas  
  };  

  const selectedRecipe = async (id: number | string) => {  
    router.push({ path: `/recipeInfo/${id}` }) 
  }; 
  
  // Llama a fetchRecipes al montar el componente  
  onMounted(fetchRecipes);  
  
  // Filtra las recetas según el texto en el input  
  const filterRecipes = (event: Event) => {  
    const query = (event.target as HTMLInputElement).value.toLowerCase();  
    filteredRecipes.value = recipesStore.recipes.filter(recipe =>  
      recipe.nombre.toLowerCase().includes(query)  
    );  
  };  
  </script>  
  
  <style scoped>  
  .recipe-item {  
    cursor: pointer; /* Cambia el cursor a puntero al pasar el ratón */  
  }  
  
  .recipe-item:hover {  
    background-color: #f0f0f0; /* Color de fondo al pasar el ratón */  
  }  
    
  .recipe-image {  
    width: 40px;  
    height: 40px;  
    margin-right: 10px;  
    border-radius: 4px;  
  }   

  .search-container {
    padding: 16px;
  }
  
  .search-bar {
    position: relative;
    margin: 10px 0;
  }
  
  .search-icon {
    position: absolute;
    left: 12px; /* Espacio desde la izquierda */
    top: 50%; /* Centra verticalmente */
    transform: translateY(-50%); /* Ajusta para centrar */
    font-size: 20px; /* Tamaño del ícono */
    color: #999; /* Color del ícono */
  }
  
  .search-input {
    width: 100%;
    padding: 12px 16px 12px 40px; /* Espacio a la izquierda para el ícono */
    border: 1px solid #ccc;
    border-radius: 20px; /* Bordes redondeados */
    font-size: 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra suave */
    transition: border-color 0.3s;
  }
  
  .search-input:focus {
    outline: none; /* Sin contorno */
    border-color: #007bff; /* Cambio de color al enfocar */
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5); /* Sombra al enfocar */
  }
  
  .search-input::placeholder {
    color: #999; /* Color del placeholder */
  }
  </style>