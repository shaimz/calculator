"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["frontend-chunk-0"],{"./resources/js/components/login.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/login.vue + 4 modules ***!
  \*******************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ login)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/login.vue?vue&type=template&id=172b28a4\n\nconst _hoisted_1 = {\n  class: "container"\n};\nconst _hoisted_2 = {\n  class: "row justify-content-center"\n};\nconst _hoisted_3 = {\n  class: "col-md-8"\n};\nconst _hoisted_4 = {\n  key: 0,\n  class: "alert alert-danger",\n  role: "alert"\n};\nconst _hoisted_5 = {\n  class: "card card-default"\n};\n\nconst _hoisted_6 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("div", {\n  class: "card-header"\n}, "Login", -1\n/* HOISTED */\n);\n\nconst _hoisted_7 = {\n  class: "card-body"\n};\nconst _hoisted_8 = {\n  class: "form-group row"\n};\n\nconst _hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("label", {\n  for: "email",\n  class: "col-sm-4 col-form-label text-md-right"\n}, "E-Mail Address", -1\n/* HOISTED */\n);\n\nconst _hoisted_10 = {\n  class: "col-md-6"\n};\nconst _hoisted_11 = {\n  class: "form-group row"\n};\n\nconst _hoisted_12 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("label", {\n  for: "password",\n  class: "col-md-4 col-form-label text-md-right"\n}, "Password", -1\n/* HOISTED */\n);\n\nconst _hoisted_13 = {\n  class: "col-md-6"\n};\nconst _hoisted_14 = {\n  class: "form-group row mb-0"\n};\nconst _hoisted_15 = {\n  class: "col-md-8 offset-md-4"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", _hoisted_1, [(0,vue_esm_bundler.createVNode)("div", _hoisted_2, [(0,vue_esm_bundler.createVNode)("div", _hoisted_3, [_ctx.error !== null ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", _hoisted_4, (0,vue_esm_bundler.toDisplayString)(_ctx.error), 1\n  /* TEXT */\n  )) : (0,vue_esm_bundler.createCommentVNode)("v-if", true), (0,vue_esm_bundler.createVNode)("div", _hoisted_5, [_hoisted_6, (0,vue_esm_bundler.createVNode)("div", _hoisted_7, [(0,vue_esm_bundler.createVNode)("form", null, [(0,vue_esm_bundler.createVNode)("div", _hoisted_8, [_hoisted_9, (0,vue_esm_bundler.createVNode)("div", _hoisted_10, [(0,vue_esm_bundler.withDirectives)((0,vue_esm_bundler.createVNode)("input", {\n    id: "email",\n    type: "email",\n    class: "form-control",\n    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.email = $event),\n    required: "",\n    autofocus: "",\n    autocomplete: "off"\n  }, null, 512\n  /* NEED_PATCH */\n  ), [[vue_esm_bundler.vModelText, _ctx.email]])])]), (0,vue_esm_bundler.createVNode)("div", _hoisted_11, [_hoisted_12, (0,vue_esm_bundler.createVNode)("div", _hoisted_13, [(0,vue_esm_bundler.withDirectives)((0,vue_esm_bundler.createVNode)("input", {\n    id: "password",\n    type: "password",\n    class: "form-control",\n    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.password = $event),\n    required: "",\n    autocomplete: "off"\n  }, null, 512\n  /* NEED_PATCH */\n  ), [[vue_esm_bundler.vModelText, _ctx.password]])])]), (0,vue_esm_bundler.createVNode)("div", _hoisted_14, [(0,vue_esm_bundler.createVNode)("div", _hoisted_15, [(0,vue_esm_bundler.createVNode)("button", {\n    type: "submit",\n    class: "btn btn-primary",\n    onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleSubmit && _ctx.handleSubmit(...args))\n  }, " Login ")])])])])])])])]);\n}\n;// CONCATENATED MODULE: ./resources/js/components/login.vue?vue&type=template&id=172b28a4\n\n// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js\nvar vue_router_esm_bundler = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/login.vue?vue&type=script&lang=js\n\n\n/* harmony default export */ const loginvue_type_script_lang_js = ((0,vue_esm_bundler.defineComponent)({\n  setup() {\n    const router = (0,vue_router_esm_bundler.useRouter)();\n    const $axios = (0,vue_esm_bundler.inject)(\'$axios\');\n    const email = (0,vue_esm_bundler.ref)(""),\n          password = (0,vue_esm_bundler.ref)(""),\n          error = (0,vue_esm_bundler.ref)(null);\n\n    const handleSubmit = e => {\n      e.preventDefault();\n\n      if (password.value.length > 0) {\n        $axios.post(\'api/login\', {\n          email: email.value,\n          password: password.value\n        }).then(response => {\n          console.log(response.data);\n\n          if (response.data.success) {\n            router.go(\'/calculator\');\n          } else {\n            error.value = response.data.message;\n          }\n        }).catch(function (error) {\n          console.error(error);\n        });\n      }\n    };\n\n    return {\n      email,\n      password,\n      error,\n      handleSubmit\n    };\n  },\n\n  beforeRouteEnter(to, from, next) {\n    if (window.Laravel.isLoggedin) {\n      return next(\'dashboard\');\n    }\n\n    next();\n  }\n\n}));\n;// CONCATENATED MODULE: ./resources/js/components/login.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./resources/js/components/login.vue\n\n\n\nloginvue_type_script_lang_js.render = render\n/* hot reload */\nif (false) {}\n\nloginvue_type_script_lang_js.__file = "resources/js/components/login.vue"\n\n/* harmony default export */ const login = (loginvue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/components/login.vue_+_4_modules?')},"./resources/js/views/Calculator.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/Calculator.vue + 4 modules ***!
  \*******************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ Calculator)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/views/Calculator.vue?vue&type=template&id=06784f3e&scoped=true\n\n\nconst _withId = /*#__PURE__*/(0,vue_esm_bundler.withScopeId)("data-v-06784f3e");\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("h1", null, "test");\n});\n;// CONCATENATED MODULE: ./resources/js/views/Calculator.vue?vue&type=template&id=06784f3e&scoped=true\n\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/views/Calculator.vue?vue&type=script&lang=js\n\n/* harmony default export */ const Calculatorvue_type_script_lang_js = ((0,vue_esm_bundler.defineComponent)({\n  setup() {\n    const name = (0,vue_esm_bundler.ref)(\'\');\n\n    if (window.Laravel.user) {\n      name.value = window.Laravel.user.name;\n    }\n  },\n\n  beforeRouteEnter(to, from, next) {\n    if (!window.Laravel.isLoggedin) {\n      window.location.href = "/login";\n    }\n\n    next();\n  }\n\n}));\n;// CONCATENATED MODULE: ./resources/js/views/Calculator.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./resources/js/views/Calculator.vue\n\n\n\nCalculatorvue_type_script_lang_js.render = render\nCalculatorvue_type_script_lang_js.__scopeId = "data-v-06784f3e"\n/* hot reload */\nif (false) {}\n\nCalculatorvue_type_script_lang_js.__file = "resources/js/views/Calculator.vue"\n\n/* harmony default export */ const Calculator = (Calculatorvue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/views/Calculator.vue_+_4_modules?')}}]);