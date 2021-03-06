<template>
    <div id="categories">
        <h2>Groups</h2>
        <div id="groups-list">
            <dataTable @loading="setLoading"
                       @fetchItems="fetchGroups"
                       :loading="loading"
                       :key="groupRows"
                       :get="'getGroups'"
                       :add="'setGroup'"
                       :update="'updateGroup'"
                       @category="setGroup"
                       :item-id="group"
                       :model="modelGroups" :rows="groupRows">
            </dataTable>
        </div>
    </div>
    <div id="ingredients">
        <h2>Food and Ingredients</h2>
        <div id="food-list" v-if="groupRows[0].created">
            <dataTable @modal="toggleModal"
                       @loading="setLoading"
                       @fetchItems="fetchFoods(group)"
                       :loading="loading"
                       :key="foodRows"
                       :get="'getFoods'"
                       @category="setFood"
                       :add="'setFood'"
                       :update="'updateFood'"
                       :item-id="group"
                       :food="food"
                       :model="modelFoods"
                       :rows="foodRows">
            </dataTable>

            <modal @fetchItems="fetchFoodIngredients(food)" :key="food" @modal="toggleModal" :itemId="food"
                   :type="'group'" :data="modalFoods" :group="group"
                   :dialog="modal"></modal>

            <dataTable id="food-ingredient-list"
                       v-if="food_ingredientRows[0]"
                       @loading="setLoading"
                       @fetchItems="fetchFoodIngredients(food)"
                       :loading="loading"
                       :key="food_ingredientRows"
                       :get="'getFoodIngredients'"
                       :add="'setFoodIngredient'"
                       :update="'updateFoodIngredient'"
                       :delete="'deleteFoodIngredient'"
                       :item-id="food"
                       :model="modelFoodIngredients"
                       :rows="food_ingredientRows"
                       :no-row="false">
            </dataTable>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref, computed, watch, onMounted} from 'vue';
    import {useStore} from 'vuex';
    import dataTable from '../components/dataTable.vue';
    import modal from '../components/modal.vue';
    import ingredients from "./ingredients";

    export default defineComponent({
        components: {
            dataTable,
            modal
        },
        setup() {
            const store = useStore();
            const modal = ref(false);
            const loading = ref(false);

            //Groups
            let modelGroups = ref({name: '', type: 'group', edited: false});
            let groupRows = ref([{...modelGroups.value}]);
            const groups = computed(() => store.state.groups);

            const group = ref(null);

            const fetchGroups = async () => {
                loading.value = true;
                await store.dispatch('getGroups').then(() => {
                    loading.value = false;
                    if (groups.value.length) {
                        groupRows.value = groups.value.map((item) => {
                            return {
                                id: typeof item.id !== 'undefined' ? item.id : null,
                                name: typeof item.name !== 'undefined' ? item.name : '',
                                type: 'group',
                                created: true,
                            }
                        });
                    }
                });
            };

            watch(() => groups.value.length,
                (n, o) => {
                    if (n !== o) {
                        fetchGroups().then(() => {
                            group.value = groups.value.length ? (groups.value[0].hasOwnProperty('id') ? groups.value[0].id : null) : null;
                        });
                    }
                }, {immediate: true});

            const setGroup = (val) => {
                group.value = val;
            };

            //Foods
            const foods = computed(() => store.state.foods);
            const categories = computed(() => store.state.categories);
            const ingredients = computed(() => store.state.ingredients);

            store.dispatch('getCategories', {});
            store.dispatch('getIngredients', {category_id: 'all'});

            const modalFoods = computed(() => ingredients.value.map((item) => {
                return {
                    children: item.ingredients.map((elem) => {
                        return {
                            key: elem.id,
                            name: elem.name,
                            category_id: elem.category_id
                        }
                    }),
                    disabled: false,
                    key: item.id,
                    name: item.name
                }
            }));

            let modelFoods = ref({name: '', portions: 0, price_portion: 0, type: 'food', edited: false});
            let foodRows = ref([{...modelFoods.value}]);
            const food = ref(null);
            const foodName = ref(null);

            const fetchFoods = async (group_id) => {
                if (group_id) {
                    loading.value = true;
                    await store.dispatch('getFoods', {group_id: group_id}).then(() => {
                        loading.value = false;
                        if (foods.value.length) {
                            foodRows.value = foods.value.map((item) => {
                                return {
                                    id: typeof item.id !== 'undefined' ? item.id : null,
                                    name: typeof item.name !== 'undefined' ? item.name : '',
                                    group_id: typeof item.group_id !== 'undefined' ? item.group_id : null,
                                    portions: typeof item.portions !== 'undefined' ? item.portions : 1,
                                    price_portion: typeof item.price_portion !== 'undefined' ? item.price_portion : 0,
                                    type: 'food',
                                    created: true,
                                }
                            })
                        } else {
                            foodRows.value = [{...modelFoods.value}];
                        }
                    });
                }
            };

            watch(() => foods, (n, o) => {
                if (n !== o) {
                    foodName.value = typeof foods.value[0] !== 'undefined' ? foods.value[0].name : null
                }
            }, {immediate: true, deep: true});


            //Ingredients
            const food_ingredients = computed(() => store.state.food_ingredients);
            let modelFoodIngredients = ref({
                name: '',
                portions: 0,
                price_portion: 0,
                type: 'food_ingredient',
                edited: false
            });
            let food_ingredientRows = ref([{...modelFoodIngredients.value}]);

            const setFood = (v) => {
                food.value = v;
            };
            const fetchFoodIngredients = (food_id) => {
                if (food_id) {
                    loading.value = true;
                    store.dispatch('getFoodIngredients', {food_id: food_id}).then(() => {
                        loading.value = false;
                        console.log(food_ingredients)
                        if (food_ingredients.value.length) {
                            food_ingredientRows.value = food_ingredients.value.map((item) => {
                                if(item.ingredient.name){
                                    return {
                                        id: typeof item.id !== 'undefined' ? item.id : null,
                                        name: item.ingredient ? item.ingredient.name : '',
                                        food_id: typeof item.food_id !== 'undefined' ? item.food_id : null,
                                        ingredient_id: typeof item.ingredient_id !== 'undefined' ? item.ingredient_id : null,
                                        quantity: typeof item.quantity !== 'undefined' ? item.quantity : 0,
                                        measure: item.ingredient ? item.ingredient.measure : 0,
                                        type: 'food_ingredient',
                                        created: true,
                                    }
                                }else{
                                    return false
                                }
                            }).filter((it) => it)
                        } else {
                            food_ingredientRows.value = [{...modelFoodIngredients.value}];
                        }
                    });
                } else {
                    food_ingredientRows.value = [{...modelFoodIngredients.value}];
                }
            };

            watch(group,
                (n, o) => {
                    if(n !== o){
                        fetchFoods(n).then(() => {
                            food.value = foods.value.length ? (typeof foods.value[0] !== 'undefined' ? foods.value[0].id : null) : null;
                            foodName.value = typeof foods.value[0] !== 'undefined' ? foods.value[0].name : null
                            fetchFoodIngredients(food.value)
                        });
                    }
                }, {immediate: true});

            watch(food, (n, o) => {
                if (n !== o) {
                    fetchFoodIngredients(n)
                }
            });
            //
            // watch(() => food_ingredients, (n,o) => {
            //     if(n !== o){
            //         fetchFoodIngredients(food.value);
            //     }
            // },{deep:true});

            // watch(() => foods.value.length,
            //     (n, o) => {
            //         if (n !== o) {
            //             foodRows
            //         }
            //     }, {deep: true});

            const setLoading = (v) => {
                loading.value = v;
            };

            const toggleModal = (v) => {
                modal.value = v
            };
            return {
                foods,
                groups,
                foodRows,
                groupRows,
                modelFoods,
                modelGroups,
                ingredients,
                setGroup,
                group,
                food,
                foodName,
                modelFoodIngredients,
                food_ingredientRows,
                food_ingredients,
                categories,
                loading,
                setLoading,
                modal,
                modalFoods,
                toggleModal,
                setFood,
                fetchFoodIngredients,
                fetchFoods,
                fetchGroups
            }
        }
    })
</script>

<style scoped>

</style>
