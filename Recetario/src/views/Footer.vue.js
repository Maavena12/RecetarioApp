/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { IonFooter, IonTabBar, IonTabButton } from '@ionic/vue';
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
});
function gotoHome() {
    router.push('/');
}
async function gotoProfile() {
    if (users.value) {
        router.push({
            path: `/profile/${users.value.id}/${users.value.nombre}/${users.value.apellido}/${users.value.nombreUsuario}/${users.value.correo}/${encodeURIComponent(users.value.image)}`,
        });
    }
}
async function gotoSearch() {
    router.push({ path: '/searchBar' });
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.IonFooter;
    /** @type { [typeof __VLS_components.IonFooter, typeof __VLS_components.ionFooter, typeof __VLS_components.IonFooter, typeof __VLS_components.ionFooter, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.IonTabBar;
    /** @type { [typeof __VLS_components.IonTabBar, typeof __VLS_components.ionTabBar, typeof __VLS_components.IonTabBar, typeof __VLS_components.ionTabBar, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ slot: ("bottom"), }));
    const __VLS_8 = __VLS_7({ slot: ("bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.IonTabButton;
    /** @type { [typeof __VLS_components.IonTabButton, typeof __VLS_components.ionTabButton, typeof __VLS_components.IonTabButton, typeof __VLS_components.ionTabButton, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, }));
    const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onClick: (__VLS_ctx.gotoHome)
    };
    let __VLS_15;
    let __VLS_16;
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fas fa-home") }, });
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_nonNullable(__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.IonTabButton;
    /** @type { [typeof __VLS_components.IonTabButton, typeof __VLS_components.ionTabButton, typeof __VLS_components.IonTabButton, typeof __VLS_components.ionTabButton, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {} }, }));
    const __VLS_28 = __VLS_27({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    let __VLS_32;
    const __VLS_33 = {
        onClick: (__VLS_ctx.gotoSearch)
    };
    let __VLS_29;
    let __VLS_30;
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fas fa-search") }, });
    const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({}));
    const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
    __VLS_nonNullable(__VLS_39.slots).default;
    const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
    __VLS_nonNullable(__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    const __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.IonTabButton;
    /** @type { [typeof __VLS_components.IonTabButton, typeof __VLS_components.ionTabButton, typeof __VLS_components.IonTabButton, typeof __VLS_components.ionTabButton, ] } */
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {} }, }));
    const __VLS_42 = __VLS_41({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    let __VLS_46;
    const __VLS_47 = {
        onClick: (__VLS_ctx.gotoProfile)
    };
    let __VLS_43;
    let __VLS_44;
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.image)), alt: ("Perfil"), ...{ style: ({}) }, });
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_nonNullable(__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    __VLS_nonNullable(__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['fas'];
    __VLS_styleScopedClasses['fa-home'];
    __VLS_styleScopedClasses['fas'];
    __VLS_styleScopedClasses['fa-search'];
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
            IonFooter: IonFooter,
            IonTabBar: IonTabBar,
            IonTabButton: IonTabButton,
            image: image,
            gotoHome: gotoHome,
            gotoProfile: gotoProfile,
            gotoSearch: gotoSearch,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
