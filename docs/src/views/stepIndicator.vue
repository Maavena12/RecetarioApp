<template>
    <div class="steps-indicator">
      <div class="step">
        <div class="circle" :class="{ filled: currentStep >= 1 }">1</div>
        <div class="line" :class="{ filled: currentStep >= 1 }"></div>
        <div class="step-label">Agregar Información</div>
      </div>
      <div class="step">
        <div class="line" :class="{ filled: currentStep >= 1 }"></div>
        <div class="circle" :class="{ filled: currentStep >= 2 }">2</div>
        <div class="step-label">Finalizar</div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      currentStep: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .steps-indicator {
    display: flex;
    align-items: center;
    justify-content: center; /* Cambiado a center para centrar los pasos */
    margin-bottom: 20px;
  }
  
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 20px; /* Para reducir la separación */
  }
  
  .circle {
    width: 30px;
    height: 30px;
    border: 2px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #ccc;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  }
  
  .filled {
    background-color: #3abaf4;
    border-color: #3abaf4;
    color: white;
  }
  
  .line {
    height: 5px;
    width: 46px; /* Ajustado para que la línea sea más corta */
    background-color: #ccc;
    position: absolute;
    top: 15px; /* Posicionar la línea en medio de los círculos */
  }
  
  .step:not(:last-child) .line {
    left: 87%; /* Centrar la línea entre los círculos */
  }

  .step:last-child .line {
    right: 115%; /* Centrar la línea entre los círculos */
  }
  
  .line.filled {
    background-color: #3abaf4;
  }
  
  .step-label {
    margin-top: 8px;
  }
  </style>