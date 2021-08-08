"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["resources_js_components_transfer_el-transfer-group_vue"],{"./resources/js/components/transfer/el-transfer-group.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/transfer/el-transfer-group.vue + 4 modules ***!
  \****************************************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ el_transfer_group)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/transfer/el-transfer-group.vue?vue&type=template&id=71c00dea\n\nconst _hoisted_1 = {\n  class: "row"\n};\nconst _hoisted_2 = {\n  class: "col-3"\n};\n\nconst _hoisted_3 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h3", null, "Draggable 1", -1\n/* HOISTED */\n);\n\nconst _hoisted_4 = {\n  class: "col-3"\n};\n\nconst _hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h3", null, "Draggable 2", -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_draggable = (0,vue_esm_bundler.resolveComponent)("draggable");\n\n  const _component_rawDisplayer = (0,vue_esm_bundler.resolveComponent)("rawDisplayer");\n\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", _hoisted_1, [(0,vue_esm_bundler.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue_esm_bundler.createVNode)(_component_draggable, {\n    class: "list-group",\n    list: $props.leftList,\n    group: "people",\n    onChange: $options.log\n  }, {\n    default: (0,vue_esm_bundler.withCtx)(() => [((0,vue_esm_bundler.openBlock)(true), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, (0,vue_esm_bundler.renderList)($props.leftList, (element, index) => {\n      return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", {\n        class: "list-group-item",\n        key: element.name\n      }, (0,vue_esm_bundler.toDisplayString)(element.name) + " " + (0,vue_esm_bundler.toDisplayString)(index), 1\n      /* TEXT */\n      );\n    }), 128\n    /* KEYED_FRAGMENT */\n    ))]),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , ["list", "onChange"])]), (0,vue_esm_bundler.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue_esm_bundler.createVNode)(_component_draggable, {\n    class: "list-group",\n    list: $props.rightList,\n    group: "people",\n    onChange: $options.log\n  }, {\n    default: (0,vue_esm_bundler.withCtx)(() => [((0,vue_esm_bundler.openBlock)(true), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, (0,vue_esm_bundler.renderList)($props.rightList, (element, index) => {\n      return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", {\n        class: "list-group-item",\n        key: element.name\n      }, (0,vue_esm_bundler.toDisplayString)(element.name) + " " + (0,vue_esm_bundler.toDisplayString)(index), 1\n      /* TEXT */\n      );\n    }), 128\n    /* KEYED_FRAGMENT */\n    ))]),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , ["list", "onChange"])]), (0,vue_esm_bundler.createVNode)(_component_rawDisplayer, {\n    class: "col-3",\n    value: $props.leftList,\n    title: "List 1"\n  }, null, 8\n  /* PROPS */\n  , ["value"]), (0,vue_esm_bundler.createVNode)(_component_rawDisplayer, {\n    class: "col-3",\n    value: $props.rightList,\n    title: "List 2"\n  }, null, 8\n  /* PROPS */\n  , ["value"])]);\n}\n;// CONCATENATED MODULE: ./resources/js/components/transfer/el-transfer-group.vue?vue&type=template&id=71c00dea\n\n// EXTERNAL MODULE: ./node_modules/vuedraggable/dist/vuedraggable.umd.js\nvar vuedraggable_umd = __webpack_require__("./node_modules/vuedraggable/dist/vuedraggable.umd.js");\nvar vuedraggable_umd_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_umd);\n// EXTERNAL MODULE: ./resources/js/components/transfer/rawDisplayer.vue + 6 modules\nvar rawDisplayer = __webpack_require__("./resources/js/components/transfer/rawDisplayer.vue");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/transfer/el-transfer-group.vue?vue&type=script&lang=js\n\n\n/* harmony default export */ const el_transfer_groupvue_type_script_lang_js = ({\n  display: "Two Lists",\n  order: 1,\n  props: [\'rightList\', \'leftList\'],\n  components: {\n    draggable: (vuedraggable_umd_default()),\n    rawDisplayer: rawDisplayer.default\n  },\n\n  data() {\n    return {\n      list1: [{\n        name: "John",\n        id: 1\n      }, {\n        name: "Joao",\n        id: 2\n      }, {\n        name: "Jean",\n        id: 3\n      }, {\n        name: "Gerard",\n        id: 4\n      }],\n      list2: [{\n        name: "Juan",\n        id: 5\n      }, {\n        name: "Edgard",\n        id: 6\n      }, {\n        name: "Johnson",\n        id: 7\n      }]\n    };\n  },\n\n  methods: {\n    add: function () {\n      this.list.push({\n        name: "Juan"\n      });\n    },\n    replace: function () {\n      this.list = [{\n        name: "Edgard"\n      }];\n    },\n    clone: function (el) {\n      return {\n        name: el.name + " cloned"\n      };\n    },\n    log: function (evt) {\n      window.console.log(evt);\n    }\n  }\n});\n;// CONCATENATED MODULE: ./resources/js/components/transfer/el-transfer-group.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./resources/js/components/transfer/el-transfer-group.vue\n\n\n\nel_transfer_groupvue_type_script_lang_js.render = render\n/* hot reload */\nif (false) {}\n\nel_transfer_groupvue_type_script_lang_js.__file = "resources/js/components/transfer/el-transfer-group.vue"\n\n/* harmony default export */ const el_transfer_group = (el_transfer_groupvue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/components/transfer/el-transfer-group.vue_+_4_modules?')},"./resources/js/components/transfer/rawDisplayer.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/transfer/rawDisplayer.vue + 6 modules ***!
  \***********************************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ rawDisplayer)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/transfer/rawDisplayer.vue?vue&type=template&id=06c27ae0&scoped=true\n\n\nconst _withId = /*#__PURE__*/(0,vue_esm_bundler.withScopeId)("data-v-06c27ae0");\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", null, [(0,vue_esm_bundler.createVNode)("h3", null, (0,vue_esm_bundler.toDisplayString)(_ctx.title), 1\n  /* TEXT */\n  ), (0,vue_esm_bundler.createVNode)("pre", null, (0,vue_esm_bundler.toDisplayString)($options.valueString), 1\n  /* TEXT */\n  )]);\n});\n;// CONCATENATED MODULE: ./resources/js/components/transfer/rawDisplayer.vue?vue&type=template&id=06c27ae0&scoped=true\n\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/transfer/rawDisplayer.vue?vue&type=script&lang=js\nconst props = {\n  name: "raw-displayer",\n  title: {\n    required: true,\n    type: String\n  },\n  value: {\n    required: true\n  }\n};\n/* harmony default export */ const rawDisplayervue_type_script_lang_js = ({\n  props,\n  computed: {\n    valueString() {\n      return JSON.stringify(this.value, null, 2);\n    }\n\n  }\n});\n;// CONCATENATED MODULE: ./resources/js/components/transfer/rawDisplayer.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/transfer/rawDisplayer.vue?vue&type=style&index=0&id=06c27ae0&scoped=true&lang=css\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./resources/js/components/transfer/rawDisplayer.vue?vue&type=style&index=0&id=06c27ae0&scoped=true&lang=css\n\n;// CONCATENATED MODULE: ./resources/js/components/transfer/rawDisplayer.vue\n\n\n\n\n;\nrawDisplayervue_type_script_lang_js.render = render\nrawDisplayervue_type_script_lang_js.__scopeId = "data-v-06c27ae0"\n/* hot reload */\nif (false) {}\n\nrawDisplayervue_type_script_lang_js.__file = "resources/js/components/transfer/rawDisplayer.vue"\n\n/* harmony default export */ const rawDisplayer = (rawDisplayervue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/components/transfer/rawDisplayer.vue_+_6_modules?')}}]);