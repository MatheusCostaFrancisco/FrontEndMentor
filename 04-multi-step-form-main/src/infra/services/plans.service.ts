export type PlanType = {
  prices: PricesType
  moreInfos: MoreInfosType
}

export type PricesType = {
  arcade: string
  advanced: string
  pro: string
}

export type MoreInfosType = {
  onlineService: string
  largerStorage: string
  customizableProfile: string
}

export type ResponsePlans = {
  monthly: PlanType
  yearly: PlanType
}

export const plansService = {
  getPlans: async () => {
    return {
      monthly: {
        prices: {
          arcade: '9',
          advanced: '12',
          pro: '15',
        },
        moreInfos: {
          onlineService: '1',
          largerStorage: '2',
          customizableProfile: '2',
        },
      },
      yearly: {
        prices: {
          arcade: '90',
          advanced: '120',
          pro: '150',
        },
        moreInfos: {
          onlineService: '10',
          largerStorage: '20',
          customizableProfile: '20',
        },
      },
    } as ResponsePlans
  },
}
