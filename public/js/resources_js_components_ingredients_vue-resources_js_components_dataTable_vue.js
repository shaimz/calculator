"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["resources_js_components_ingredients_vue-resources_js_components_dataTable_vue"],{"./resources/js/components/ingredients.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/ingredients.vue + 4 modules ***!
  \*************************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ ingredients)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/ingredients.vue?vue&type=template&id=1f544a72&scoped=true\n\n\nconst _withId = /*#__PURE__*/(0,vue_esm_bundler.withScopeId)("data-v-1f544a72");\n\n(0,vue_esm_bundler.pushScopeId)("data-v-1f544a72");\n\nconst _hoisted_1 = {\n  id: "categories"\n};\n\nconst _hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h2", null, "Categories", -1\n/* HOISTED */\n);\n\nconst _hoisted_3 = {\n  id: "categories-list"\n};\nconst _hoisted_4 = {\n  id: "ingredients"\n};\n\nconst _hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h2", null, "Ingredients", -1\n/* HOISTED */\n);\n\nconst _hoisted_6 = {\n  key: 0,\n  id: "ingredient-list"\n};\n\n(0,vue_esm_bundler.popScopeId)();\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  const _component_dataTable = (0,vue_esm_bundler.resolveComponent)("dataTable");\n\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, [(0,vue_esm_bundler.createVNode)("div", _hoisted_1, [_hoisted_2, (0,vue_esm_bundler.createVNode)("div", _hoisted_3, [(0,vue_esm_bundler.createVNode)(_component_dataTable, {\n    onLoading: _ctx.setLoading,\n    loading: _ctx.loading,\n    key: _ctx.categoryRows,\n    get: \'getCategories\',\n    add: \'setCategory\',\n    update: \'updateCategory\',\n    onCategory: _ctx.setCategory,\n    "item-id": _ctx.category,\n    model: _ctx.modelCategories,\n    rows: _ctx.categoryRows\n  }, null, 8\n  /* PROPS */\n  , ["onLoading", "loading", "onCategory", "item-id", "model", "rows"])])]), (0,vue_esm_bundler.createVNode)("div", _hoisted_4, [_hoisted_5, _ctx.categoryRows[0].created ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", _hoisted_6, [(0,vue_esm_bundler.createVNode)(_component_dataTable, {\n    onLoading: _ctx.setLoading,\n    loading: _ctx.loading,\n    key: _ctx.ingredientRows,\n    get: \'getIngredients\',\n    add: \'setIngredient\',\n    update: \'updateIngredient\',\n    "item-id": _ctx.category,\n    model: _ctx.modelIngredients,\n    rows: _ctx.ingredientRows\n  }, null, 8\n  /* PROPS */\n  , ["onLoading", "loading", "item-id", "model", "rows"])])) : (0,vue_esm_bundler.createCommentVNode)("v-if", true)])], 64\n  /* STABLE_FRAGMENT */\n  );\n});\n;// CONCATENATED MODULE: ./resources/js/components/ingredients.vue?vue&type=template&id=1f544a72&scoped=true\n\n// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js\nvar vuex_esm_bundler = __webpack_require__("./node_modules/vuex/dist/vuex.esm-bundler.js");\n// EXTERNAL MODULE: ./resources/js/components/dataTable.vue + 6 modules\nvar dataTable = __webpack_require__("./resources/js/components/dataTable.vue");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/ingredients.vue?vue&type=script&lang=js\n\n\n\n/* harmony default export */ const ingredientsvue_type_script_lang_js = ((0,vue_esm_bundler.defineComponent)({\n  components: {\n    dataTable: dataTable.default\n  },\n\n  setup() {\n    const store = (0,vuex_esm_bundler.useStore)();\n    const loading = (0,vue_esm_bundler.ref)(false);\n    let modelCategories = (0,vue_esm_bundler.ref)({\n      name: \'\',\n      type: \'category\',\n      edited: false\n    });\n    let categoryRows = (0,vue_esm_bundler.ref)([modelCategories.value]);\n    const categories = (0,vue_esm_bundler.computed)(() => store.state.categories);\n    const category = (0,vue_esm_bundler.ref)(typeof categories.value[0] !== \'undefined\' ? categories.value.id : null);\n\n    const fetchCategories = async () => {\n      loading.value = true;\n      await store.dispatch(\'getCategories\').then(() => {\n        loading.value = false;\n\n        if (categories.value.length) {\n          categoryRows.value = categories.value.map(item => {\n            return {\n              id: typeof item.id !== \'undefined\' ? item.id : null,\n              name: typeof item.name !== \'undefined\' ? item.name : \'\',\n              type: \'category\',\n              created: true\n            };\n          });\n        }\n      });\n    };\n\n    (0,vue_esm_bundler.onMounted)(() => {});\n    (0,vue_esm_bundler.watch)(() => categories.value.length, (n, o) => {\n      if (n !== o) {\n        fetchCategories().then(() => {\n          category.value = categories.value.length ? categories.value[0].hasOwnProperty(\'id\') ? categories.value[0].id : null : null;\n        });\n      }\n    }, {\n      immediate: true\n    });\n\n    const setCategory = val => {\n      category.value = val;\n    };\n\n    const ingredients = (0,vue_esm_bundler.computed)(() => store.state.ingredients);\n    let modelIngredients = (0,vue_esm_bundler.ref)({\n      name: \'\',\n      price: 0,\n      price_portion: 0,\n      portions: 0,\n      type: \'ingredient\',\n      edited: false\n    });\n    let ingredientRows = (0,vue_esm_bundler.ref)([modelIngredients.value]);\n\n    const fetchIngredients = category_id => {\n      loading.value = true;\n      store.dispatch(\'getIngredients\', {\n        category_id: category_id\n      }).then(() => {\n        loading.value = false;\n\n        if (ingredients.value.length) {\n          ingredientRows.value = ingredients.value.map(item => {\n            return {\n              id: typeof item.id !== \'undefined\' ? item.id : null,\n              name: typeof item.name !== \'undefined\' ? item.name : \'\',\n              category_id: typeof item.category_id !== \'undefined\' ? item.category_id : null,\n              price: typeof item.price !== \'undefined\' ? item.price : 0,\n              measure: typeof item.measure !== \'undefined\' ? item.measure : \'Kg\',\n              type: \'ingredient\',\n              created: true\n            };\n          });\n        } else {\n          ingredientRows.value = [modelIngredients.value];\n        }\n      });\n    };\n\n    (0,vue_esm_bundler.watch)(() => category.value, (n, o) => {\n      if (n !== o) {\n        console.log({\n          category: [n, o]\n        });\n        fetchIngredients(category.value);\n      }\n    }, {\n      immediate: true\n    }); // watch(() => ingredients.value.length,\n    //     (n, o) => {\n    //         if (n !== o) {\n    //             fetchIngredients(category.value)\n    //         }\n    //     }, {deep: true});\n\n    const setLoading = v => {\n      loading.value = v;\n    };\n\n    return {\n      ingredients,\n      categories,\n      ingredientRows,\n      categoryRows,\n      modelIngredients,\n      modelCategories,\n      setCategory,\n      category,\n      loading,\n      setLoading\n    };\n  }\n\n}));\n;// CONCATENATED MODULE: ./resources/js/components/ingredients.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./resources/js/components/ingredients.vue\n\n\n\ningredientsvue_type_script_lang_js.render = render\ningredientsvue_type_script_lang_js.__scopeId = "data-v-1f544a72"\n/* hot reload */\nif (false) {}\n\ningredientsvue_type_script_lang_js.__file = "resources/js/components/ingredients.vue"\n\n/* harmony default export */ const ingredients = (ingredientsvue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/components/ingredients.vue_+_4_modules?')}}]);