import { defineStore } from 'pinia';
import axios from 'axios';
const useReviewStore = defineStore('review', {
    state: () => ({
        reviews: [],
    }),
    actions: {
        async fetchReviews() {
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/reseñas`);
            this.reviews = response.data;
        },
        async fetchReviewsbyId(id) {
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/reseñas?idRecipe=${id}`);
            this.reviews = response.data;
            return this.reviews;
        },
        async fetchReviewsbyUserId(id) {
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/reseñas?idUser=${id}`);
            this.reviews = response.data;
            return this.reviews;
        },
        async updateReviews(review) {
            await axios.put(`${import.meta.env.VITE_JSON_SERVER_URL}/reseñas/${review.id}`, review);
            this.fetchReviews();
        },
        async deleteReview(id) {
            await axios.delete(`${import.meta.env.VITE_JSON_SERVER_URL}/reseñas/${id}`);
            this.fetchReviews();
        },
        async deleteReviewByUser(id) {
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/reseñas?idUser=${id}`);
            for (const review of response.data) {
                await axios.delete(`${import.meta.env.VITE_JSON_SERVER_URL}/reseñas/${review.id}`);
            }
            this.fetchReviews();
        },
        async addReview(review) {
            await axios.post(`${import.meta.env.VITE_JSON_SERVER_URL}/reseñas`, review);
            this.fetchReviews();
        },
    },
});
export default useReviewStore;
