<template>
    <div id="plans">
        <h2>Menu</h2>
        <div id="menu-list">
            <dataTable @modal="toggleModal" @loading="setLoading" :loading="loading" :key="menuRows" :get="'getMenus'"
                       :add="'setMenu'"
                       :update="'updateMenu'"
                       @category="setMenu"
                       :item-id="menu"
                       :model="modelMenus" :rows="menuRows">
            </dataTable>
        </div>
    </div>

    <div id="ingredients">
        <h2>Menu Foods</h2>
        <div id="food-list" v-if="menuRows[0].created">
            <dataTable @modal="toggleModal" @loading="setLoading" :loading="loading" :key="menuItemRows"
                       :get="'getMenuItems'"
                       :add="'setMenuItem'" :update="'updateMenuItem'"
                       :item-id="menu"
                       :food="item"
                       :model="modelMenuItems"
                       :rows="menuItemRows">
            </dataTable>

            <modal @fetchItems="fetchItems(menu)" @modal="toggleModal" :itemId="menu" :type="'menu'"
                   :data="modalMenuItems" :menu="itemName"
                   :dialog="modal"></modal>
        </div>
    </div>
    <el-button class="export container text-center" size="large" type="primary" @click="exportFile">Export Ingredients
    </el-button>
    <el-button class="export container text-center" size="large" type="primary" @click="exportFile('calculation')">Export calculator
    </el-button>
</template>

<script>
    import {defineComponent, ref, computed, watch} from 'vue';
    import {useStore} from "vuex";
    import dataTable from '../components/dataTable.vue';
    import modal from '../components/modal.vue';

    export default defineComponent({
        components: {dataTable, modal},
        setup() {
            const store = useStore();
            const modal = ref(false);
            const loading = ref(false);

            let modelMenus = ref({name: '', type: 'menu', date: '', edited: false});
            let menuRows = ref([modelMenus.value]);
            const menus = computed(() => store.state.menus);
            const menu = ref(typeof menus.value[0] !== 'undefined' ? menus.value[0].id : null);

            const fetchMenus = async () => {
                loading.value = true;
                await store.dispatch('getMenus').then(() => {
                    loading.value = false;
                    if (menus.value.length) {
                        menuRows.value = menus.value.map((item) => {
                            return {
                                id: typeof item.id !== 'undefined' ? item.id : null,
                                name: typeof item.name !== 'undefined' ? item.name : '',
                                type: 'menu',
                                date: typeof item.date !== 'undefined' ? item.date : '',
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

            //Items
            const foods = computed(() => store.state.foods);
            const groups = computed(() => store.state.groups);
            const items = computed(() => store.state.menu_items);
            store.dispatch('getGroups', {});
            // const ingredients = computed(() => store.state.ingredients);
            // store.dispatch('getIngredients', {category_id: 'all'})
            const modalMenuItems = computed(() => groups.value.map((item) => {
                return {
                    children: item.foods.map((elem) => {
                        return {
                            key: elem.id,
                            name: elem.name,
                            menu_id: elem.menu_id,
                            group_id: elem.group_id,
                            price_portion: elem.price_portion,
                            portions: elem.portions
                        }
                    }),
                    disabled: false,
                    key: item.id,
                    name: item.name
                }
            }));

            let modelMenuItems = ref({food_id: 0, menu_id: 0, type: 'food'});
            let menuItemRows = ref([{...modelMenuItems.value}]);
            const item = computed(() => typeof foods.value[0] !== 'undefined' ? foods.value[0].id : null);
            const itemName = computed(() => typeof menus.value[0] !== 'undefined' ? menus.value[0].name : null);

            const fetchItems = async (menu_id) => {
                if (menu_id) {
                    loading.value = true;
                    await store.dispatch('getMenuItems', {menu_id: menu_id}).then(() => {
                        loading.value = false;
                        if (items.value.length) {
                            menuItemRows.value = items.value.map((item) => {
                                console.log(item)
                                return {
                                    id: typeof item.id !== 'undefined' ? item.id : null,
                                    name: typeof item.food.name !== 'undefined' ? item.food.name : '',
                                    menu_id: typeof menu_id !== 'undefined' ? menu_id : null,
                                    food_id: typeof item.food_id !== 'undefined' ? item.food_id : null,
                                    group_id: typeof item.food.group_id !== 'undefined' ? item.food.group_id : null,
                                    price_portion: typeof item.food.price_portion !== 'undefined' ? item.food.price_portion : 0,
                                    portions: typeof item.food.portions !== 'undefined' ? item.food.portions : 0,
                                    type: 'food',
                                }
                            })
                        } else {
                            menuItemRows.value = [{...modelMenuItems.value}];
                        }
                    });
                }
            };

            watch(() => menu.value,
                (n, o) => {
                    if (n !== o) {
                        fetchItems(menu.value)
                    }
                }, {immediate: true});

            const toggleModal = (v) => {
                modal.value = v
            };

            const exportFile = (type = 'ingredients') => {
                axios.post('/api/export', {type: type, menu_id: menu.value},{
                    responseType: 'arraybuffer',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/pdf'
                    }
                }).then((r) => {
                    downloadFile(r.data)
                })
            };

            const setLoading = (v) => {
                loading.value = v;
            };
            const downloadFile = (response) => {
                try {
                    var file = new File([response], filename, {type: "text/plain"});
                } catch (e) {
                    file = new Blob([response], {type: "text/plain"});
                }
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(file);
                link.download = 'test.pdf';
                link.click()
            };


            return {
                modelMenus,
                modalMenuItems,
                menuRows,
                menu,
                menus,
                groups,
                foods,
                modal,
                menuItemRows,
                modelMenuItems,
                item,
                itemName,
                setMenu,
                toggleModal,
                fetchItems,
                exportFile,
                setLoading
            }
        }
    })
</script>

<style scoped>

</style>
