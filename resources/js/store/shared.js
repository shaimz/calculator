import { defineStore } from 'pinia'

export const useSharedStore = defineStore("shared", {
    state: () => ({
        mode: 'view',
        loading: false
    }),

    actions: {
        setMode(value){
            this.mode = value
        },
        setLoading(value) {
            this.loading = value
        }
    }
})