interface IStepObject {
    name: string;
    route: string;
}
import { PropType } from '@vue/runtime-core';
declare const _default: import("vue").DefineComponent<{
    steps: {
        type: PropType<IStepObject[]>;
    };
}, unknown, {
    current: string;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    steps: {
        type: PropType<IStepObject[]>;
    };
}>>, {}>;
export default _default;
