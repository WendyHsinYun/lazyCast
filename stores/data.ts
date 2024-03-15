import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    weatherList: [],
  }),

  persist: {
    storage: persistedState.sessionStorage,
  },

  getters: {},
  actions: {},

  },
)
