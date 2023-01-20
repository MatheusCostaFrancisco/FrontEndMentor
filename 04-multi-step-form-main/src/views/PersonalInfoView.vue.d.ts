declare const _default: import("vue").DefineComponent<{}, {}, {
    model: {
        name: string;
        email: string;
        phone: string;
    };
    error: {
        name: string;
        email: string;
        phone: string;
    };
}, {
    user: () => {
        name: string;
        email: string;
        phone: string;
    };
}, {
    validateForm(): boolean;
    handleNext(): void;
    setUserInfo: (user: {
        name: string;
        email: string;
        phone: string;
    }) => void;
    setPlan: (plan: import("../store").PlanNamesType) => void;
    setFrequency: (freq: "Monthly" | "Yearly") => void;
    setMoreInfo: (moreInfoValue: keyof import("../infra/services/plans.service").MoreInfosType, payload: boolean) => void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
