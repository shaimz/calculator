<template>
    <el-button class="" size="large" @click="openDialog">Add ingredients</el-button>
    <el-dialog title="Ingredients" v-model="modal">
        <el-transfer
            v-model="right"
            style="text-align: left; display: inline-block"
            filterable
            :titles="['All ingredients', 'Food ingredients']"
            :button-texts="['Remove', 'Add']"
            :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }"
            :data="data"
            @change="handleChange"
        >
            <template #default="{ option }">
                <span>{{ option.name }}</span>
            </template>
            <template #left-footer>
                <el-button class="transfer-footer" size="small">Operation</el-button>
            </template>
            <template #right-footer>
                <el-button class="transfer-footer" size="small">Operation</el-button>
            </template>
        </el-transfer>
    </el-dialog>
</template>

<script>
    import {defineComponent, ref, computed, watch} from 'vue';

    export default defineComponent({
        props:['dialog','food','group','data'],
        emits:['modal'],
        setup(props, context){
            const dialog = computed(() => props.dialog);
            const data = computed(() => props.data);
            const modal = ref(dialog.value);
            const right = ref([]);
            const left = ref([]);

            const handleChange = (value, direction, movedKeys) => {
                console.log(value, direction, movedKeys);
            };

            const openDialog = () => {
                modal.value = true;
            };

            watch(() => dialog.value, (n,o) => {
                if(n !== o){
                    modal.value = n;
                }
            });

            watch(() => modal.value ,(n,o) => {
                if(n !== o){
                    context.emit('modal',n)
                }
            });

            return{
                dialog,
                left,
                right,
                modal,
                data,
                handleChange,
                openDialog
            }
        }
    })
</script>

<style scoped>

</style>
