(self.webpackChunk=self.webpackChunk||[]).push([["frontend-chunk-1"],{"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/()=>{eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nError: You forgot to add 'mini-css-extract-plugin' plugin (i.e. `{ plugins: [new MiniCssExtractPlugin()] }`), please read https://github.com/webpack-contrib/mini-css-extract-plugin#getting-started\\n    at Object.pitch (D:\\\\xampp\\\\htdocs\\\\app\\\\calculator\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:43:14)\");\n\n//# sourceURL=webpack:///./resources/js/components/navbar.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D")},"./resources/js/components/navbar.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/navbar.vue + 5 modules ***!
  \********************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ navbar)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&scoped=true\n\n\nconst _withId = /*#__PURE__*/(0,vue_esm_bundler.withScopeId)("data-v-11e733ca");\n\n(0,vue_esm_bundler.pushScopeId)("data-v-11e733ca");\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue_esm_bundler.createVNode)("div", {\n  class: "line"\n}, null, -1\n/* HOISTED */\n);\n\n(0,vue_esm_bundler.popScopeId)();\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  const _component_router_link = (0,vue_esm_bundler.resolveComponent)("router-link");\n\n  const _component_el_menu_item = (0,vue_esm_bundler.resolveComponent)("el-menu-item");\n\n  const _component_el_menu = (0,vue_esm_bundler.resolveComponent)("el-menu");\n\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("div", null, [(0,vue_esm_bundler.createCommentVNode)(" for logged-in user"), _hoisted_1, _ctx.isLoggedIn ? ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_menu, {\n    key: 0,\n    "default-active": _ctx.activeIndex,\n    class: "el-menu-demo",\n    mode: "horizontal",\n    "background-color": "#545c64",\n    "text-color": "#fff",\n    "active-text-color": "#ffd04b"\n  }, {\n    default: _withId(() => [((0,vue_esm_bundler.openBlock)(true), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, (0,vue_esm_bundler.renderList)(_ctx.menu, item => {\n      return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_menu_item, {\n        index: item.index\n      }, {\n        default: _withId(() => [(0,vue_esm_bundler.createVNode)(_component_router_link, {\n          to: {\n            name: item.text\n          },\n          class: "nav-item nav-link"\n        }, {\n          default: _withId(() => [(0,vue_esm_bundler.createTextVNode)((0,vue_esm_bundler.toDisplayString)(item.text), 1\n          /* TEXT */\n          )]),\n          _: 2\n          /* DYNAMIC */\n\n        }, 1032\n        /* PROPS, DYNAMIC_SLOTS */\n        , ["to"])]),\n        _: 2\n        /* DYNAMIC */\n\n      }, 1032\n      /* PROPS, DYNAMIC_SLOTS */\n      , ["index"]);\n    }), 256\n    /* UNKEYED_FRAGMENT */\n    )), (0,vue_esm_bundler.createVNode)(_component_el_menu_item, {\n      index: "3"\n    }, {\n      default: _withId(() => [(0,vue_esm_bundler.createVNode)("a", {\n        class: "nav-item nav-link",\n        style: {\n          "cursor": "pointer"\n        },\n        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.logout && _ctx.logout(...args))\n      }, "Logout")]),\n      _: 1\n      /* STABLE */\n\n    })]),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , ["default-active"])) : ((0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, {\n    key: 1\n  }, [(0,vue_esm_bundler.createCommentVNode)(" for non-logged user"), (0,vue_esm_bundler.createVNode)(_component_el_menu, {\n    "default-active": _ctx.activeIndex2,\n    class: "el-menu-demo",\n    mode: "horizontal",\n    "background-color": "#545c64",\n    "text-color": "#fff",\n    "active-text-color": "#ffd04b"\n  }, {\n    default: _withId(() => [((0,vue_esm_bundler.openBlock)(true), (0,vue_esm_bundler.createBlock)(vue_esm_bundler.Fragment, null, (0,vue_esm_bundler.renderList)(_ctx.menu2, item => {\n      return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)(_component_el_menu_item, {\n        index: item.index\n      }, {\n        default: _withId(() => [(0,vue_esm_bundler.createVNode)(_component_router_link, {\n          to: {\n            name: item.text\n          },\n          class: "nav-item nav-link"\n        }, {\n          default: _withId(() => [(0,vue_esm_bundler.createTextVNode)((0,vue_esm_bundler.toDisplayString)(item.text), 1\n          /* TEXT */\n          )]),\n          _: 2\n          /* DYNAMIC */\n\n        }, 1032\n        /* PROPS, DYNAMIC_SLOTS */\n        , ["to"])]),\n        _: 2\n        /* DYNAMIC */\n\n      }, 1032\n      /* PROPS, DYNAMIC_SLOTS */\n      , ["index"]);\n    }), 256\n    /* UNKEYED_FRAGMENT */\n    ))]),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , ["default-active"])], 2112\n  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */\n  ))]);\n});\n;// CONCATENATED MODULE: ./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&scoped=true\n\n// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js\nvar vue_router_esm_bundler = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/navbar.vue?vue&type=script&lang=js\n\n\n/* harmony default export */ const navbarvue_type_script_lang_js = ((0,vue_esm_bundler.defineComponent)({\n  name: "navbar",\n\n  setup() {\n    const router = (0,vue_router_esm_bundler.useRouter)();\n    const route = (0,vue_router_esm_bundler.useRoute)();\n    const path = (0,vue_esm_bundler.computed)(() => route.fullPath);\n    const axios = (0,vue_esm_bundler.inject)(\'$axios\');\n    const isLoggedIn = (0,vue_esm_bundler.ref)(false);\n    if (window.Laravel.isLoggedin) isLoggedIn.value = true;\n\n    const logout = e => {\n      console.log(\'ss\');\n      e.preventDefault();\n      axios.post(\'/api/logout\').then(response => {\n        if (response.data.success) {\n          window.location.href = "/calculator";\n        } else {\n          console.log(response);\n        }\n      }).catch(function (error) {\n        console.error(error);\n      });\n    };\n\n    const menu = (0,vue_esm_bundler.ref)([{\n      to: \'/\',\n      index: 1,\n      text: \'Home\'\n    }, {\n      to: \'/calculator\',\n      index: 2,\n      text: \'Calculator\'\n    }]);\n    const menu2 = (0,vue_esm_bundler.ref)([{\n      to: \'/\',\n      index: 1,\n      text: \'Home\'\n    }, {\n      to: \'/login\',\n      index: 2,\n      text: \'Login\'\n    }, {\n      to: \'/register\',\n      index: 3,\n      text: \'Register\'\n    }]);\n    const activeIndex = (0,vue_esm_bundler.ref)(\'1\');\n    const activeIndex2 = (0,vue_esm_bundler.ref)(\'1\');\n    (0,vue_esm_bundler.watch)(() => path, (n, o) => {\n      if (!isLoggedIn.value) {\n        let item = menu2.value.find(e => e.to === n.value);\n        activeIndex2.value = item.index.toString();\n        return true;\n      }\n\n      let item = menu.value.find(e => e.to === n.value);\n      activeIndex.value = item.index.toString();\n      return true;\n    }, {\n      immediate: true,\n      deep: true\n    });\n    return {\n      isLoggedIn,\n      activeIndex,\n      activeIndex2,\n      menu,\n      menu2,\n      path,\n      logout\n    };\n  }\n\n}));\n;// CONCATENATED MODULE: ./resources/js/components/navbar.vue?vue&type=script&lang=js\n \n// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=scss\nvar navbarvue_type_style_index_0_id_11e733ca_scoped_true_lang_scss = __webpack_require__("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=scss");\n;// CONCATENATED MODULE: ./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=scss\n\n;// CONCATENATED MODULE: ./resources/js/components/navbar.vue\n\n\n\n\n;\nnavbarvue_type_script_lang_js.render = render\nnavbarvue_type_script_lang_js.__scopeId = "data-v-11e733ca"\n/* hot reload */\nif (false) {}\n\nnavbarvue_type_script_lang_js.__file = "resources/js/components/navbar.vue"\n\n/* harmony default export */ const navbar = (navbarvue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/components/navbar.vue_+_5_modules?')},"./resources/js/views/Home.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Home.vue + 4 modules ***!
  \*************************************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ Home)\n});\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js\nvar vue_esm_bundler = __webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true\n\n\nconst _withId = /*#__PURE__*/(0,vue_esm_bundler.withScopeId)("data-v-63cd6604");\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  return (0,vue_esm_bundler.openBlock)(), (0,vue_esm_bundler.createBlock)("h1", null, "test2");\n});\n;// CONCATENATED MODULE: ./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true\n\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./resources/js/views/Home.vue?vue&type=script&lang=js\n\n/* harmony default export */ const Homevue_type_script_lang_js = ((0,vue_esm_bundler.defineComponent)({\n  setup() {\n    const name = (0,vue_esm_bundler.ref)(\'\');\n\n    if (window.Laravel.user) {\n      name.value = window.Laravel.user.name;\n    }\n  }\n\n}));\n;// CONCATENATED MODULE: ./resources/js/views/Home.vue?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./resources/js/views/Home.vue\n\n\n\nHomevue_type_script_lang_js.render = render\nHomevue_type_script_lang_js.__scopeId = "data-v-63cd6604"\n/* hot reload */\nif (false) {}\n\nHomevue_type_script_lang_js.__file = "resources/js/views/Home.vue"\n\n/* harmony default export */ const Home = (Homevue_type_script_lang_js);\n\n//# sourceURL=webpack:///./resources/js/views/Home.vue_+_4_modules?')}}]);