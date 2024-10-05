/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ref } from 'vue';
import StepsIndicator from '../views/stepIndicator.vue';
import { onMounted } from 'vue';
import useRecipeStore from '@/store/recipeStore';
import useIngredientStore from '@/store/ingredientStore';
import router from '@/router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const recipeStore = useRecipeStore();
const ingredientStore = useIngredientStore();
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
const idUser = ref();
const disabled = ref(false);
const resp = ref();
const ingredientsName = ref([]);
const userInfo = ref();
onMounted(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
        idUser.value = JSON.parse(user);
        userInfo.value = JSON.parse(user);
    }
});
async function handleChange(field, event) {
    if (field === 'nombre') {
        recipe.value.nombre = event.target.value;
    }
    else if (field === 'descripcion') {
        recipe.value.descripcion = event.target.value;
    }
    else if (field === 'preparacion') {
        recipe.value.preparacion = event.target.value;
    }
    else if (field === 'nombreI') {
        ingredients.value.nombre = event.target.value;
    }
    else if (field === 'cantidad') {
        ingredients.value.cantidad = event.target.value;
    }
    if (ingredients.value.nombre !== '' && ingredients.value.cantidad !== '') {
        disabled.value = true;
    }
}
;
const handleImageUpload = (event) => {
    const fileInput = event.target; // Aseguramos que es un input  
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
async function addIngredient() {
    const newIngredient = {
        idRecipe: resp.value.id,
        nombre: ingredients.value.nombre,
        cantidad: ingredients.value.cantidad
    };
    ingredientsName.value.push(newIngredient);
}
const submitForm = async () => {
    if (currentStep.value === 1) {
        recipe.value.idUser = Number(idUser.value.id);
        resp.value = await recipeStore.addRecipe(recipe.value);
        recipe.value = {
            idUser: 0,
            nombre: '',
            descripcion: '',
            imagen: '',
            preparacion: '',
        };
        imageUrl.value = '';
        currentStep.value = 2;
    }
    else {
        await ingredientStore.addIngredient(ingredientsName.value);
        ingredients.value = {
            nombre: '',
            cantidad: ''
        };
        router.push({ path: `/profile/${userInfo.value.id}/${userInfo.value.nombre}/${userInfo.value.apellido}/${userInfo.value.nombreUsuario}/${userInfo.value.correo}/${encodeURIComponent(userInfo.value.image)}` });
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['custom-textarea'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.IonContent;
    /** @type { [typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [StepsIndicator,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(StepsIndicator, new StepsIndicator({ currentStep: ((__VLS_ctx.currentStep)), }));
    const __VLS_7 = __VLS_6({ currentStep: ((__VLS_ctx.currentStep)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    if (__VLS_ctx.currentStep === 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitForm) }, });
        const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
        const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
        const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ position: ("floating"), }));
        const __VLS_19 = __VLS_18({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        __VLS_nonNullable(__VLS_22.slots).default;
        const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
        const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
        /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
        // @ts-ignore
        const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ ...{ 'onIonChange': {} }, modelValue: ((__VLS_ctx.recipe.nombre)), required: (true), }));
        const __VLS_25 = __VLS_24({ ...{ 'onIonChange': {} }, modelValue: ((__VLS_ctx.recipe.nombre)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
        let __VLS_29;
        const __VLS_30 = {
            onIonChange: (...[$event]) => {
                if (!((__VLS_ctx.currentStep === 1)))
                    return;
                __VLS_ctx.handleChange('nombre', $event);
            }
        };
        let __VLS_26;
        let __VLS_27;
        const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25);
        __VLS_nonNullable(__VLS_16.slots).default;
        const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
        const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({}));
        const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
        const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ position: ("floating"), }));
        const __VLS_39 = __VLS_38({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
        __VLS_nonNullable(__VLS_42.slots).default;
        const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
        __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ ...{ onIonChange: (...[$event]) => {
                    if (!((__VLS_ctx.currentStep === 1)))
                        return;
                    __VLS_ctx.handleChange('descripcion', $event);
                } }, value: ((__VLS_ctx.recipe.descripcion)), required: (true), ...{ class: ("custom-textarea") }, });
        __VLS_nonNullable(__VLS_36.slots).default;
        const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
        const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
        const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
        const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({}));
        const __VLS_51 = __VLS_50({}, ...__VLS_functionalComponentArgsRest(__VLS_50));
        __VLS_nonNullable(__VLS_54.slots).default;
        const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51);
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.handleImageUpload) }, type: ("file"), accept: ("image/*"), required: (true), });
        if (__VLS_ctx.imageUrl) {
            const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
            /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
            // @ts-ignore
            const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({}));
            const __VLS_57 = __VLS_56({}, ...__VLS_functionalComponentArgsRest(__VLS_56));
            __VLS_nonNullable(__VLS_60.slots).default;
            const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
        }
        if (__VLS_ctx.imageUrl) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imageUrl)), alt: ("Preview"), ...{ style: ({}) }, });
        }
        __VLS_nonNullable(__VLS_48.slots).default;
        const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
        const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({}));
        const __VLS_63 = __VLS_62({}, ...__VLS_functionalComponentArgsRest(__VLS_62));
        const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ position: ("floating"), }));
        const __VLS_69 = __VLS_68({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
        __VLS_nonNullable(__VLS_72.slots).default;
        const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69);
        __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ ...{ onIonChange: (...[$event]) => {
                    if (!((__VLS_ctx.currentStep === 1)))
                        return;
                    __VLS_ctx.handleChange('preparacion', $event);
                } }, value: ((__VLS_ctx.recipe.preparacion)), required: (true), ...{ class: ("custom-textarea") }, });
        __VLS_nonNullable(__VLS_66.slots).default;
        const __VLS_66 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
        const __VLS_73 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
        /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
        // @ts-ignore
        const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ expand: ("full"), type: ("submit"), }));
        const __VLS_75 = __VLS_74({ expand: ("full"), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
        __VLS_nonNullable(__VLS_78.slots).default;
        const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75);
    }
    if (__VLS_ctx.currentStep === 2) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitForm) }, });
        const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.IonGrid;
        /** @type { [typeof __VLS_components.IonGrid, typeof __VLS_components.ionGrid, typeof __VLS_components.IonGrid, typeof __VLS_components.ionGrid, ] } */
        // @ts-ignore
        const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({}));
        const __VLS_81 = __VLS_80({}, ...__VLS_functionalComponentArgsRest(__VLS_80));
        const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.IonRow;
        /** @type { [typeof __VLS_components.IonRow, typeof __VLS_components.ionRow, typeof __VLS_components.IonRow, typeof __VLS_components.ionRow, ] } */
        // @ts-ignore
        const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({}));
        const __VLS_87 = __VLS_86({}, ...__VLS_functionalComponentArgsRest(__VLS_86));
        const __VLS_91 = __VLS_resolvedLocalAndGlobalComponents.IonCol;
        /** @type { [typeof __VLS_components.IonCol, typeof __VLS_components.ionCol, typeof __VLS_components.IonCol, typeof __VLS_components.ionCol, ] } */
        // @ts-ignore
        const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({}));
        const __VLS_93 = __VLS_92({}, ...__VLS_functionalComponentArgsRest(__VLS_92));
        const __VLS_97 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({}));
        const __VLS_99 = __VLS_98({}, ...__VLS_functionalComponentArgsRest(__VLS_98));
        const __VLS_103 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({ position: ("floating"), }));
        const __VLS_105 = __VLS_104({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
        __VLS_nonNullable(__VLS_108.slots).default;
        const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105);
        const __VLS_109 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
        /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
        // @ts-ignore
        const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({ ...{ 'onIonChange': {} }, modelValue: ((__VLS_ctx.ingredients.nombre)), required: (true), }));
        const __VLS_111 = __VLS_110({ ...{ 'onIonChange': {} }, modelValue: ((__VLS_ctx.ingredients.nombre)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_110));
        let __VLS_115;
        const __VLS_116 = {
            onIonChange: (...[$event]) => {
                if (!((__VLS_ctx.currentStep === 2)))
                    return;
                __VLS_ctx.handleChange('nombreI', $event);
            }
        };
        let __VLS_112;
        let __VLS_113;
        const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_109, __VLS_111);
        __VLS_nonNullable(__VLS_102.slots).default;
        const __VLS_102 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99);
        __VLS_nonNullable(__VLS_96.slots).default;
        const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
        const __VLS_117 = __VLS_resolvedLocalAndGlobalComponents.IonCol;
        /** @type { [typeof __VLS_components.IonCol, typeof __VLS_components.ionCol, typeof __VLS_components.IonCol, typeof __VLS_components.ionCol, ] } */
        // @ts-ignore
        const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({}));
        const __VLS_119 = __VLS_118({}, ...__VLS_functionalComponentArgsRest(__VLS_118));
        const __VLS_123 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({}));
        const __VLS_125 = __VLS_124({}, ...__VLS_functionalComponentArgsRest(__VLS_124));
        const __VLS_129 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({ position: ("floating"), }));
        const __VLS_131 = __VLS_130({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
        __VLS_nonNullable(__VLS_134.slots).default;
        const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131);
        const __VLS_135 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
        /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
        // @ts-ignore
        const __VLS_136 = __VLS_asFunctionalComponent(__VLS_135, new __VLS_135({ ...{ 'onIonChange': {} }, modelValue: ((__VLS_ctx.ingredients.cantidad)), required: (true), }));
        const __VLS_137 = __VLS_136({ ...{ 'onIonChange': {} }, modelValue: ((__VLS_ctx.ingredients.cantidad)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
        let __VLS_141;
        const __VLS_142 = {
            onIonChange: (...[$event]) => {
                if (!((__VLS_ctx.currentStep === 2)))
                    return;
                __VLS_ctx.handleChange('cantidad', $event);
            }
        };
        let __VLS_138;
        let __VLS_139;
        const __VLS_140 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137);
        __VLS_nonNullable(__VLS_128.slots).default;
        const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125);
        __VLS_nonNullable(__VLS_122.slots).default;
        const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119);
        const __VLS_143 = __VLS_resolvedLocalAndGlobalComponents.IonCol;
        /** @type { [typeof __VLS_components.IonCol, typeof __VLS_components.ionCol, typeof __VLS_components.IonCol, typeof __VLS_components.ionCol, ] } */
        // @ts-ignore
        const __VLS_144 = __VLS_asFunctionalComponent(__VLS_143, new __VLS_143({}));
        const __VLS_145 = __VLS_144({}, ...__VLS_functionalComponentArgsRest(__VLS_144));
        const __VLS_149 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
        /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
        // @ts-ignore
        const __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, new __VLS_149({ ...{ 'onClick': {} }, expand: ("full"), size: ("small"), disabled: ((!__VLS_ctx.disabled)), }));
        const __VLS_151 = __VLS_150({ ...{ 'onClick': {} }, expand: ("full"), size: ("small"), disabled: ((!__VLS_ctx.disabled)), }, ...__VLS_functionalComponentArgsRest(__VLS_150));
        let __VLS_155;
        const __VLS_156 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.currentStep === 2)))
                    return;
                __VLS_ctx.addIngredient();
            }
        };
        let __VLS_152;
        let __VLS_153;
        __VLS_nonNullable(__VLS_154.slots).default;
        const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_149, __VLS_151);
        __VLS_nonNullable(__VLS_148.slots).default;
        const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145);
        __VLS_nonNullable(__VLS_90.slots).default;
        const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
        __VLS_nonNullable(__VLS_84.slots).default;
        const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81);
        const __VLS_157 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157({}));
        const __VLS_159 = __VLS_158({}, ...__VLS_functionalComponentArgsRest(__VLS_158));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.ingredientsName))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ key: ((item.idRecipe)), });
            (item.nombre);
        }
        __VLS_nonNullable(__VLS_162.slots).default;
        const __VLS_162 = __VLS_pickFunctionalComponentCtx(__VLS_157, __VLS_159);
        const __VLS_163 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
        /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
        // @ts-ignore
        const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, new __VLS_163({ expand: ("full"), type: ("submit"), }));
        const __VLS_165 = __VLS_164({ expand: ("full"), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_164));
        __VLS_nonNullable(__VLS_168.slots).default;
        const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165);
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['custom-textarea'];
    __VLS_styleScopedClasses['custom-textarea'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            StepsIndicator: StepsIndicator,
            recipe: recipe,
            ingredients: ingredients,
            imageUrl: imageUrl,
            currentStep: currentStep,
            disabled: disabled,
            ingredientsName: ingredientsName,
            handleChange: handleChange,
            handleImageUpload: handleImageUpload,
            addIngredient: addIngredient,
            submitForm: submitForm,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
