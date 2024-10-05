<template>
    <ion-content>
        <steps-indicator :current-step="currentStep" />
      <form v-if="currentStep === 1" @submit.prevent="submitForm">
        <ion-item>
          <ion-label position="floating">Nombre</ion-label>
          <ion-input v-model="recipe.nombre" @ionChange="handleChange('nombre', $event)" required></ion-input>
        </ion-item>
        
        <ion-item>
          <ion-label position="floating">Descripción</ion-label>
          <textarea
            v-model="recipe.descripcion"
            @ionChange="handleChange('descripcion', $event)"
            required
            class="custom-textarea"
          ></textarea>
        </ion-item>
        
        <ion-item>
          <ion-label>Imagen</ion-label>
          <input type="file" @change="handleImageUpload" accept="image/*" required />
          <ion-label v-if="imageUrl">Imagen cargada:</ion-label>
          <img v-if="imageUrl" :src="imageUrl" alt="Preview" style="width: 100px; height: auto;" />
        </ion-item>
  
        <ion-item>
          <ion-label position="floating">Preparación</ion-label>
          <textarea
            v-model="recipe.preparacion"
            @ionChange="handleChange('preparacion', $event)"
            required
            class="custom-textarea"
          ></textarea>
        </ion-item>
  
        <ion-button expand="full" type="submit">Agregar Receta</ion-button>
      </form>

      <form v-if="currentStep === 2" @submit.prevent="submitForm">
        <ion-grid>  
          <ion-row>  
            <ion-col>  
              <ion-item>  
                <ion-label position="floating">Nombre</ion-label>  
                <ion-input v-model="ingredients.nombre" @ionChange="handleChange('nombreI', $event)" required></ion-input>  
              </ion-item>  
            </ion-col>  
            
            <ion-col>  
              <ion-item>  
                <ion-label position="floating">Cantidad</ion-label>  
                <ion-input v-model="ingredients.cantidad" @ionChange="handleChange('cantidad', $event)" required></ion-input>  
              </ion-item>  
            </ion-col>   

            <ion-col>  
              <ion-button expand="full" size="small" @click="addIngredient()" :disabled="!disabled">Agregar Ingrediente</ion-button>  
            </ion-col>
          </ion-row>  
        </ion-grid>  
        <ion-item>  
          <p>Ingredientes: </p>
          <p v-for="item in ingredientsName" :key="item.idRecipe">{{item.nombre}}, </p>  
        </ion-item>
  
        <ion-button expand="full" type="submit">Finalizar</ion-button>
      </form>
    </ion-content>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import StepsIndicator from '../views/stepIndicator.vue';
import { onMounted } from 'vue';
import useRecipeStore from '@/store/recipeStore';
import useIngredientStore from '@/store/ingredientStore';
import router from '@/router';
import { Ingredient } from '@/interface/ingredient';

const recipeStore = useRecipeStore();
const ingredientStore = useIngredientStore()
const recipe = ref({
    idUser: 0,
    nombre: '',
    descripcion: '',
    imagen: '',
    preparacion: '',
});
const ingredients = ref({
    nombre: '',
    cantidad: ''
});
const imageUrl = ref('');
const currentStep = ref(1);
const idUser = ref()
const disabled = ref(false)
const resp = ref()
const ingredientsName = ref<Ingredient[]>([])
const userInfo = ref()

onMounted(() => {  
  const user = localStorage.getItem('currentUser');
  if (user){
    idUser.value = JSON.parse(user) 
    userInfo.value = JSON.parse(user)
  } 
}); 

async function handleChange(field: string, event: any){
    if (field === 'nombre'){
      recipe.value.nombre = event.target.value;
    } else if (field === 'descripcion') {
      recipe.value.descripcion = event.target.value;
    } else if (field === 'preparacion'){
        recipe.value.preparacion = event.target.value;
    } else if (field === 'nombreI'){
        ingredients.value.nombre = event.target.value;
    } else if (field === 'cantidad'){
        ingredients.value.cantidad = event.target.value;
    }
    if (ingredients.value.nombre !== '' && ingredients.value.cantidad !== ''){
      disabled.value = true
    }
};

const handleImageUpload = (event: Event) => {  
    const fileInput = event.target as HTMLInputElement; // Aseguramos que es un input  
    const file = fileInput.files?.[0]; // Usa el "optional chaining" para evitar el acceso a undefined  

    if (file) {  
        const reader = new FileReader();  
        reader.onload = (e) => {  
            const result = e.target?.result; // Usa el optional chaining para evitar el acceso a null  
            if (typeof result === 'string') { // Asegúrate de que el resultado es un string  
                imageUrl.value = result;  
                recipe.value.imagen = result;  
            }  
        };  
        reader.readAsDataURL(file);  
    }  
}; 

async function addIngredient(){
  const newIngredient = {
    idRecipe: resp.value.id,
    nombre: ingredients.value.nombre,
    cantidad: ingredients.value.cantidad
  }
  ingredientsName.value.push(newIngredient)
}

const submitForm = async () => {
    if (currentStep.value === 1){
        recipe.value.idUser = Number(idUser.value.id)
        resp.value = await recipeStore.addRecipe(recipe.value)
        recipe.value = {
            idUser: 0,
            nombre: '',
            descripcion: '',
            imagen: '',
            preparacion: '',
        };
        imageUrl.value = '';
        currentStep.value = 2;
    } else {
      await ingredientStore.addIngredient(ingredientsName.value)
      ingredients.value = {
          nombre: '',
          cantidad: ''
      }
      router.push({ path: `/profile/${userInfo.value.id}/${userInfo.value.nombre}/${userInfo.value.apellido}/${userInfo.value.nombreUsuario}/${userInfo.value.correo}/${encodeURIComponent(userInfo.value.image)}` });
    }
};
  
</script>
  
<style scoped>

.custom-textarea {
  width: 100%;
  padding: 20px; /* Espaciado interno similar a ion-textarea */
  font-size: 14px; /* Tamaño de fuente */
  resize: vertical; /* Permite redimensionar verticalmente */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.custom-textarea:focus {
  outline: none; /* Elimina el borde predeterminado en el foco */
  border-color: var(--ion-color-primary); /* Cambia a color primario de Ionic en foco */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Sombra brillante en foco */
}

</style>