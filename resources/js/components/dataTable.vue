<template>
    <el-button type="success" @click="addRow()" round>Adding row</el-button>
    <el-table :key="datas" :data="datas" :row-class-name="cellClass" border height="350" style="width:100%;margin-top: 15px;" current-row-key="40" @current-change="handleChange" highlight-current-row>
        <el-table-column labell="" width="50px" v-if="checkProperty('type')">
            <template #default="scope" v-if="datas[0].type === 'category'">
                <span v-if="scope.row.id === itemId" class="rounded-circle bg-success active m-auto"></span>
            </template>
        </el-table-column>
        <el-table-column label="Name" width="250" v-if="checkProperty('name')">
            <template #default="scope">
                <el-input v-model="scope.row.name" type="text" :readonly="!scope.row.edited"></el-input>
                <span v-else>{{scope.row.name}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Portions" width="100" v-if="checkProperty('measure')">
            <template #default="scope">
                <el-select v-model="scope.row.measure" placeholder="Select" :readonly="!scope.row.edited">
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

        <el-table-column label="Price" width="100" v-if="checkProperty('price')">
            <template #default="scope">
                <el-input v-model="scope.row.price" :readonly="!scope.row.edited" type="number"></el-input>
                <span v-else>{{scope.row.price}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Price p/portion" width="150" v-if="checkProperty('price_portion')">
            <template #default="scope">
                <el-input v-model="scope.row.price_portion" type="number" v-if="!scope.row.created"></el-input>
                <span v-else>{{scope.row.price_portion}}</span>
            </template>
        </el-table-column>

        <el-table-column label="" width="150">
            <template #default="scope">
                <el-button v-if="!checkProperty('created',scope.$index)" size="mini" type="success" @click="add(scope.$index)">Add</el-button>
                <el-button v-if="checkProperty('created',scope.$index)" size="mini" type="danger" @click="handleDelete(scope.$index)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import {defineComponent, ref, reactive, computed, toRefs, onMounted} from 'vue';
    import {useStore} from 'vuex';

    export default defineComponent({
        props: ['rows','model','itemId','add','get'],
        emits:['category'],
        setup(props, context) {
            const store = useStore();
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
            const itemId = computed(() => props.itemId);
            const datas = ref([...props.rows]);
            const model = reactive({...props.model});
            const addRow = () => {
                datas.value.push({...model})
            };
            const add = (index) => {
                let data = {...datas.value[index]};

                if(props.add === "setIngredient"){
                    data.category_id = itemId.value;
                }
                if(data.name){
                    store.dispatch(props.add,data).then(() => {
                        store.dispatch(props.get,{category_id:itemId.value});
                    });
                }
            };
            const handleDelete = (index) => {
                datas.value.splice(index, 1);
            };
            const handleChange = (val,o) => {
                if(typeof val.id !== "undefined"){
                    context.emit('category',val.id);
                    return 'active-row';
                }
            };

            const cellClass = (row) => {
                if(row.row.id === datas.value[0].id && row.row.id === itemId.value && row.row.type === 'category'){
                    return 'active-row-first';
                }
            }

            const checkProperty = (property,index = 0) => {
                if(typeof datas.value[index] !== "undefined") return datas.value[index].hasOwnProperty(property);
                else return false;
            };


            return {
                datas,
                options,
                itemId,
                addRow,
                handleDelete,
                checkProperty,
                add,
                handleChange,
                cellClass
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
