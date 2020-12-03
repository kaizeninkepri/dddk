(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/perusahaan/popUp.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/perusahaan/popUp.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/url */ "./resources/js/src/url.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      activePrompt: false,
      page: {
        submitType: "InsertByForm"
      },
      perusahaan: {
        perusahaan_id: null,
        nama: null,
        npwp: null,
        bidang: null,
        alamat: null,
        negara: null,
        aktif: true
      },
      afriandi: "isna"
    };
  },
  // props: ['activePrompt'],
  validations: function validations() {
    return {
      perusahaan: {
        nama: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        npwp: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        bidang: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        alamat: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        negara: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        }
      }
    };
  },
  methods: {
    close: function close() {
      this.$vs.notify({
        color: "danger",
        title: "Closed",
        text: "You close a dialog!"
      }); // this.$emit('propsFalse', false);
    },
    PostTODatabase: function PostTODatabase() {
      var _this = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        this.activePrompt = true;
      } else {
        axios.post(_url__WEBPACK_IMPORTED_MODULE_0__["default"].api + "/perusahaan", {
          type: this.page.submitType,
          data: this.perusahaan
        }).then(function (r) {
          _this.$vs.notify({
            color: "success",
            title: r.data.title,
            text: r.data.text
          });

          _this.perusahaan.perusahaan_id = r.data.id;

          _this.$emit('GetPerusahaanFromChild', _this.perusahaan);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/perusahaan/popUp.vue?vue&type=style&index=0&lang=stylus&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/perusahaan/popUp.vue?vue&type=style&index=0&lang=stylus& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .con-exemple-prompt {\n  padding: 10px;\n  padding-bottom: 0px;\n}\n.con-exemple-prompt .vs-input {\n  width: 100%;\n}\n[dir] .con-exemple-prompt .vs-input {\n  margin-top: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/perusahaan/popUp.vue?vue&type=style&index=0&lang=stylus&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/perusahaan/popUp.vue?vue&type=style&index=0&lang=stylus& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--11-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./popUp.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/perusahaan/popUp.vue?vue&type=style&index=0&lang=stylus&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/perusahaan/popUp.vue?vue&type=template&id=6a6030b3&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/perusahaan/popUp.vue?vue&type=template&id=6a6030b3& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "vs-prompt",
        {
          attrs: { active: _vm.activePrompt, title: "DATA PERUSAHAAN" },
          on: {
            cancel: function($event) {
              _vm.activePrompt = false
            },
            accept: function($event) {
              return _vm.PostTODatabase()
            },
            close: _vm.close,
            "update:active": function($event) {
              _vm.activePrompt = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "con-exemple-prompt" },
            [
              _c("vs-input", {
                attrs: { label: "Npwp", danger: _vm.$v.perusahaan.npwp.$error },
                model: {
                  value: _vm.$v.perusahaan.npwp.$model,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.$v.perusahaan.npwp,
                      "$model",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "$v.perusahaan.npwp.$model"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-2",
                attrs: { label: "Nama", danger: _vm.$v.perusahaan.nama.$error },
                model: {
                  value: _vm.$v.perusahaan.nama.$model,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.$v.perusahaan.nama,
                      "$model",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "$v.perusahaan.nama.$model"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-2",
                attrs: {
                  label: "Bidang",
                  danger: _vm.$v.perusahaan.bidang.$error
                },
                model: {
                  value: _vm.$v.perusahaan.bidang.$model,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.$v.perusahaan.bidang,
                      "$model",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "$v.perusahaan.bidang.$model"
                }
              }),
              _vm._v(" "),
              _c("vs-textarea", {
                staticClass: "mt-2",
                attrs: {
                  label: "Alamat",
                  danger: _vm.$v.perusahaan.alamat.$error
                },
                model: {
                  value: _vm.$v.perusahaan.alamat.$model,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.$v.perusahaan.alamat,
                      "$model",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "$v.perusahaan.alamat.$model"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-2",
                attrs: {
                  label: "Negara",
                  danger: _vm.$v.perusahaan.negara.$error
                },
                model: {
                  value: _vm.$v.perusahaan.negara.$model,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.$v.perusahaan.negara,
                      "$model",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "$v.perusahaan.negara.$model"
                }
              }),
              _vm._v(" "),
              _c(
                "vs-switch",
                {
                  staticClass: "mt-2",
                  attrs: { color: "success" },
                  model: {
                    value: _vm.perusahaan.aktif,
                    callback: function($$v) {
                      _vm.$set(_vm.perusahaan, "aktif", $$v)
                    },
                    expression: "perusahaan.aktif"
                  }
                },
                [
                  _c("span", { attrs: { slot: "on" }, slot: "on" }, [
                    _vm._v("Aktif")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { slot: "off" }, slot: "off" }, [
                    _vm._v("Tidak Aktif")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticStyle: { overflow: "scroll" } }, [
                _c("pre", [_vm._v(_vm._s(_vm.$v.$error))])
              ])
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/url.js":
/*!*********************************!*\
  !*** ./resources/js/src/url.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const api = "http://panel.inilahkepri.id";
// const base = "";
// const web = "http://panel.inilahkepri.id";
var api = "http://localhost/project/starter-kit/api";
var base = "project/starter-kit";
var web = "http://localhost/project/starter-kit";
var assets = "http://localhost/project/starter-kit";
var publicData = "http://localhost/project/starter-kit"; // const api = "http://192.168.1.98/siJempol";
// const base = "siJempol";
// const web = "http://192.168.1.98/siJempol"
// const publicData = "http://192.168.1.98/siJempol/public";
// const assets = "http://192.168.1.98/Resources/perusahaan";
// const api = "http://appkepri.com/siJempol";
// const base = "siJempol";
// const web = "http://appkepri.com/siJempol"
// const publicData = "http://appkepri.com/siJempol/public";
// const assets = "http://appkepri.com/Resources/perusahaan";
// const api = "https://dpmptsp.kepriprov.go.id/siJempol";
// const base = "";
// const web = "https://dpmptsp.kepriprov.go.id/siJempol"
// const publicData = "https://dpmptsp.kepriprov.go.id/siJempol/public";
// const assets = "https://dpmptsp.kepriprov.go.id/Resources/perusahaan";

/* harmony default export */ __webpack_exports__["default"] = ({
  api: api,
  base: base,
  web: web,
  assets: assets,
  publicData: publicData
});

/***/ }),

/***/ "./resources/js/src/views/perusahaan/popUp.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/perusahaan/popUp.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popUp_vue_vue_type_template_id_6a6030b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUp.vue?vue&type=template&id=6a6030b3& */ "./resources/js/src/views/perusahaan/popUp.vue?vue&type=template&id=6a6030b3&");
/* harmony import */ var _popUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popUp.vue?vue&type=script&lang=js& */ "./resources/js/src/views/perusahaan/popUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _popUp_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUp.vue?vue&type=style&index=0&lang=stylus& */ "./resources/js/src/views/perusahaan/popUp.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _popUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _popUp_vue_vue_type_template_id_6a6030b3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _popUp_vue_vue_type_template_id_6a6030b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/perusahaan/popUp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/perusahaan/popUp.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/perusahaan/popUp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./popUp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/perusahaan/popUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/perusahaan/popUp.vue?vue&type=style&index=0&lang=stylus&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/perusahaan/popUp.vue?vue&type=style&index=0&lang=stylus& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popUp_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--11-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./popUp.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/perusahaan/popUp.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popUp_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popUp_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popUp_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popUp_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/perusahaan/popUp.vue?vue&type=template&id=6a6030b3&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/perusahaan/popUp.vue?vue&type=template&id=6a6030b3& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popUp_vue_vue_type_template_id_6a6030b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./popUp.vue?vue&type=template&id=6a6030b3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/perusahaan/popUp.vue?vue&type=template&id=6a6030b3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popUp_vue_vue_type_template_id_6a6030b3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popUp_vue_vue_type_template_id_6a6030b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);