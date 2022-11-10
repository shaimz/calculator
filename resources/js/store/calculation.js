import { defineStore } from 'pinia'


export const useCalculationStore = defineStore("calculation", {
  state: () => ({
    activeGroup: null,
    groups: [],
    foods: [],
    food_ingredients: [],
  }),
  actions: {
    async fetchGroups(){
      return await axios.get('/api/group').then((r) => r.data)
    },
    async addGroup(data){
        await axios.post('/api/group', data).then((r) => {
          let group = r.data
          let exists = this.groups.find((item) => item.name === group.name);

          if (!exists) {
              this.groups.push({...group});
          }
        })
    },
    async updateGroup(context, payload){
        await axios.put('/api/group/'+payload.id, payload).then((r) => context.commit('EDIT_GROUP', r.data))
    },
    setActiveGroup(id) {
      if (id == this.activeGroup) return
      this.activeGroup = id
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
  }
})