/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import useUserStore from '@/store/userStore';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from '@ionic/vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const userStore = useUserStore();
const userLog = ref();
const image = ref('');
const router = useRouter();
const fileInput = ref(null);
watch(() => props.user, (newUser) => {
    userLog.value = newUser;
});
const emit = defineEmits();
const close = () => {
    emit('close'); // Emitir evento para cerrar el modal  
};
const handleChangePhotoClick = () => {
    if (fileInput.value) {
        fileInput.value.click(); // Aquí ahora TypeScript reconoce `click`  
    }
};
const removePhoto = () => {
    const user = {
        id: userLog.value.id,
        nombre: userLog.value.nombre,
        apellido: userLog.value.apellido,
        nombreUsuario: userLog.value.nombreUsuario,
        correo: userLog.value.correo,
        contraseña: userLog.value.contraseña,
        image: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
    };
    userStore.updateUser(user);
    close();
    router.push({ path: '/' });
};
const changeProfilePhoto = async (image) => {
    const user = {
        id: userLog.value.id,
        nombre: userLog.value.nombre,
        apellido: userLog.value.apellido,
        nombreUsuario: userLog.value.nombreUsuario,
        correo: userLog.value.correo,
        contraseña: userLog.value.contraseña,
        image: image
    };
    userStore.updateUser(user);
    close();
    router.push({ path: '/' });
};
const onImageChange = async (event) => {
    const target = event.target;
    const file = target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            const imageSrc = e.target?.result;
            if (imageSrc && typeof imageSrc === 'string') { // Comprobamos si imageSrc no es null y es string  
                console.log(imageSrc);
                await changeProfilePhoto(imageSrc);
            }
            else {
                console.error("Error:  La imagen no se pudo cargar.");
            }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button-container") }, });
    const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.IonButton, ] } */
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{ 'onClick': {} }, expand: ("full"), }));
    const __VLS_48 = __VLS_47({ ...{ 'onClick': {} }, expand: ("full"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    let __VLS_52;
    const __VLS_53 = {
        onClick: (__VLS_ctx.removePhoto)
    };
    let __VLS_49;
    let __VLS_50;
    __VLS_nonNullable(__VLS_51.slots).default;
    const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.onImageChange) }, type: ("file"), accept: ("image/*"), ...{ style: ({}) }, ref: ("fileInput"), });
    // @ts-ignore navigation for `const fileInput = ref()`
    __VLS_ctx.fileInput;
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.IonButton, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ ...{ 'onClick': {} }, expand: ("full"), }));
    const __VLS_56 = __VLS_55({ ...{ 'onClick': {} }, expand: ("full"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    let __VLS_60;
    const __VLS_61 = {
        onClick: (__VLS_ctx.handleChangePhotoClick)
    };
    let __VLS_57;
    let __VLS_58;
    __VLS_nonNullable(__VLS_59.slots).default;
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    __VLS_nonNullable(__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['custom-modal'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['button-container'];
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
            fileInput: fileInput,
            close: close,
            handleChangePhotoClick: handleChangePhotoClick,
            removePhoto: removePhoto,
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
