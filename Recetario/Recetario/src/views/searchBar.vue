<template>  
    <ion-content>  
      <ion-searchbar  
        v-model="searchQuery"  
        @ionInput="filterRecipes"  
        placeholder="Buscar recetas..."  
      ></ion-searchbar>  
  
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
  </style>