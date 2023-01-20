import { PlanNamesType } from '../store';
import { PlanType, ResponsePlans } from '../infra/services/plans.service';
declare const _default: import("vue").DefineComponent<{}, {}, {
    planSeleced: string;
    frequencySelected: string;
    frequenceBoolean: boolean;
    planInfos: ResponsePlans;
    planSelectedInfos: PlanType;
}, {
    abreviationFrequencySelectes(): "mo" | "yr";
    planChosen: () => {
        plan: PlanNamesType;
        frequency: "Monthly" | "Yearly";
        moreinfos: import("../store").MoreInfosChosen;
    };
}, {
    handleChangePlan(plan: PlanNamesType): void;
    setUserInfo: (user: {
        name: string;
        email: string;
        phone: string;
    }) => void;
    setPlan: (plan: PlanNamesType) => void;
    setFrequency: (freq: "Monthly" | "Yearly") => void;
    setMoreInfo: (moreInfoValue: keyof import("../infra/services/plans.service").MoreInfosType, payload: boolean) => void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
