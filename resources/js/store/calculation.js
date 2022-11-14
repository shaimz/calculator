import { defineStore } from 'pinia'


export const useCalculationStore = defineStore("calculation", {
  state: () => ({
    activeGroup: null,
    activeFood: null,
    groups: [],
    foods: [],
    food_ingredients: [],
  }),
  actions: {
    async fetchGroups(){
      let result = await axios.get('/api/group').then((r) => r.data)
      console.log(result)
      if (result.length && !this.activeGroup) this.setActiveGroup(result[0].id)
      return result.map((item) => {
        return {
            ...item,
            type: 'group',
            created: true,
        }
      });
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
    async setActiveGroup(id) {
      if (id == this.activeGroup) return
      this.activeGroup = id
      await this.fetchFoods()
    },
    async fetchFoods(){
      let result = await axios.get(`/api/food/${this.activeGroup}`).then((r) => r.data)
      if (result.length && !this.activeFood) this.setActiveFood(result[0].id)
      await this.fetchFoodIngredients()
      return result.map((item) => {
        return {
            ...item,
            type: 'food',
            created: true,
        }
      })
    },
    async setActiveFood(id){
      if (this.activeFood == id) return
      this.activeFood = id
      await this.fetchFoodIngredients()
      return
      await axios.post('/api/food', payload).then((r) => context.commit('ADD_FOOD', r.data))
    },
    async updateFood(context, payload){
        await axios.put('/api/food/'+payload.id, payload).then((r) => context.commit('EDIT_FOOD', r.data))
    },
    async fetchFoodIngredients(){
        let result = await axios.get(`/api/food-ingredient/${this.activeFood}`).then((r) => r.data)
        return result.map((item) => {
          if(!item.ingredient.name) return {}
              return {
                 ...item,
                  type: 'food_ingredient',
                  created: true,
              }
      })
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