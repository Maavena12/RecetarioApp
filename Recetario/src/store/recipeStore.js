import { defineStore } from 'pinia';
import axios from 'axios';
// Función para obtener las últimas tres recetas por usuario  
const getLastThreeByUser = (data) => {
    const groupedByUser = {};
    // Agrupar por idUser  
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
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/recipe`);
            this.recipes = response.data;
        },
        async fetchRecipebyId(id) {
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/recipe/${id}`);
            this.recipes = [response.data]; // Ajustamos para que sea un array de recetas  
            return response.data;
        },
        async fetchRecipebyUsers() {
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/recipe`);
            const user = localStorage.getItem('currentUser');
            const reviewsResponse = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/reseñas`);
            const usersResponse = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/users`);
            const reviews = reviewsResponse.data;
            const usersRecipe = usersResponse.data;
            // Asegúrate de que `user` no sea null antes de hacer JSON.parse  
            const userId = user ? Number(JSON.parse(user).id) : null;
            const filteredArray = response.data.filter(obj => obj.idUser !== userId);
            // Mapeo de recetas para añadir reseñas  
            const filteredArrayWithReviews = filteredArray.map(recipe => {
                recipe.reviews = reviews.filter((review) => review.idRecipe === Number(recipe.id));
                return recipe;
            });
            // Mapeo de recetas para añadir usuarios  
            const filteredArrayWithUser = filteredArray.map(recipe => {
                recipe.users = usersRecipe.filter((user) => Number(user.id) === recipe.idUser); // Cambié `review` por `user`  
                return recipe;
            });
            const array = getLastThreeByUser(filteredArrayWithReviews);
            console.log('nnnnn', array)
            this.recipes = array;
            return array;
        },
        async fetchRecipebyUserId(id) {
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/recipe?idUser=${id}`);
            this.recipes = response.data;
            return this.recipes;
        },
        async updateRecipe(recipe) {
            await axios.put(`${import.meta.env.VITE_JSON_SERVER_URL}/recipe/${recipe.id}`, recipe);
            await this.fetchRecipes();
        },
        async deleteRecipe(id) {
            await axios.delete(`${import.meta.env.VITE_JSON_SERVER_URL}/recipe/${id}`);
            await this.fetchRecipes();
        },
        async addRecipe(recipe) {
            console.log('llega', recipe);
            const response = await axios.post(`${import.meta.env.VITE_JSON_SERVER_URL}/recipe`, recipe);
            return response.data;
        },
    },
});
export default useRecipeStore;
