// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null
  }),

  getters: {
    currentUser: (state) => state.user,
  },

  actions: {
    setUser(email) {
      this.user = email
    }
  }
})
