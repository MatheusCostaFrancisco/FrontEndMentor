import { MoreInfosType } from '../infra/services/plans.service';
declare const _default: import("vue").DefineComponent<{}, {}, {
    model: {
        onlineService: boolean;
        largerStorage: boolean;
        customizableProfile: boolean;
    };
    form: {
        moreInfos: MoreInfosType;
    };
}, {
    abreviationFrequencySelected(): "mo" | "yr";
    planChosen: () => {
        plan: import("../store").PlanNamesType;
        frequency: "Monthly" | "Yearly";
        moreinfos: import("../store").MoreInfosChosen;
    };
}, {
    setUserInfo: (user: {
        name: string;
        email: string;
        phone: string;
    }) => void;
    setPlan: (plan: import("../store").PlanNamesType) => void;
    setFrequency: (freq: "Monthly" | "Yearly") => void;
    setMoreInfo: (moreInfoValue: keyof MoreInfosType, payload: boolean) => void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
