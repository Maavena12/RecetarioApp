<template>  
    <IonModal :is-open="isOpen" @did-dismiss="close" class="custom-modal">  
      <IonHeader>  
        <IonToolbar>  
          <IonTitle>Actualizar Perfil</IonTitle>  
          <IonButtons slot="end">  
            <IonButton @click="close">Cerrar</IonButton>  
          </IonButtons>  
        </IonToolbar>  
      </IonHeader>  
      <IonContent class="content">  
        <form @submit.prevent="updateProfile">  
          <IonItem>  
            <IonLabel position="floating">Nombre de Usuario</IonLabel>  
            <IonInput v-model="form.nombreUsuario" type="text" required />  
          </IonItem>  
  
          <IonItem>  
            <IonLabel position="floating">Correo</IonLabel>  
            <IonInput v-model="form.correo" type="email" required />  
          </IonItem>  
  
          <IonItem>  
            <IonLabel position="floating">Contraseña</IonLabel>  
            <IonInput v-model="form.password" type="password" required />  
          </IonItem>  
  
          <IonItem>  
            <IonLabel>Imagen de Perfil</IonLabel>  
            <input  
              type="file"  
              @change="onImageChange"  
              accept="image/*"  
              style="display: none"  
              ref="fileInput"  
            />  
            <IonButton @click="fileInput.click()">Seleccionar Imagen</IonButton>  
            <div v-if="imageSrc" class="image-preview">  
              <img :src="imageSrc" alt="Preview" class="preview-img" />  
            </div>  
          </IonItem>  
  
          <div class="button-container">  
            <IonButton expand="full" type="submit">Actualizar</IonButton>  
          </div>  
  
          <div v-if="loading" class="loading-spinner">Cargando...</div>  
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>  
        </form>  
      </IonContent>  
    </IonModal>  
  </template>  
  
  <script setup lang="ts">  
  import { ref, watch } from 'vue';  
  import { useRouter } from 'vue-router';  
  import useUserStore from '@/store/userStore';  
  import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel, IonInput } from '@ionic/vue';  
import router from '@/router';
  
  const props = defineProps<{  
    isOpen: boolean;  
    user: any;
  }>();  
  const userLog = ref()

  watch(() => props.user, (newUser) => {  
  if (newUser) {  
    userLog.value = newUser
    form.value.nombreUsuario = newUser.nombreUsuario;  
    form.value.correo = newUser.correo;  
    form.value.password = newUser.contraseña;  
    imageSrc.value = newUser.image; 
  }  
    }, { immediate: true });
  
  const emit = defineEmits<{  
    (e: 'close'): void;  
  }>();  
  
  const userStore = useUserStore();  
  const loading = ref(false); 
  const fileInput = ref(null); 
  const errorMessage = ref('');  
  const imageSrc = ref('');  
  const form = ref({  
    nombreUsuario: '',  
    correo: '',  
    password: '',  
  });  
  
  const close = () => {  
    emit('close');  
  };  
  
  const updateProfile = async () => {  
    loading.value = true;  
    errorMessage.value = '';  
  
    try {  
      const user = { 
        id: userLog.value.id,
        nombre: userLog.value.nombre,
        apellido: userLog.value.apellido,
        ...form.value,  
        image: imageSrc.value,  
      };  
      const response = await userStore.updateUser(user);
      if (response === true) { // Aquí asumiendo que la respuesta tiene un campo 'success'  
        close();  
        router.push({ path: '/' });   
      } else if (response === 'El nombre de usuario esta en uso.') {  
        errorMessage.value = 'El nombre de usuario esta en uso. Por favor intenta otro nombre de usuario.';  
      }  else {
        errorMessage.value = 'El correo esta en uso. Por favor intenta otro correo.';
      }
    } catch (error: any) {  
      errorMessage.value = 'No se pudo actualizar el perfil. Detalles: ' + error.message;  
    } finally {  
      loading.value = false;  
    }  
  };  
  
  const onImageChange = (event: Event) => {  
    const input = event.target as HTMLInputElement;  
    const file = input.files?.[0];  
    if (file) {  
      const reader = new FileReader();  
      reader.onload = (e) => {  
        imageSrc.value = e.target?.result as string;  
      };  
      reader.readAsDataURL(file);  
    }  
  };  
  </script>  
  
  <style scoped>  
  .custom-modal {  
    --height: 470px;  
    --max-height: 500px;  
  }  
  
  .button-container {  
    display: flex;  
    padding: 16px;  
    justify-content: center;  
  }  
  
  .content {  
    padding: 16px;  
  }  
  
  .image-preview {  
    margin-top: 10px;  
  }  
  
  .preview-img {  
    width: 100px;  
    height: auto;  
    border-radius: 5px;  
  }  
  
  .loading-spinner {  
    text-align: center;  
    margin-top: 16px;  
    color: #007AFF; /* Color de tu preferencia */  
  }  
  
  .error-message {  
    text-align: center;  
    margin-top: 8px;  
    color: red; /* Color de tu preferencia */  
  }  
  </style>