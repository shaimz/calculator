<template>
    <el-button type="success" v-if="noButton" @click="addRow()" round>Adding row</el-button>
    <el-button @click="select">{{selecting ? 'Cancel' : 'Select'}}</el-button>
    <el-table 
        :id="props.add + '-table'" 
        :class="[noButton ? 'mt-4' : '']" 
        :key="rows" 
        :data="rows" 
        :row-class-name="checkActive" 
        :lazy="true" 
        v-loading="loading" 
        border 
        height="350"
        style="width:100%;margin-top: 15px;" 
        current-row-key="40" 
        @row-click="handleChange
    ">
        <el-table-column label="" width="50" v-if="checkProperty('type')">
            <template #default="scope" v-if="['category','group','food','menu'].includes(rows[0].type)">
                <span
                    v-if="scope.row.hasOwnProperty('id') && checkActive(scope)"
                    class="rounded-circle bg-success active m-auto"></span>
            </template>
        </el-table-column>
        <el-table-column 
            v-for="column in filterColumns" 
            :key="column.id"
            :label="column.label"
            :width="column.width"
        >
            <template #default="scope">
                <span :key="column.id" class="text-danger" v-if="error[scope.$index]">{{error[scope.$index]}}</span>
                <el-input
                    :key="column.id" 
                    v-if="checkTypeAndVisibility(scope.row, column.type, ['text', 'number'])" 
                    v-model="scope.row[column.id]" 
                    ref="focus"
                    :type="column.type"
                    @click="stopPropagation($event)"
                ></el-input>
                <el-select 
                    v-else-if="checkTypeAndVisibility(scope.row, column.type, ['select'])" 
                    v-model="scope.row[column.od]" 
                    @click="stopPropagation($event)" 
                    placeholder="Select"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-date-picker
                    v-else-if="checkTypeAndVisibility(scope.row, column.type, ['date'])" 
                    @click="stopPropagation($event)"
                    v-model="scope.row[column.id]"
                    type="date"
                    format="DD/MM/YYYY"
                    value-format="DD/MM/YYYY"
                    placeholder="Pick a day">
                </el-date-picker>
                <span v-else>{{scope.row[column.id]}}</span>
            </template>
        </el-table-column>

        <el-table-column label="" width="200">
            <template #default="scope">
                <el-button data-id="add_i"
                           v-if="(checkProperty('created',scope.$index) && !checkProperty('edited',scope.$index) && props.get === 'getFoods') || props.get === 'getMenus'"
                           size="small" type="success" icon="el-icon-plus" circle @click="addItems()"></el-button>
                <el-button data-id="add" v-if="!checkProperty('created',scope.$index) && props.get !== 'getMenuItems'"
                           size="small" type="success" @click="add(scope.$index)">Add
                </el-button>
                <el-button data-id="edit"
                           v-if="!checkTypeAndVisibility(scope.row)"
                           size="small" type="primary" @click="setEdit($event,scope.row)">Edit
                </el-button>
                <el-button data-id="update"
                           v-if="checkTypeAndVisibility(scope.row)"
                           size="small" type="success" @click="update(scope.$index)">Save
                </el-button>
                <el-button data-id="delete" v-if="checkProperty('created',scope.$index)" size="small" type="danger"
                           @click="handleDelete(scope.$index)">Delete
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import { storeToRefs } from 'pinia';
import { eventNames } from 'process';
import {defineComponent, ref, reactive, computed, toRefs, toRef, onMounted, nextTick} from 'vue';
    import {useStore} from 'vuex';
    import { useCalculationStore } from '../store/calculation'
    import { useIngredientStore } from '../store/ingredients'
    import { useSharedStore } from '../store/shared'
    import { columns } from './dataTableColumns'

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
        props: {
            data: {
                type: Array
            },
            model: {
                type: Object,
                default: () => {}
            },
            itemId: {
                type: Number
            },
            addAction: {
                type: Function,
                default: () => {}
            },
            getAction: {
                type: Function,
                default: () => {}
            },
            updateAction: {
                type: Function,
                default: () => {}
            },
            deleteAction: {
                type: Function,
                default: () => {}
            },
            itemType: {
                type: String
            },
            loading: {
                type: Boolean
            },
            food: {
                type: String,
            },
            noRow: {
                type: Boolean
            },
            "type": {
                type: String
            }
        },
        emits: ['category', 'modal', 'categories', 'getAction', 'updateAction', 'deleteAction', 'addAction'],
        setup(props, context) {
            const shared = useSharedStore()
            const { mode } = storeToRefs(shared)
            const { data, model, itemId, loading, food, noRow } = toRefs(props);
            
            const filterColumns = computed(() => {
                let row = rows.value[0]
                if (!row) return []
                return columns.filter(column => {
                    if (row.hasOwnProperty(column.id)) return true
                })
            })
            const focus = ref(null);
            const selecting = ref(false);
            const rows = ref([...data.value]);
            const error = ref([]);

            const addRow = () => {
                if (mode.value === 'edit') return
                shared.setMode('edit')
                rows.value.push({ ...model.value, edited: true })
                nextTick(() => {
                    focus.value[0].focus()
                })
            }

            const add = (index) => {
                let data = { ...rows.value[index] };
                data.parent_id = itemId.value;

                if (!data.name) {
                    error.value[index] = 'Name is empty'
                    return
                }

                context.emit('addAction', data)

                shared.setLoading(true)
                let params = {};
                let item = rows.value[index];
                if (!item.hasOwnProperty('created') && item.name) {
                    item.created = true;
                    item.edited = false
                }
                context.emit('getAction', params)
                shared.setLoading(false)

                shared.setMode("view")
            };
            const update = async (index) => {
                let type = '';

                let data = {...rows.value[index]};
                data.parent_id = itemId.value;

                if (!data.name) return
                context.emit('updateAction', data)
                shared.setLoading(true)

                context.emit('getAction')
                shared.setLoading(false)
                rows.value[index].edited = false
                shared.setMode("view")
            }

            const setEdit = (e, row) => {
                shared.setMode("edit")
                row.edited = true;
            };
            const stopPropagation = (e) => {
                e.stopImmediatePropagation();
            };
            const handleDelete = (index) => {
                let data = rows.value[index];
                if (!data.id) return

                context.emit('deleteAction', data)

                rows.value.splice(index, 1);

                context.emit('getAction')
            };
            const select = () => {
                selecting.value = !selecting.value;
                context.emit('selecting', selecting.value);
            }
            const handleChange = (row, column, event) => {
                event.stopImmediatePropagation()
                if (typeof row.id !== "undefined") {
                    if(selecting.value){
                        context.emit('categories', row.id);
                    }else{
                        shared.setLoading(true)
                        context.emit('category', row.id);
                        rows.value.map((_, i) => {
                            rows.value[i].edited = false
                        });
                        rows.value = rows.value.filter((item) => item.name)
                        shared.setLoading(false)
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
                                let $container = $('#' + addAction + '-table .el-table__body-wrapper'),
                                    $scrollTo = $('#' + addAction + '-table .el-table__body-wrapper .active-first-row');

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

            const checkTypeAndVisibility = (row, columnType, type) => {
                if (row.edited) return true
                if (type && !type.includes(columnType)) return false
                if (rows.value.length) return rows.value[0].hasOwnProperty(columnType);
                return false
            }

            const noButton = () => {
                return (props.get !== 'getFoodIngredients' && props.get !== 'getMenuItems') && props.noRow === undefined
            }

            return {
                rows,
                options,
                filterColumns,
                itemId,
                loading,
                props,
                food,
                error,
                focus,
                selecting,
                mode,
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
                noButton,
                checkTypeAndVisibility
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
