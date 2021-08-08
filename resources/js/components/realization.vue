<template>
    <div id="plans">
        <h2>Menu</h2>
        <div id="menu-list">
            <dataTable @loading="setLoading" :loading="loading" :key="menuRows" :get="'getMenus'" :add="'setMenu'"
                       :update="'updateMenu'"
                       @category="setMenu"
                       :item-id="menu"
                       :model="modelMenus" :rows="menuRows">
            </dataTable>
        </div>
    </div>

    <div id="ingredients">
        <h2>Menu Foods</h2>
        <div id="food-list" v-if="menuItemRows[0].created">
            <dataTable @modal="toggleModal" @loading="setLoading" :loading="loading" :key="menuItemRows" :get="'getMenuItems'"
                       :add="'setFood'" :update="'updateFood'"
                       :item-id="menu"
                       :food="food"
                       :model="modelMenuItems"
                       :rows="menuItemRows">
            </dataTable>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref, computed, watch} from 'vue';
    import {useStore} from "vuex";
    export default defineComponent({
       setup(){
           const store = useStore();
           const modal = ref(false);
           const loading = ref(false);

           let modelMenus = ref({name: '', type: 'menu', edited: false});
           let menuRows = ref([modelMenus.value]);
           const menus = computed(() => store.state.menus);
           const menu = ref(typeof menus.value[0] !== 'undefined' ? menus.value[0].id : null);

           const fetchMenus = async () => {
               loading.value = true;
               await store.dispatch('getGroups').then(() => {
                   loading.value = false;
                   if (menus.value.length) {
                       menuRows.value = menus.value.map((item) => {
                           return {
                               id: typeof item.id !== 'undefined' ? item.id : null,
                               name: typeof item.name !== 'undefined' ? item.name : '',
                               type: 'menu',
                               created: true,
                           }
                       });
                   }
               });
           };

           watch(() => menus.value.length,
               (n, o) => {
                   if (n !== o) {
                       fetchMenus().then(() => {
                           menu.value = menus.value.length ? (menus.value[0].hasOwnProperty('id') ? menus.value[0].id : null) : null;
                       });
                   }
               }, {immediate: true});

           const setMenu = (val) => {
               menu.value = val;
           };

           //Foods
           const foods = computed(() => store.state.foods);
           const categories = computed(() => store.state.categories);
           const ingredients = computed(() => store.state.ingredients);
           store.dispatch('getCategories', {});
           store.dispatch('getIngredients', {category_id: 'all'})
           const modalFoods = computed(() => ingredients.value.map((item) => {
               return {
                   children: item.ingredients.map((elem) => {
                       return {
                           key: elem.id,
                           name: elem.name,
                           category_id:elem.category_id
                       }
                   }),
                   disabled: false,
                   key: item.id,
                   name: item.name
               }
           }));

           let modelFoods = ref({name: '', portions: 0, price_portion: 0, type: 'food', edited: false});
           let foodRows = ref([{...modelFoods.value}]);
           const food = computed(() => typeof foods.value[0] !== 'undefined' ? foods.value[0].id : null);
           const foodName = computed(() => typeof foods.value[0] !== 'undefined' ? foods.value[0].name : null);

           const fetchFoods = async (menu_id) => {
               if (menu_id) {
                   loading.value = true;
                   await store.dispatch('getFoods', {menu_id: menu_id}).then(() => {
                       loading.value = false;
                       if (foods.value.length) {
                           foodRows.value = foods.value.map((item) => {
                               return {
                                   id: typeof item.id !== 'undefined' ? item.id : null,
                                   name: typeof item.name !== 'undefined' ? item.name : '',
                                   menu_id: typeof item.menu_id !== 'undefined' ? item.menu_id : null,
                                   portions: typeof item.portions !== 'undefined' ? item.portions : 0,
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

           watch(() => group.value,
               (n, o) => {
                   if (n !== o) {
                       fetchFoods(group.value)
                   }
               }, {immediate: true});

           return{
               menus,
               menu,
           }
       }
    })
</script>

<style scoped>

</style>
