import { defineStore } from 'pinia';
import axios from 'axios';
const useIngredientStore = defineStore('ingredient', {
    state: () => ({
        ingredients: [],
    }),
    actions: {
        async fetchIngredients() {
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/ingredientes`);
            this.ingredients = response.data;
        },
        async fetchIngredientsbyId(id) {
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/ingredientes?idRecipe=${id}`);
            this.ingredients = response.data;
            return this.ingredients;
        },
        async updateIngredients(ingredient) {
            await axios.put(`${import.meta.env.VITE_JSON_SERVER_URL}/ingredientes/${ingredient.id}`, ingredient);
            this.fetchIngredients();
        },
        async deleteIngredient(id) {
            await axios.delete(`${import.meta.env.VITE_JSON_SERVER_URL}/ingredientes/${id}`);
            this.fetchIngredients();
        },
        async deleteIngredientByRecipe(id) {
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/ingredientes?idRecipe=${id}`);
            for (const ingredient of response.data) {
                await axios.delete(`${import.meta.env.VITE_JSON_SERVER_URL}/ingredientes/${ingredient.id}`);
            }
            this.fetchIngredients();
        },
        async addIngredient(ingredient) {
            const quantity = ingredient;
            for (let i = 0; quantity.length > i; i++) {
                await axios.post(`${import.meta.env.VITE_JSON_SERVER_URL}/ingredientes`, ingredient[i]);
            }
        },
    },
});
export default useIngredientStore;
