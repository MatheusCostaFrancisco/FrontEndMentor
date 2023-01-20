import { MoreInfosType, PlanType } from '../infra/services/plans.service';
declare const _default: import("vue").DefineComponent<{}, {}, {
    form: {
        plan: PlanType;
    };
}, {
    validateForm(): boolean;
    abreviationFrequencySelected(): "mo" | "yr";
    pricePerPlan(): string;
    totalPrice(): number;
    planChosen: () => {
        plan: import("../store").PlanNamesType;
        frequency: "Monthly" | "Yearly";
        moreinfos: import("../store").MoreInfosChosen;
    };
}, {
    priceByMoreInfo(more: keyof MoreInfosType): string;
    handleConfirm(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
