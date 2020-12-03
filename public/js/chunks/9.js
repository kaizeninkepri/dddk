(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/excel/ImportExcel.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/excel/ImportExcel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    onSuccess: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      isLoading: false,
      excelData: {
        header: null,
        results: null,
        meta: null
      }
    };
  },
  methods: {
    generateData: function generateData(_ref) {
      var header = _ref.header,
          results = _ref.results,
          meta = _ref.meta;
      this.excelData.header = header;
      this.excelData.results = results;
      this.excelData.meta = meta;
      this.onSuccess && this.onSuccess(this.excelData);
    },
    getHeaderRow: function getHeaderRow(sheet) {
      var headers = [];
      var range = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.decode_range(sheet['!ref']);
      var C;
      var R = range.s.r;
      /* start in the first row */

      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        var cell = sheet[xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.encode_cell({
          c: C,
          r: R
        })];
        /* find the cell in the first row */

        var hdr = 'UNKNOWN ' + C; // <-- replace with your desired default

        if (cell && cell.t) hdr = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.format_cell(cell);
        headers.push(hdr);
      }

      return headers;
    },
    handleDragover: function handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    },
    handleDrop: function handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;

      if (files.length !== 1) {
        this.$vs.notify({
          title: 'Login Attempt',
          text: 'Only support uploading one file!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        });
        return;
      }

      var rawFile = files[0]; // only use files[0]

      if (!this.isExcel(rawFile)) {
        this.$vs.notify({
          title: 'Login Attempt',
          text: 'Only supports upload .xlsx, .xls, .csv suffix files',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        });
        return false;
      }

      this.uploadFile(rawFile);
    },
    readerData: function readerData(rawFile) {
      var _this = this;

      return new Promise(function (resolve) {
        var reader = new FileReader();

        reader.onload = function (e) {
          var data = e.target.result;
          var workbook = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.read(data, {
            type: 'array'
          });
          var firstSheetName = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[firstSheetName];

          var header = _this.getHeaderRow(worksheet);

          var results = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.sheet_to_json(worksheet);
          var meta = {
            sheetName: firstSheetName
          };

          _this.generateData({
            header: header,
            results: results,
            meta: meta
          });

          resolve();
        };

        reader.readAsArrayBuffer(rawFile);
      });
    },
    handleClick: function handleClick(e) {
      var files = e.target.files;
      var rawFile = files[0];
      if (!rawFile) return;
      this.uploadFile(rawFile);
    },
    isExcel: function isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name);
    },
    uploadFile: function uploadFile(file) {
      this.$refs['fileInput'].value = null; // fix can't select the same excel

      this.readerData(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/layanan/izin_form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/layanan/izin_form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/url */ "./resources/js/src/url.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_excel_ImportExcel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/excel/ImportExcel.vue */ "./resources/js/src/components/excel/ImportExcel.vue");
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
  components: {
    ImportExcel: _components_excel_ImportExcel_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      page: {
        submitType: "InsertByForm"
      },
      tabsActive: 0,
      colorx: "#1978c3",
      form: {
        opdi_id: null,
        nama_izin: null,
        kategori: null,
        biaya: null,
        masakerja: null,
        aktif: true,
        distrik_id: this.$route.query.v,
        persyaratan: [{
          persyaratan: "",
          aktif: true
        }, {
          persyaratan: "",
          aktif: true
        }, {
          persyaratan: "",
          aktif: true
        }]
      }
    };
  },
  validations: function validations() {
    return {
      form: {
        nama_izin: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        kategori: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        masakerja: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        persyaratan: {
          $each: {
            persyaratan: {
              required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
            }
          }
        }
      }
    };
  },
  mounted: function mounted() {
    if (this.$route.query.p) {
      this.page.submitType = "UpdateById";
      this.getIzin();
    }
  },
  methods: {
    DeleteFormPersyaratan: function DeleteFormPersyaratan(i) {
      this.$delete(this.form.persyaratan, i);
    },
    AddFormPersyaratan: function AddFormPersyaratan() {
      this.form.persyaratan.push({
        persyaratan: null,
        aktif: true
      });
    },
    postToDatabase: function postToDatabase() {
      var _this = this;

      this.$v.$touch();

      if (!this.$v.$invalid) {
        axios.post(_url__WEBPACK_IMPORTED_MODULE_0__["default"].api + "/layanan/izin", {
          type: this.page.submitType,
          data: this.form
        }).then(function (r) {
          _this.$vs.notify({
            color: "success",
            title: r.data.title,
            text: r.data.text
          });

          _this.$router.push({
            name: "distrik-detail",
            query: {
              v: _this.form.distrik_id
            }
          });
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    loadDataInTable: function loadDataInTable(_ref) {
      var results = _ref.results,
          header = _ref.header,
          meta = _ref.meta;
      this.form.persyaratan = results;
      this.form.nama_izin = this.form.persyaratan[0].nama_izin;
      this.form.kategori = this.form.persyaratan[0].kategori;
      this.form.masakerja = this.form.persyaratan[0].masakerja;
      this.tabsActive = 0;
    },
    getIzin: function getIzin() {
      var _this2 = this;

      axios.post(_url__WEBPACK_IMPORTED_MODULE_0__["default"].api + "/layanan/izin", {
        type: "dataById",
        id: this.$route.query.p
      }).then(function (r) {
        _this2.form = r.data;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/layanan/izin_form.vue?vue&type=style&index=0&lang=stylus&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/layanan/izin_form.vue?vue&type=style&index=0&lang=stylus& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs-input {\n  width: 100%;\n}[dir] .vs-input {\n  margin-top: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/layanan/izin_form.vue?vue&type=style&index=0&lang=stylus&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/layanan/izin_form.vue?vue&type=style&index=0&lang=stylus& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--11-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./izin_form.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/layanan/izin_form.vue?vue&type=style&index=0&lang=stylus&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/excel/ImportExcel.vue?vue&type=template&id=435d3aaa&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/excel/ImportExcel.vue?vue&type=template&id=435d3aaa& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "excel-import" },
    [
      _vm.isLoading
        ? _c(
            "vs-progress",
            { attrs: { indeterminate: "", color: "primary" } },
            [_vm._v("primary")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("input", {
        ref: "fileInput",
        staticClass: "hidden",
        attrs: { type: "file", accept: ".xlsx, .xls" },
        on: { change: _vm.handleClick }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "px-8 py-16 cursor-pointer text-center border-2 border-dashed d-theme-border-grey-light d-theme-dark-bg text-xl",
          on: {
            click: function($event) {
              _vm.$refs.fileInput.click(), (_vm.isLoading = true)
            },
            drop: _vm.handleDrop,
            dragover: _vm.handleDragover,
            dragenter: _vm.handleDragover
          }
        },
        [
          _c("feather-icon", {
            staticClass: "block",
            attrs: {
              icon: "UploadCloudIcon",
              svgClasses: "h-16 w-16 stroke-current text-grey"
            }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Drop Excel File or ")]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "font-medium text-primary",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.$refs.fileInput.click()
                }
              }
            },
            [_vm._v("Browse")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/layanan/izin_form.vue?vue&type=template&id=763929a2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/layanan/izin_form.vue?vue&type=template&id=763929a2& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c("vx-card", { staticClass: "pd-5" }, [
        _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
          _c(
            "div",
            { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
            [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                  attrs: { for: "grid-first-name" }
                },
                [_vm._v("\n          Nama Izin\n        ")]
              ),
              _vm._v(" "),
              _c("vs-input", {
                attrs: { danger: _vm.$v.form.nama_izin.$error },
                model: {
                  value: _vm.$v.form.nama_izin.$model,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.$v.form.nama_izin,
                      "$model",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "$v.form.nama_izin.$model"
                }
              }),
              _vm._v(" "),
              _vm.$v.form.nama_izin.$anyError
                ? _c("div", [
                    !_vm.$v.form.nama_izin.required
                      ? _c("span", { staticClass: "text-xs text-danger" }, [
                          _vm._v("required")
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full md:w-1/6 px-3" },
            [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                  attrs: { for: "grid-last-name" }
                },
                [_vm._v("\n          kategori\n        ")]
              ),
              _vm._v(" "),
              _c(
                "vs-select",
                {
                  staticClass: "selectExample mt-2",
                  attrs: { danger: _vm.$v.form.kategori.$error },
                  model: {
                    value: _vm.$v.form.kategori.$model,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.$v.form.kategori,
                        "$model",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "$v.form.kategori.$model"
                  }
                },
                [
                  _c("vs-select-item", {
                    attrs: { value: "perizinan", text: "perizinan" }
                  }),
                  _vm._v(" "),
                  _c("vs-select-item", {
                    attrs: { value: "nonperizinan", text: "nonperizinan" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full md:w-1/6 px-3" },
            [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                  attrs: { for: "grid-first-name" }
                },
                [_vm._v("\n          Masa Kerja\n        ")]
              ),
              _vm._v(" "),
              _c("vs-input", {
                attrs: { danger: _vm.$v.form.masakerja.$error },
                model: {
                  value: _vm.$v.form.masakerja.$model,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.$v.form.masakerja,
                      "$model",
                      typeof $$v === "string" ? $$v.trim() : $$v
                    )
                  },
                  expression: "$v.form.masakerja.$model"
                }
              }),
              _vm._v(" "),
              _vm.$v.form.masakerja.$anyError
                ? _c("div", [
                    !_vm.$v.form.masakerja.required
                      ? _c("span", { staticClass: "text-xs text-danger" }, [
                          _vm._v("required")
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full md:w-1/6 px-3" },
            [
              _c("label", {
                staticClass:
                  "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                attrs: { for: "grid-last-name" }
              }),
              _vm._v(" "),
              _c(
                "vs-switch",
                {
                  staticClass: "mt-8",
                  model: {
                    value: _vm.form.aktif,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "aktif", $$v)
                    },
                    expression: "form.aktif"
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
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "vx-card",
        { staticClass: "mt-2" },
        [
          _c("vs-divider", [_vm._v(" Persyaratan ")]),
          _vm._v(" "),
          _c(
            "vs-tabs",
            {
              attrs: { alignment: "center", color: _vm.colorx },
              model: {
                value: _vm.tabsActive,
                callback: function($$v) {
                  _vm.tabsActive = $$v
                },
                expression: "tabsActive"
              }
            },
            [
              _c(
                "vs-tab",
                {
                  attrs: { label: "Formulir" },
                  on: {
                    click: function($event) {
                      _vm.colorx = "#1978c3"
                    }
                  }
                },
                [
                  _c("table", { staticClass: "table-auto" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "px-4 py-2" }, [_vm._v("No")]),
                        _vm._v(" "),
                        _c("th", { staticClass: "w-full px-4 py-2" }, [
                          _vm._v("Persyaratan")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "w-1/3 px-4 py-2" }, [
                          _vm._v("Aksi")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.$v.form.persyaratan.$each.$iter, function(
                        p,
                        Index
                      ) {
                        return _c("tr", { key: Index }, [
                          _c("td", { staticClass: "border px-4 py-2" }, [
                            _vm._v(_vm._s(parseInt(Index) + 1))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "border px-4 py-2" },
                            [
                              _c("vs-input", {
                                attrs: { danger: p.persyaratan.$error },
                                model: {
                                  value: p.persyaratan.$model,
                                  callback: function($$v) {
                                    _vm.$set(
                                      p.persyaratan,
                                      "$model",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "p.persyaratan.$model"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "border px-4 py-2" },
                            [
                              _vm.form.persyaratan.length > 1
                                ? _c("vs-button", {
                                    attrs: {
                                      color: "danger",
                                      type: "border",
                                      icon: "delete_outline"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.DeleteFormPersyaratan(Index)
                                      }
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "center",
                    [
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            color: "primary",
                            type: "border",
                            icon: "playlist_add"
                          },
                          on: {
                            click: function($event) {
                              return _vm.AddFormPersyaratan()
                            }
                          }
                        },
                        [_vm._v("Tambah persyaratan")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-tab",
                {
                  attrs: { label: "Import Via Exel" },
                  on: {
                    click: function($event) {
                      _vm.colorx = "#FFA500"
                    }
                  }
                },
                [
                  _c(
                    "center",
                    [
                      _c("import-excel", {
                        attrs: { onSuccess: _vm.loadDataInTable }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "mt-10",
                          attrs: { color: "warning", icon: "file_copy" },
                          on: {
                            click: function($event) {
                              return _vm.AddFormPersyaratan()
                            }
                          }
                        },
                        [_vm._v("Template")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vx-card",
        { staticClass: "mt-2" },
        [
          _c(
            "vs-row",
            { attrs: { "vs-w": "12" } },
            [
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-type": "flex",
                    "vs-offset": "8",
                    "vs-justify": "right",
                    "vs-align": "right",
                    "vs-lg": "5",
                    "vs-sm": "5"
                  }
                },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: { color: "primary", icon: "save_alt" },
                      on: {
                        click: function($event) {
                          return _vm.postToDatabase()
                        }
                      }
                    },
                    [_vm._v("Simpan")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/excel/ImportExcel.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/components/excel/ImportExcel.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImportExcel_vue_vue_type_template_id_435d3aaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImportExcel.vue?vue&type=template&id=435d3aaa& */ "./resources/js/src/components/excel/ImportExcel.vue?vue&type=template&id=435d3aaa&");
/* harmony import */ var _ImportExcel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportExcel.vue?vue&type=script&lang=js& */ "./resources/js/src/components/excel/ImportExcel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImportExcel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImportExcel_vue_vue_type_template_id_435d3aaa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImportExcel_vue_vue_type_template_id_435d3aaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/excel/ImportExcel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/excel/ImportExcel.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/components/excel/ImportExcel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportExcel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImportExcel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/excel/ImportExcel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportExcel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/excel/ImportExcel.vue?vue&type=template&id=435d3aaa&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/components/excel/ImportExcel.vue?vue&type=template&id=435d3aaa& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportExcel_vue_vue_type_template_id_435d3aaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImportExcel.vue?vue&type=template&id=435d3aaa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/excel/ImportExcel.vue?vue&type=template&id=435d3aaa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportExcel_vue_vue_type_template_id_435d3aaa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportExcel_vue_vue_type_template_id_435d3aaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/src/views/layanan/izin_form.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/layanan/izin_form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _izin_form_vue_vue_type_template_id_763929a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./izin_form.vue?vue&type=template&id=763929a2& */ "./resources/js/src/views/layanan/izin_form.vue?vue&type=template&id=763929a2&");
/* harmony import */ var _izin_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./izin_form.vue?vue&type=script&lang=js& */ "./resources/js/src/views/layanan/izin_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _izin_form_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./izin_form.vue?vue&type=style&index=0&lang=stylus& */ "./resources/js/src/views/layanan/izin_form.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _izin_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _izin_form_vue_vue_type_template_id_763929a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _izin_form_vue_vue_type_template_id_763929a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/layanan/izin_form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/layanan/izin_form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/layanan/izin_form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_izin_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./izin_form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/layanan/izin_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_izin_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/layanan/izin_form.vue?vue&type=style&index=0&lang=stylus&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/layanan/izin_form.vue?vue&type=style&index=0&lang=stylus& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_izin_form_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--11-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./izin_form.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/layanan/izin_form.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_izin_form_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_izin_form_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_izin_form_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_izin_form_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/layanan/izin_form.vue?vue&type=template&id=763929a2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/layanan/izin_form.vue?vue&type=template&id=763929a2& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_izin_form_vue_vue_type_template_id_763929a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./izin_form.vue?vue&type=template&id=763929a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/layanan/izin_form.vue?vue&type=template&id=763929a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_izin_form_vue_vue_type_template_id_763929a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_izin_form_vue_vue_type_template_id_763929a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);