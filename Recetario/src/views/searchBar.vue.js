/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ref, onMounted } from 'vue';
import useRecipesStore from '@/store/recipeStore';
import router from '@/router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const recipesStore = useRecipesStore();
const searchQuery = ref('');
const filteredRecipes = ref(recipesStore.recipes);
const fetchRecipes = async () => {
    await recipesStore.fetchRecipes();
    filteredRecipes.value = recipesStore.recipes; // Inicializar con todas las recetas  
};
const selectedRecipe = async (id) => {
    router.push({ path: `/recipeInfo/${id}` });
};
// Llama a fetchRecipes al montar el componente  
onMounted(fetchRecipes);
// Filtra las recetas según el texto en el input  
const filterRecipes = (event) => {
    const query = event.target.value.toLowerCase();
    filteredRecipes.value = recipesStore.recipes.filter(recipe => recipe.nombre.toLowerCase().includes(query));
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
    __VLS_styleScopedClasses['recipe-item'];
    __VLS_styleScopedClasses['search-input'];
    __VLS_styleScopedClasses['search-input'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.IonContent;
    /** @type { [typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search-bar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("search-icon") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.filterRecipes) }, type: ("text"), value: ((__VLS_ctx.searchQuery)), placeholder: ("Buscar recetas..."), ...{ class: ("search-input") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.IonList;
    /** @type { [typeof __VLS_components.IonList, typeof __VLS_components.ionList, typeof __VLS_components.IonList, typeof __VLS_components.ionList, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    for (const [recipe] of __VLS_getVForSourceType((__VLS_ctx.filteredRecipes))) {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, key: ((recipe.id)), ...{ class: ("recipe-item") }, }));
        const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, key: ((recipe.id)), ...{ class: ("recipe-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        let __VLS_18;
        const __VLS_19 = {
            onClick: (...[$event]) => {
                __VLS_ctx.selectedRecipe(recipe.id);
            }
        };
        let __VLS_15;
        let __VLS_16;
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((recipe.imagen)), alt: ("Imagen de receta"), ...{ class: ("recipe-image") }, });
        (recipe.nombre);
        __VLS_nonNullable(__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    if (!__VLS_ctx.filteredRecipes.length && __VLS_ctx.searchQuery) {
        const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
        const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
        __VLS_nonNullable(__VLS_25.slots).default;
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['search-bar'];
    __VLS_styleScopedClasses['search-icon'];
    __VLS_styleScopedClasses['search-input'];
    __VLS_styleScopedClasses['recipe-item'];
    __VLS_styleScopedClasses['recipe-image'];
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
            searchQuery: searchQuery,
            filteredRecipes: filteredRecipes,
            selectedRecipe: selectedRecipe,
            filterRecipes: filterRecipes,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
