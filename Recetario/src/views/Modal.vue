<template>  
  <IonModal :is-open="isOpen" @did-dismiss="close" class="custom-modal">  
    <IonHeader>  
      <IonToolbar>  
        <IonTitle>Opciones de Foto</IonTitle>  
        <IonButtons slot="end">  
          <IonButton @click="close">Cerrar</IonButton>  
        </IonButtons>  
      </IonToolbar>  
    </IonHeader>  
    <IonContent class="content">  
      <div class="button-container">  
        <IonButton expand="full" @click="removePhoto">Quitar Foto</IonButton>  
        <input  
          type="file"  
          @change="onImageChange"  
          accept="image/*"  
          style="display: none" 
          ref="fileInput"  
        />  
    <IonButton expand="full" @click="handleChangePhotoClick">Cambiar Foto Perfil</IonButton>  
      </div>  
    </IonContent>  
  </IonModal>  
</template>  

<script setup lang="ts">  
import useUserStore from '@/store/userStore';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from '@ionic/vue';  
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{  
  isOpen: boolean;  
  user: any;
}>();  
const userStore = useUserStore();
const userLog = ref()
const image = ref('')
const router = useRouter();
const fileInput = ref<HTMLInputElement | null>(null); 

watch(() => props.user, (newUser) => {  
  userLog.value = newUser
});  

const emit = defineEmits<{  
  (e: 'close'): void;  
}>();  

const close = () => {  
  emit('close'); // Emitir evento para cerrar el modal  
};  

const handleChangePhotoClick = () => {  
  if (fileInput.value) {  
    fileInput.value.click(); // Aquí ahora TypeScript reconoce `click`  
  }  
}; 

const removePhoto = () => {  
  const user = {
    id: userLog.value.id,
    nombre: userLog.value.nombre,
    apellido: userLog.value.apellido,
    nombreUsuario: userLog.value.nombreUsuario,
    correo: userLog.value.correo,
    contraseña: userLog.value.contraseña,
    image: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
  }
  userStore.updateUser(user)
  close();
  router.push({path: '/'})
};  

const changeProfilePhoto = async (image: string) => {  
  const user = {
    id: userLog.value.id,
    nombre: userLog.value.nombre,
    apellido: userLog.value.apellido,
    nombreUsuario: userLog.value.nombreUsuario,
    correo: userLog.value.correo,
    contraseña: userLog.value.contraseña,
    image: image
  }
  userStore.updateUser(user)
  close(); 
  router.push({path: '/'})   
};  

const onImageChange = async (event: Event) => {  
  const target = event.target as HTMLInputElement;  
  const file = target.files?.[0];  

  if (file) {  
    const reader = new FileReader();  
    reader.onload = async (e) => {  
      const imageSrc = e.target?.result;  

      if (imageSrc && typeof imageSrc === 'string') { // Comprobamos si imageSrc no es null y es string  
        console.log(imageSrc);  
        await changeProfilePhoto(imageSrc)  
      } else {  
        console.error("Error:  La imagen no se pudo cargar.");  
      }  
    };  
    reader.readAsDataURL(file);  
  }  
};  
</script>  

<style scoped>  
.custom-modal {  
  --height: 250px; /* O el valor que desees */  
  --max-height: 300px; /* Opcional */  
}  

.button-container {  
  display: flex;   
  padding: 16px;   
  justify-content: center;  
}  

.content {  
  padding: 16px; /* Padding */  
  height: auto;  
  max-height: 150px; /* Establece la altura máxima */  
  overflow-y: auto; /* Añade desplazamiento si es necesario */  
}  
</style>