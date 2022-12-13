<template>
    <div id="plans">
        <h2>Menu</h2>
        <div id="menu-list">
            <dataTable
                    @modal="toggleModal"
                    :loading="loading"
                    :key="menuRows"
                    @addAction="addMenu"
                    @updateAction="updateMenu"
                    @category="setMenu"
                    @categories="setMenus"
                    @selecting="select"
                    @fetchItems="fetchMenus"
                    :item-id="menu"
                    :model="modelMenus"
                    :rows="menuRows">
            </dataTable>
        </div>
    </div>

    <div id="ingredients">
        <h2>Menu Foods</h2>
        <div id="food-list" v-if="menuRows[0].created" >
            <dataTable @modal="toggleModal" :loading="loading" :key="menuItemRows"
                       @addAction="'setMenuItem'"
                       @updateAction="'updateMenuItem'"
                       :item-id="menu"
                       :food="item"
                       :model="modelMenuItems"
                       :rows="menuItemRows"
                       :no-row="false">
            </dataTable>

            <modal @fetchItems="fetchItems(menu)" @modal="toggleModal" :itemId="menu" :type="'menu'"
                   :data="modalMenuItems" :menu="itemName"
                   :dialog="modal"></modal>
        </div>
    </div>
    <el-button class="export container text-center" size="large" type="primary" @click="exportFile('ingredients')">Export Ingredients
    </el-button>
    <el-button class="export container text-center" size="large" type="primary" @click="exportFile('calculation')">Export calculator
    </el-button>
    <el-button class="export container text-center" size="large" type="primary" @click="exportFile('menu')">Export menu
    </el-button>
</template>

<script>
    import {defineComponent, ref, computed, watch} from 'vue';
    import { useMenuStore } from '../store/menu'
    import { useCalculationStore } from '../store/calculation'
    import { storeToRefs } from 'pinia'
    import dataTable from '../components/dataTable.vue';
    import modal from '../components/modal.vue';

    const modelMenuItems = {
        food_id: 0,
        menu_id: 0,
        type: 'food'
    }
    export default defineComponent({
        components: {dataTable, modal},
        setup() {
            const menuStore = useMenuStore()
            const calculationStore = useCalculationStore()
            const modal = ref(false);
            const loading = ref(false);

            let modelMenus = ref({name: '', type: 'menu', date: '', edited: false});
            let menuRows = ref([modelMenus.value]);
            const menus = computed(() => menuStore.menus);
            const menu = storeToRefs(menuStore, 'menu')
            const menuList = ref([]);

            const fetchMenus = async () => {
                loading.value = true;
                await menuStore.fetchMenus()
                menuRows.value = menus.value.map((menu) => {
                    return {
                        id: menu.id || null,
                        name: menu.name || '',
                        type: 'menu',
                        date: menu.date || '',
                        created: true,
                    }
                });
                loading.value = false;
            };


            (async () => {
                await fetchMenus()
                await calculationStore.fetchGroups()
            })()

            const setMenu = (val) => {
                menu.value = val;
            };
            const setMenus = (val) => {
                if(menuList.value.length) {
                    if(menuList.value.find(i => i === val)) menuList.value = menuList.value.filter(i => i !== val);
                    else menuList.value.push(val);
                }else{
                   menuList.value.push(val);
                }
            }

            //Items
            const foods = computed(() => menuStore.foods);
            const groups = computed(() => calculationStore.groups);
            const items = computed(() => menuStore.menu_items);

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

            let menuItemRows = ref([])
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
                                    portions: typeof item.portions !== 'undefined' ? item.portions : 1,
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

            const exportFile = (type) => {
                let data = {type: type, menu_id: menu.value};
                if(selecting.value) data = {type: type, menu_id: menuList.value};
                axios.post('/api/export', data,{
                    responseType: 'arraybuffer',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/pdf'
                    }
                }).then((r) => {
                     // downloadFile(r.data,type)
                })
            };

            const setLoading = (v) => {
                loading.value = v;
            };
            const downloadFile = (response,type) => {
                try {
                    var file = new File([response], filename, {type: "text/plain"});
                } catch (e) {
                    file = new Blob([response], {type: "text/plain"});
                }
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(file);
                link.download = type + '.pdf';
                link.click()
            };

            const selecting = ref(false);
            const select = (v) => {
                selecting.value = v;
            }

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
                menuList,
                item,
                itemName,
                selecting,
                setMenu,
                toggleModal,
                fetchItems,
                exportFile,
                setLoading,
                setMenus,
                select
            }
        }
    })
</script>

<style scoped>

</style>
