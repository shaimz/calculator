import {createStore} from 'vuex'

// Create a new store instance.
export const store = createStore({
    state: {
        ingredients: []
    },
    actions: {},
    mutations: {
        GET_INGREDIENTS(state, payload = {}) {
            axios.get('/api/ingredients', payload).then((r) => state.ingredients = r.data)
        }
    }
})
