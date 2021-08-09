"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["resources_js_components_calculation_vue"],{"./resources/js/components/calculation.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/calculation.vue + 4 modules ***!
  \*************************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ calculation)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/calculation.vue?vue&type=template&id=3528d564&scoped=true\n\n\nconst _withId = /*#__PURE__*/(0,vue_esm_bundler.withScopeId)("data-v-3528d564");\n\n(0,vue_esm_bundler.pushScopeId)("data-v-3528d564");\n\nconst _hoisted_1 = {\n  id: "categories"\n};\n\nconst _hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h2", null, "Groups", -1\n/* HOISTED */\n);\n\nconst _hoisted_3 = {\n  id: "groups-list"\n};\nconst _hoisted_4 = {\n  id: "ingredients"\n};\n\nconst _hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h2", null, "Food and Ingredients", -1\n/* HOISTED */\n);\n\nconst _hoisted_6 = {\n  key: 0,\n  id: "food-list"\n};\n\n(0,vue_esm_bundler.popScopeId)();\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  const _component_dataTable = (0,vue_esm_bundler.resolveComponent)("dataTable");\n\n  const _component_modal = (0,vue_esm_bundler.resolveComponent)("modal");\n\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, [(0,vue_esm_bundler.createVNode)("div", _hoisted_1, [_hoisted_2, (0,vue_esm_bundler.createVNode)("div", _hoisted_3, [(0,vue_esm_bundler.createVNode)(_component_dataTable, {\n    onLoading: _ctx.setLoading,\n    loading: _ctx.loading,\n    key: _ctx.groupRows,\n    get: \'getGroups\',\n    add: \'setGroup\',\n    update: \'updateGroup\',\n    onCategory: _ctx.setGroup,\n    "item-id": _ctx.group,\n    model: _ctx.modelGroups,\n    rows: _ctx.groupRows\n  }, null, 8\n  /* PROPS */\n  , ["onLoading", "loading", "onCategory", "item-id", "model", "rows"])])]), (0,vue_esm_bundler.createVNode)("div", _hoisted_4, [_hoisted_5, _ctx.groupRows[0].created ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", _hoisted_6, [(0,vue_esm_bundler.createVNode)(_component_dataTable, {\n    onModal: _ctx.toggleModal,\n    onLoading: _ctx.setLoading,\n    loading: _ctx.loading,\n    key: _ctx.foodRows,\n    get: \'getFoods\',\n    onCategory: _ctx.setFood,\n    add: \'setFood\',\n    update: \'updateFood\',\n    "item-id": _ctx.group,\n    food: _ctx.food,\n    model: _ctx.modelFoods,\n    rows: _ctx.foodRows\n  }, null, 8\n  /* PROPS */\n  , ["onModal", "onLoading", "loading", "onCategory", "item-id", "food", "model", "rows"]), (0,vue_esm_bundler.createVNode)(_component_modal, {\n    key: _ctx.food,\n    onModal: _ctx.toggleModal,\n    itemId: _ctx.food,\n    type: \'group\',\n    data: _ctx.modalFoods,\n    group: _ctx.group,\n    dialog: _ctx.modal\n  }, null, 8\n  /* PROPS */\n  , ["onModal", "itemId", "data", "group", "dialog"]), _ctx.food_ingredientRows[0] ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_dataTable, {\n    id: "food-ingredient-list",\n    onLoading: _ctx.setLoading,\n    loading: _ctx.loading,\n    key: _ctx.food_ingredientRows,\n    get: \'getFoodIngredients\',\n    add: \'setFoodIngredient\',\n    update: \'updateFoodIngredient\',\n    "item-id": _ctx.food,\n    model: _ctx.modelFoodIngredients,\n    rows: _ctx.food_ingredientRows\n  }, null, 8\n  /* PROPS */\n  , ["onLoading", "loading", "item-id", "model", "rows"])) : (0,vue_esm_bundler.createCommentVNode)("v-if", true)])) : (0,vue_esm_bundler.createCommentVNode)("v-if", true)])], 64\n  /* STABLE_FRAGMENT */\n  );\n});\n;// CONCATENATED MODULE: ./resources/js/components/calculation.vue?vue&type=template&id=3528d564&scoped=true\n\n// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js\nvar vuex_esm_bundler = __webpack_require__("./node_modules/vuex/dist/vuex.esm-bundler.js");\n// EXTERNAL MODULE: ./resources/js/components/dataTable.vue + 6 modules\nvar dataTable = __webpack_require__("./resources/js/components/dataTable.vue");\n// EXTERNAL MODULE: ./resources/js/components/modal.vue + 6 modules\nvar modal = __webpack_require__("./resources/js/components/modal.vue");\n// EXTERNAL MODULE: ./resources/js/components/ingredients.vue + 4 modules\nvar ingredients = __webpack_require__("./resources/js/components/ingredients.vue");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/calculation.vue?vue&type=script&lang=js\n\n\n\n\n\n/* harmony default export */ const calculationvue_type_script_lang_js = ((0,vue_esm_bundler.defineComponent)({\n  components: {\n    dataTable: dataTable.default,\n    modal: modal.default\n  },\n\n  setup() {\n    const store = (0,vuex_esm_bundler.useStore)();\n    const modal = (0,vue_esm_bundler.ref)(false);\n    const loading = (0,vue_esm_bundler.ref)(false); //Groups\n\n    let modelGroups = (0,vue_esm_bundler.ref)({\n      name: \'\',\n      type: \'group\',\n      edited: false\n    });\n    let groupRows = (0,vue_esm_bundler.ref)([modelGroups.value]);\n    const groups = (0,vue_esm_bundler.computed)(() => store.state.groups);\n    const group = (0,vue_esm_bundler.ref)(typeof groups.value[0] !== \'undefined\' ? groups.value[0].id : null);\n\n    const fetchGroups = async () => {\n      loading.value = true;\n      await store.dispatch(\'getGroups\').then(() => {\n        loading.value = false;\n\n        if (groups.value.length) {\n          groupRows.value = groups.value.map(item => {\n            return {\n              id: typeof item.id !== \'undefined\' ? item.id : null,\n              name: typeof item.name !== \'undefined\' ? item.name : \'\',\n              type: \'group\',\n              created: true\n            };\n          });\n        }\n      });\n    };\n\n    (0,vue_esm_bundler.watch)(() => groups.value.length, (n, o) => {\n      if (n !== o) {\n        fetchGroups().then(() => {\n          group.value = groups.value.length ? groups.value[0].hasOwnProperty(\'id\') ? groups.value[0].id : null : null;\n        });\n      }\n    }, {\n      immediate: true\n    });\n\n    const setGroup = val => {\n      group.value = val;\n    }; //Foods\n\n\n    const foods = (0,vue_esm_bundler.computed)(() => store.state.foods);\n    const categories = (0,vue_esm_bundler.computed)(() => store.state.categories);\n    const ingredients = (0,vue_esm_bundler.computed)(() => store.state.ingredients);\n    store.dispatch(\'getCategories\', {});\n    store.dispatch(\'getIngredients\', {\n      category_id: \'all\'\n    });\n    const modalFoods = (0,vue_esm_bundler.computed)(() => ingredients.value.map(item => {\n      return {\n        children: item.ingredients.map(elem => {\n          return {\n            key: elem.id,\n            name: elem.name,\n            category_id: elem.category_id\n          };\n        }),\n        disabled: false,\n        key: item.id,\n        name: item.name\n      };\n    }));\n    let modelFoods = (0,vue_esm_bundler.ref)({\n      name: \'\',\n      portions: 0,\n      price_portion: 0,\n      type: \'food\',\n      edited: false\n    });\n    let foodRows = (0,vue_esm_bundler.ref)([{ ...modelFoods.value\n    }]);\n    const food = (0,vue_esm_bundler.ref)(typeof foods.value[0] !== \'undefined\' ? foods.value[0].id : null);\n    const foodName = (0,vue_esm_bundler.computed)(() => typeof foods.value[0] !== \'undefined\' ? foods.value[0].name : null);\n\n    const fetchFoods = async group_id => {\n      if (group_id) {\n        loading.value = true;\n        await store.dispatch(\'getFoods\', {\n          group_id: group_id\n        }).then(() => {\n          loading.value = false;\n\n          if (foods.value.length) {\n            foodRows.value = foods.value.map(item => {\n              return {\n                id: typeof item.id !== \'undefined\' ? item.id : null,\n                name: typeof item.name !== \'undefined\' ? item.name : \'\',\n                group_id: typeof item.group_id !== \'undefined\' ? item.group_id : null,\n                portions: typeof item.portions !== \'undefined\' ? item.portions : 0,\n                price_portion: typeof item.price_portion !== \'undefined\' ? item.price_portion : 0,\n                type: \'food\',\n                created: true\n              };\n            });\n          } else {\n            foodRows.value = [{ ...modelFoods.value\n            }];\n          }\n        });\n      }\n    };\n\n    (0,vue_esm_bundler.watch)(() => foods.value.length, (n, o) => {\n      if (n !== o) {\n        food.value = foods.value.length ? typeof foods.value[0] !== \'undefined\' ? foods.value[0].id : null : null;\n        foodName.value = typeof foods.value[0] !== \'undefined\' ? foods.value[0].name : null;\n      }\n    }, {\n      immediate: true\n    }); //Ingredients\n\n    const food_ingredients = (0,vue_esm_bundler.computed)(() => store.state.food_ingredients);\n    let modelFoodIngredients = (0,vue_esm_bundler.ref)({\n      name: \'\',\n      portions: 0,\n      price_portion: 0,\n      type: \'food_ingredient\',\n      edited: false\n    });\n    let food_ingredientRows = (0,vue_esm_bundler.ref)([{ ...modelFoodIngredients.value\n    }]);\n\n    const setFood = v => {\n      food.value = v;\n    };\n\n    const fetchFoodIngredients = food_id => {\n      if (food_id) {\n        loading.value = true;\n        store.dispatch(\'getFoodIngredients\', {\n          food_id: food_id\n        }).then(() => {\n          loading.value = false;\n          console.log(food_ingredients);\n\n          if (food_ingredients.value.length) {\n            console.log(food_ingredients.value.length);\n            food_ingredientRows.value = food_ingredients.value.map(item => {\n              return {\n                id: typeof item.id !== \'undefined\' ? item.id : null,\n                name: typeof item.ingredient.name !== \'undefined\' ? item.ingredient.name : \'\',\n                food_id: typeof item.food_id !== \'undefined\' ? item.food_id : null,\n                ingredient_id: typeof item.ingredient_id !== \'undefined\' ? item.ingredient_id : null,\n                quantity: typeof item.quantity !== \'undefined\' ? item.quantity : 0,\n                measure: typeof item.ingredient.measure !== \'undefined\' ? item.ingredient.measure : 0,\n                type: \'food_ingredient\',\n                created: true\n              };\n            });\n          } else {\n            food_ingredientRows.value = [{ ...modelFoodIngredients.value\n            }];\n          }\n        });\n      } else {\n        food_ingredientRows.value = [{ ...modelFoodIngredients.value\n        }];\n      }\n    };\n\n    (0,vue_esm_bundler.watch)(() => group.value, (n, o) => {\n      if (n !== o) {\n        fetchFoods(group.value).then(() => {\n          fetchFoodIngredients(food.value);\n          food.value = foods.value.length ? typeof foods.value[0] !== \'undefined\' ? foods.value[0].id : null : null;\n          foodName.value = typeof foods.value[0] !== \'undefined\' ? foods.value[0].name : null;\n        });\n      }\n    }, {\n      immediate: true\n    });\n    (0,vue_esm_bundler.watch)(() => food.value, (n, o) => {\n      if (n !== o) {\n        fetchFoodIngredients(food.value);\n      }\n    });\n    (0,vue_esm_bundler.watch)(() => food_ingredients, (n, o) => {\n      if (n !== o) {\n        fetchFoodIngredients(food.value);\n      }\n    }, {\n      deep: true\n    }); // watch(() => foods.value.length,\n    //     (n, o) => {\n    //         if (n !== o) {\n    //             foodRows\n    //         }\n    //     }, {deep: true});\n\n    const setLoading = v => {\n      loading.value = v;\n    };\n\n    const toggleModal = v => {\n      modal.value = v;\n    };\n\n    return {\n      foods,\n      groups,\n      foodRows,\n      groupRows,\n      modelFoods,\n      modelGroups,\n      ingredients,\n      setGroup,\n      group,\n      food,\n      foodName,\n      modelFoodIngredients,\n      food_ingredientRows,\n      food_ingredients,\n      categories,\n      loading,\n      setLoading,\n      modal,\n      modalFoods,\n      toggleModal,\n      setFood\n    };\n  }\n\n}));\n;// CONCATENATED MODULE: ./resources/js/components/calculation.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./resources/js/components/calculation.vue\n\n\n\ncalculationvue_type_script_lang_js.render = render\ncalculationvue_type_script_lang_js.__scopeId = "data-v-3528d564"\n/* hot reload */\nif (false) {}\n\ncalculationvue_type_script_lang_js.__file = "resources/js/components/calculation.vue"\n\n/* harmony default export */ const calculation = (calculationvue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/components/calculation.vue_+_4_modules?')},"./resources/js/components/ingredients.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/ingredients.vue + 4 modules ***!
  \*************************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ ingredients)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/ingredients.vue?vue&type=template&id=1f544a72&scoped=true\n\n\nconst _withId = /*#__PURE__*/(0,vue_esm_bundler.withScopeId)("data-v-1f544a72");\n\n(0,vue_esm_bundler.pushScopeId)("data-v-1f544a72");\n\nconst _hoisted_1 = {\n  id: "categories"\n};\n\nconst _hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h2", null, "Categories", -1\n/* HOISTED */\n);\n\nconst _hoisted_3 = {\n  id: "categories-list"\n};\nconst _hoisted_4 = {\n  id: "ingredients"\n};\n\nconst _hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h2", null, "Ingredients", -1\n/* HOISTED */\n);\n\nconst _hoisted_6 = {\n  key: 0,\n  id: "ingredient-list"\n};\n\n(0,vue_esm_bundler.popScopeId)();\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  const _component_dataTable = (0,vue_esm_bundler.resolveComponent)("dataTable");\n\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, [(0,vue_esm_bundler.createVNode)("div", _hoisted_1, [_hoisted_2, (0,vue_esm_bundler.createVNode)("div", _hoisted_3, [(0,vue_esm_bundler.createVNode)(_component_dataTable, {\n    onLoading: _ctx.setLoading,\n    loading: _ctx.loading,\n    key: _ctx.categoryRows,\n    get: \'getCategories\',\n    add: \'setCategory\',\n    update: \'updateCategory\',\n    onCategory: _ctx.setCategory,\n    "item-id": _ctx.category,\n    model: _ctx.modelCategories,\n    rows: _ctx.categoryRows\n  }, null, 8\n  /* PROPS */\n  , ["onLoading", "loading", "onCategory", "item-id", "model", "rows"])])]), (0,vue_esm_bundler.createVNode)("div", _hoisted_4, [_hoisted_5, _ctx.categoryRows[0].created ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", _hoisted_6, [(0,vue_esm_bundler.createVNode)(_component_dataTable, {\n    onLoading: _ctx.setLoading,\n    loading: _ctx.loading,\n    key: _ctx.ingredientRows,\n    get: \'getIngredients\',\n    add: \'setIngredient\',\n    update: \'updateIngredient\',\n    "item-id": _ctx.category,\n    model: _ctx.modelIngredients,\n    rows: _ctx.ingredientRows\n  }, null, 8\n  /* PROPS */\n  , ["onLoading", "loading", "item-id", "model", "rows"])])) : (0,vue_esm_bundler.createCommentVNode)("v-if", true)])], 64\n  /* STABLE_FRAGMENT */\n  );\n});\n;// CONCATENATED MODULE: ./resources/js/components/ingredients.vue?vue&type=template&id=1f544a72&scoped=true\n\n// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js\nvar vuex_esm_bundler = __webpack_require__("./node_modules/vuex/dist/vuex.esm-bundler.js");\n// EXTERNAL MODULE: ./resources/js/components/dataTable.vue + 6 modules\nvar dataTable = __webpack_require__("./resources/js/components/dataTable.vue");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/ingredients.vue?vue&type=script&lang=js\n\n\n\n/* harmony default export */ const ingredientsvue_type_script_lang_js = ((0,vue_esm_bundler.defineComponent)({\n  components: {\n    dataTable: dataTable.default\n  },\n\n  setup() {\n    const store = (0,vuex_esm_bundler.useStore)();\n    const loading = (0,vue_esm_bundler.ref)(false);\n    let modelCategories = (0,vue_esm_bundler.ref)({\n      name: \'\',\n      type: \'category\',\n      edited: false\n    });\n    let categoryRows = (0,vue_esm_bundler.ref)([modelCategories.value]);\n    const categories = (0,vue_esm_bundler.computed)(() => store.state.categories);\n    const category = (0,vue_esm_bundler.ref)(typeof categories.value[0] !== \'undefined\' ? categories.value.id : null);\n\n    const fetchCategories = async () => {\n      loading.value = true;\n      await store.dispatch(\'getCategories\').then(() => {\n        loading.value = false;\n\n        if (categories.value.length) {\n          categoryRows.value = categories.value.map(item => {\n            return {\n              id: typeof item.id !== \'undefined\' ? item.id : null,\n              name: typeof item.name !== \'undefined\' ? item.name : \'\',\n              type: \'category\',\n              created: true\n            };\n          });\n        }\n      });\n    };\n\n    (0,vue_esm_bundler.onMounted)(() => {});\n    (0,vue_esm_bundler.watch)(() => categories.value.length, (n, o) => {\n      if (n !== o) {\n        fetchCategories().then(() => {\n          category.value = categories.value.length ? categories.value[0].hasOwnProperty(\'id\') ? categories.value[0].id : null : null;\n        });\n      }\n    }, {\n      immediate: true\n    });\n\n    const setCategory = val => {\n      category.value = val;\n    };\n\n    const ingredients = (0,vue_esm_bundler.computed)(() => store.state.ingredients);\n    let modelIngredients = (0,vue_esm_bundler.ref)({\n      name: \'\',\n      price: 0,\n      measure: \'kg\',\n      portions: 0,\n      type: \'ingredient\',\n      edited: false\n    });\n    let ingredientRows = (0,vue_esm_bundler.ref)([modelIngredients.value]);\n\n    const fetchIngredients = category_id => {\n      if (category_id) {\n        loading.value = true;\n        store.dispatch(\'getIngredients\', {\n          category_id: category_id\n        }).then(() => {\n          loading.value = false;\n\n          if (ingredients.value.length) {\n            ingredientRows.value = ingredients.value.map(item => {\n              return {\n                id: typeof item.id !== \'undefined\' ? item.id : null,\n                name: typeof item.name !== \'undefined\' ? item.name : \'\',\n                category_id: typeof item.category_id !== \'undefined\' ? item.category_id : null,\n                price: typeof item.price !== \'undefined\' ? item.price : 0,\n                measure: typeof item.measure !== \'undefined\' ? item.measure : \'Kg\',\n                type: \'ingredient\',\n                created: true\n              };\n            });\n          } else {\n            ingredientRows.value = [modelIngredients.value];\n          }\n        });\n      }\n    };\n\n    (0,vue_esm_bundler.watch)(() => category.value, (n, o) => {\n      if (n !== o) {\n        fetchIngredients(category.value);\n      }\n    }, {\n      immediate: true\n    }); // watch(() => ingredients.value.length,\n    //     (n, o) => {\n    //         if (n !== o) {\n    //             fetchIngredients(category.value)\n    //         }\n    //     }, {deep: true});\n\n    const setLoading = v => {\n      loading.value = v;\n    };\n\n    return {\n      ingredients,\n      categories,\n      ingredientRows,\n      categoryRows,\n      modelIngredients,\n      modelCategories,\n      setCategory,\n      category,\n      loading,\n      setLoading\n    };\n  }\n\n}));\n;// CONCATENATED MODULE: ./resources/js/components/ingredients.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./resources/js/components/ingredients.vue\n\n\n\ningredientsvue_type_script_lang_js.render = render\ningredientsvue_type_script_lang_js.__scopeId = "data-v-1f544a72"\n/* hot reload */\nif (false) {}\n\ningredientsvue_type_script_lang_js.__file = "resources/js/components/ingredients.vue"\n\n/* harmony default export */ const ingredients = (ingredientsvue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/components/ingredients.vue_+_4_modules?')},"./resources/js/components/modal.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/modal.vue + 6 modules ***!
  \*******************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ modal)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/modal.vue?vue&type=template&id=478d961c&scoped=true\n\n\nconst _withId = /*#__PURE__*/(0,vue_esm_bundler.withScopeId)("data-v-478d961c");\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  const _component_ElTransferGroup = (0,vue_esm_bundler.resolveComponent)("ElTransferGroup");\n\n  const _component_el_dialog = (0,vue_esm_bundler.resolveComponent)("el-dialog");\n\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_dialog, {\n    title: _ctx.props.type === \'group\' ? \'Ingredients\' : \'Menu\',\n    modelValue: _ctx.modal,\n    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.modal = $event)\n  }, {\n    default: _withId(() => [(0,vue_esm_bundler.createCommentVNode)("        <el-transfer"), (0,vue_esm_bundler.createCommentVNode)("            v-model=\\"rightValues\\""), (0,vue_esm_bundler.createCommentVNode)("            style=\\"text-align: left; display: inline-block\\""), (0,vue_esm_bundler.createCommentVNode)("            :titles=\\"[\'All ingredients\', \'Ingredients \' + capital(foodName)]\\""), (0,vue_esm_bundler.createCommentVNode)("            :button-texts=\\"[\'Remove\', \'Add\']\\""), (0,vue_esm_bundler.createCommentVNode)("            :format=\\"{"), (0,vue_esm_bundler.createCommentVNode)("          noChecked: \'${total}\',"), (0,vue_esm_bundler.createCommentVNode)("          hasChecked: \'${checked}/${total}\'"), (0,vue_esm_bundler.createCommentVNode)("        }\\""), (0,vue_esm_bundler.createCommentVNode)("            :data=\\"data\\""), (0,vue_esm_bundler.createCommentVNode)("            @change=\\"handleChange\\""), (0,vue_esm_bundler.createCommentVNode)("        >"), (0,vue_esm_bundler.createCommentVNode)("            <template #default=\\"{ option }\\" class=\\"d-flex justify-content-between align-items-center\\">"), (0,vue_esm_bundler.createCommentVNode)("                <span>{{ option.name }}</span>"), (0,vue_esm_bundler.createCommentVNode)("                <el-checkbox-group fill=\\"#ffc90e\\" v-model=\\"rightValues\\">"), (0,vue_esm_bundler.createCommentVNode)("                    <el-checkbox v-for=\\"child in option.children\\" :label=\\"child.name\\" @change=\\"handleCheck(child)\\">"), (0,vue_esm_bundler.createCommentVNode)("                        <template #default=\\"scope\\">"), (0,vue_esm_bundler.createCommentVNode)("                            <span>{{child.name}}</span>"), (0,vue_esm_bundler.createCommentVNode)("                            <input @change=\\"handleUpdate\\" type=\\"number\\" v-model=\\"quantity[option.key]\\" class=\\"quantity-input\\">"), (0,vue_esm_bundler.createCommentVNode)("                        </template>"), (0,vue_esm_bundler.createCommentVNode)("                    </el-checkbox>"), (0,vue_esm_bundler.createCommentVNode)("                </el-checkbox-group>"), (0,vue_esm_bundler.createCommentVNode)("            </template>"), (0,vue_esm_bundler.createCommentVNode)("            &lt;!&ndash;<template #left-footer>&ndash;&gt;"), (0,vue_esm_bundler.createCommentVNode)("                &lt;!&ndash;<el-button class=\\"transfer-footer\\" size=\\"small\\">Operation</el-button>&ndash;&gt;"), (0,vue_esm_bundler.createCommentVNode)("            &lt;!&ndash;</template>&ndash;&gt;"), (0,vue_esm_bundler.createCommentVNode)("            &lt;!&ndash;<template #right-footer>&ndash;&gt;"), (0,vue_esm_bundler.createCommentVNode)("                &lt;!&ndash;<el-button class=\\"transfer-footer\\" size=\\"small\\">Operation</el-button>&ndash;&gt;"), (0,vue_esm_bundler.createCommentVNode)("            &lt;!&ndash;</template>&ndash;&gt;"), (0,vue_esm_bundler.createCommentVNode)("        </el-transfer>"), _ctx.test ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_ElTransferGroup, {\n      key: 0,\n      onFetchItems: _ctx.emitFetch,\n      itemId: _ctx.itemId,\n      name: _ctx.name,\n      type: _ctx.props.type,\n      price: _ctx.price,\n      quantity: _ctx.quantity,\n      "left-list": _ctx.left,\n      "right-list": _ctx.right\n    }, null, 8\n    /* PROPS */\n    , ["onFetchItems", "itemId", "name", "type", "price", "quantity", "left-list", "right-list"])) : (0,vue_esm_bundler.createCommentVNode)("v-if", true)]),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , ["title", "modelValue"]);\n});\n;// CONCATENATED MODULE: ./resources/js/components/modal.vue?vue&type=template&id=478d961c&scoped=true\n\n// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js\nvar vuex_esm_bundler = __webpack_require__("./node_modules/vuex/dist/vuex.esm-bundler.js");\n// EXTERNAL MODULE: ./resources/js/components/transfer/el-transfer-group.vue + 6 modules\nvar el_transfer_group = __webpack_require__("./resources/js/components/transfer/el-transfer-group.vue");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/modal.vue?vue&type=script&lang=js\n\n\n\n/* harmony default export */ const modalvue_type_script_lang_js = ((0,vue_esm_bundler.defineComponent)({\n  components: {\n    ElTransferGroup: el_transfer_group.default\n  },\n  props: [\'dialog\', \'itemId\', \'group\', \'data\', \'reset\', \'name\', \'menu\', \'type\'],\n  emits: [\'modal\'],\n\n  setup(props, context) {\n    console.log(\'rerender modal\');\n    const store = (0,vuex_esm_bundler.useStore)();\n    const dialog = (0,vue_esm_bundler.computed)(() => props.dialog);\n    const modal = (0,vue_esm_bundler.ref)(dialog.value);\n    const data = (0,vue_esm_bundler.computed)(() => props.data);\n    const name = (0,vue_esm_bundler.ref)(\'Mancaruri\');\n    const test = (0,vue_esm_bundler.ref)(true);\n    const itemId = (0,vue_esm_bundler.computed)(() => props.itemId);\n    const id = (0,vue_esm_bundler.toRefs)(props).itemId;\n    const quantity = (0,vue_esm_bundler.ref)({});\n    const price = (0,vue_esm_bundler.ref)({});\n    const checked = (0,vue_esm_bundler.ref)([]);\n    const ingredients = (0,vue_esm_bundler.computed)(() => store.state.food_ingredients);\n    const items = (0,vue_esm_bundler.computed)(() => store.state.menu_items);\n    const right = (0,vue_esm_bundler.computed)(() => {\n      if (props.type === \'group\') {\n        return ingredients.value.map((item, index) => {\n          return {\n            key: item.ingredient_id,\n            name: item.ingredient.name,\n            category_id: item.category_id,\n            price_portion: item.food.price_portion,\n            portions: item.food.portions,\n            fixed: true\n          };\n        });\n      } else {\n        return items.value.map((item, index) => {\n          return {\n            key: item.food_id,\n            name: item.food.name,\n            price_portion: item.food.price_portion,\n            portions: item.food.portions,\n            menu_id: item.menu_id,\n            group_id: item.group_id,\n            fixed: true\n          };\n        });\n      }\n    }); // const left = computed(() => {\n    //     return data.value.map((el) => el.children.filter((item) => !data.value.some((elem) => elem.key !== item.ingredient_id)))\n    // });\n\n    const left = (0,vue_esm_bundler.ref)([]); // const left = computed(() => data.value.map((item) => {\n    //     let result = {...item};\n    //     result.children = item.children.filter((el) => !right.value.some((elem) => elem.key === el.key));\n    //     return result;\n    // }))\n\n    const leftSide = () => {\n      left.value = data.value.map(item => {\n        let result = { ...item\n        };\n        result.children = item.children.filter(el => !right.value.some(elem => elem.key === el.key));\n        return result;\n      });\n    };\n\n    (0,vue_esm_bundler.watch)(() => right.value, (n, o) => {\n      if (n !== o) {\n        leftSide();\n      }\n    }, {\n      immediate: true\n    });\n    const rightValues = (0,vue_esm_bundler.ref)([]);\n    (0,vue_esm_bundler.watch)(() => right.value, (n, o) => {\n      if (n !== o) {\n        rightValues.value = n;\n      }\n    });\n    (0,vue_esm_bundler.watch)(() => props.group, (n, o) => {\n      if (n !== o) {\n        quantity.value = {};\n      }\n    });\n    (0,vue_esm_bundler.watch)(() => props.menu, (n, o) => {\n      if (n !== o) {\n        price.value = {};\n      }\n    });\n    (0,vue_esm_bundler.watch)(() => itemId.value, (n, o) => {\n      if (n !== o) {\n        if (itemId.value) {\n          quantity.value = {};\n          price.value = {};\n\n          if (props.type === \'group\') {\n            store.dispatch(\'getFoodIngredients\', {\n              food_id: itemId.value\n            }).then(() => {\n              console.log(ingredients.value);\n              ingredients.value.map(item => quantity.value[item.ingredient_id] = item.quantity);\n            });\n          } else {\n            store.dispatch(\'getMenuItems\', {\n              menu_id: itemId.value\n            }).then(() => {\n              console.log(items.value);\n              items.value.map(item => price.value[item.food_id] = item.food.price_portion);\n            });\n          }\n        }\n      }\n    }, {\n      immediate: true\n    });\n\n    const openDialog = () => {\n      modal.value = true;\n    };\n\n    (0,vue_esm_bundler.watch)(() => dialog.value, (n, o) => {\n      if (n !== o) {\n        modal.value = n;\n      }\n    });\n    (0,vue_esm_bundler.watch)(() => modal.value, (n, o) => {\n      if (n !== o) {\n        context.emit(\'modal\', n);\n      }\n    });\n\n    const emitFetch = () => {\n      context.emit(\'fetchItems\', true);\n    };\n\n    return {\n      dialog,\n      left,\n      right,\n      rightValues,\n      modal,\n      data,\n      itemId,\n      id,\n      quantity,\n      price,\n      checked,\n      ingredients,\n      items,\n      openDialog,\n      props,\n      name,\n      test,\n      emitFetch\n    };\n  }\n\n}));\n;// CONCATENATED MODULE: ./resources/js/components/modal.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/modal.vue?vue&type=style&index=0&id=478d961c&scoped=true&lang=scss\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./resources/js/components/modal.vue?vue&type=style&index=0&id=478d961c&scoped=true&lang=scss\n\n;// CONCATENATED MODULE: ./resources/js/components/modal.vue\n\n\n\n\n;\nmodalvue_type_script_lang_js.render = render\nmodalvue_type_script_lang_js.__scopeId = "data-v-478d961c"\n/* hot reload */\nif (false) {}\n\nmodalvue_type_script_lang_js.__file = "resources/js/components/modal.vue"\n\n/* harmony default export */ const modal = (modalvue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/components/modal.vue_+_6_modules?')}}]);