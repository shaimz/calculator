<template>
    <div id="categories">
        <h2>Categories</h2>
        <div id="categories-list">
            <dataTable
                :loading="loading"
                :key="categoryRows"
                :get="'fetchCategories'"
                :add="'addCategory'"
                :update="'updateCategory'"
                :delete="'deleteCategory'"
                :item-id="category"
                :model="modelCategory"
                :rows="categoryRows"
                @category="setActiveCategory"
                @loading="setLoading"
            ></dataTable>
        </div>
    </div>
    <div id="ingredients">
        <h2>Ingredients</h2>
        <div id="ingredient-list" v-if="categoryRows[0].created">
            <dataTable
                :loading="loading"
                :key="ingredients"
                :get="'fetchIngredients'"
                :add="'addIngredient'"
                :update="'updateIngredient'"
                :delete="'deleteIngredient'"
                :item-id="category"
                :model="modelIngredient"
                :rows="ingredients"
                @loading="setLoading"
                @fetchItems="store.fetchIngredients()"
            ></dataTable>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref, computed, watch, onMounted} from 'vue';
    import { useIngredientStore } from '../store/ingredients'
    import dataTable from '../components/dataTable.vue';

    const modelCategory = {
        name: '',
        type: 'category',
        edited: false
    }

    const modelIngredient = {
        name: '',
        price: 0,
        purchase_price:0,
        measure: 'kg',
        portions: 0,
        type: 'ingredient',
        edited: false
    }
    export default defineComponent({
        components: {
            dataTable
        },
        setup() {
            const store = useIngredientStore()
            const setActiveCategory = (id) => store.setActiveCategory(id)

            const loading = ref(false);

            let ingredients = computed(() => store.ingredients)
            let categoryRows = ref([{ ...modelCategory }]);

            const category = computed(() => store.activeCategory);

            const fetchCategories = async () => {
                loading.value = true;
                let result = await store.fetchCategories()
                categoryRows.value = result.map((category) => {
                    return {
                        id: category.id,
                        name: category.name || '',
                        type: 'category',
                        created: true
                    }
                })
                if (result.length && !store.activeCategory) setActiveCategory(result[0].id)
                loading.value = false
            }

            fetchCategories()

            const setLoading = (v) => {
                loading.value = v;
            }

            return {
                ingredients,
                categoryRows,
                modelCategory,
                modelIngredient,
                category,
                setActiveCategory,
                loading,
                setLoading,
                store
            }
        }
    })
</script>

<style scoped>

</style>
