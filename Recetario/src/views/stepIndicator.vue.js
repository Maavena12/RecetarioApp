/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
export default (await import('vue')).defineComponent({
    props: {
        currentStep: {
            type: Number,
            required: true,
        },
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    __VLS_styleScopedClasses['step'];
    __VLS_styleScopedClasses['line'];
    __VLS_styleScopedClasses['step'];
    __VLS_styleScopedClasses['line'];
    __VLS_styleScopedClasses['line'];
    __VLS_styleScopedClasses['filled'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("steps-indicator") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("step") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("circle") }, ...{ class: (({ filled: __VLS_ctx.currentStep >= 1 })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("line") }, ...{ class: (({ filled: __VLS_ctx.currentStep >= 1 })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("step-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("step") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("line") }, ...{ class: (({ filled: __VLS_ctx.currentStep >= 1 })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("circle") }, ...{ class: (({ filled: __VLS_ctx.currentStep >= 2 })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("step-label") }, });
    __VLS_styleScopedClasses['steps-indicator'];
    __VLS_styleScopedClasses['step'];
    __VLS_styleScopedClasses['circle'];
    __VLS_styleScopedClasses['filled'];
    __VLS_styleScopedClasses['line'];
    __VLS_styleScopedClasses['filled'];
    __VLS_styleScopedClasses['step-label'];
    __VLS_styleScopedClasses['step'];
    __VLS_styleScopedClasses['line'];
    __VLS_styleScopedClasses['filled'];
    __VLS_styleScopedClasses['circle'];
    __VLS_styleScopedClasses['filled'];
    __VLS_styleScopedClasses['step-label'];
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
let __VLS_self;
