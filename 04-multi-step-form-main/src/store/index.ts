import { defineStore } from 'pinia'
import { RemovableRef, useStorage } from '@vueuse/core'
import { MoreInfosType } from '../infra/services/plans.service'

type UserType = {
  name: string
  email: string
  phone: string
}

export type PlanNamesType = 'Arcade' | 'Advanced' | 'Pro'

type PlanChosenType = {
  plan: PlanNamesType
  frequency: 'Monthly' | 'Yearly'
  moreinfos: MoreInfosChosen
}

export type MoreInfosChosen = {
  onlineService: boolean
  largerStorage: boolean
  customizableProfile: boolean
}

type MainStateType = {
  user: RemovableRef<UserType>
  planChosen: RemovableRef<PlanChosenType>
}

export const useMainStore = defineStore({
  id: 'main',
  state: () =>
    ({
      user: useStorage('user', {
        name: '',
        email: '',
        phone: '',
      }),
      planChosen: useStorage('planChosen', {
        plan: 'Arcade',
        frequency: 'Monthly',
        moreinfos: {
          onlineService: false,
          largerStorage: false,
          customizableProfile: false,
        },
      }),
    } as MainStateType),
  actions: {
    setPlan(plan: PlanNamesType) {
      this.planChosen.plan = plan
    },
    setFrequency(freq: 'Monthly' | 'Yearly') {
      this.planChosen.frequency = freq
    },
    setMoreInfo(moreInfoValue: keyof MoreInfosType, payload: boolean) {
      this.planChosen.moreinfos[moreInfoValue] = payload
    },
  },
})
