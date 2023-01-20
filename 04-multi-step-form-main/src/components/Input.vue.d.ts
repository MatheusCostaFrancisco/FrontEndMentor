declare const _default: import("@vue/runtime-core").DefineComponent<{
    name: {
        type: StringConstructor;
        required: true;
    };
    label: {
        type: StringConstructor;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    errorLog: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
    };
}, unknown, unknown, {}, {
    handleChange(event: any): void;
}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, {}, string, import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<import("@vue/runtime-core").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    label: {
        type: StringConstructor;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    errorLog: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
    };
}>>, {
    type: string;
    placeholder: string;
}>;
export default _default;
