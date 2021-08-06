<template>
    <div id="categories">
        <h2>Categories</h2>
        <div id="categories-list">
            <dataTable @loading="setLoading" :loading="loading" :key="categoryRows" :get="'getCategories'" :add="'setCategory'" :update="'updateCategory'"
                       @category="setCategory"
                       :item-id="category"
                       :model="modelCategories" :rows="categoryRows"></dataTable>
        </div>
    </div>
    <div id="ingredients">
        <h2>Ingredients</h2>
        <div id="ingredient-list" v-if="categoryRows[0].created">
            <dataTable @loading="setLoading" :loading="loading" :key="ingredientRows" :get="'getIngredients'" :add="'setIngredient'" :update="'updateIngredient'"
                       :item-id="category"
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

            const loading = ref(false);

            let modelCategories = ref({name: '', type: 'category', edited: false});
            let categoryRows = ref([modelCategories.value]);
            const categories = computed(() => store.state.categories);
            const category = ref(typeof categories.value[0] !== 'undefined' ? categories.value.id : null);

            const fetchCategories = async () => {
                loading.value = true;
                await store.dispatch('getCategories').then(() => {
                    loading.value = false;
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
                    if (n !== o) {
                        fetchCategories().then(() => {
                            category.value = categories.value.length ? (categories.value[0].hasOwnProperty('id') ? categories.value[0].id : null) : null;
                        });
                    }
                }, {immediate: true});

            const setCategory = (val) => {
                category.value = val;
            };

            const ingredients = computed(() => store.state.ingredients);
            let modelIngredients = ref({name: '', price: 0, price_portion: 0, portions: 0, type: 'ingredient', edited: false});
            let ingredientRows = ref([modelIngredients.value]);

            const fetchIngredients = (category_id) => {
                if(category_id){
                    loading.value = true;
                    store.dispatch('getIngredients', {category_id: category_id}).then(() => {
                        loading.value = false;
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
                        } else {
                            ingredientRows.value = [modelIngredients.value];
                        }
                    });
                }
            };

            watch(() => category.value,
                (n, o) => {
                    if (n !== o) {
                        console.log({category:[n,o]});
                        fetchIngredients(category.value)
                    }
                }, {immediate: true});

            // watch(() => ingredients.value.length,
            //     (n, o) => {
            //         if (n !== o) {
            //             fetchIngredients(category.value)
            //         }
            //     }, {deep: true});

            const setLoading = (v) => {
                loading.value = v;
            }

            return {
                ingredients,
                categories,
                ingredientRows,
                categoryRows,
                modelIngredients,
                modelCategories,
                setCategory,
                category,
                loading,
                setLoading
            }
        }
    })
</script>

<style scoped>

</style>
