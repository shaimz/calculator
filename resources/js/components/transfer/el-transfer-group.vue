<template>
    <div class="row">
        <div class="col-6">
            <h3>Ingredients</h3>
            <el-collapse v-model="category">
                <el-collapse-item v-for="item in list1" :title="item.name" :name="item.name">
                    <draggable
                        class="list-group"
                        :list="item.children"
                        group="people"
                        @change="insert"
                        @start="drag = true"
                        @end="drag = false"
                        itemKey="name"
                        :options="{handle:'.draggable'}"
                    >
                        <template #item="{ element, index }">
                            <div class="list-group-item d-flex justify-content-between align-items-center" :class="{ 'draggable': !drag }">{{ element.name }}
                                <input type="number" v-model="quantity[element.key]"
                                       class="quantity-input">
                            </div>
                        </template>
                    </draggable>
                </el-collapse-item>
            </el-collapse>
        </div>

        <div class="col-6">
            <h3>{{food}}</h3>
            <draggable
                class="list-group"
                :list="list2"
                group="people"
                itemKey="name"
                @start="drag=true"
                @end="drag = false"
                :move="checkMove"
                :options="{handle:'.draggable',sort:false}"
            >
                <template #item="{ element, index }">
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                        <span class="list-group-item-title">{{ element.name }}</span>
                        <input @change="handleUpdate" type="number" v-model="quantity[element.key]"
                               class="quantity-input">
                        <i class="fa fa-times close" @click="remove(element)"></i>
                    </div>
                </template>
            </draggable>
        </div>

<!--        <rawDisplayer class="col-3" :value="list1" title="List 1"/>-->

<!--        <rawDisplayer class="col-3" :value="list2" title="List 2"/>-->
    </div>
</template>
<script>
    import draggable from "vuedraggable";
    import rawDisplayer from "./rawDisplayer";

    export default {
        display: "Two Lists",
        order: 1,
        props: ['rightList', 'leftList', 'itemId', 'quantity','food'],
        components: {
            draggable,
            rawDisplayer
        },
        data() {
            return {
                list1: this.leftList,
                list2: this.rightList,
                drag: false,
                category:''
            };
        },
        methods: {
            add: function () {
                this.list2.push({name: "Juan"});
            },
            replace: function () {
                this.list2 = [{name: "Edgard"}];
            },
            clone: function (el) {
                return {
                    name: el.name + " cloned"
                };
            },
            checkMove(e){
                return !this.list2[e.draggedContext.futureIndex].fixed
            },

            handleUpdate(){
                let data = {};
                data['ingredients'] = this.quantity;
                data['food_id'] = this.itemId;

                let bool = this.list2.find((elem, i) => Object.keys(this.quantity)[i])

                if (bool) {
                    this.$store.dispatch('updateFoodIngredient', data)
                }
            },
            insert: function (evt) {
                console.log(evt);
                let data = {};
                data['ingredients'] = this.quantity;
                data['food_id'] = this.itemId;
                data['category_id'] = evt.removed.element.category_id;
                if (evt['removed']) {
                    console.log([this.list2,this.list2.findIndex(item => item.key === evt.removed.element.key)])
                    // this.list2[this.list2.findIndex(item => item.key === evt.removed.element.key)]['fixed'] = true;
                    this.$store.dispatch('setFoodIngredient', data)
                }
            },
            remove: function (item) {
                let data = {};
                let pair = {}
                pair[item.key] = this.quantity[item.key];
                data['ingredients'] = pair;
                data['food_id'] = this.itemId;
                data['category_id'] = item.category_id;
                this.$store.dispatch('deleteFoodIngredient', data).then(() => {
                    this.list2 = this.list2.filter((el) => el.key !== item.key)
                    console.log(item)
                    this.list1[this.list1.findIndex(el => el.key === item.category_id)].children.push(item);
                    this.$store.dispatch('getIngredients',{category_id: 'all'});
                    this.$store.dispatch('getFoodIngredients',{food_id: this.itemId});
                });
            }
        },
        watch:{
            leftList(n,o){
                if(n !== o){
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .list-group {
        height: 100%;

        .list-group-item {
            .quantity-input{
                max-width: 40px;
            }
            span.list-group-item-title{
                max-width: 250px;
                width: 100%;
            }
            .close{
                cursor: pointer;
            }
        }
    }
    ul{
        list-style: none;
    }
    h3.title{
        font-size: 18px;
    }
    .el-collapse-item{
        .el-collapse-item__wrap{
            max-height: 200px;
            overflow-y: scroll;
        }
    }
</style>
