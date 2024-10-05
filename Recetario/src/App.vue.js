/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { IonApp } from '@ionic/vue';
import 'ionicons/icons';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from '@/views/Header.vue';
import Footer from '@/views/Footer.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
// Determina si la ruta actual es /login o /register
const isLoginOrRegister = computed(() => {
    return route.path === '/login' || route.path === '/register';
});
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
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.IonApp;
    /** @type { [typeof __VLS_components.IonApp, typeof __VLS_components.ionApp, typeof __VLS_components.IonApp, typeof __VLS_components.ionApp, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [Header,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(Header, new Header({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
    const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    if (!__VLS_ctx.isLoginOrRegister) {
        // @ts-ignore
        [Footer,];
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent(Footer, new Footer({}));
        const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
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
            IonApp: IonApp,
            Header: Header,
            Footer: Footer,
            isLoginOrRegister: isLoginOrRegister,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
