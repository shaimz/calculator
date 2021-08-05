"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["resources_js_components_calculation_vue-resources_js_components_dataTable_vue"],{"./resources/js/components/calculation.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/calculation.vue + 4 modules ***!
  \*************************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ calculation)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/calculation.vue?vue&type=template&id=3528d564&scoped=true\n\n\nconst _withId = /*#__PURE__*/(0,vue_esm_bundler.withScopeId)("data-v-3528d564");\n\n(0,vue_esm_bundler.pushScopeId)("data-v-3528d564");\n\nconst _hoisted_1 = {\n  id: "categories"\n};\n\nconst _hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h2", null, "Groups", -1\n/* HOISTED */\n);\n\nconst _hoisted_3 = {\n  id: "groups-list"\n};\nconst _hoisted_4 = {\n  id: "ingredients"\n};\n\nconst _hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h2", null, "Food and Ingredients", -1\n/* HOISTED */\n);\n\nconst _hoisted_6 = {\n  key: 0,\n  id: "food-list"\n};\n\n(0,vue_esm_bundler.popScopeId)();\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  const _component_dataTable = (0,vue_esm_bundler.resolveComponent)("dataTable");\n\n  const _component_modal = (0,vue_esm_bundler.resolveComponent)("modal");\n\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, [(0,vue_esm_bundler.createVNode)("div", _hoisted_1, [_hoisted_2, (0,vue_esm_bundler.createVNode)("div", _hoisted_3, [(0,vue_esm_bundler.createVNode)(_component_dataTable, {\n    onLoading: _ctx.setLoading,\n    loading: _ctx.loading,\n    key: _ctx.groupRows,\n    get: \'getGroups\',\n    add: \'setGroup\',\n    update: \'updateGroup\',\n    onCategory: _ctx.setGroup,\n    "item-id": _ctx.group,\n    model: _ctx.modelGroups,\n    rows: _ctx.groupRows\n  }, null, 8\n  /* PROPS */\n  , ["onLoading", "loading", "onCategory", "item-id", "model", "rows"])])]), (0,vue_esm_bundler.createVNode)("div", _hoisted_4, [_hoisted_5, _ctx.groupRows[0].created ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", _hoisted_6, [(0,vue_esm_bundler.createVNode)(_component_dataTable, {\n    onLoading: _ctx.setLoading,\n    loading: _ctx.loading,\n    key: _ctx.foodRows,\n    get: \'getFoods\',\n    add: \'setFood\',\n    update: \'updateFood\',\n    "item-id": _ctx.group,\n    model: _ctx.modelFoods,\n    rows: _ctx.foodRows\n  }, null, 8\n  /* PROPS */\n  , ["onLoading", "loading", "item-id", "model", "rows"]), (0,vue_esm_bundler.createVNode)(_component_modal, {\n    food: _ctx.food,\n    group: _ctx.group\n  }, null, 8\n  /* PROPS */\n  , ["food", "group"]), _ctx.food_ingredientRows[0].created ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_dataTable, {\n    id: "food-ingredient-list",\n    onLoading: _ctx.setLoading,\n    loading: _ctx.loading,\n    key: _ctx.food_ingredientRows,\n    get: \'getFoodIngredients\',\n    add: \'setFoodIngredient\',\n    update: \'updateFoodIngredient\',\n    "item-id": _ctx.group,\n    model: _ctx.modelFoodIngredients,\n    rows: _ctx.food_ingredientRows\n  }, null, 8\n  /* PROPS */\n  , ["onLoading", "loading", "item-id", "model", "rows"])) : (0,vue_esm_bundler.createCommentVNode)("v-if", true)])) : (0,vue_esm_bundler.createCommentVNode)("v-if", true)])], 64\n  /* STABLE_FRAGMENT */\n  );\n});\n;// CONCATENATED MODULE: ./resources/js/components/calculation.vue?vue&type=template&id=3528d564&scoped=true\n\n// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js\nvar vuex_esm_bundler = __webpack_require__("./node_modules/vuex/dist/vuex.esm-bundler.js");\n// EXTERNAL MODULE: ./resources/js/components/dataTable.vue + 6 modules\nvar dataTable = __webpack_require__("./resources/js/components/dataTable.vue");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/calculation.vue?vue&type=script&lang=js\n\n\n\n/* harmony default export */ const calculationvue_type_script_lang_js = ((0,vue_esm_bundler.defineComponent)({\n  components: {\n    dataTable: dataTable.default\n  },\n\n  setup() {\n    const store = (0,vuex_esm_bundler.useStore)();\n    const loading = (0,vue_esm_bundler.ref)(false); //Groups\n\n    let modelGroups = (0,vue_esm_bundler.ref)({\n      name: \'\',\n      type: \'group\',\n      edited: false\n    });\n    let groupRows = (0,vue_esm_bundler.ref)([modelGroups.value]);\n    const groups = (0,vue_esm_bundler.computed)(() => store.state.groups);\n    const group = (0,vue_esm_bundler.ref)(typeof groups.value[0] !== \'undefined\' ? groups.value[0].id : null);\n\n    const fetchGroups = async () => {\n      loading.value = true;\n      await store.dispatch(\'getGroups\').then(() => {\n        loading.value = false;\n\n        if (groups.value.length) {\n          groupRows.value = groups.value.map(item => {\n            return {\n              id: typeof item.id !== \'undefined\' ? item.id : null,\n              name: typeof item.name !== \'undefined\' ? item.name : \'\',\n              type: \'group\',\n              created: true\n            };\n          });\n        }\n      });\n    };\n\n    (0,vue_esm_bundler.watch)(() => groups.value.length, (n, o) => {\n      if (n !== o) {\n        fetchGroups().then(() => {\n          group.value = groups.value.length ? groups.value[0].hasOwnProperty(\'id\') ? groups.value[0].id : null : null;\n        });\n      }\n    }, {\n      immediate: true\n    });\n\n    const setGroup = val => {\n      group.value = val;\n    }; //Foods\n\n\n    const foods = (0,vue_esm_bundler.computed)(() => store.state.foods);\n    let modelFoods = (0,vue_esm_bundler.ref)({\n      name: \'\',\n      portions: 0,\n      price_portion: 0,\n      type: \'food\',\n      edited: false\n    });\n    let foodRows = (0,vue_esm_bundler.ref)([{ ...modelFoods.value\n    }]);\n    const food = (0,vue_esm_bundler.ref)(typeof food_ingredients.value[0] !== \'undefined\' ? food_ingredients.value[0].id : null);\n\n    const fetchFoods = group_id => {\n      loading.value = true;\n      store.dispatch(\'getFoods\', {\n        group_id: group_id\n      }).then(() => {\n        loading.value = false;\n\n        if (foods.value.length) {\n          console.log(foods.value.length);\n          foodRows.value = foods.value.map(item => {\n            return {\n              id: typeof item.id !== \'undefined\' ? item.id : null,\n              name: typeof item.name !== \'undefined\' ? item.name : \'\',\n              group_id: typeof item.group_id !== \'undefined\' ? item.group_id : null,\n              portions: typeof item.portions !== \'undefined\' ? item.portions : 0,\n              price_portion: typeof item.price_portion !== \'undefined\' ? item.price_portion : 0,\n              type: \'food\',\n              created: true\n            };\n          });\n        } else {\n          foodRows.value = [{ ...modelFoods.value\n          }];\n        }\n      });\n    };\n\n    (0,vue_esm_bundler.watch)(() => group.value, (n, o) => {\n      if (n !== o) {\n        console.log({\n          group: [n, o]\n        });\n        fetchFoods(group.value);\n      }\n    }, {\n      immediate: true\n    }); // watch(() => foods.value.length,\n    //     (n, o) => {\n    //         if (n !== o) {\n    //\n    //         }\n    //     }, {deep: true});\n    //Ingredients\n\n    const food_ingredients = (0,vue_esm_bundler.computed)(() => store.state.food_ingredients);\n    let modelFoodIngredients = (0,vue_esm_bundler.ref)({\n      name: \'\',\n      portions: 0,\n      price_portion: 0,\n      type: \'food_ingredient\',\n      edited: false\n    });\n    let food_ingredientRows = (0,vue_esm_bundler.ref)([{ ...modelFoodIngredients.value\n    }]);\n\n    const fetchFoodIngredients = food_id => {\n      loading.value = true;\n      store.dispatch(\'getFoodIngredients\', {\n        food_id: food_id\n      }).then(() => {\n        loading.value = false;\n\n        if (food_ingredients.value.length) {\n          console.log(food_ingredients.value.length);\n          food_ingredientRows.value = food_ingredients.value.map(item => {\n            return {\n              id: typeof item.id !== \'undefined\' ? item.id : null,\n              name: typeof item.name !== \'undefined\' ? item.name : \'\',\n              food_id: typeof item.food_id !== \'undefined\' ? item.food_id : null,\n              portions: typeof item.portions !== \'undefined\' ? item.portions : 0,\n              price_portion: typeof item.price_portion !== \'undefined\' ? item.price_portion : 0,\n              type: \'food_ingredient\',\n              created: true\n            };\n          });\n        } else {\n          food_ingredientRows.value = [{ ...modelFoodIngredients.value\n          }];\n        }\n      });\n    };\n\n    (0,vue_esm_bundler.watch)(() => group.value, (n, o) => {\n      if (n !== o) {\n        fetchFoodIngredients(food.value);\n      }\n    }, {\n      immediate: true\n    }); // watch(() => foods.value.length,\n    //     (n, o) => {\n    //         if (n !== o) {\n    //             foodRows\n    //         }\n    //     }, {deep: true});\n\n    const setLoading = v => {\n      loading.value = v;\n    };\n\n    return {\n      foods,\n      groups,\n      foodRows,\n      groupRows,\n      modelFoods,\n      modelGroups,\n      setGroup,\n      group,\n      food,\n      modelFoodIngredients,\n      food_ingredientRows,\n      loading,\n      setLoading\n    };\n  }\n\n}));\n;// CONCATENATED MODULE: ./resources/js/components/calculation.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./resources/js/components/calculation.vue\n\n\n\ncalculationvue_type_script_lang_js.render = render\ncalculationvue_type_script_lang_js.__scopeId = "data-v-3528d564"\n/* hot reload */\nif (false) {}\n\ncalculationvue_type_script_lang_js.__file = "resources/js/components/calculation.vue"\n\n/* harmony default export */ const calculation = (calculationvue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/components/calculation.vue_+_4_modules?')}}]);