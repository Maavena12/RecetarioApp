# RecetarioApp  

¡Bienvenido al repositorio de **RecetarioApp**! 🎉  

RecetarioApp es una aplicación desarrollada en **Ionic** que utiliza **Vue 3** y **Pinia** para ofrecer una experiencia de red social donde los usuarios pueden crear, compartir y comentar recetas. Aquí podrás descubrir una variada colección de recetas, interactuar con otros usuarios mediante comentarios y reseñas, y acceder a detalles como ingredientes y pasos de preparación.  

## Características  

- **Crear y subir recetas**: Los usuarios pueden añadir sus propias recetas a la plataforma.  
- **Explorar recetas**: Navega por las recetas subidas por otros usuarios.  
- **Comentar y reseñar**: Los usuarios pueden dejar comentarios y reseñas en las recetas.  
- **Detalles de la receta**: Cada receta incluye información sobre ingredientes y pasos de preparación.  

## Tecnologías Utilizadas  

- Ionic  
- Vue 3  
- Pinia  
- JSON Server  

## Instalación y Ejecución  

Para comenzar a utilizar RecetarioApp, sigue estos pasos:  

### 1. Clona el repositorio   
    git clone https://github.com/tu_usuario/RecetarioApp.git  
    cd RecetarioApp/Recetario

### 2. Instala las dependencias
Asegúrate de tener Node.js y el CLI de Ionic instalados. Luego, en la carpeta del proyecto:

    npm install
    
### 3. Ejecuta la aplicación Ionic
Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:
  
    ionic serve

### 4. Ejecuta JSON Server
Abre otra terminal y navega a la misma carpeta del proyecto, luego ejecuta:

    json-server --watch db.json --port 3000 

Esto lanzará un servidor JSON para manejar los datos de las recetas.

### Licencia
Este proyecto está bajo la Licencia MIT.

¡Esperamos que disfrutes creando y explorando recetas en RecetarioApp! Si tienes preguntas o sugerencias, no dudes en abrir un issue. 🍽️👨‍🍳👩‍🍳
