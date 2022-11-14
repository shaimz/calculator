<template>
    <div id="categories">
        <h2>Groups</h2>
        <div id="groups-list">
            <dataTable @loading="setLoading"
                       @fetchItems="fetchGroups"
                       :loading="loading"
                       :key="groupRows.length"
                       :get="'getGroups'"
                       :add="'addGroup'"
                       :update="'updateGroup'"
                       @category="store.setActiveGroup"
                       :item-id="group"
                       :model="modelGroups"
                       :rows="groupRows">
            </dataTable>
        </div>
    </div>
    <div id="ingredients">
        <h2>Food and Ingredients</h2>
        <div id="food-list" v-if="groupRows[0].created">
            <dataTable @modal="toggleModal"
                       @loading="setLoading"
                       @fetchItems="fetchFoods()"
                       :loading="loading"
                       :key="foodRows.length"
                       :get="'getFoods'"
                       @category="store.setActiveFood"
                       :add="'addFood'"
                       :update="'updateFood'"
                       :item-id="group"
                       :food="food"
                       :model="modelFoods"
                       :rows="foodRows">
            </dataTable>

            <modal @fetchItems="fetchFoodIngredients(food)" :key="food" @modal="toggleModal" :itemId="food"
                   :type="'group'" :data="modalFoods" :group="group"
                   :dialog="modal"></modal>

            <div id="food-ingredient-list">
                <dataTable
                        v-if="food_ingredientRows[0]"
                        @loading="setLoading"
                        @fetchItems="fetchFoodIngredients(food)"
                        :loading="loading"
                        :key="food_ingredientRows.length"
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
    </div>
</template>

<script>
    import {defineComponent, ref, computed, watch, onMounted} from 'vue';
    import { useCalculationStore } from '../store/calculation'
    import { useIngredientStore } from '../store/ingredients'
    import dataTable from '../components/dataTable.vue';
    import modal from '../components/modal.vue';

    const modelGroups = {
        name: '',
        type: 'group',
        edited: false
    }

    const modelFoods = {
        name: '',
        portions: 0,
        price_portion: 0,
        type: 'food',
        edited: false
    }

    const modelFoodIngredients = {
        name: '',
        portions: 0,
        price_portion: 0,
        type: 'food_ingredient',
        edited: false
    }

    export default defineComponent({
        components: {
            dataTable,
            modal
        },
        setup() {
            const store = useCalculationStore()
            const iStore = useIngredientStore()
            const modal = ref(false)
            const loading = ref(false)

            //Groups
            let groupRows = ref([{ ...modelGroups }]);
            const group = computed(() => store.activeGroup)

            let foodRows = ref([{ ...modelFoods }]);
            const food = computed(() => store.activeFood);
            const foodName = ref(null);

            //Foods
            const categories = computed(() => iStore.categories);
            const ingredients = computed(() => iStore.ingredients);

            //Ingredients
            let food_ingredientRows = ref([{ ...modelFoodIngredients }]);

            const fetchGroups = async () => {
                loading.value = true
                groupRows.value = await store.fetchGroups()
                loading.value = false
            }

            const fetchFoods = async () => {
                loading.value = true;
                foodRows.value = await store.fetchFoods()
                foodName.value = foodRows.value[0].name
                loading.value = false;
            };

            const fetchFoodIngredients = async () => {
                loading.value = true;
                food_ingredientRows.value = await store.fetchFoodIngredients()
                loading.value = false;
            };

            (async () => {
                await fetchGroups()
                await iStore.fetchCategories()
                await iStore.fetchIngredients()
                await fetchFoods()
                await fetchFoodIngredients()
            })()

            const modalFoods = computed(() => {
                let result = foodRows.value || []
                return result.map((item) => {
                    return {
                        children: ingredients.value.map((elem) => {
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
                })
            });

            const setLoading = (v) => {
                loading.value = v;
            };

            const toggleModal = (v) => {
                modal.value = v
            };
            return {
                foodRows,
                groupRows,
                modelFoods,
                modelGroups,
                ingredients,
                store,
                group,
                food,
                foodName,
                modelFoodIngredients,
                food_ingredientRows,
                categories,
                loading,
                setLoading,
                modal,
                modalFoods,
                toggleModal,
                fetchFoodIngredients,
                fetchFoods,
                fetchGroups
            }
        }
    })
</script>

<style scoped>

</style>
