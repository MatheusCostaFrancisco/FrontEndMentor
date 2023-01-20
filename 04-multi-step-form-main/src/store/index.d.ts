import { RemovableRef } from '@vueuse/core';
import { MoreInfosType } from '../infra/services/plans.service';
type UserType = {
    name: string;
    email: string;
    phone: string;
};
export type PlanNamesType = 'Arcade' | 'Advanced' | 'Pro';
type PlanChosenType = {
    plan: PlanNamesType;
    frequency: 'Monthly' | 'Yearly';
    moreinfos: MoreInfosChosen;
};
export type MoreInfosChosen = {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
};
type MainStateType = {
    user: RemovableRef<UserType>;
    planChosen: RemovableRef<PlanChosenType>;
};
export declare const useMainStore: import("pinia").StoreDefinition<"main", MainStateType, {}, {
    setUserInfo(user: UserType): void;
    setPlan(plan: PlanNamesType): void;
    setFrequency(freq: 'Monthly' | 'Yearly'): void;
    setMoreInfo(moreInfoValue: keyof MoreInfosType, payload: boolean): void;
}>;
export {};
