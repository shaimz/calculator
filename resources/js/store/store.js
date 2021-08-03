import {createStore} from 'vuex'

// Create a new store instance.
export const store = createStore({
    state: {
        ingredients: [],
        categories: []
    },
    actions: {
        async getIngredients(context, payload = 0){
            await axios.get('/api/ingredient/' + payload.category_id).then((r) => context.commit('GET_INGREDIENTS', r.data))
        },
        async setIngredient(context, payload){
            await axios.post('/api/ingredient', payload).then((r) => context.commit('ADD_INGREDIENT', r.data))
        },
        async getCategories(context, payload){
            await axios.get('/api/category', payload).then((r) => context.commit('GET_CATEGORIES', r.data))
        },
        async setCategory(context, payload){
            await axios.post('/api/category', payload).then((r) => context.commit('ADD_CATEGORY', r.data))
        },
    },
    mutations: {
        GET_INGREDIENTS(state, data) {
            state.ingredients = data;
        },
        GET_CATEGORIES(state, data) {
            state.categories = data;
        },
        ADD_CATEGORY(state, data){
            let exists = state.categories.find((i) => i.name === data.name);

            if (!exists) {
                state.categories.push({...data});
            }
        },
        ADD_INGREDIENT(state, data){
            let exists = state.ingredients.find((i) => i.name === data.name);

            if (!exists) {
                state.ingredients.push({...data});
            }
        }
    }
})
