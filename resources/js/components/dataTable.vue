<template>
    <el-button type="success" v-if="noButton" @click="addRow()" round>Adding row</el-button>
    <el-button @click="select">{{selecting ? 'Cancel' : 'Select'}}</el-button>
    <el-table :id="props.add + '-table'" :class="[noButton ? 'mt-4' : '']" :key="rows" :data="rows" :row-class-name="checkActive" :lazy="true" v-loading="load" border height="350"
              style="width:100%;margin-top: 15px;" current-row-key="40" @row-click="handleChange">
        <el-table-column labell="" width="50px" v-if="checkProperty('type')">
            <template #default="scope" v-if="['category','group','food','menu'].includes(rows[0].type)">
                <span
                    v-if="scope.row.hasOwnProperty('id') && checkActive(scope)"
                    class="rounded-circle bg-success active m-auto"></span>
            </template>
        </el-table-column>
        <el-table-column label="Name" width="250" v-if="checkProperty('name')">
            <template #default="scope">
                <span class="text-danger" v-if="error[scope.$index]">{{error[scope.$index]}}</span>
                <el-input v-model="scope.row.name" ref="focus" type="text" @click="stopPropagation($event)"
                          v-if="checkProperty('edited',scope.$index)"></el-input>
                <span v-else>{{scope.row.name}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Quantity" width="100" v-if="checkProperty('quantity')">
            <template #default="scope">
                <span class="text-danger" v-if="error[scope.$index]">{{error[scope.$index]}}</span>
                <el-input v-model="scope.row.quantity" type="number" @click="stopPropagation($event)"
                          v-if="checkProperty('edited',scope.$index)"></el-input>
                <span v-else>{{scope.row.quantity}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Measure" width="100" v-if="checkProperty('measure')">
            <template #default="scope">
                <el-select v-model="scope.row.measure" @click="stopPropagation($event)" placeholder="Select"
                           v-if="checkProperty('edited',scope.$index)">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <span v-else>{{scope.row.measure}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Portions" width="100" v-if="checkProperty('portions')">
            <template #default="scope">
                <el-input v-model="scope.row.portions" @click="stopPropagation($event)"
                          v-if="checkProperty('edited',scope.$index)" type="number"></el-input>
                <span v-else>{{scope.row.portions}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Price" width="100" v-if="checkProperty('price')">
            <template #default="scope">
                <el-input v-model="scope.row.price" @click="stopPropagation($event)"
                          v-if="checkProperty('edited',scope.$index)" type="number"></el-input>
                <span v-else>{{scope.row.price}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Price actual" width="100" v-if="checkProperty('purchase_price')">
            <template #default="scope">
                <el-input v-model="scope.row.purchase_price" @click="stopPropagation($event)"
                          v-if="checkProperty('edited',scope.$index)" type="number"></el-input>
                <span v-else>{{scope.row.purchase_price}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Price p/portion" width="150" v-if="checkProperty('price_portion')">
            <template #default="scope">
                <el-input v-model="scope.row.price_portion" @click="stopPropagation($event)" type="number"
                          v-if="checkProperty('edited',scope.$index)"></el-input>
                <span v-else>{{scope.row.price_portion}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Date" width="150" v-if="checkProperty('date')">
            <template #default="scope">
                <el-date-picker
                    @click="stopPropagation($event)"
                    v-model="scope.row.date"
                    v-if="checkProperty('edited',scope.$index)"
                    type="date"
                    format="DD/MM/YYYY"
                    value-format="DD/MM/YYYY"
                    placeholder="Pick a day">
                </el-date-picker>
                <!--<el-input v-model="scope.row.date" @click="stopPropagation($event)" type="number" v-if="checkProperty('edited',scope.$index)"></el-input>-->
                <span v-else>{{scope.row.date}}</span>
            </template>
        </el-table-column>

        <el-table-column label="" width="200">
            <template #default="scope">
                <el-button data-id="add_i"
                           v-if="(checkProperty('created',scope.$index) && !checkProperty('edited',scope.$index) && props.get === 'getFoods') || props.get === 'getMenus'"
                           size="mini" type="success" icon="el-icon-plus" circle @click="addItems()"></el-button>
                <el-button data-id="add" v-if="!checkProperty('created',scope.$index) && props.get !== 'getMenuItems'"
                           size="mini" type="success" @click="add(scope.$index)">Add
                </el-button>
                <el-button data-id="edit"
                           v-if="checkProperty('created',scope.$index) && !checkProperty('edited',scope.$index)"
                           size="mini" type="primary" @click="setEdit($event,scope.$index)">Edit
                </el-button>
                <el-button data-id="update"
                           v-if="checkProperty('edited',scope.$index) && checkProperty('created',scope.$index)"
                           size="mini" type="success" @click="update(scope.$index)">Save
                </el-button>
                <el-button data-id="delete" v-if="checkProperty('created',scope.$index)" size="mini" type="danger"
                           @click="handleDelete(scope.$index)">Delete
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import {defineComponent, ref, reactive, computed, toRefs, toRef, onMounted, nextTick} from 'vue';
    import {useStore} from 'vuex';
    import { useCalculationStore } from '../store/calculation'
    import { useIngredientStore } from '../store/ingredients'

    const options = [
        {
            value: 'kg',
            label: 'Kg'
        },
        {
            value: 'buc',
            label: 'buc.'
        },
        {
            value: 'g',
            label: 'g'
        },
        {
            value: 'l',
            label: 'L'
        },
        {
            value: 'mg',
            label: 'Mg'
        },
        {
            value: 'ml',
            label: 'Ml'
        }
    ];

    export default defineComponent({
        props: ['rows', 'model', 'itemId', 'add', 'get', 'update', 'loading', 'food', 'delete','noRow'],
        emits: ['category', 'modal', 'loading', 'fetchItems','categories'],
        setup(props, context) {
            const store = useStore();
            const prop = toRefs(props);
            const load = prop.loading;
            const loading = computed({
                get: () => load.value,
                set: (v) => {
                    context.emit('loading', v)
                }
            });
            const focus = ref(null);
            const selecting = ref(false);
            const itemId = computed(() => props.itemId);
            const food = computed(() => props.food);
            const rows = ref([...props.rows]);
            const error = ref([]);
            const model = reactive({...props.model});

            const addRow = () => {
                rows.value.push({ ...model })
                nextTick(() => {
                    console.log(focus);
                    focus.value.focus();
                });
            }

            const add = (index) => {
                let data = { ...rows.value[index] };
                let type = '';

                switch (props.add) {
                    case 'setIngredient':
                        data.category_id = itemId.value;
                        type = 'category_id';
                        break;

                    case 'setFood':
                        data.group_id = itemId.value;
                        type = 'group_id';
                        break;
                }

                if (!data.name) {
                    error.value[index] = 'Name is empty'
                    return
                }

                store.dispatch(props.add, data).then((r) => {
                    loading.value = true;
                    let params = {};
                    let item = rows.value[index];
                    params[type] = itemId.value;
                    if (!item.hasOwnProperty('created') && item.name) {
                        item.created = true;
                        delete item.edited;
                    }
                    context.emit('fetchItems');
                    store.dispatch(props.get, params).then(() => loading.value = false);
                });
            };
            const update = (index) => {
                let data = {...rows.value[index]};
                let type = '';

                switch (props.add) {
                    case 'setIngredient':
                        data.category_id = itemId.value;
                        type = 'category_id';
                        break;

                    case 'setFood':
                        data.group_id = itemId.value;
                        type = 'group_id';
                        break;
                    case 'setFoodIngredient':
                        data.food_id = itemId.value;
                        type = 'food_id';
                        break;
                }

                if (!data.name) return
                store.dispatch(props.update, data).then(() => {
                    loading.value = true;
                    let params = {};
                    params[type] = itemId.value;

                    context.emit('fetchItems');
                    store.dispatch(props.get, params).then(() => {
                        loading.value = false;
                        delete rows.value[index].edited;
                    });
                });
            };
            const setEdit = (e, index) => {
                setTimeout(() => {
                    rows.value[index].edited = false;
                }, 200)

            };
            const stopPropagation = (e) => {
                e.stopImmediatePropagation();
            };
            const handleDelete = (index) => {
                let data = rows.value[index];
                if (!data.id) return
                store.dispatch(props.delete, data).then(() => {
                    rows.value.splice(index, 1);
                    context.emit('fetchItems');
                })
            };
            const select = () => {
                selecting.value = !selecting.value;
                context.emit('selecting',selecting.value);
            }
            const handleChange = (row, column, event) => {
                if (typeof row.id !== "undefined") {
                    if(selecting.value){
                        context.emit('categories',row.id);
                    }else{
                        loading.value = true;
                        context.emit('category', row.id);
                        rows.value.map((item, i) => {
                            delete rows.value[i].edited
                        });
                        rows.value = rows.value.filter((item) => item.name)
                        loading.value = false;
                    }

                    return 'active-row';
                }
            };

            const foodId = computed(() => props.food);
            const cellClass = (row) => {
                if (row.row.id === rows.value[0].id && ['group', 'category', 'food', 'menu'].includes(row.row.type) || (row.row.id === itemId.value || row.row.id === foodId.value)) {
                    return 'active-row-first';
                }

                if (itemId.value === row.row.id || foodId.value === row.row.id) {
                    return 'active-row';
                }
            }

            const checkProperty = (property, index = 0) => {
                if (typeof rows.value[index] !== "undefined") return rows.value[index].hasOwnProperty(property);
                return false;
            };

            const addItems = () => {
                context.emit('modal', true)
            }

            const checkActive = (scope) => {
                switch (scope.row.type) {
                    case 'food':
                        if (scope.row.id === food.value && food.value !== undefined) {
                            nextTick(() => {
                                let $container = $('#' + props.add + '-table .el-table__body-wrapper'),
                                    $scrollTo = $('#' + props.add + '-table .el-table__body-wrapper .active-first-row');

                                $container.scrollTop($scrollTo.offset().top);
                            });
                            return 'active-first-row';
                        }
                        break;
                    default:
                        if (scope.row.id === itemId.value && itemId.value !== undefined){
                            nextTick(() => {
                                let $container = $('#' + props.add + '-table .el-table__body-wrapper'),
                                    $scrollTo = $('#' + props.add + '-table .el-table__body-wrapper .active-first-row');

                                $container.scrollTop($scrollTo.offset().top);
                            });

                            return 'active-first-row';
                        }
                        break;
                }
                return ''
            }

            const noButton = () => {
                return (props.get !== 'getFoodIngredients' && props.get !== 'getMenuItems') && props.noRow === undefined
            }

            return {
                rows,
                options,
                itemId,
                loading,
                load,
                props,
                food,
                error,
                focus,
                selecting,
                addRow,
                handleDelete,
                checkProperty,
                add,
                update,
                handleChange,
                cellClass,
                select,
                setEdit,
                stopPropagation,
                addItems,
                checkActive,
                noButton
            }
        }
    })
</script>

<style scoped>
    span.active.rounded-circle {
        max-width: 20px;
        max-height: 20px;
        height: 30px;
        width: 30px;
        display: block;
        border-radius: 50%;
        padding: 0;
        margin: auto;
    }
</style>
