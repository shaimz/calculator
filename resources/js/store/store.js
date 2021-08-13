import {createStore} from 'vuex'

// Create a new store instance.
export const store = createStore({
    state: {
        ingredients: [],
        categories: [],
        groups: [],
        foods: [],
        food_ingredients: [],
        menus:[],
        menu_items:[]
    },
    actions: {
        async getIngredients(context, payload = 0){
            await axios.get('/api/ingredient/' + payload.category_id).then((r) => context.commit('GET_INGREDIENTS', r.data))
        },
        async setIngredient(context, payload){
            await axios.post('/api/ingredient', payload).then((r) => context.commit('ADD_INGREDIENT', r.data))
        },
        async updateIngredient(context, payload){
            await axios.put('/api/ingredient/'+payload.id, payload).then((r) => context.commit('EDIT_INGREDIENT', r.data))
        },
        async deleteIngredient(context, payload){
            await axios.post('/api/ingredient/'+payload.id, payload).then((r) => context.commit('EDIT_INGREDIENT', r.data))
        },
        async getCategories(context, payload){
            await axios.get('/api/category', payload).then((r) => context.commit('GET_CATEGORIES', r.data))
        },
        async setCategory(context, payload){
            await axios.post('/api/category', payload).then((r) => context.commit('ADD_CATEGORY', r.data))
        },
        async updateCategory(context, payload){
            await axios.put('/api/category/'+payload.id, payload).then((r) => context.commit('EDIT_CATEGORY', r.data))
        },
        async deleteCategory(context, payload){
            await axios.post('/api/category/'+payload.id, payload).then((r) => context.commit('EDIT_CATEGORY', r.data))
        },
        async getGroups(context, payload){
            await axios.get('/api/group', payload).then((r) => context.commit('GET_GROUPS', r.data))
        },
        async setGroup(context, payload){
            await axios.post('/api/group', payload).then((r) => context.commit('ADD_GROUP', r.data))
        },
        async updateGroup(context, payload){
            await axios.put('/api/group/'+payload.id, payload).then((r) => context.commit('EDIT_GROUP', r.data))
        },
        async getFoods(context, payload = 0){
            await axios.get('/api/food/' + payload.group_id).then((r) => context.commit('GET_FOODS', r.data))
        },
        async setFood(context, payload){
            await axios.post('/api/food', payload).then((r) => context.commit('ADD_FOOD', r.data))
        },
        async updateFood(context, payload){
            await axios.put('/api/food/'+payload.id, payload).then((r) => context.commit('EDIT_FOOD', r.data))
        },
        async getFoodIngredients(context, payload = 0){
            await axios.get('/api/food-ingredient/' + payload.food_id).then((r) => context.commit('GET_FOOD_INGREDIENTS', r.data))
        },
        async setFoodIngredient(context, payload){
            await axios.post('/api/food-ingredient', payload).then((r) => context.commit('ADD_FOOD_INGREDIENT', r.data))
        },
        async updateFoodIngredient(context, payload){
            await axios.put('/api/food-ingredient/'+payload.food_id, payload).then((r) => context.commit('EDIT_FOOD_INGREDIENT', r.data))
        },
        async deleteFoodIngredient(context, payload){
            await axios.post('/api/food-ingredient/'+payload.food_id, payload).then((r) => context.commit('EDIT_FOOD_INGREDIENT', r.data))
        },
        async getMenus(context, payload){
            await axios.get('/api/menu', payload).then((r) => context.commit('GET_MENUS', r.data))
        },
        async setMenu(context, payload){
            await axios.post('/api/menu', payload).then((r) => context.commit('ADD_MENU', r.data))
        },
        async updateMenu(context, payload){
            await axios.put('/api/menu/'+payload.id, payload).then((r) => context.commit('EDIT_MENU', r.data))
        },
        async getMenuItems(context, payload = 0){
            await axios.get('/api/menu-item/' + payload.menu_id).then((r) => context.commit('GET_MENU_ITEMS', r.data))
        },
        async setMenuItem(context, payload){
            await axios.post('/api/menu-item', payload).then((r) => context.commit('ADD_MENU_ITEM', r.data))
        },
        async updateMenuItem(context, payload){
            await axios.put('/api/menu-item/'+payload.menu_id, payload).then((r) => context.commit('EDIT_MENU_ITEM', r.data))
        },
        async deleteMenuItem(context, payload){
            await axios.post('/api/menu-item/'+payload.menu_id, payload).then((r) => context.commit('EDIT_MENU_ITEM', r.data))
        },
    },
    mutations: {
        GET_CATEGORIES(state, data) {
            state.categories = data;
        },
        ADD_CATEGORY(state, data) {
            let exists = state.categories.find((i) => i.name === data.name);

            if (!exists) {
                state.categories.push({...data});
            }
        },
        EDIT_CATEGORY(state, data) {
            state.categories.map((item) => {
                if (item.id === data.id) {
                    return data;
                }
            })
        },
        GET_INGREDIENTS(state, data) {
            state.ingredients = data;
        },
        ADD_INGREDIENT(state, data) {
            let exists = state.ingredients.find((i) => i.name === data.name);

            if (!exists) {
                let result = {...data};
                result.created = true;
                state.ingredients.push({...data});
            }
        },
        EDIT_INGREDIENT(state, data) {
            state.ingredients.map((item) => {
                if (item.id === data.id) {
                    return data;
                }
            })
        },
        GET_GROUPS(state, data) {
            state.groups = data;
        },
        ADD_GROUP(state, data) {
            let exists = state.groups.find((i) => i.name === data.name);

            if (!exists) {
                state.groups.push({...data});
            }
        },
        EDIT_GROUP(state, data) {
            state.groups.map((item) => {
                if (item.id === data.id) {
                    return data;
                }
            })
        },
        GET_FOODS(state, data) {
            state.foods = data;
        },
        ADD_FOOD(state, data) {
            let exists = state.foods.find((i) => i.name === data.name);

            if (!exists) {
                let result = {...data};
                result.created = true;
                state.foods.push({...data});
            }
        },
        EDIT_FOOD(state, data) {
            state.foods.map((item) => {
                if (item.id === data.id) {
                    return data;
                }
            })
        },
        GET_FOOD_INGREDIENTS(state, data) {
            state.food_ingredients = data;
        },
        ADD_FOOD_INGREDIENT(state, data) {
            console.log(data);
            let exists = state.food_ingredients.find((i) => i.food.name === data.food.name);

            if (!exists) {
                let result = {...data};
                result.created = true;
                state.food_ingredients.push({...data});
            }
        },
        EDIT_FOOD_INGREDIENT(state, data) {
            state.food_ingredients.map((item) => {
                if (item.id === data.id) {
                    return data;
                }
            })
        },
        GET_MENUS(state, data) {
            state.menus = data;
        },
        ADD_MENU(state, data) {
            let exists = state.menus.find((i) => i.name === data.name);

            if (!exists) {
                state.menus.push({...data});
            }
        },
        EDIT_MENU(state, data) {
            state.menus.map((item) => {
                if (item.id === data.id) {
                    return data;
                }
            })
        },
        GET_MENU_ITEMS(state, data) {
            state.menu_items = data;
        },
        ADD_MENU_ITEM(state, data) {
            console.log(data);
            let exists = state.menu_items.find((i) => i.name === data.food.name);

            if (!exists) {
                let result = {...data};
                result.created = true;
                state.menu_items.push({...data});
            }
        },
        EDIT_MENU_ITEM(state, data) {
            state.menu_items.map((item) => {
                if (item.id === data.id) {
                    return data;
                }
            })
        },
    }
})
