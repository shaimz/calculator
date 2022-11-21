import { defineStore } from 'pinia'

export const useSharedStore = defineStore("shared", {
    state: () => ({
        mode: 'view'
    }),

    actions: {
        setMode(value){
            this.mode = value
        }
    }
})