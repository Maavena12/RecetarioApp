/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ref } from 'vue';
import useUserStore from '../store/userStore';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const userStore = useUserStore();
const name = ref('');
const lastName = ref('');
const userName = ref('');
const email = ref('');
const image = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();
async function handleChange(field, event) {
    if (field === 'name') {
        name.value = event.target.value;
    }
    else if (field === 'lastName') {
        lastName.value = event.target.value;
    }
    else if (field === 'userName') {
        userName.value = event.target.value;
    }
    else if (field === 'email') {
        email.value = event.target.value;
    }
    else if (field === 'password') {
        password.value = event.target.value;
    }
}
;
async function onImageChange(event) {
    const file = event.target.files[0];
    if (file) {
        const maxSize = 2 * 1024 * 1024;
        if (file.size > maxSize) {
            alert('El archivo es demasiado grande. Máximo 2 MB permitido.');
            image.value = '';
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            image.value = e.target?.result;
        };
        reader.readAsDataURL(file);
    }
}
async function registerUser() {
    error.value = '';
    try {
        await userStore.register({
            nombre: name.value,
            apellido: lastName.value,
            nombreUsuario: userName.value,
            correo: email.value,
            contraseña: password.value,
            image: image.value
        });
        window.location.href = '/login';
    }
    catch (err) {
        if (err instanceof Error) {
            error.value = 'Error en el registro: ' + err.message; // Mostrar el mensaje del error  
        }
        else {
            error.value = 'Error en el registro: ' + String(err); // Manejar otros tipos de error  
        }
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
                __VLS_ctx.registerUser();
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onIonChange': {} }, type: ("text"), modelValue: ((__VLS_ctx.name)), required: (true), }));
    const __VLS_20 = __VLS_19({ ...{ 'onIonChange': {} }, type: ("text"), modelValue: ((__VLS_ctx.name)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    let __VLS_24;
    const __VLS_25 = {
        onIonChange: (...[$event]) => {
            __VLS_ctx.handleChange('name', $event);
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
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onIonChange': {} }, type: ("text"), modelValue: ((__VLS_ctx.lastName)), required: (true), }));
    const __VLS_40 = __VLS_39({ ...{ 'onIonChange': {} }, type: ("text"), modelValue: ((__VLS_ctx.lastName)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    let __VLS_44;
    const __VLS_45 = {
        onIonChange: (...[$event]) => {
            __VLS_ctx.handleChange('lastName', $event);
        }
    };
    let __VLS_41;
    let __VLS_42;
    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    __VLS_nonNullable(__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
    /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({}));
    const __VLS_48 = __VLS_47({}, ...__VLS_functionalComponentArgsRest(__VLS_47));
    const __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ position: ("floating"), }));
    const __VLS_54 = __VLS_53({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    __VLS_nonNullable(__VLS_57.slots).default;
    const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
    const __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
    /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ ...{ 'onIonChange': {} }, type: ("text"), modelValue: ((__VLS_ctx.userName)), required: (true), }));
    const __VLS_60 = __VLS_59({ ...{ 'onIonChange': {} }, type: ("text"), modelValue: ((__VLS_ctx.userName)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    let __VLS_64;
    const __VLS_65 = {
        onIonChange: (...[$event]) => {
            __VLS_ctx.handleChange('userName', $event);
        }
    };
    let __VLS_61;
    let __VLS_62;
    const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60);
    __VLS_nonNullable(__VLS_51.slots).default;
    const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
    /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
    const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ position: ("floating"), }));
    const __VLS_74 = __VLS_73({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_nonNullable(__VLS_77.slots).default;
    const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
    /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ ...{ 'onIonChange': {} }, type: ("email"), modelValue: ((__VLS_ctx.email)), required: (true), }));
    const __VLS_80 = __VLS_79({ ...{ 'onIonChange': {} }, type: ("email"), modelValue: ((__VLS_ctx.email)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    let __VLS_84;
    const __VLS_85 = {
        onIonChange: (...[$event]) => {
            __VLS_ctx.handleChange('email', $event);
        }
    };
    let __VLS_81;
    let __VLS_82;
    const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
    __VLS_nonNullable(__VLS_71.slots).default;
    const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
    /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({}));
    const __VLS_88 = __VLS_87({}, ...__VLS_functionalComponentArgsRest(__VLS_87));
    const __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ position: ("floating"), }));
    const __VLS_94 = __VLS_93({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    __VLS_nonNullable(__VLS_97.slots).default;
    const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
    const __VLS_98 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
    /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ ...{ 'onIonChange': {} }, type: ("password"), modelValue: ((__VLS_ctx.password)), required: (true), }));
    const __VLS_100 = __VLS_99({ ...{ 'onIonChange': {} }, type: ("password"), modelValue: ((__VLS_ctx.password)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    let __VLS_104;
    const __VLS_105 = {
        onIonChange: (...[$event]) => {
            __VLS_ctx.handleChange('password', $event);
        }
    };
    let __VLS_101;
    let __VLS_102;
    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
    __VLS_nonNullable(__VLS_91.slots).default;
    const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
    const __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
    /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
    // @ts-ignore
    const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({}));
    const __VLS_108 = __VLS_107({}, ...__VLS_functionalComponentArgsRest(__VLS_107));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.onImageChange) }, type: ("file"), accept: ("image/*"), });
    __VLS_nonNullable(__VLS_111.slots).default;
    const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
    const __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ expand: ("full"), type: ("submit"), }));
    const __VLS_114 = __VLS_113({ expand: ("full"), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
    __VLS_nonNullable(__VLS_117.slots).default;
    const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114);
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ion-text-center") }, ...{ style: ({}) }, });
        (__VLS_ctx.error);
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['ion-padding'];
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
            name: name,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password,
            error: error,
            handleChange: handleChange,
            onImageChange: onImageChange,
            registerUser: registerUser,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
