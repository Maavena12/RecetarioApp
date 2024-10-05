/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ref, watch } from 'vue';
import useUserStore from '@/store/userStore';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel, IonInput } from '@ionic/vue';
import router from '@/router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const userLog = ref();
watch(() => props.user, (newUser) => {
    if (newUser) {
        userLog.value = newUser;
        form.value.nombreUsuario = newUser.nombreUsuario;
        form.value.correo = newUser.correo;
        form.value.password = newUser.contraseña;
        imageSrc.value = newUser.image;
    }
}, { immediate: true });
const emit = defineEmits();
const userStore = useUserStore();
const loading = ref(false);
const fileInput = ref(null);
const errorMessage = ref('');
const imageSrc = ref('');
const form = ref({
    nombreUsuario: '',
    correo: '',
    password: '',
});
const close = () => {
    emit('close');
};
const handleChangePhotoClick = () => {
    if (fileInput.value) {
        fileInput.value.click(); // Aquí ahora TypeScript reconoce `click`  
    }
};
const updateProfile = async () => {
    loading.value = true;
    errorMessage.value = '';
    try {
        const user = {
            id: userLog.value.id,
            nombre: userLog.value.nombre,
            apellido: userLog.value.apellido,
            ...form.value,
            image: imageSrc.value,
        };
        const response = await userStore.updateUser(user);
        if (response === true) { // Aquí asumiendo que la respuesta tiene un campo 'success'  
            close();
            router.push({ path: '/' });
        }
        else if (response === 'El nombre de usuario esta en uso.') {
            errorMessage.value = 'El nombre de usuario esta en uso. Por favor intenta otro nombre de usuario.';
        }
        else {
            errorMessage.value = 'El correo esta en uso. Por favor intenta otro correo.';
        }
    }
    catch (error) {
        errorMessage.value = 'No se pudo actualizar el perfil. Detalles: ' + error.message;
    }
    finally {
        loading.value = false;
    }
};
const onImageChange = (event) => {
    const input = event.target;
    const file = input.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imageSrc.value = e.target?.result;
        };
        reader.readAsDataURL(file);
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    __typeEmits: {},
});
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.IonModal;
    /** @type { [typeof __VLS_components.IonModal, typeof __VLS_components.IonModal, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onDidDismiss': {} }, isOpen: ((__VLS_ctx.isOpen)), ...{ class: ("custom-modal") }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onDidDismiss': {} }, isOpen: ((__VLS_ctx.isOpen)), ...{ class: ("custom-modal") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onDidDismiss: (__VLS_ctx.close)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.IonHeader;
    /** @type { [typeof __VLS_components.IonHeader, typeof __VLS_components.IonHeader, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
    const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.IonToolbar;
    /** @type { [typeof __VLS_components.IonToolbar, typeof __VLS_components.IonToolbar, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.IonTitle;
    /** @type { [typeof __VLS_components.IonTitle, typeof __VLS_components.IonTitle, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_nonNullable(__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.IonButtons;
    /** @type { [typeof __VLS_components.IonButtons, typeof __VLS_components.IonButtons, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ slot: ("end"), }));
    const __VLS_28 = __VLS_27({ slot: ("end"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.IonButton, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {} }, }));
    const __VLS_34 = __VLS_33({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    let __VLS_38;
    const __VLS_39 = {
        onClick: (__VLS_ctx.close)
    };
    let __VLS_35;
    let __VLS_36;
    __VLS_nonNullable(__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    __VLS_nonNullable(__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    __VLS_nonNullable(__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    __VLS_nonNullable(__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    const __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.IonContent;
    /** @type { [typeof __VLS_components.IonContent, typeof __VLS_components.IonContent, ] } */
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ class: ("content") }, }));
    const __VLS_42 = __VLS_41({ ...{ class: ("content") }, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.updateProfile) }, });
    const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
    /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.IonItem, ] } */
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({}));
    const __VLS_48 = __VLS_47({}, ...__VLS_functionalComponentArgsRest(__VLS_47));
    const __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.IonLabel, ] } */
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ position: ("floating"), }));
    const __VLS_54 = __VLS_53({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    __VLS_nonNullable(__VLS_57.slots).default;
    const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
    const __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
    /** @type { [typeof __VLS_components.IonInput, ] } */
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ modelValue: ((__VLS_ctx.form.nombreUsuario)), type: ("text"), required: (true), }));
    const __VLS_60 = __VLS_59({ modelValue: ((__VLS_ctx.form.nombreUsuario)), type: ("text"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    __VLS_nonNullable(__VLS_51.slots).default;
    const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
    const __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
    /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.IonItem, ] } */
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({}));
    const __VLS_66 = __VLS_65({}, ...__VLS_functionalComponentArgsRest(__VLS_65));
    const __VLS_70 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.IonLabel, ] } */
    // @ts-ignore
    const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ position: ("floating"), }));
    const __VLS_72 = __VLS_71({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
    __VLS_nonNullable(__VLS_75.slots).default;
    const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
    const __VLS_76 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
    /** @type { [typeof __VLS_components.IonInput, ] } */
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ modelValue: ((__VLS_ctx.form.correo)), type: ("email"), required: (true), }));
    const __VLS_78 = __VLS_77({ modelValue: ((__VLS_ctx.form.correo)), type: ("email"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    __VLS_nonNullable(__VLS_69.slots).default;
    const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
    const __VLS_82 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
    /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.IonItem, ] } */
    // @ts-ignore
    const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({}));
    const __VLS_84 = __VLS_83({}, ...__VLS_functionalComponentArgsRest(__VLS_83));
    const __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.IonLabel, ] } */
    // @ts-ignore
    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ position: ("floating"), }));
    const __VLS_90 = __VLS_89({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
    __VLS_nonNullable(__VLS_93.slots).default;
    const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
    const __VLS_94 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
    /** @type { [typeof __VLS_components.IonInput, ] } */
    // @ts-ignore
    const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ modelValue: ((__VLS_ctx.form.password)), type: ("password"), required: (true), }));
    const __VLS_96 = __VLS_95({ modelValue: ((__VLS_ctx.form.password)), type: ("password"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
    __VLS_nonNullable(__VLS_87.slots).default;
    const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84);
    const __VLS_100 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
    /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.IonItem, ] } */
    // @ts-ignore
    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({}));
    const __VLS_102 = __VLS_101({}, ...__VLS_functionalComponentArgsRest(__VLS_101));
    const __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
    /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.IonLabel, ] } */
    // @ts-ignore
    const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({}));
    const __VLS_108 = __VLS_107({}, ...__VLS_functionalComponentArgsRest(__VLS_107));
    __VLS_nonNullable(__VLS_111.slots).default;
    const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.onImageChange) }, type: ("file"), accept: ("image/*"), ...{ style: ({}) }, ref: ("fileInput"), });
    // @ts-ignore navigation for `const fileInput = ref()`
    __VLS_ctx.fileInput;
    const __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.IonButton, ] } */
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ ...{ 'onClick': {} }, }));
    const __VLS_114 = __VLS_113({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_113));
    let __VLS_118;
    const __VLS_119 = {
        onClick: (__VLS_ctx.handleChangePhotoClick)
    };
    let __VLS_115;
    let __VLS_116;
    __VLS_nonNullable(__VLS_117.slots).default;
    const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114);
    if (__VLS_ctx.imageSrc) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("image-preview") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imageSrc)), alt: ("Preview"), ...{ class: ("preview-img") }, });
    }
    __VLS_nonNullable(__VLS_105.slots).default;
    const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button-container") }, });
    const __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.IonButton, ] } */
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ expand: ("full"), type: ("submit"), }));
    const __VLS_122 = __VLS_121({ expand: ("full"), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
    __VLS_nonNullable(__VLS_125.slots).default;
    const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
    if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("loading-spinner") }, });
    }
    if (__VLS_ctx.errorMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("error-message") }, });
        (__VLS_ctx.errorMessage);
    }
    __VLS_nonNullable(__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['custom-modal'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['image-preview'];
    __VLS_styleScopedClasses['preview-img'];
    __VLS_styleScopedClasses['button-container'];
    __VLS_styleScopedClasses['loading-spinner'];
    __VLS_styleScopedClasses['error-message'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "fileInput": __VLS_nativeElements['input'],
    };
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
            IonModal: IonModal,
            IonHeader: IonHeader,
            IonToolbar: IonToolbar,
            IonTitle: IonTitle,
            IonButtons: IonButtons,
            IonButton: IonButton,
            IonContent: IonContent,
            IonItem: IonItem,
            IonLabel: IonLabel,
            IonInput: IonInput,
            loading: loading,
            fileInput: fileInput,
            errorMessage: errorMessage,
            imageSrc: imageSrc,
            form: form,
            close: close,
            handleChangePhotoClick: handleChangePhotoClick,
            updateProfile: updateProfile,
            onImageChange: onImageChange,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
;
