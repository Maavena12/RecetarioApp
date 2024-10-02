import { defineStore } from 'pinia';  
import axios from 'axios';  
import { Recipe } from '@/interface/recipe';

const getLastThreeByUser = (data) => {
  const groupedByUser = {};

  // Agrupar por userId
  data.forEach(entry => {
      const { idUser } = entry;
      if (!groupedByUser[idUser]) {
          groupedByUser[idUser] = [];
      }
      groupedByUser[idUser].push(entry);
  });

  // Filtrar los últimos 3 registros por id para cada usuario
  const result = Object.values(groupedByUser).map(userEntries => {
      return userEntries
          .sort((a, b) => b.id - a.id) // Ordenar por id descendente
          .slice(0, 3); // Tomar los últimos 3
  });

  return result.flat(); // Aplanar el array si es necesario
};

const useRecipeStore = defineStore('recipe', {  
  state: () => ({  
    recipes: [],    
  }),  
  actions: {  
    async fetchRecipes() {  
      const response = await axios.get('http://localhost:3000/recipe');  
      this.recipes = response.data;  
    },   
    async fetchRecipebyId(id: number | string) {
        const response = await axios.get(`http://localhost:3000/recipe/${id}`);  
        this.recipes = response.data;  
        return this.recipes
    }, 
    async fetchRecipebyUsers() {
      const response = await axios.get(`http://localhost:3000/recipe`);  
      const user = localStorage.getItem('currentUser');
      const reviewsResponse = await axios.get(`http://localhost:3000/reseñas`);
      const usersResponse = await axios.get(`http://localhost:3000/users`);
      const reviews = reviewsResponse.data;
      const usersRecipe = usersResponse.data;
      const filteredArray = response.data.filter(obj => obj.idUser !== Number(JSON.parse(user).id));
      const filteredArrayWithReviews = filteredArray.map(recipe => {
        recipe.reviews = reviews.filter(review => review.idRecipe === Number(recipe.id));
        return recipe;
      });
      const filteredArrayWithUser = filteredArray.map(recipe => {
        recipe.users = usersRecipe.filter(review => Number(review.id) === Number(recipe.idUser));
        return recipe;
      });
      const array = getLastThreeByUser(filteredArrayWithReviews)
      this.recipes = array;  
      return array;
    }, 
    async fetchRecipebyUserId(id: number | string) {  
        const response = await axios.get(`http://localhost:3000/recipe?idUser=${id}`);  
        this.recipes = response.data;  
        return this.recipes
    }, 
    async updateRecipe(recipe: Recipe) {  
        await axios.put(`http://localhost:3000/recipe/${recipe.id}`, recipe);  
        this.fetchRecipes();  
    },  
    async deleteRecipe(id: number) {  
        await axios.delete(`http://localhost:3000/recipe/${id}`);  
        this.fetchRecipes();  
    },  
    async addRecipe(recipe: Partial<Recipe>) {
      console.log('llega', recipe)  
      const response = await axios.post('http://localhost:3000/recipe', recipe);  
      return response.data 
    }, 
  },  
});

export default useRecipeStore