/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import useUserStore from '../store/userStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const userStore = useUserStore();
const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);
const router = useRouter();
const isEmailValid = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};
async function handleChange(field, event) {
    if (field === 'email') {
        email.value = event.target.value;
    }
    else {
        password.value = event.target.value;
    }
}
;
async function loginUser() {
    if (!isEmailValid(email.value)) {
        error.value = "Por favor, introduce un correo electrónico válido.";
        return;
    }
    if (password.value.length < 6) {
        error.value = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }
    loading.value = true;
    error.value = ''; // Resetear el error antes de intentar login  
    try {
        await userStore.login(email.value, password.value);
        router.push('/'); // Redirigir a la ruta protegida después de iniciar sesión  
    }
    catch (err) {
        if (err instanceof Error) {
            error.value = 'Error en el registro: ' + err.message; // Mostrar el mensaje del error  
        }
        else {
            error.value = 'Error en el registro: ' + String(err); // Manejar otros tipos de error  
        }
    }
    finally {
        loading.value = false; // Detener el cargador  
    }
}
;
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.IonContent;
    /** @type { [typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("ion-padding") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("ion-padding") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (...[$event]) => {
                __VLS_ctx.loginUser();
            } }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
    /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ position: ("floating"), }));
    const __VLS_14 = __VLS_13({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
    /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onIonChange': {} }, type: ("email"), modelValue: ((__VLS_ctx.email)), required: (true), }));
    const __VLS_20 = __VLS_19({ ...{ 'onIonChange': {} }, type: ("email"), modelValue: ((__VLS_ctx.email)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    let __VLS_24;
    const __VLS_25 = {
        onIonChange: (...[$event]) => {
            __VLS_ctx.handleChange('email', $event);
        }
    };
    let __VLS_21;
    let __VLS_22;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
    /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
    const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ position: ("floating"), }));
    const __VLS_34 = __VLS_33({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    __VLS_nonNullable(__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
    /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onIonChange': {} }, type: ("password"), modelValue: ((__VLS_ctx.password)), required: (true), }));
    const __VLS_40 = __VLS_39({ ...{ 'onIonChange': {} }, type: ("password"), modelValue: ((__VLS_ctx.password)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    let __VLS_44;
    const __VLS_45 = {
        onIonChange: (...[$event]) => {
            __VLS_ctx.handleChange('password', $event);
        }
    };
    let __VLS_41;
    let __VLS_42;
    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    __VLS_nonNullable(__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ expand: ("full"), type: ("submit"), disabled: ((__VLS_ctx.loading)), }));
    const __VLS_48 = __VLS_47({ expand: ("full"), type: ("submit"), disabled: ((__VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    __VLS_nonNullable(__VLS_51.slots).default;
    const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
    if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ion-text-center") }, });
    }
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ion-text-center") }, ...{ style: ({}) }, });
        (__VLS_ctx.error);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ion-text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("/register"), ...{ style: ({}) }, });
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['ion-padding'];
    __VLS_styleScopedClasses['ion-text-center'];
    __VLS_styleScopedClasses['ion-text-center'];
    __VLS_styleScopedClasses['ion-text-center'];
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
            email: email,
            password: password,
            error: error,
            loading: loading,
            handleChange: handleChange,
            loginUser: loginUser,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
