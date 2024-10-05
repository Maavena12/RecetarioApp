/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { IonContent } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useUserStore from '../store/userStore';
import useRecipeStore from '@/store/recipeStore';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const userStore = useUserStore();
const recipeStore = useRecipeStore();
const isLoggedIn = ref(false);
const userName = ref('');
const image = ref('');
const userLog = ref();
const router = useRouter();
const recipes = ref([]);
const users = ref(null);
onMounted(async () => {
    const user = localStorage.getItem('currentUser');
    if (user) {
        isLoggedIn.value = true;
        userLog.value = user;
        users.value = await userStore.fetchUser(JSON.parse(user).id);
        if (users.value) {
            userName.value = users.value.nombreUsuario;
            image.value = users.value.image;
        }
    }
    recipes.value = await recipeStore.fetchRecipebyUsers();
    console.log('eeeee', recipes.value);
});
function calculateAverage(reviews) {
    if (reviews.length === 0)
        return 0;
    const totalEstrellas = reviews.reduce((acc, review) => acc + review.estrellas, 0);
    return (totalEstrellas / reviews.length).toFixed(1);
}
async function gotoInfo(id) {
    router.push({ path: `/recipeInfo/${id}` });
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.IonContent;
    /** @type { [typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.IonList;
    /** @type { [typeof __VLS_components.IonList, typeof __VLS_components.ionList, typeof __VLS_components.IonList, typeof __VLS_components.ionList, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    for (const [post] of __VLS_getVForSourceType((__VLS_ctx.recipes))) {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((post.id)), }));
        const __VLS_14 = __VLS_13({ key: ((post.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.IonCard;
        /** @type { [typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onClick': {} }, }));
        const __VLS_20 = __VLS_19({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        let __VLS_24;
        const __VLS_25 = {
            onClick: (...[$event]) => {
                __VLS_ctx.gotoInfo(post.id);
            }
        };
        let __VLS_21;
        let __VLS_22;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("image-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((post.imagen)), alt: ("Foto de la publicación"), });
        const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.IonCardContent;
        /** @type { [typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, ] } */
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
        const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title-stars-container") }, });
        const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.IonCardTitle;
        /** @type { [typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, ] } */
        // @ts-ignore
        const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
        const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
        (post.nombre);
        __VLS_nonNullable(__VLS_37.slots).default;
        const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stars") }, });
        for (const [star] of __VLS_getVForSourceType((5))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((star)), ...{ class: ("star") }, ...{ class: (({ filled: star <= Math.floor(Number(__VLS_ctx.calculateAverage(post.reviews))), half: star === Math.ceil(Number(__VLS_ctx.calculateAverage(post.reviews))) && Number(__VLS_ctx.calculateAverage(post.reviews)) % 1 !== 0 })) }, });
        }
        const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.IonCardTitle;
        /** @type { [typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, ] } */
        // @ts-ignore
        const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({}));
        const __VLS_40 = __VLS_39({}, ...__VLS_functionalComponentArgsRest(__VLS_39));
        (post.reviews.length);
        __VLS_nonNullable(__VLS_43.slots).default;
        const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (post.users[0].nombreUsuario);
        __VLS_nonNullable(__VLS_31.slots).default;
        const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
        __VLS_nonNullable(__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        __VLS_nonNullable(__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['image-container'];
    __VLS_styleScopedClasses['title-stars-container'];
    __VLS_styleScopedClasses['stars'];
    __VLS_styleScopedClasses['star'];
    __VLS_styleScopedClasses['filled'];
    __VLS_styleScopedClasses['half'];
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
            IonContent: IonContent,
            recipes: recipes,
            calculateAverage: calculateAverage,
            gotoInfo: gotoInfo,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
