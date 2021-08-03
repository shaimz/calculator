<template>
    <div id="categories">
        <h2>Categories</h2>
        <div id="categories-list">
            <dataTable :key="categoryRows" :get="'getCategories'" :add="'setCategory'" @category="setCategory"
                       :item-id="category"
                       :model="modelCategories" :rows="categoryRows"></dataTable>
        </div>
    </div>
    <div id="ingredients">
        <h2>Ingredients</h2>
        <div id="ingredient-list" v-if="categoryRows[0].created">
                <dataTable :key="ingredientRows" :get="'getIngredients'" :add="'setIngredient'" :item-id="category"
                       :model="modelIngredients"
                       :rows="ingredientRows"></dataTable>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref, computed, watch, onMounted} from 'vue';
    import {useStore} from 'vuex';
    import dataTable from '../components/dataTable.vue';

    export default defineComponent({
        components: {
            dataTable
        },
        setup() {
            const store = useStore();

            let modelCategories = ref({name: '', type: 'category'});
            let categoryRows = ref([modelCategories.value]);
            const categories = computed(() => store.state.categories);
            const category = ref(typeof categories.value[0] !== 'undefined' ? categories.value.id : null);

            const fetchCategories = async () => {
                await store.dispatch('getCategories').then(() => {
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
            };

            onMounted(() => {

            });

            watch(() => categories.value.length,
                (n, o) => {
                    fetchCategories().then(() => {
                        category.value = categories.value[0].hasOwnProperty('id') ? categories.value[0].id : null;
                    });
                }, {immediate: true});

            const setCategory = (val) => {
                category.value = val;
                fetchIngredients(val)
            };

            const ingredients = computed(() => store.state.ingredients);
            let modelIngredients = ref({name: '', price: 0, price_portion: 0, portions: 0, type: 'ingredient'});
            let ingredientRows = ref([modelIngredients.value]);

            const fetchIngredients = (category_id) => {
                store.dispatch('getIngredients', {category_id: category_id}).then(() => {
                    if (ingredients.value.length) {
                        ingredientRows.value = ingredients.value.map((item) => {
                            return {
                                id: typeof item.id !== 'undefined' ? item.id : null,
                                name: typeof item.name !== 'undefined' ? item.name : '',
                                category_id: typeof item.category_id !== 'undefined' ? item.category_id : null,
                                price: typeof item.price !== 'undefined' ? item.price : 0,
                                measure: typeof item.measure !== 'undefined' ? item.measure : 'Kg',
                                type: 'ingredient',
                                created: true

                            }
                        })
                    }else{
                        ingredientRows.value = [modelIngredients.value];
                    }
                });
            }

            watch(() => category.value,
                (n, o) => {
                    if (n !== o) {
                        fetchIngredients(category.value)
                    }
                }, {immediate: true});

            watch(() => ingredients.value.length,
                (n, o) => {
                    if (n !== o) {
                        fetchIngredients(category.value)
                    }
                }, {deep: true});

            return {
                ingredients,
                categories,
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
