<template>
  <ion-content>
    <div class="profile-header">
      <img @click="openModal" :src="image" class="profile-avatar" alt="Avatar">
      <div class="profile-info">
        <h2 class="username">{{ user.userName }}</h2>
        <p class="post-count">{{ number }} publicaciones</p>
      </div>
      <button @click="addRecipe" class="add-recipe-button">+ Agregar Receta</button>
      <i @click="toggleSidebar" class="fas fa-cog"></i>
    </div>

    <Modal :isOpen="showModal" :user="userLog" @close="closeModal"></Modal>
    <UpdateModal :isOpen="showUpdateModal" :user="userLog" @close="closeUpdateModal"></UpdateModal>

    <div v-if="isSidebarVisible" class="sidebar">
      <ion-list>
        <ion-item button @click="openUpdateModal">Editar Perfil</ion-item>
        <ion-item button @click="toggleSidebar">Cerrar</ion-item>
        <ion-item button @click="logout">Cerrar sesión</ion-item>
        <ion-item button @click="deleteAccount" class="delete-account">Borrar Cuenta</ion-item>
      </ion-list>
    </div>

    <div class="gallery">
      <div class="gallery-header">
        <ion-segment value="posts">
          <ion-segment-button value="posts">
            <ion-label>Publicaciones</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>

      <div class="gallery-grid">
        <div class="gallery-item" v-for="post in recipe" :key="post.id">
          <img @click="gotoInfo(post.id)" :src="post.imagen" alt="Post image: {{ post.title }}">
        </div>
      </div>
    </div>
  </ion-content>
</template> 

<script setup lang="ts">  
  import { ref } from 'vue';  
  import { useRoute } from 'vue-router'; 
  import useRecipeStore from '@/store/recipeStore';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import useUserStore from '../store/userStore';
  import Modal from '../views/Modal.vue' 
  import UpdateModal from '../views/UpdateModal.vue';
  import useReviewStore from '@/store/reviewsStore';
  import useIngredientStore from '@/store/ingredientStore';
import { Review } from '@/interface/review';
    
  const recipeStore = useRecipeStore();
  const userStore = useUserStore();
  const reviewStore = useReviewStore();
  const ingredientStore = useIngredientStore();
  const route = useRoute();
  const user = route.params
  const recipe = ref()
  const number = ref(0)
  const router = useRouter();
  const isSidebarVisible = ref(false);
  const isUpdateSidebarVisible = ref(false);
  const showModal = ref(false)
  const showUpdateModal = ref(false)
  const userLog = ref()
  const image = ref('')

  onMounted(async () => { 
    const logInUser = localStorage.getItem('currentUser')
    image.value = user.image as string
    if (logInUser){
      userLog.value = JSON.parse(logInUser);
    }
    recipe.value = await recipeStore.fetchRecipebyUserId(Number(user.id))
    number.value = (await recipe.value).length
  });
  
  function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value;
  }

  function toggleSidebarUpdate() {
    isUpdateSidebarVisible.value = !isUpdateSidebarVisible.value;
  }

  async function gotoInfo(id: number){
    router.push({path: `/recipeInfo/${id}`})
  }

  function addRecipe() {
  // Redirigir a una vista o abrir un formulario de agregar receta
  router.push({ path: '/addRecipe' }); // Asegúrate de que esta ruta esté definida en tu router
  }

  async function logout(){  
    userStore.logout() 
    router.push({path: `/login`})
  }; 

  async function deleteAccount(){ 
    router.push({path: '/login'})

    try {
      for(let i = 0; recipe.value.length > i; i++){
      await ingredientStore.deleteIngredientByRecipe(recipe.value[i].id)
      await recipeStore.deleteRecipe(recipe.value[i].id)
    }
    const review: Review[] = await reviewStore.fetchReviewsbyUserId(userLog.value.id)
    for(let i = 0; review.length > i; i++){
      await reviewStore.deleteReviewByUser(review[i].idUser)
    }
    await userStore.deleteUser(userLog.value.id)
    } catch (error) {
      console.error("Error al eliminar la cuenta:", error);
    } 
  }; 

  const openModal = () => {
  showModal.value = true; // Mostrar el modal
  };

  const openUpdateModal = () => {
  showUpdateModal.value = true; // Mostrar el modal
  };

const closeModal = () => {
  showModal.value = false; // Ocultar el modal
};

const closeUpdateModal = () => {
  showUpdateModal.value = false; // Ocultar el modal
};


</script>  

<style scoped>  
.profile-header {  
  display: flex;  
  align-items: center;  
  padding: 16px;  
}  
.profile-avatar {  
  width: 80px;  
  height: 80px;  
  border-radius: 50%;  
  cursor: pointer; /* Indica que es interactivo */  
}  
.profile-info {  
  flex: 1;  
  margin-left: 16px;  
}  
.username {  
  font-size: 20px;  
  font-weight: bold;  
}  
.post-count {  
  color: gray;  
}  
.actions {  
  flex-shrink: 0;  
}  
.gallery {  
  margin-top: 16px;  
}  
.gallery-header {  
  padding: 8px;  
}  
.gallery-grid {  
  display: grid;  
  grid-template-columns: repeat(3, 1fr);  
  gap: 8px;  
  padding: 8px;  
}  
.gallery-item {  
  width: 100%;  
  position: relative;
  overflow: hidden; 
  width: 98%;
  height: 98%; 
}  
.gallery-item img {  
  width: 100%;  
  height: 100%; 
  object-fit: cover;
  border-radius: 8px;  
}  

.add-recipe-button {
  margin-left: 8px; /* Espaciado entre el nombre y el botón */
  background-color: #3880ff; /* Color de fondo del botón */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  border-radius: 5px; /* Esquinas redondeadas */
  padding: 5px 10px; /* Relleno interno */
  cursor: pointer; /* Puntero al pasar el mouse */
}
.add-recipe-button:hover {
  background-color: #3171e0; /* Color de fondo al pasar el mouse */
}

.sidebar {
  position: fixed; 
  top: 60px;
  right: 0;
  width: 250px; 
  height: 100%; 
  z-index: 1600; /* Asegúrate de que este valor sea mayor que el del header */
  padding: 20px; 
}

.settings-icon {
  cursor: pointer; 
  margin-left: 8px; 
}

.white-icon {
  color: white; /* Cambia el color del ícono a blanco */
  font-size: 24px; /* Ajusta el tamaño según sea necesario */
}

i {  
  padding-left: 6px;
  font-size: 14px; /* Tamaño del ícono */  
  color: #4f4f4f; /* Color del ícono */
  color: white;  
}  

.delete-account{
  color: red;
}

.delete-account:hover{
  color: red;
}
</style>