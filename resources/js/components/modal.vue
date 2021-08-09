<template>
    <el-dialog destroy-on-close :title="props.type === 'group' ? 'Ingredients' : 'Menu'" v-model="modal">
<!--        <el-transfer-->
<!--            v-model="rightValues"-->
<!--            style="text-align: left; display: inline-block"-->
<!--            :titles="['All ingredients', 'Ingredients ' + capital(foodName)]"-->
<!--            :button-texts="['Remove', 'Add']"-->
<!--            :format="{-->
<!--          noChecked: '${total}',-->
<!--          hasChecked: '${checked}/${total}'-->
<!--        }"-->
<!--            :data="data"-->
<!--            @change="handleChange"-->
<!--        >-->
<!--            <template #default="{ option }" class="d-flex justify-content-between align-items-center">-->
<!--                <span>{{ option.name }}</span>-->
<!--                <el-checkbox-group fill="#ffc90e" v-model="rightValues">-->
<!--                    <el-checkbox v-for="child in option.children" :label="child.name" @change="handleCheck(child)">-->
<!--                        <template #default="scope">-->
<!--                            <span>{{child.name}}</span>-->
<!--                            <input @change="handleUpdate" type="number" v-model="quantity[option.key]" class="quantity-input">-->
<!--                        </template>-->
<!--                    </el-checkbox>-->
<!--                </el-checkbox-group>-->
<!--            </template>-->
<!--            &lt;!&ndash;<template #left-footer>&ndash;&gt;-->
<!--                &lt;!&ndash;<el-button class="transfer-footer" size="small">Operation</el-button>&ndash;&gt;-->
<!--            &lt;!&ndash;</template>&ndash;&gt;-->
<!--            &lt;!&ndash;<template #right-footer>&ndash;&gt;-->
<!--                &lt;!&ndash;<el-button class="transfer-footer" size="small">Operation</el-button>&ndash;&gt;-->
<!--            &lt;!&ndash;</template>&ndash;&gt;-->
<!--        </el-transfer>-->
        <ElTransferGroup @fetchItems="emitFetch" :itemId="itemId" :name="name" :type="props.type" :price="price" :quantity="quantity" :left-list="left" :right-list="right" />
    </el-dialog>
</template>

<script>
    import {defineComponent, ref, computed, watch, toRefs, onMounted} from 'vue';
    import {useStore} from 'vuex';
    import ElTransferGroup from "./transfer/el-transfer-group";

    export default defineComponent({
        components: {ElTransferGroup},
        props:['dialog','itemId','group','data','reset','name','menu','type'],
        emits:['modal','fetchItems'],
        setup(props, context){
            const store = useStore();
            const dialog = computed(() => props.dialog);
            const modal = ref(dialog.value);
            const data = computed(() => props.data);
            const name = ref('Mancaruri');

            const itemId = computed(() => props.itemId);
            const quantity = ref({});
            const price = ref({});

            const checked = ref([]);
            const ingredients = computed(() => store.state.food_ingredients);
            const items = computed(() => store.state.menu_items);

            const right = computed(() => {
                if(props.type === 'group'){
                    return ingredients.value.map((item,index) => {return {key:item.ingredient_id,name:item.ingredient.name,category_id:item.category_id, price_portion:item.food.price_portion,portions:item.food.portions, fixed:true}});
                }else{
                    return items.value.map((item,index) => {return {key:item.food_id,name:item.food.name,price_portion:item.food.price_portion,portions:item.food.portions,menu_id:item.menu_id,group_id:item.group_id, fixed:true}})
                }
            });
            // const left = computed(() => {
            //     return data.value.map((el) => el.children.filter((item) => !data.value.some((elem) => elem.key !== item.ingredient_id)))
            // });


            // const left = computed(() => data.value.map((item) => {
            //     let result = {...item};
            //     result.children = item.children.filter((el) => !right.value.some((elem) => elem.key === el.key));
            //     return result;
            // }))
            const left = ref([]);
            const leftSide = () => {
                left.value = data.value.map((item) => {
                    let result = {...item};
                    result.children = item.children.filter((el) => !right.value.some((elem) => elem.key === el.key));
                    return result;
                });
            };

            watch(() => right.value, (n,o) => {
                if(n !== o){
                    leftSide();
                }
            },{immediate:true});

            const rightValues = ref([]);
            watch(() => right.value, (n,o) => {
                if(n !== o){
                    rightValues.value = n;
                }
            })


            watch(() => props.group, (n,o) => {
              if(n !== o){
                  quantity.value = {};
              }
            });

            watch(() => props.menu, (n,o) => {
                if(n !== o){
                    price.value = {};
                }
            });

            watch(() => itemId.value, (n,o) => {
                if(n !== o){
                    if(itemId.value){
                        quantity.value = {};
                        price.value = {};
                        if(props.type === 'group'){
                            store.dispatch('getFoodIngredients',{food_id:itemId.value}).then(() => {
                                console.log(ingredients.value);
                                ingredients.value.map((item) => quantity.value[item.ingredient_id] = item.quantity)
                            });
                        }else{
                            store.dispatch('getMenuItems',{menu_id:itemId.value}).then(() => {
                            console.log(items.value);
                                items.value.map((item) => price.value[item.food_id] = item.food.price_portion)
                            });
                        }
                    }
                }
            },{immediate:true})

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

            const emitFetch = () => {
                context.emit('fetchItems',true);
            }

            return{
                dialog,
                left,
                right,
                rightValues,
                modal,
                data,
                itemId,
                quantity,
                price,
                checked,
                ingredients,
                items,
                openDialog,
                props,
                name,
                emitFetch
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
