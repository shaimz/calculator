<template>
    <el-dialog title="Ingredients" v-model="modal">
        <el-transfer
            v-model="rightValues"
            style="text-align: left; display: inline-block"
            :titles="['All ingredients', 'Ingredients ' + capital(foodName)]"
            :button-texts="['Remove', 'Add']"
            :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }"
            :data="data"
            @change="handleChange"
        >
            <template #default="{ option }" class="d-flex justify-content-between align-items-center">
                <span>{{ option.name }}</span>
                <input @change="handleUpdate" type="number" v-model="quantity[option.key]" class="quantity-input">
            </template>
            <!--<template #left-footer>-->
                <!--<el-button class="transfer-footer" size="small">Operation</el-button>-->
            <!--</template>-->
            <!--<template #right-footer>-->
                <!--<el-button class="transfer-footer" size="small">Operation</el-button>-->
            <!--</template>-->
        </el-transfer>
    </el-dialog>
</template>

<script>
    import {defineComponent, ref, computed, watch} from 'vue';
    import {useStore} from 'vuex';

    export default defineComponent({
        props:['dialog','itemId','food','group','data'],
        emits:['modal'],
        setup(props, context){
            const store = useStore();
            const dialog = computed(() => props.dialog);
            const modal = ref(dialog.value);
            const data = computed(() => props.data);

            const foodName = computed(() => props.food);
            const itemId = computed(() => props.itemId);
            const quantity = ref({});
            const ingredients = computed(() => store.state.food_ingredients);

            // const right = computed(() => ingredients.value.map((item) => {return {key:item.id,name:Object.values(data.value.find((elem) => elem.key === item.ingredient_id))[1]}}));
            const right = computed(() => ingredients.value.map((item,index) => item.ingredient_id));
            const left = computed(() => ingredients.value.filter((item) => !data.value.some((elem) => elem.key !== item.ingredient_id)));

            const rightValues = ref([]);
            watch(() => right.value, (n,o) => {
                if(n !== o){
                    rightValues.value = n;
                }
            })


            watch(() => itemId.value, (n,o) => {
                if(n !== o){
                    if(itemId.value){
                        store.dispatch('getFoodIngredients',{food_id:itemId.value}).then(() => {
                            ingredients.value.map((item) => quantity.value[item.ingredient_id] = item.quantity)
                        });
                    }
                }
            })



            const handleChange = (value, direction, movedKeys) => {
                let data = {};
                data['ingredients'] = quantity.value;
                data['food_id'] = props.itemId;
                if(direction === 'right'){
                    store.dispatch('setFoodIngredient',data)
                }else{
                    store.dispatch('deleteFoodIngredient',data);
                }
            };

            const handleUpdate = () => {
                let data = {};
                data['ingredients'] = quantity.value;
                data['food_id'] = props.itemId;

                let bool = right.value.find((elem,i) => Object.keys(quantity.value)[i])

                if(bool){
                    store.dispatch('updateFoodIngredient',data)
                }
            }

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

            const capital = (text) => {
                return text.charAt(0).toUpperCase() + text.slice(1);
            }

            return{
                dialog,
                left,
                right,
                rightValues,
                modal,
                data,
                foodName,
                itemId,
                quantity,
                ingredients,
                handleChange,
                handleUpdate,
                openDialog,
                capital
            }
        }
    })
</script>

<style scoped lang="scss">
    .el-dialog .el-transfer{
        display:flex !important;
        align-items: center;
        div.el-transfer-panel{
            width: 100% !important;
            .quantity-input{
                max-width: 50px;
            }
        }
    }

</style>
