"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["resources_js_components_dataTable_vue-_8413"],{"./resources/js/components/dataTable.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/dataTable.vue + 6 modules ***!
  \***********************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ dataTable)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/dataTable.vue?vue&type=template&id=1bfa4e89&scoped=true\n\n\nconst _withId = /*#__PURE__*/(0,vue_esm_bundler.withScopeId)("data-v-1bfa4e89");\n\n(0,vue_esm_bundler.pushScopeId)("data-v-1bfa4e89");\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue_esm_bundler.createTextVNode)("Adding row");\n\nconst _hoisted_2 = {\n  key: 0,\n  class: "rounded-circle bg-success active m-auto"\n};\nconst _hoisted_3 = {\n  key: 0,\n  class: "text-danger"\n};\nconst _hoisted_4 = {\n  key: 2\n};\nconst _hoisted_5 = {\n  key: 1\n};\nconst _hoisted_6 = {\n  key: 1\n};\nconst _hoisted_7 = {\n  key: 1\n};\nconst _hoisted_8 = {\n  key: 1\n};\n\nconst _hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler.createTextVNode)("Add");\n\nconst _hoisted_10 = /*#__PURE__*/(0,vue_esm_bundler.createTextVNode)("Edit");\n\nconst _hoisted_11 = /*#__PURE__*/(0,vue_esm_bundler.createTextVNode)("Save");\n\nconst _hoisted_12 = /*#__PURE__*/(0,vue_esm_bundler.createTextVNode)("Delete");\n\n(0,vue_esm_bundler.popScopeId)();\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  const _component_el_button = (0,vue_esm_bundler.resolveComponent)("el-button");\n\n  const _component_el_table_column = (0,vue_esm_bundler.resolveComponent)("el-table-column");\n\n  const _component_el_input = (0,vue_esm_bundler.resolveComponent)("el-input");\n\n  const _component_el_option = (0,vue_esm_bundler.resolveComponent)("el-option");\n\n  const _component_el_select = (0,vue_esm_bundler.resolveComponent)("el-select");\n\n  const _component_el_table = (0,vue_esm_bundler.resolveComponent)("el-table");\n\n  const _directive_loading = (0,vue_esm_bundler.resolveDirective)("loading");\n\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, [(0,vue_esm_bundler.createVNode)(_component_el_button, {\n    type: "success",\n    onClick: _cache[1] || (_cache[1] = $event => _ctx.addRow()),\n    round: ""\n  }, {\n    default: _withId(() => [_hoisted_1]),\n    _: 1\n    /* STABLE */\n\n  }), (0,vue_esm_bundler.withDirectives)((0,vue_esm_bundler.createVNode)(_component_el_table, {\n    key: _ctx.datas,\n    data: _ctx.datas,\n    "row-class-name": _ctx.cellClass,\n    lazy: true,\n    border: "",\n    height: "350",\n    style: {\n      "width": "100%",\n      "margin-top": "15px"\n    },\n    "current-row-key": "40",\n    onRowClick: _ctx.handleChange,\n    "highlight-current-row": ""\n  }, {\n    default: _withId(() => [_ctx.checkProperty(\'type\') ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_table_column, {\n      key: 0,\n      labell: "",\n      width: "50px"\n    }, (0,vue_esm_bundler.createSlots)({\n      _: 2\n      /* DYNAMIC */\n\n    }, [[\'category\', \'group\', \'food\'].includes(_ctx.datas[0].type) ? {\n      name: "default",\n      fn: _withId(scope => [scope.row.id === _ctx.itemId || scope.row.id === _ctx.food ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("span", _hoisted_2)) : (0,vue_esm_bundler.createCommentVNode)("v-if", true)])\n    } : undefined]), 1024\n    /* DYNAMIC_SLOTS */\n    )) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), _ctx.checkProperty(\'name\') ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_table_column, {\n      key: 1,\n      label: "Name",\n      width: "250"\n    }, {\n      default: _withId(scope => [_ctx.error[scope.$index] ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("span", _hoisted_3, (0,vue_esm_bundler.toDisplayString)(_ctx.error[scope.$index]), 1\n      /* TEXT */\n      )) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), _ctx.checkProperty(\'edited\', scope.$index) ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_input, {\n        key: 1,\n        modelValue: scope.row.name,\n        "onUpdate:modelValue": $event => scope.row.name = $event,\n        type: "text",\n        onClick: _cache[2] || (_cache[2] = $event => _ctx.stopPropagation($event))\n      }, null, 8\n      /* PROPS */\n      , ["modelValue", "onUpdate:modelValue"])) : ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("span", _hoisted_4, (0,vue_esm_bundler.toDisplayString)(scope.row.name), 1\n      /* TEXT */\n      ))]),\n      _: 1\n      /* STABLE */\n\n    })) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), _ctx.checkProperty(\'measure\') ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_table_column, {\n      key: 2,\n      label: "Measure",\n      width: "100"\n    }, {\n      default: _withId(scope => [_ctx.checkProperty(\'edited\', scope.$index) ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_select, {\n        key: 0,\n        modelValue: scope.row.measure,\n        "onUpdate:modelValue": $event => scope.row.measure = $event,\n        onClick: _cache[3] || (_cache[3] = $event => _ctx.stopPropagation($event)),\n        placeholder: "Select"\n      }, {\n        default: _withId(() => [((0,vue_esm_bundler.openBlock)(true), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, (0,vue_esm_bundler.renderList)(_ctx.options, item => {\n          return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_option, {\n            key: item.value,\n            label: item.label,\n            value: item.value\n          }, null, 8\n          /* PROPS */\n          , ["label", "value"]);\n        }), 128\n        /* KEYED_FRAGMENT */\n        ))]),\n        _: 2\n        /* DYNAMIC */\n\n      }, 1032\n      /* PROPS, DYNAMIC_SLOTS */\n      , ["modelValue", "onUpdate:modelValue"])) : ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("span", _hoisted_5, (0,vue_esm_bundler.toDisplayString)(scope.row.measure), 1\n      /* TEXT */\n      ))]),\n      _: 1\n      /* STABLE */\n\n    })) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), _ctx.checkProperty(\'portions\') ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_table_column, {\n      key: 3,\n      label: "Portions",\n      width: "100"\n    }, {\n      default: _withId(scope => [_ctx.checkProperty(\'edited\', scope.$index) ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_input, {\n        key: 0,\n        modelValue: scope.row.portions,\n        "onUpdate:modelValue": $event => scope.row.portions = $event,\n        onClick: _cache[4] || (_cache[4] = $event => _ctx.stopPropagation($event)),\n        type: "number"\n      }, null, 8\n      /* PROPS */\n      , ["modelValue", "onUpdate:modelValue"])) : ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("span", _hoisted_6, (0,vue_esm_bundler.toDisplayString)(scope.row.portions), 1\n      /* TEXT */\n      ))]),\n      _: 1\n      /* STABLE */\n\n    })) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), _ctx.checkProperty(\'price\') ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_table_column, {\n      key: 4,\n      label: "Price",\n      width: "100"\n    }, {\n      default: _withId(scope => [_ctx.checkProperty(\'edited\', scope.$index) ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_input, {\n        key: 0,\n        modelValue: scope.row.price,\n        "onUpdate:modelValue": $event => scope.row.price = $event,\n        onClick: _cache[5] || (_cache[5] = $event => _ctx.stopPropagation($event)),\n        type: "number"\n      }, null, 8\n      /* PROPS */\n      , ["modelValue", "onUpdate:modelValue"])) : ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("span", _hoisted_7, (0,vue_esm_bundler.toDisplayString)(scope.row.price), 1\n      /* TEXT */\n      ))]),\n      _: 1\n      /* STABLE */\n\n    })) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), _ctx.checkProperty(\'price_portion\') ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_table_column, {\n      key: 5,\n      label: "Price p/portion",\n      width: "150"\n    }, {\n      default: _withId(scope => [_ctx.checkProperty(\'edited\', scope.$index) ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_input, {\n        key: 0,\n        modelValue: scope.row.price_portion,\n        "onUpdate:modelValue": $event => scope.row.price_portion = $event,\n        onClick: _cache[6] || (_cache[6] = $event => _ctx.stopPropagation($event)),\n        type: "number"\n      }, null, 8\n      /* PROPS */\n      , ["modelValue", "onUpdate:modelValue"])) : ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("span", _hoisted_8, (0,vue_esm_bundler.toDisplayString)(scope.row.price_portion), 1\n      /* TEXT */\n      ))]),\n      _: 1\n      /* STABLE */\n\n    })) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), (0,vue_esm_bundler.createVNode)(_component_el_table_column, {\n      label: "",\n      width: "200"\n    }, {\n      default: _withId(scope => [_ctx.checkProperty(\'created\', scope.$index) && !_ctx.checkProperty(\'edited\', scope.$index) && _ctx.props.get === \'getFoods\' ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_button, {\n        key: 0,\n        "data-id": "add_i",\n        size: "mini",\n        type: "success",\n        icon: "el-icon-plus",\n        circle: "",\n        onClick: _cache[7] || (_cache[7] = $event => _ctx.addItems())\n      })) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), !_ctx.checkProperty(\'created\', scope.$index) ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_button, {\n        key: 1,\n        "data-id": "add",\n        size: "mini",\n        type: "success",\n        onClick: $event => _ctx.add(scope.$index)\n      }, {\n        default: _withId(() => [_hoisted_9]),\n        _: 2\n        /* DYNAMIC */\n\n      }, 1032\n      /* PROPS, DYNAMIC_SLOTS */\n      , ["onClick"])) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), _ctx.checkProperty(\'created\', scope.$index) && !_ctx.checkProperty(\'edited\', scope.$index) ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_button, {\n        key: 2,\n        "data-id": "edit",\n        size: "mini",\n        type: "primary",\n        onClick: $event => _ctx.setEdit($event, scope.$index)\n      }, {\n        default: _withId(() => [_hoisted_10]),\n        _: 2\n        /* DYNAMIC */\n\n      }, 1032\n      /* PROPS, DYNAMIC_SLOTS */\n      , ["onClick"])) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), _ctx.checkProperty(\'edited\', scope.$index) && _ctx.checkProperty(\'created\', scope.$index) ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_button, {\n        key: 3,\n        "data-id": "update",\n        size: "mini",\n        type: "success",\n        onClick: $event => _ctx.update(scope.$index)\n      }, {\n        default: _withId(() => [_hoisted_11]),\n        _: 2\n        /* DYNAMIC */\n\n      }, 1032\n      /* PROPS, DYNAMIC_SLOTS */\n      , ["onClick"])) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), _ctx.checkProperty(\'created\', scope.$index) ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_button, {\n        key: 4,\n        "data-id": "delete",\n        size: "mini",\n        type: "danger",\n        onClick: $event => _ctx.handleDelete(scope.$index)\n      }, {\n        default: _withId(() => [_hoisted_12]),\n        _: 2\n        /* DYNAMIC */\n\n      }, 1032\n      /* PROPS, DYNAMIC_SLOTS */\n      , ["onClick"])) : (0,vue_esm_bundler.createCommentVNode)("v-if", true)]),\n      _: 1\n      /* STABLE */\n\n    })]),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , ["data", "row-class-name", "onRowClick"]), [[_directive_loading, _ctx.load]])], 64\n  /* STABLE_FRAGMENT */\n  );\n});\n;// CONCATENATED MODULE: ./resources/js/components/dataTable.vue?vue&type=template&id=1bfa4e89&scoped=true\n\n// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js\nvar vuex_esm_bundler = __webpack_require__("./node_modules/vuex/dist/vuex.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/dataTable.vue?vue&type=script&lang=js\n\n\n/* harmony default export */ const dataTablevue_type_script_lang_js = ((0,vue_esm_bundler.defineComponent)({\n  props: [\'rows\', \'model\', \'itemId\', \'add\', \'get\', \'update\', \'loading\', \'food\'],\n  emits: [\'category\', \'modal\'],\n\n  setup(props, context) {\n    const store = (0,vuex_esm_bundler.useStore)();\n    const prop = (0,vue_esm_bundler.toRefs)(props);\n    const load = prop.loading;\n    const options = [{\n      value: \'kg\',\n      label: \'Kg\'\n    }, {\n      value: \'g\',\n      label: \'g\'\n    }, {\n      value: \'l\',\n      label: \'L\'\n    }, {\n      value: \'mg\',\n      label: \'Mg\'\n    }, {\n      value: \'ml\',\n      label: \'Ml\'\n    }];\n    const loading = (0,vue_esm_bundler.computed)({\n      get: () => load.value,\n      set: v => {\n        context.emit(\'loading\', v);\n      }\n    });\n    const itemId = (0,vue_esm_bundler.computed)(() => props.itemId);\n    const food = (0,vue_esm_bundler.computed)(() => props.food);\n    const datas = (0,vue_esm_bundler.ref)([...props.rows]);\n    const error = (0,vue_esm_bundler.ref)([]);\n    const model = (0,vue_esm_bundler.reactive)({ ...props.model\n    });\n\n    const addRow = () => {\n      datas.value.push({ ...model\n      });\n    };\n\n    const add = index => {\n      let data = { ...datas.value[index]\n      };\n      let type = \'\';\n\n      switch (props.add) {\n        case \'setIngredient\':\n          data.category_id = itemId.value;\n          type = \'category_id\';\n          break;\n\n        case \'setFood\':\n          data.group_id = itemId.value;\n          type = \'group_id\';\n          break;\n      }\n\n      if (data.name) {\n        store.dispatch(props.add, data).then(r => {\n          let params = {};\n          let item = datas.value[index];\n          params[type] = itemId.value;\n\n          if (!item.hasOwnProperty(\'created\') && item.name) {\n            item.created = true;\n            delete item.edited;\n          }\n\n          loading.value = true;\n          store.dispatch(props.get, params).then(() => loading.value = false);\n        });\n      } else {\n        error.value[index] = \'Name is empty\';\n      }\n    };\n\n    const update = index => {\n      let data = { ...datas.value[index]\n      };\n      let type = \'\';\n\n      switch (props.add) {\n        case \'setIngredient\':\n          data.category_id = itemId.value;\n          type = \'category_id\';\n          break;\n\n        case \'setFood\':\n          data.group_id = itemId.value;\n          type = \'group_id\';\n          break;\n      }\n\n      if (data.name) {\n        store.dispatch(props.update, data).then(() => {\n          let params = {};\n          params[type] = itemId.value;\n          loading.value = true;\n          store.dispatch(props.get, params).then(() => {\n            loading.value = false;\n            delete datas.value[index].edited;\n          });\n        });\n      }\n    };\n\n    const setEdit = (e, index) => {\n      setTimeout(() => {\n        datas.value[index].edited = false;\n      }, 200);\n    };\n\n    const stopPropagation = e => {\n      e.stopImmediatePropagation();\n    };\n\n    const handleDelete = index => {\n      datas.value.splice(index, 1);\n    };\n\n    const handleChange = (row, column, event) => {\n      if (typeof row.id !== "undefined") {\n        context.emit(\'category\', row.id);\n        datas.value.map((item, i) => delete datas.value[i].edited);\n        return \'active-row\';\n      }\n    };\n\n    const foodId = (0,vue_esm_bundler.computed)(() => props.food);\n\n    const cellClass = row => {\n      if (row.row.id === datas.value[0].id && (row.row.id === itemId.value || row.row.id === foodId.value) && [\'group\', \'category\', \'food\'].includes(row.row.type)) {\n        return \'active-row-first\';\n      }\n    };\n\n    const checkProperty = (property, index = 0) => {\n      if (typeof datas.value[index] !== "undefined") return datas.value[index].hasOwnProperty(property);\n      return false;\n    };\n\n    const addItems = () => {\n      context.emit(\'modal\', true);\n    };\n\n    return {\n      datas,\n      options,\n      itemId,\n      loading,\n      load,\n      props,\n      food,\n      error,\n      addRow,\n      handleDelete,\n      checkProperty,\n      add,\n      update,\n      handleChange,\n      cellClass,\n      setEdit,\n      stopPropagation,\n      addItems\n    };\n  }\n\n}));\n;// CONCATENATED MODULE: ./resources/js/components/dataTable.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/dataTable.vue?vue&type=style&index=0&id=1bfa4e89&scoped=true&lang=css\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./resources/js/components/dataTable.vue?vue&type=style&index=0&id=1bfa4e89&scoped=true&lang=css\n\n;// CONCATENATED MODULE: ./resources/js/components/dataTable.vue\n\n\n\n\n;\ndataTablevue_type_script_lang_js.render = render\ndataTablevue_type_script_lang_js.__scopeId = "data-v-1bfa4e89"\n/* hot reload */\nif (false) {}\n\ndataTablevue_type_script_lang_js.__file = "resources/js/components/dataTable.vue"\n\n/* harmony default export */ const dataTable = (dataTablevue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/components/dataTable.vue_+_6_modules?')}}]);