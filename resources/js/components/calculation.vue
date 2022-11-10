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
                       @fetchItems="fetchFoods()"
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
            const groups = computed(() => store.groups);
            const group = computed(() => store.activeGroup)

            const fetchGroups = async () => {
                loading.value = true
                groupRows.value = await store.fetchGroups()
                loading.value = false
                if (result.length && !store.activeGroup) store.setActiveGroup(groupRows.value[0].id)
            }
            fetchGroups()

            //Foods
            const foods = computed(() => store.foods);
            const categories = computed(() => iStore.categories);
            const ingredients = computed(() => iStore.ingredients);

            iStore.fetchCategories()
            iStore.fetchIngredients()

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

            let foodRows = ref([{ ...modelFoods }]);
            const food = computed(() => store.activeFood);
            const foodName = ref(null);

            const fetchFoods = async () => {
                loading.value = true;
                foodRows.value = await store.fetchFoods()
                foodName.value = result[0]?.name
                loading.value = false;
            };

            //Ingredients
            const food_ingredients = computed(() => store.food_ingredients);
            let food_ingredientRows = ref([{ ...modelFoodIngredients }]);

            const fetchFoodIngredients = async () => {
                loading.value = true;
                food_ingredientRows.value = await store.fetchFoodIngredients()
                loading.value = false;
            };

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
