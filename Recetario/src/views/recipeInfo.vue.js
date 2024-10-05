/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useIngredientStore from '@/store/ingredientStore';
import useRecipeStore from '@/store/recipeStore';
import useReviewStore from '@/store/reviewsStore';
import useUserStore from '@/store/userStore';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const ingredientStore = useIngredientStore();
const recipeStore = useRecipeStore();
const reviewStore = useReviewStore();
const userStore = useUserStore();
const route = useRoute();
const recipe = ref();
const ingredients = ref([]);
const letter = ref(false);
const reviews = ref();
const number = ref(0);
const users = ref([]);
const LogInUser = ref(false);
const user = ref();
const newComment = ref('');
const rating = ref(0);
onMounted(async () => {
    user.value = localStorage.getItem('currentUser');
    letter.value = await containsLetter(route.params.id);
    if (letter.value) {
        const recipeId = route.params.id;
        recipe.value = await recipeStore.fetchRecipebyId(recipeId);
        ingredients.value = await ingredientStore.fetchIngredientsbyId(recipeId);
        reviews.value = await reviewStore.fetchReviewsbyId(recipeId);
        await getUsers();
        number.value = await calculateAverage() ?? 0;
        await isLogInUser();
    }
    else {
        const recipeId = Number(route.params.id);
        recipe.value = await recipeStore.fetchRecipebyId(recipeId);
        ingredients.value = await ingredientStore.fetchIngredientsbyId(recipeId);
        reviews.value = await reviewStore.fetchReviewsbyId(recipeId);
        console.log('eeeeee', reviews.value);
        await getUsers();
        number.value = await calculateAverage() ?? 0;
        await isLogInUser();
    }
});
async function getUsers() {
    for (let i = 0; reviews.value.length > i; i++) {
        const resp = await userStore.fetchUser(reviews.value[i].idUser);
        users.value.push(resp);
    }
}
async function isLogInUser() {
    if (Number(JSON.parse(user.value).id) !== recipe.value.idUser) {
        for (let i = 0; reviews.value.length > i; i++) {
            if (reviews.value[i].idUser === Number(JSON.parse(user.value).id)) {
                LogInUser.value = true;
            }
            else {
                LogInUser.value = false;
            }
        }
    }
    else {
        LogInUser.value = true;
    }
}
async function containsLetter(variable) {
    const regex = /[a-zA-Z]/; // Expresión regular para letras  
    return regex.test(variable);
}
async function calculateAverage() {
    const values = reviews.value.map((item) => item.estrellas);
    let average;
    if (values.length === 0) {
        average = null;
        return;
    }
    // Calcular el promedio  
    const sum = values.reduce((acc, num) => acc + num, 0);
    average = sum / values.length;
    return average;
}
function increaseRating() {
    if (rating.value < 4.5) {
        rating.value = parseFloat((rating.value + 0.5).toFixed(1));
    }
    else {
        rating.value = 5;
    }
}
function decreaseRating() {
    if (rating.value > 0.5) {
        rating.value = parseFloat((rating.value - 0.5).toFixed(1));
    }
    else {
        rating.value = 0;
    }
}
// Función para enviar el comentario
async function submitComment() {
    if (newComment.value.trim() === '' || rating.value === 0) {
        alert('Por favor, escribe un comentario y selecciona una calificación.');
        return;
    }
    // Aquí iría la lógica para enviar el nuevo comentario.
    const commentData = {
        idUser: Number(JSON.parse(user.value.id)),
        idRecipe: Number(route.params.id),
        comentario: newComment.value,
        estrellas: Number(rating.value)
    };
    await reviewStore.addReview(commentData);
    alert('Comentario y reseña agregado con éxito');
}
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
    __VLS_styleScopedClasses['image-container'];
    __VLS_styleScopedClasses['star'];
    __VLS_styleScopedClasses['star'];
    __VLS_styleScopedClasses['star'];
    __VLS_styleScopedClasses['star'];
    __VLS_styleScopedClasses['filled'];
    __VLS_styleScopedClasses['star'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.IonContent;
    /** @type { [typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.recipe && __VLS_ctx.ingredients.length) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.IonCard;
        /** @type { [typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("image-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.recipe.imagen)), alt: ("Image of {{ recipe.nombre }}"), });
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.IonCardHeader;
        /** @type { [typeof __VLS_components.IonCardHeader, typeof __VLS_components.ionCardHeader, typeof __VLS_components.IonCardHeader, typeof __VLS_components.ionCardHeader, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("card-header") }, }));
        const __VLS_14 = __VLS_13({ ...{ class: ("card-header") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.IonCardTitle;
        /** @type { [typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
        const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
        (__VLS_ctx.recipe.nombre);
        (__VLS_ctx.number);
        __VLS_nonNullable(__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stars") }, });
        for (const [star] of __VLS_getVForSourceType((5))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((star)), ...{ class: ("star") }, ...{ class: (({ filled: star <= Math.floor(__VLS_ctx.number), // Estrellas llenas  
                        half: star === Math.ceil(__VLS_ctx.number) && __VLS_ctx.number % 1 !== 0 // Estrella media
                    })) }, });
        }
        __VLS_nonNullable(__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.IonCardContent;
        /** @type { [typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
        const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.recipe.descripcion);
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [ingredient] of __VLS_getVForSourceType((__VLS_ctx.ingredients))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((ingredient.id)), });
            (ingredient.cantidad);
            (ingredient.nombre);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.recipe.preparacion);
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        if (__VLS_ctx.users) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user-list") }, });
            for (const [user, index] of __VLS_getVForSourceType((__VLS_ctx.users))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((user.id)), ...{ class: ("user-item") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((user.image)), alt: ((user.nombre)), ...{ class: ("user-image") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("user-name") }, ...{ style: ({}) }, });
                (user.nombreUsuario);
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("user-name") }, });
                (__VLS_ctx.reviews[index].comentario);
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stars") }, });
                for (const [star] of __VLS_getVForSourceType((5))) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((star)), ...{ class: ("star") }, ...{ class: (({ filled: star <= Math.floor(__VLS_ctx.reviews[index].estrellas), // Estrellas llenas  
                                half: star === Math.ceil(__VLS_ctx.reviews[index].estrellas) && __VLS_ctx.reviews[index].estrellas % 1 !== 0 // Estrella media
                            })) }, });
                }
            }
            if (!__VLS_ctx.LogInUser) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.newComment)), placeholder: ("Escribe tu comentario aquí..."), rows: ("4"), ...{ class: ("comment-input") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rating-container") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stars") }, });
                for (const [star] of __VLS_getVForSourceType((5))) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((star)), ...{ class: ("star") }, ...{ class: (({ filled: star <= Math.floor(__VLS_ctx.rating), // Estrellas llenas  
                                half: star === Math.ceil(__VLS_ctx.rating) && __VLS_ctx.rating % 1 !== 0 // Estrella media
                            })) }, });
                }
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rating-control") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.decreaseRating) }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("current-rating") }, });
                (__VLS_ctx.rating.toFixed(1));
                __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.increaseRating) }, });
                const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
                /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
                // @ts-ignore
                const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {} }, color: ("primary"), }));
                const __VLS_32 = __VLS_31({ ...{ 'onClick': {} }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                let __VLS_36;
                const __VLS_37 = {
                    onClick: (__VLS_ctx.submitComment)
                };
                let __VLS_33;
                let __VLS_34;
                __VLS_nonNullable(__VLS_35.slots).default;
                const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            }
        }
        __VLS_nonNullable(__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
        __VLS_nonNullable(__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['image-container'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['stars'];
    __VLS_styleScopedClasses['star'];
    __VLS_styleScopedClasses['filled'];
    __VLS_styleScopedClasses['half'];
    __VLS_styleScopedClasses['user-list'];
    __VLS_styleScopedClasses['user-item'];
    __VLS_styleScopedClasses['user-image'];
    __VLS_styleScopedClasses['user-name'];
    __VLS_styleScopedClasses['user-name'];
    __VLS_styleScopedClasses['stars'];
    __VLS_styleScopedClasses['star'];
    __VLS_styleScopedClasses['filled'];
    __VLS_styleScopedClasses['half'];
    __VLS_styleScopedClasses['comment-input'];
    __VLS_styleScopedClasses['rating-container'];
    __VLS_styleScopedClasses['stars'];
    __VLS_styleScopedClasses['star'];
    __VLS_styleScopedClasses['filled'];
    __VLS_styleScopedClasses['half'];
    __VLS_styleScopedClasses['rating-control'];
    __VLS_styleScopedClasses['current-rating'];
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
            recipe: recipe,
            ingredients: ingredients,
            reviews: reviews,
            number: number,
            users: users,
            LogInUser: LogInUser,
            newComment: newComment,
            rating: rating,
            increaseRating: increaseRating,
            decreaseRating: decreaseRating,
            submitComment: submitComment,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
