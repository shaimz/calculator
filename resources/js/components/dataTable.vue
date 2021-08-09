<template>
    <el-button type="success" @click="addRow()" round>Adding row</el-button>
    <el-table :key="datas" :data="datas" :row-class-name="cellClass" :lazy="true" v-loading="load" border height="350" style="width:100%;margin-top: 15px;" current-row-key="40" @row-click="handleChange" highlight-current-row>
        <el-table-column labell="" width="50px" v-if="checkProperty('type')">
            <template #default="scope" v-if="['category','group','food','menu'].includes(datas[0].type)">
                <span v-if="(scope.row.id === itemId && itemId !== 'undefined') || (scope.row.id === food && food !== 'undefined')" class="rounded-circle bg-success active m-auto"></span>
            </template>
        </el-table-column>
        <el-table-column label="Name" width="250" v-if="checkProperty('name')">
            <template #default="scope">
                <span class="text-danger" v-if="error[scope.$index]">{{error[scope.$index]}}</span>
                <el-input v-model="scope.row.name" type="text" @click="stopPropagation($event)" v-if="checkProperty('edited',scope.$index)"></el-input>
                <span v-else>{{scope.row.name}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Quantity" width="250" v-if="checkProperty('quantity')">
            <template #default="scope">
                <span class="text-danger" v-if="error[scope.$index]">{{error[scope.$index]}}</span>
                <el-input v-model="scope.row.quantity" type="number" @click="stopPropagation($event)" v-if="checkProperty('edited',scope.$index)"></el-input>
                <span v-else>{{scope.row.quantity}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Measure" width="100" v-if="checkProperty('measure')">
            <template #default="scope">
                <el-select v-model="scope.row.measure" @click="stopPropagation($event)" placeholder="Select" v-if="checkProperty('edited',scope.$index)">
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
                <el-input v-model="scope.row.portions" @click="stopPropagation($event)" v-if="checkProperty('edited',scope.$index)" type="number"></el-input>
                <span v-else>{{scope.row.portions}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Price" width="100" v-if="checkProperty('price')">
            <template #default="scope">
                <el-input v-model="scope.row.price" @click="stopPropagation($event)" v-if="checkProperty('edited',scope.$index)" type="number"></el-input>
                <span v-else>{{scope.row.price}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Price p/portion" width="150" v-if="checkProperty('price_portion')">
            <template #default="scope">
                <el-input v-model="scope.row.price_portion" @click="stopPropagation($event)" type="number" v-if="checkProperty('edited',scope.$index)"></el-input>
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
                <el-button data-id="add_i" v-if="(checkProperty('created',scope.$index) && !checkProperty('edited',scope.$index) && props.get === 'getFoods') || props.get === 'getMenus'" size="mini" type="success" icon="el-icon-plus" circle @click="addItems()"></el-button>
                <el-button data-id="add" v-if="!checkProperty('created',scope.$index) && props.get !== 'getMenuItems'" size="mini" type="success" @click="add(scope.$index)">Add</el-button>
                <el-button data-id="edit" v-if="checkProperty('created',scope.$index) && !checkProperty('edited',scope.$index)" size="mini" type="primary" @click="setEdit($event,scope.$index)">Edit</el-button>
                <el-button data-id="update" v-if="checkProperty('edited',scope.$index) && checkProperty('created',scope.$index)" size="mini" type="success" @click="update(scope.$index)">Save</el-button>
                <el-button data-id="delete" v-if="checkProperty('created',scope.$index)" size="mini" type="danger" @click="handleDelete(scope.$index)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import {defineComponent, ref, reactive, computed, toRefs, toRef, onMounted} from 'vue';
    import {useStore} from 'vuex';

    export default defineComponent({
        props: ['rows','model','itemId','add','get','update','loading','food'],
        emits:['category','modal'],
        setup(props, context) {
            const store = useStore();
            const prop = toRefs(props);
            const load = prop.loading;
            const options = [
                {
                    value:'kg',
                    label:'Kg'
                },
                {
                    value:'g',
                    label:'g'
                },
                {
                    value:'l',
                    label:'L'
                },
                {
                    value:'mg',
                    label:'Mg'
                },
                {
                    value:'ml',
                    label:'Ml'
                }
            ];
            const loading =  computed({
                get:() => load.value,
                set:(v) => {
                    context.emit('loading', v)
                }
            });
            const itemId = computed(() => props.itemId);
            const food = computed(() => props.food);
            const datas = ref([...props.rows]);
            const error = ref([]);
            const model = reactive({...props.model});
            const addRow = () => {
                datas.value.push({...model})
            };
            const add = (index) => {
                let data = {...datas.value[index]};
                let type = '';

                switch(props.add){
                    case 'setIngredient':
                        data.category_id = itemId.value;
                        type = 'category_id';
                        break;

                    case 'setFood':
                        data.group_id = itemId.value;
                        type = 'group_id';
                        break;
                }

                if(data.name){
                    store.dispatch(props.add,data).then((r) => {
                        let params = {};
                        let item = datas.value[index];
                        params[type] = itemId.value;
                            if(!item.hasOwnProperty('created') && item.name){
                                item.created = true;
                                delete item.edited;
                            }
                        loading.value = true;
                        store.dispatch(props.get,params).then(() => loading.value = false);
                    });
                } else{
                    error.value[index] = 'Name is empty'
                }
            };
            const update = (index) => {
                let data = {...datas.value[index]};
                let type = '';

                switch(props.add){
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

                if(data.name){
                    store.dispatch(props.update,data).then(() => {
                        let params = {};
                        params[type] = itemId.value;

                        loading.value = true;
                        store.dispatch(props.get,params).then(() => {
                            loading.value = false;
                            delete datas.value[index].edited;
                        });
                    });
                }
            };
            const setEdit = (e,index) => {
                setTimeout(() => {
                    datas.value[index].edited = false;
                },200)

            };
            const stopPropagation = (e) => {
                e.stopImmediatePropagation();
            };
            const handleDelete = (index) => {
                datas.value.splice(index, 1);
            };
            const handleChange = (row, column, event) => {
                if(typeof row.id !== "undefined"){
                    context.emit('category',row.id);
                    datas.value.map((item,i) => {
                        delete datas.value[i].edited
                    });
                    datas.value = datas.value.filter((item) => item.name)
                    return 'active-row';
                }
            };

            const foodId = computed(() => props.food);
            const cellClass = (row) => {
                if(row.row.id === datas.value[0].id && (row.row.id === itemId.value || row.row.id === foodId.value) && ['group','category','food','menu'].includes(row.row.type)){
                    return 'active-row-first';
                }
            }

            const checkProperty = (property,index = 0) => {
                if(typeof datas.value[index] !== "undefined") return datas.value[index].hasOwnProperty(property);
                return false;
            };

            const addItems = () => {
                context.emit('modal',true)
            }


            return {
                datas,
                options,
                itemId,
                loading,
                load,
                props,
                food,
                error,
                addRow,
                handleDelete,
                checkProperty,
                add,
                update,
                handleChange,
                cellClass,
                setEdit,
                stopPropagation,
                addItems
            }
        }
    })
</script>

<style scoped>
    span.active.rounded-circle{
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
