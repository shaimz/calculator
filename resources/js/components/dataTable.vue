<template>
    <el-button type="success" @click="addRow()" round>Adding row</el-button>
    <el-table :data="datas" border height="350" style="width:90%;margin-top: 15px;" @current-change="handleChange">
        <el-table-column label="Name" width="250" v-if="checkProperty('name')">
            <template #default="scope">
                <el-input v-model="scope.row.name" type="text" v-if="!scope.row.created"></el-input>
                <span v-else>{{scope.row.name}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Portions" width="100" v-if="checkProperty('portions')">
            <template #default="scope">
                <el-input v-model="scope.row.portions" v-if="!scope.row.created">
                    <i slot="suffix"
                       class="el-input__icon el-icon-search"></i>
                </el-input>
                <span v-else>{{scope.row.name}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Price" width="100" v-if="checkProperty('price')">
            <template #default="scope">
                <el-input v-model="scope.row.price" type="number" v-if="!scope.row.created"></el-input>
                <span v-else>{{scope.row.name}}</span>
            </template>
        </el-table-column>

        <el-table-column label="Price p/portion" width="150" v-if="checkProperty('price_portion')">
            <template #default="scope">
                <el-input v-model="scope.row.price_portion" type="number" v-if="!scope.row.created"></el-input>
                <span v-else>{{scope.row.name}}</span>
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
    import {defineComponent, ref, reactive, computed} from 'vue';

    export default defineComponent({
        props: ['rows','model','itemId'],
        emits:['category'],
        setup(props, context) {
            const itemId = props.itemId;
            const propRows = props.rows;
            const rows = reactive(propRows);
            const datas = reactive([...rows]);
            const model = reactive({...props.model});
            const addRow = () => {
                datas.push({...model})
            };
            const add = (index) => {
                datas[index].created = true;
                store.dispatch('setCategory',datas[index])
            };
            const handleDelete = (index) => {
                datas.splice(index, 1);
            };
            const handleChange = (val) => {
                console.log(val);
                if(typeof val.id !== "undefined"){
                    context.emit('category',val.id);
                }
            };

            const checkProperty = (property,index = 0) => {
                return datas[index].hasOwnProperty(property);
            };

            return {
                datas,
                rows,
                itemId,
                addRow,
                handleDelete,
                checkProperty,
                add,
                handleChange
            }
        }
    })
</script>

<style scoped>

</style>
