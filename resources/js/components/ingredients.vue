<template>
    <div id="categories">
        <h2>Categories</h2>
        <div id="categories-list">
            <dataTable :get="'getCategories'" :add="'setCategory'" @category="setCategory" :item-id="category"
                       :model="modelCategories" :rows="categoryRows"></dataTable>
        </div>
    </div>
    <div id="ingredients">
        <h2>Ingredients</h2>
        <div id="ingredient-list" v-if="categoryRows[0].created">
            <dataTable :get="'getIngredients'" :add="'setIngredient'" :model="modelIngredients"
                       :rows="ingredientRows"></dataTable>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref, computed, watch} from 'vue';
    import {useStore} from 'vuex';
    import dataTable from '../components/dataTable.vue';

    export default defineComponent({
        components: {
            dataTable
        },
        setup() {
            const store = useStore();
            const ingredients = computed(() => store.state.ingredients.length ? store.state.ingredients : []);
            let modelIngredients = ref({name: '', price: 0, price_portion: 0, portions: 0, type: 'ingredient'});
            let ingredientRows = ref([modelIngredients.value]);
            // store.dispatch('getIngredients').then(() => {
            //     if (ingredients.length) {
            //         ingredientRows.value = ingredients.map((item) => {
            //             return {
            //                 id: typeof item.id !== 'undefined' ? item.id : null,
            //                 name: typeof item.name !== 'undefined' ? item.name : '',
            //                 price: typeof item.price !== 'undefined' ? item.price : 0,
            //                 price_portion: typeof item.price_portion !== 'undefined' ? item.price_portion : 0,
            //                 portions: typeof item.portions !== 'undefined' ? item.portions : 0,
            //                 type: 'ingredient',
            //                 created: true
            //
            //             }
            //         });
            //     }
            // });
            const addIngredient = () => {
                return 0;
            };

            const categories = computed(() => store.state.categories);
            const category = ref(null);

            let modelCategories = ref({name: '', type: 'category'});
            let categoryRows = ref([modelCategories.value]);

            watch(() => categories.value.length,
                (n,o) => {
                    store.dispatch('getCategories').then(() => {
                        if (categories.value.length) {
                            categoryRows.value = categories.value.map((item) => {
                                return {
                                    id: typeof item.id !== 'undefined' ? item.id : null,
                                    name: typeof item.name !== 'undefined' ? item.name : '',
                                    type: 'category',
                                    created: true
                                }
                            });
                        }
                    });
                })


            const addCategory = () => {
                return 0;
            };
            const setCategory = (val) => {
                category.value = val;
            };

            return {
                ingredients,
                addIngredient,
                categories,
                addCategory,
                ingredientRows,
                categoryRows,
                modelIngredients,
                modelCategories,
                setCategory,
                category
            }
        }
    })
</script>

<style scoped>

</style>
