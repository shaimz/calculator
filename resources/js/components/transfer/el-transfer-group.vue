<template>
    <div class="row">
        <div class="col-6">
            <div class="header-search">
                <h3>{{type === 'group' ? 'Ingredients' : 'Menu'}}</h3>
                <el-input v-model="search"></el-input>
            </div>

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
                        :move="checkMove"
                        :options="{handle:'.draggable',sort:false}"
                    >
                        <template #item="{ element, index }">
                            <div class="list-group-item d-flex justify-content-between align-items-center">{{ element.name }}
                                <i @click="insert(element)" class="el-icon-circle-plus"/>
                                <!--<input v-if="type === 'group'" type="number" v-model="quantity[element.key]"-->
                                       <!--class="quantity-input">-->
                            </div>
                        </template>
                    </draggable>
                </el-collapse-item>
            </el-collapse>
        </div>

        <div class="col-6">
            <div class="header-col d-flex justify-content-between">
                <h3>{{name}}</h3>
                <div class="quantity-header" v-if="type === 'menu'">
                    <input type="number" v-model="price['all']"
                           class="quantity-input">
                    <el-button type="success" size="medium" @click="handleUpdate(true)">Apply</el-button>
                </div>
            </div>

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
                        <input v-if="type === 'group'" @change="handleUpdate(false)" type="number" v-model="quantity[element.key]"
                               class="quantity-input">
                        <input v-else @change="handleUpdate(false,element)" type="number" v-model="price[element.key]"
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
        props: ['rightList', 'leftList', 'itemId','price', 'quantity','name','type'],
        components: {
            draggable,
            rawDisplayer
        },
        data() {
            return {
                list1: [...this.leftList],
                list2: [...this.rightList],
                drag: false,
                category:'',
                search:'',
                loadingSearch:false
            };
        },
        created(){
            console.log('rerender')
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

            handleUpdate(all = false,el = []){
                let data = {};
                if(this.type === 'group'){
                    if(all){
                        data['ingredients'] = this.quantity;
                        data['food_id'] = this.itemId;

                        let bool = this.list2.find((elem, i) => Object.keys(this.quantity)[i])
                        if(bool) this.$store.dispatch('updateFoodIngredient', data).then(() =>{
                            this.$emit('fetchItems');
                        })

                        for(let item in this.quantity){
                            this.quantity[item] = this.quantity.all;
                        }
                    }else{
                        data['ingredients'] = this.quantity;
                        data['food_id'] = this.itemId;
                        delete this.quantity.all;

                        let bool = this.list2.find((elem, i) => Object.keys(this.quantity)[i])
                        if(bool) this.$store.dispatch('updateFoodIngredient', data).then(() =>{
                            this.$emit('fetchItems');
                        })
                    }
                }else{
                    if(all){
                        data['menu_id'] = this.itemId;
                        data['portions'] = this.price;

                        for(let item in this.price){
                            this.price[item] = this.price.all;
                        }

                        this.$store.dispatch('updateMenuItem',data).then(() => {
                            this.$emit('fetchItems');
                        });
                    }else{
                        data['menu_id'] = this.itemId;
                        data['food_id'] = el.key;
                        data['portions'] = this.price[el.key];
                        delete this.price.all;
                        this.$store.dispatch('updateMenuItem',data).then(() => {
                            this.$emit('fetchItems');
                        });
                    }
                }
            },
            insert: function (item) {
                console.log(item);
                let data = {};
                let pair = {};
                let elem = {...item};

                if(this.type === 'group'){
                    pair[item.key] = this.quantity;
                    data['ingredients'] = this.quantity;
                    data['food_id'] = this.itemId;
                    data['ingredient_id'] = item.key;
                    data['category_id'] = item.category_id;
                    this.$store.dispatch('setFoodIngredient', data).then(() => {
                        this.$emit('fetchItems');
                    })
                }else{
                    console.log(item);
                    pair[item.key] = this.price;
                    data['food_id'] = item.key;
                    data['menu_id'] = this.itemId;
                    elem['fixed'] = true;

                    this.$store.dispatch('setMenuItem', data).then(() =>{
                        this.price[item.key] = this.rightList[this.rightList.findIndex((el) => el.key === item.key)].price_portion
                        this.list1.map((it) => it.children = it.children.filter((cl) => cl.key !== item.key));
                        this.list2.push(elem);
                        this.$emit('fetchItems');
                    })
                }


                // if(this.type === 'group'){
                //     data['ingredients'] = this.quantity;
                //     data['food_id'] = this.itemId;
                //     data['category_id'] = evt.removed.element.category_id;
                //     if (evt['removed']) {
                //         console.log([this.list2,this.list2.findIndex(item => item.key === evt.removed.element.key)]);
                //         // this.list2[this.list2.findIndex(item => item.key === evt.removed.element.key)]['fixed'] = true;
                //         this.$store.dispatch('setFoodIngredient', data).then(() => {
                //             this.$emit('fetchItems');
                //         })
                //     }
                // }else{
                //     data['menu_id'] = this.itemId;
                //     data['food_id'] = evt.removed.element.key;
                //     if (evt['removed']) {
                //         console.log([this.list2,this.list2.findIndex(item => item.key === evt.removed.element.key)]);
                //         // this.list2[this.list2.findIndex(item => item.key === evt.removed.element.key)]['fixed'] = true;
                //         this.$store.dispatch('setMenuItem', data).then(() =>{
                //             this.price[evt.removed.element.key] = this.rightList[this.rightList.findIndex((el) => el.key === evt.removed.element.key)].price_portion
                //             this.$emit('fetchItems');
                //         })
                //     }
                // }

            },
            remove: function (item) {
                let data = {};
                let pair = {};
                if(this.type === 'group'){
                    pair[item.key] = this.quantity[item.key];
                    data['ingredient_id'] = item.key;
                    data['food_id'] = this.itemId;
                    data['category_id'] = item.category_id;
                    this.$store.dispatch('deleteFoodIngredient', data).then(() => {
                        this.list2 = this.list2.filter((el) => el.key !== item.key)
                        console.log(item)
                        this.list1[this.list1.findIndex(el => el.key === item.category_id)].children.push(item);
                        this.$store.dispatch('getIngredients',{category_id: 'all'});
                        this.$store.dispatch('getFoodIngredients',{food_id: this.itemId}).then(() =>{
                            this.$emit('fetchItems');
                        });
                    });
                }else{
                    pair[item.key] = this.price[item.key];
                    data['foods'] = pair;
                    data['menu_id'] = this.itemId;
                    this.$store.dispatch('deleteMenuItem', data).then(() => {
                        this.list2 = this.list2.filter((el) => el.key !== item.key)
                        console.log(item);
                        this.list1[this.list1.findIndex(el => el.key === item.group_id)].children.push(item);
                        this.$store.dispatch('getMenus');
                        this.$store.dispatch('getMenuItems',{menu_id: this.itemId}).then(() =>{
                            this.$emit('fetchItems');
                        });
                    });
                }

            }
        },
        watch:{
            name(n,o){
              if(n !== o){
                  this.list2 = [...this.rightList];
                  this.list1 = [...this.leftList];
              }
            },
            search(n,o){
              if(n !== o){
                  console.log(n.length);
                  if(n.length >= 2){
                      this.loadingSearch = true;

                      if(this.loadingSearch){
                          let left = JSON.parse(JSON.stringify(this.leftList));
                          this.list1 = left.map((item) => {
                              item.children = item.children.filter(it => it.name.toLowerCase().includes(n.toLowerCase()));
                              if(item.children.length) return item;
                              else return null

                          }).filter(it => it)
                          this.loadingSearch = false;
                      }
                  }else{
                      this.list1 = [...this.leftList];
                  }
              }
            },
            itemId(n,o){
              if(n !== o){
                  this.list2 = [...this.rightList];
                  this.list1 = [...this.leftList];
              }
            },
            rightList(n,o){
                if(n !== o){
                    if(!n.length){
                        this.list2 = [];
                        this.list1 = [...this.leftList];
                    }else{
                        this.list2.map((item) => item.menu_id = this.itemId)
                    }
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
                max-width: 60px;
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
    .el-icon-circle-plus{
        font-size: 28px;
        cursor: pointer;
    }
</style>
