<template>
    <div id="categories">
        <h2>Categories</h2>
        <div id="categories-list">
            <Suspense>
                <Grid  
                    ref="grid"
                    v-bind="$attrs"
                    :columns="columns"
                    :rows="rows"
                    :actions="actions"
                    :rowsBackup="rowsBackup"
                    :rowsDelete="rowsDelete"
                    :rowActions="rowActions"
                    :mode="mode"
                    :useDrag="useDrag"
                    :locked="locked"
                    :searchFilter="searchFilter"
                    :customDecorateRows="customDecorateRows"
                    :deleteConfirmation="deleteConfirmation"
                    @set-mode="setMode($event)"
                    @sort-grid-by="onSortBy"
                    @save-grid="onCommandSave"
                    @row-delete="onRowDelete"
                    @row-send="onRowSend"
                    @row-history="onRowHistory"
                    @row-show="onRowShow"
                    @row-swap="onRowSwap"
                    @row-edit="onRowEdit"
                    @row-back="onRowBack"
                    @rows-order="onRowsOrder"
                >

                </Grid>
                <dataTable
                    :loading="loading"
                    :key="categoryRows"
                    :getAction="'fetchCategories'"
                    :addAction="'addCategory'"
                    :updateAction="'updateCategory'"
                    :deleteAction="'deleteCategory'"
                    :item-id="category"
                    :model="modelCategory"
                    :data="categoryRows"
                    @category="setActiveCategory"
                    @loading="setLoading"
                ></dataTable>
            </Suspense>
        </div>
    </div>
    <div id="ingredients">
        <h2>Ingredients</h2>
        <div id="ingredient-list" v-if="categoryRows[0].created">
            <dataTable
                :loading="loading"
                :key="ingredients"
                :getAction="'fetchIngredients'"
                :addAction="'addIngredient'"
                :updateAction="'updateIngredient'"
                :deleteAction="'deleteIngredient'"
                :item-id="category"
                :model="modelIngredient"
                :data="ingredients"
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
