/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import useRecipeStore from '@/store/recipeStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useUserStore from '../store/userStore';
import Modal from '../views/Modal.vue';
import UpdateModal from '../views/UpdateModal.vue';
import useReviewStore from '@/store/reviewsStore';
import useIngredientStore from '@/store/ingredientStore';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const recipeStore = useRecipeStore();
const userStore = useUserStore();
const reviewStore = useReviewStore();
const ingredientStore = useIngredientStore();
const route = useRoute();
const user = route.params;
const recipe = ref();
const number = ref(0);
const router = useRouter();
const isSidebarVisible = ref(false);
const isUpdateSidebarVisible = ref(false);
const showModal = ref(false);
const showUpdateModal = ref(false);
const userLog = ref();
const image = ref('');
onMounted(async () => {
    const logInUser = localStorage.getItem('currentUser');
    image.value = user.image;
    if (logInUser) {
        userLog.value = JSON.parse(logInUser);
    }
    recipe.value = await recipeStore.fetchRecipebyUserId(Number(user.id));
    number.value = (await recipe.value).length;
});
function toggleSidebar() {
    isSidebarVisible.value = !isSidebarVisible.value;
}
function toggleSidebarUpdate() {
    isUpdateSidebarVisible.value = !isUpdateSidebarVisible.value;
}
async function gotoInfo(id) {
    router.push({ path: `/recipeInfo/${id}` });
}
function addRecipe() {
    // Redirigir a una vista o abrir un formulario de agregar receta
    router.push({ path: '/addRecipe' }); // Asegúrate de que esta ruta esté definida en tu router
}
async function logout() {
    userStore.logout();
    router.push({ path: `/login` });
}
;
async function deleteAccount() {
    router.push({ path: '/login' });
    try {
        for (let i = 0; recipe.value.length > i; i++) {
            await ingredientStore.deleteIngredientByRecipe(recipe.value[i].id);
            await recipeStore.deleteRecipe(recipe.value[i].id);
        }
        const review = await reviewStore.fetchReviewsbyUserId(userLog.value.id);
        for (let i = 0; review.length > i; i++) {
            await reviewStore.deleteReviewByUser(review[i].idUser);
        }
        await userStore.deleteUser(userLog.value.id);
    }
    catch (error) {
        console.error("Error al eliminar la cuenta:", error);
    }
}
;
const openModal = () => {
    showModal.value = true; // Mostrar el modal
};
const openUpdateModal = () => {
    showUpdateModal.value = true; // Mostrar el modal
};
const closeModal = () => {
    showModal.value = false; // Ocultar el modal
};
const closeUpdateModal = () => {
    showUpdateModal.value = false; // Ocultar el modal
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
    __VLS_styleScopedClasses['gallery-item'];
    __VLS_styleScopedClasses['add-recipe-button'];
    __VLS_styleScopedClasses['delete-account'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.IonContent;
    /** @type { [typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("profile-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ onClick: (__VLS_ctx.openModal) }, src: ((__VLS_ctx.image)), ...{ class: ("profile-avatar") }, alt: ("Avatar"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("profile-info") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("username") }, });
    (__VLS_ctx.user.userName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("post-count") }, });
    (__VLS_ctx.number);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.addRecipe) }, ...{ class: ("add-recipe-button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ onClick: (__VLS_ctx.toggleSidebar) }, ...{ class: ("fas fa-cog") }, });
    // @ts-ignore
    [Modal, Modal,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(Modal, new Modal({ ...{ 'onClose': {} }, isOpen: ((__VLS_ctx.showModal)), user: ((__VLS_ctx.userLog)), }));
    const __VLS_7 = __VLS_6({ ...{ 'onClose': {} }, isOpen: ((__VLS_ctx.showModal)), user: ((__VLS_ctx.userLog)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    let __VLS_11;
    const __VLS_12 = {
        onClose: (__VLS_ctx.closeModal)
    };
    let __VLS_8;
    let __VLS_9;
    const __VLS_10 = __VLS_pickFunctionalComponentCtx(Modal, __VLS_7);
    // @ts-ignore
    [UpdateModal, UpdateModal,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(UpdateModal, new UpdateModal({ ...{ 'onClose': {} }, isOpen: ((__VLS_ctx.showUpdateModal)), user: ((__VLS_ctx.userLog)), }));
    const __VLS_14 = __VLS_13({ ...{ 'onClose': {} }, isOpen: ((__VLS_ctx.showUpdateModal)), user: ((__VLS_ctx.userLog)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onClose: (__VLS_ctx.closeUpdateModal)
    };
    let __VLS_15;
    let __VLS_16;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(UpdateModal, __VLS_14);
    if (__VLS_ctx.isSidebarVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sidebar") }, });
        const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.IonList;
        /** @type { [typeof __VLS_components.IonList, typeof __VLS_components.ionList, typeof __VLS_components.IonList, typeof __VLS_components.ionList, ] } */
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
        const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
        const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {} }, button: (true), }));
        const __VLS_28 = __VLS_27({ ...{ 'onClick': {} }, button: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
        let __VLS_32;
        const __VLS_33 = {
            onClick: (__VLS_ctx.openUpdateModal)
        };
        let __VLS_29;
        let __VLS_30;
        __VLS_nonNullable(__VLS_31.slots).default;
        const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
        const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ ...{ 'onClick': {} }, button: (true), }));
        const __VLS_36 = __VLS_35({ ...{ 'onClick': {} }, button: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
        let __VLS_40;
        const __VLS_41 = {
            onClick: (__VLS_ctx.toggleSidebar)
        };
        let __VLS_37;
        let __VLS_38;
        __VLS_nonNullable(__VLS_39.slots).default;
        const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ 'onClick': {} }, button: (true), }));
        const __VLS_44 = __VLS_43({ ...{ 'onClick': {} }, button: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        let __VLS_48;
        const __VLS_49 = {
            onClick: (__VLS_ctx.logout)
        };
        let __VLS_45;
        let __VLS_46;
        __VLS_nonNullable(__VLS_47.slots).default;
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        const __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{ 'onClick': {} }, button: (true), ...{ class: ("delete-account") }, }));
        const __VLS_52 = __VLS_51({ ...{ 'onClick': {} }, button: (true), ...{ class: ("delete-account") }, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        let __VLS_56;
        const __VLS_57 = {
            onClick: (__VLS_ctx.deleteAccount)
        };
        let __VLS_53;
        let __VLS_54;
        __VLS_nonNullable(__VLS_55.slots).default;
        const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
        __VLS_nonNullable(__VLS_25.slots).default;
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("gallery") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("gallery-header") }, });
    const __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.IonSegment;
    /** @type { [typeof __VLS_components.IonSegment, typeof __VLS_components.ionSegment, typeof __VLS_components.IonSegment, typeof __VLS_components.ionSegment, ] } */
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ value: ("posts"), }));
    const __VLS_60 = __VLS_59({ value: ("posts"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    const __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.IonSegmentButton;
    /** @type { [typeof __VLS_components.IonSegmentButton, typeof __VLS_components.ionSegmentButton, typeof __VLS_components.IonSegmentButton, typeof __VLS_components.ionSegmentButton, ] } */
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ value: ("posts"), }));
    const __VLS_66 = __VLS_65({ value: ("posts"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    const __VLS_70 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
    // @ts-ignore
    const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({}));
    const __VLS_72 = __VLS_71({}, ...__VLS_functionalComponentArgsRest(__VLS_71));
    __VLS_nonNullable(__VLS_75.slots).default;
    const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
    __VLS_nonNullable(__VLS_69.slots).default;
    const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
    __VLS_nonNullable(__VLS_63.slots).default;
    const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("gallery-grid") }, });
    for (const [post] of __VLS_getVForSourceType((__VLS_ctx.recipe))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("gallery-item") }, key: ((post.id)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.gotoInfo(post.id);
                } }, src: ((post.imagen)), alt: ("Post image: {{ post.title }}"), });
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['profile-header'];
    __VLS_styleScopedClasses['profile-avatar'];
    __VLS_styleScopedClasses['profile-info'];
    __VLS_styleScopedClasses['username'];
    __VLS_styleScopedClasses['post-count'];
    __VLS_styleScopedClasses['add-recipe-button'];
    __VLS_styleScopedClasses['fas'];
    __VLS_styleScopedClasses['fa-cog'];
    __VLS_styleScopedClasses['sidebar'];
    __VLS_styleScopedClasses['delete-account'];
    __VLS_styleScopedClasses['gallery'];
    __VLS_styleScopedClasses['gallery-header'];
    __VLS_styleScopedClasses['gallery-grid'];
    __VLS_styleScopedClasses['gallery-item'];
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
            Modal: Modal,
            UpdateModal: UpdateModal,
            user: user,
            recipe: recipe,
            number: number,
            isSidebarVisible: isSidebarVisible,
            showModal: showModal,
            showUpdateModal: showUpdateModal,
            userLog: userLog,
            image: image,
            toggleSidebar: toggleSidebar,
            gotoInfo: gotoInfo,
            addRecipe: addRecipe,
            logout: logout,
            deleteAccount: deleteAccount,
            openModal: openModal,
            openUpdateModal: openUpdateModal,
            closeModal: closeModal,
            closeUpdateModal: closeUpdateModal,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
