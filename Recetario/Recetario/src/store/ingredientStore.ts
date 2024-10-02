import { defineStore } from 'pinia';  
import axios from 'axios';  
import { Ingredient } from '@/interface/ingredient';

const useIngredientStore = defineStore('ingredient', {  
  state: () => ({  
    ingredients: [],    
  }),  
  actions: {  
    async fetchIngredients() {  
      const response = await axios.get('http://localhost:3000/ingredientes');  
      this.ingredients = response.data;  
    },  
    async fetchIngredientsbyId(id: number | string) {  
        const response = await axios.get(`http://localhost:3000/ingredientes?idRecipe=${id}`);  
        this.ingredients = response.data;  
        return this.ingredients
    }, 
    async updateIngredients(ingredient: Ingredient) {  
        await axios.put(`http://localhost:3000/ingredientes/${ingredient.id}`, ingredient);  
        this.fetchIngredients();  
    },  
    async deleteIngredient(id: number) {  
        await axios.delete(`http://localhost:3000/ingredientes/${id}`);  
        this.fetchIngredients();  
    },  
    async deleteIngredientByRecipe(id: number) { 
      const response = await axios.get(`http://localhost:3000/ingredientes?idRecipe=${id}`);  

      for (const ingredient of response.data) {  
        await axios.delete(`http://localhost:3000/ingredientes/${ingredient.id}`);  
      }   
      this.fetchIngredients();  
    },  
    async addIngredient(ingredient: Partial<Ingredient[]>) {
      const quantity = ingredient
      for(let i = 0; quantity.length > i; i++){
        await axios.post('http://localhost:3000/ingredientes', ingredient[i]);   
      } 
    }, 
  },  
});

export default useIngredientStore