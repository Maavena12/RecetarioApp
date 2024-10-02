import { defineStore } from 'pinia';  
import axios from 'axios';  
import { Review } from '@/interface/review';

const useReviewStore = defineStore('review', {  
  state: () => ({  
    reviews: [],    
  }),  
  actions: {  
    async fetchReviews() {  
      const response = await axios.get('http://localhost:3000/reseñas');  
      this.reviews = response.data;  
    },  
    async fetchReviewsbyId(id: number | string) {  
        const response = await axios.get(`http://localhost:3000/reseñas?idRecipe=${id}`);  
        this.reviews = response.data;  
        return this.reviews
    }, 
    async fetchReviewsbyUserId(id: number | string) {  
      const response = await axios.get(`http://localhost:3000/reseñas?idUser=${id}`);  
      this.reviews = response.data;  
      return this.reviews
  }, 
    async updateReviews(review: Review) {  
        await axios.put(`http://localhost:3000/reseñas/${review.id}`, review);  
        this.fetchReviews();  
    },  
    async deleteReview(id: number) {  
        await axios.delete(`http://localhost:3000/reseñas/${id}`);  
        this.fetchReviews();  
    },  
    async deleteReviewByUser(id: number) {
      const response = await axios.get(`http://localhost:3000/reseñas?idUser=${id}`);
      for (const review of response.data) {  
        await axios.delete(`http://localhost:3000/reseñas/${review.id}`); 
      }   
      this.fetchReviews();  
    },  
    async addReview(review: Partial<Review[]>) {
        await axios.post('http://localhost:3000/reseñas', review); 
        this.fetchReviews();   
    }, 
  },  
});

export default useReviewStore