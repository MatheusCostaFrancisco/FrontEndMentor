export type PlanType = {
    prices: PricesType;
    moreInfos: MoreInfosType;
};
export type PricesType = {
    arcade: string;
    advanced: string;
    pro: string;
};
export type MoreInfosType = {
    onlineService: string;
    largerStorage: string;
    customizableProfile: string;
};
export type ResponsePlans = {
    monthly: PlanType;
    yearly: PlanType;
};
export declare const plansService: {
    getPlans: () => Promise<ResponsePlans>;
};
