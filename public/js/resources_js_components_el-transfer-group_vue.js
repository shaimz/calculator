"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["resources_js_components_el-transfer-group_vue"],{"./resources/js/components/el-transfer-group.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/el-transfer-group.vue + 4 modules ***!
  \*******************************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ el_transfer_group)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/el-transfer-group.vue?vue&type=template&id=626af070\n\nconst _hoisted_1 = {\n  class: "row"\n};\nconst _hoisted_2 = {\n  class: "col-3"\n};\n\nconst _hoisted_3 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h3", null, "Draggable 1", -1\n/* HOISTED */\n);\n\nconst _hoisted_4 = {\n  class: "col-3"\n};\n\nconst _hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("h3", null, "Draggable 2", -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_draggable = (0,vue_esm_bundler.resolveComponent)("draggable");\n\n  const _component_rawDisplayer = (0,vue_esm_bundler.resolveComponent)("rawDisplayer");\n\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", _hoisted_1, [(0,vue_esm_bundler.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue_esm_bundler.createVNode)(_component_draggable, {\n    class: "list-group",\n    list: $data.list1,\n    group: "people",\n    onChange: $options.log\n  }, {\n    default: (0,vue_esm_bundler.withCtx)(() => [((0,vue_esm_bundler.openBlock)(true), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, (0,vue_esm_bundler.renderList)($data.list1, (element, index) => {\n      return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", {\n        class: "list-group-item",\n        key: element.name\n      }, (0,vue_esm_bundler.toDisplayString)(element.name) + " " + (0,vue_esm_bundler.toDisplayString)(index), 1\n      /* TEXT */\n      );\n    }), 128\n    /* KEYED_FRAGMENT */\n    ))]),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , ["list", "onChange"])]), (0,vue_esm_bundler.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue_esm_bundler.createVNode)(_component_draggable, {\n    class: "list-group",\n    list: $data.list2,\n    group: "people",\n    onChange: $options.log\n  }, {\n    default: (0,vue_esm_bundler.withCtx)(() => [((0,vue_esm_bundler.openBlock)(true), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, (0,vue_esm_bundler.renderList)($data.list2, (element, index) => {\n      return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", {\n        class: "list-group-item",\n        key: element.name\n      }, (0,vue_esm_bundler.toDisplayString)(element.name) + " " + (0,vue_esm_bundler.toDisplayString)(index), 1\n      /* TEXT */\n      );\n    }), 128\n    /* KEYED_FRAGMENT */\n    ))]),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , ["list", "onChange"])]), (0,vue_esm_bundler.createVNode)(_component_rawDisplayer, {\n    class: "col-3",\n    value: $data.list1,\n    title: "List 1"\n  }, null, 8\n  /* PROPS */\n  , ["value"]), (0,vue_esm_bundler.createVNode)(_component_rawDisplayer, {\n    class: "col-3",\n    value: $data.list2,\n    title: "List 2"\n  }, null, 8\n  /* PROPS */\n  , ["value"])]);\n}\n;// CONCATENATED MODULE: ./resources/js/components/el-transfer-group.vue?vue&type=template&id=626af070\n\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/el-transfer-group.vue?vue&type=script&lang=js\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'@/vuedraggable\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\n\n/* harmony default export */ const el_transfer_groupvue_type_script_lang_js = ({\n  name: "two-lists",\n  display: "Two Lists",\n  order: 1,\n  props: [\'rightList\', \'leftList\'],\n  components: {\n    draggable: Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@/vuedraggable\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }())\n  },\n\n  data() {\n    return {\n      list1: [{\n        name: "John",\n        id: 1\n      }, {\n        name: "Joao",\n        id: 2\n      }, {\n        name: "Jean",\n        id: 3\n      }, {\n        name: "Gerard",\n        id: 4\n      }],\n      list2: [{\n        name: "Juan",\n        id: 5\n      }, {\n        name: "Edgard",\n        id: 6\n      }, {\n        name: "Johnson",\n        id: 7\n      }]\n    };\n  },\n\n  methods: {\n    add: function () {\n      this.list.push({\n        name: "Juan"\n      });\n    },\n    replace: function () {\n      this.list = [{\n        name: "Edgard"\n      }];\n    },\n    clone: function (el) {\n      return {\n        name: el.name + " cloned"\n      };\n    },\n    log: function (evt) {\n      window.console.log(evt);\n    }\n  }\n});\n;// CONCATENATED MODULE: ./resources/js/components/el-transfer-group.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./resources/js/components/el-transfer-group.vue\n\n\n\nel_transfer_groupvue_type_script_lang_js.render = render\n/* hot reload */\nif (false) {}\n\nel_transfer_groupvue_type_script_lang_js.__file = "resources/js/components/el-transfer-group.vue"\n\n/* harmony default export */ const el_transfer_group = (el_transfer_groupvue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/components/el-transfer-group.vue_+_4_modules?')}}]);