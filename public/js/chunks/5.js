(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{0:function(e,t){},"0LR2":function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\npre.selected.hljs {\n  height: 295px;\n  overflow: auto;\n}\n[dir] pre.selected.hljs {\n  margin: 8px 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 1rem;\n}\n.vue-simple-suggest.designed .input-wrapper input {\n  color: inherit;\n  position: relative;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n[dir] .vue-simple-suggest.designed .input-wrapper input {\n  padding: 0.7rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n}\n[dir] .vue-simple-suggest.designed.focus .input-wrapper input {\n  border: 1px solid rgba(var(--vs-primary), 1) !important;\n}\n[dir] .vue-simple-suggest.designed .suggestions {\n  border-radius: 5px;\n}\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item {\n  padding: 0.8rem 1rem;\n}\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item.hover, [dir] .vue-simple-suggest.designed .suggestions .suggest-item.selected {\n  background-color: rgba(var(--vs-primary), 1) !important;\n}\n[dir] .theme-dark .vx-card .vue-simple-suggest input {\n  background: #262c49 !important;\n}\n[dir] .theme-dark .vx-card .vue-simple-suggest .suggestions {\n  background: #262c49 !important;\n}\n[dir] .theme-dark .vx-card pre.selected.hljs {\n  border-color: #414561 !important;\n}\n[dir] .theme-dark .vue-simple-suggest input {\n  background: #10163a !important;\n}\n[dir] .theme-dark .vue-simple-suggest .suggestions {\n  background: #10163a !important;\n}\n[dir] .theme-dark pre.selected.hljs {\n  border-color: #414561 !important;\n}",""])},1:function(e,t){},2:function(e,t){},"2RtO":function(e,t,s){"use strict";s("z+MQ")},"73T2":function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,".vue-simple-suggest > ul {\n  list-style: none;\n}[dir] .vue-simple-suggest > ul {\n  margin: 0;\n  padding: 0;\n}\n\n.vue-simple-suggest.designed {\n  position: relative;\n}\n\n.vue-simple-suggest.designed, .vue-simple-suggest.designed * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.vue-simple-suggest.designed .input-wrapper input {\n  display: block;\n  width: 100%;\n  color: black;\n  outline:none;\n  -webkit-transition: all .1s;\n  transition: all .1s\n}\n\n[dir] .vue-simple-suggest.designed .input-wrapper input {\n  padding: 10px;\n  border: 1px solid #cde;\n  border-radius: 3px;\n  background: white;\n  -webkit-transition-delay: .05s;\n          transition-delay: .05s\n}\n\n[dir] .vue-simple-suggest.designed.focus .input-wrapper input {\n  border: 1px solid #aaa;\n}\n\n.vue-simple-suggest.designed .suggestions {\n  position: absolute;\n  top: 100%;\n  top: calc(100% + 5px);\n  opacity: 1;\n  z-index: 1000;\n}\n\n[dir] .vue-simple-suggest.designed .suggestions {\n  border-radius: 3px;\n  border: 1px solid #aaa;\n  background-color: #fff;\n}\n\n[dir=ltr] .vue-simple-suggest.designed .suggestions {\n  left: 0;\n  right: 0;\n}\n\n[dir=rtl] .vue-simple-suggest.designed .suggestions {\n  right: 0;\n  left: 0;\n}\n\n.vue-simple-suggest.designed .suggestions .suggest-item {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item {\n  cursor: pointer;\n}\n\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item, [dir] .vue-simple-suggest.designed .suggestions .misc-item {\n  padding: 5px 10px;\n}\n\n.vue-simple-suggest.designed .suggestions .suggest-item.hover {\n  color: #fff !important;\n}\n\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item.hover {\n  background-color: #2874D5 !important;\n}\n\n.vue-simple-suggest.designed .suggestions .suggest-item.selected {\n  color: #fff;\n}\n\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item.selected {\n  background-color: #2832D5;\n}\n",""])},De6z:function(e,t,s){"use strict";s("xOtk")},FtBI:function(e,t,s){"use strict";s("s2Hj")},MiKQ:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"[dir] .con-exemple-prompt {\n  padding: 10px;\n  padding-bottom: 0px;\n}\n.con-exemple-prompt .vs-input {\n  width: 100%;\n}\n[dir] .con-exemple-prompt .vs-input {\n  margin-top: 10px;\n}\n",""])},URHZ:function(e,t,s){"use strict";(function(e){const s={selectionUp:[38],selectionDown:[40],select:[13],hideList:[27],showList:[40],autocomplete:[32,13]},n={input:String,select:Object};function i(e,t){return a(e,t.keyCode)}function a(e,t){if(e.length<=0)return!1;const s=e=>e.some(e=>e===t);return Array.isArray(e[0])?e.some(e=>s(e)):s(e)}function r(){}function o(e,t){var s=e();return s&&s.then?s.then(t):t(s)}function l(e){return function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];try{return Promise.resolve(e.apply(this,t))}catch(e){return Promise.reject(e)}}}function u(e,t,s){return s?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function c(e,t){try{var s=e()}catch(e){return t(e)}return s&&s.then?s.then(void 0,t):s}function p(e,t){try{var s=e()}catch(e){return t()}return s&&s.then?s.then(t,t):t()}var d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vue-simple-suggest",class:[e.styles.vueSimpleSuggest,{designed:!e.destyled,focus:e.isInFocus}],on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab"))return null;e.isTabbed=!0}}},[s("div",{ref:"inputSlot",staticClass:"input-wrapper",class:e.styles.inputWrapper,attrs:{role:"combobox","aria-haspopup":"listbox","aria-owns":e.listId,"aria-expanded":e.listShown&&!e.removeList?"true":"false"}},[e._t("default",[s("input",e._b({staticClass:"default-input",class:e.styles.defaultInput,domProps:{value:e.text||""}},"input",e.$attrs,!1))])],2),e._v(" "),s("transition",{attrs:{name:"vue-simple-suggest"}},[e.listShown&&!e.removeList?s("ul",{staticClass:"suggestions",class:e.styles.suggestions,attrs:{id:e.listId,role:"listbox","aria-labelledby":e.listId}},[this.$scopedSlots["misc-item-above"]?s("li",[e._t("misc-item-above",null,{suggestions:e.suggestions,query:e.text})],2):e._e(),e._v(" "),e._l(e.suggestions,(function(t,n){return s("li",{key:e.getId(t,n),staticClass:"suggest-item",class:[e.styles.suggestItem,{selected:e.isSelected(t),hover:e.isHovered(t)}],attrs:{role:"option","aria-selected":e.isHovered(t)||e.isSelected(t)?"true":"false",id:e.getId(t,n)},on:{mouseenter:function(s){return e.hover(t,s.target)},mouseleave:function(t){return e.hover(void 0)},click:function(s){return e.suggestionClick(t,s)}}},[e._t("suggestion-item",[s("span",[e._v(e._s(e.displayProperty(t)))])],{autocomplete:function(){return e.autocompleteText(t)},suggestion:t,query:e.text})],2)})),e._v(" "),this.$scopedSlots["misc-item-below"]?s("li",[e._t("misc-item-below",null,{suggestions:e.suggestions,query:e.text})],2):e._e()],2):e._e()])],1)},staticRenderFns:[],name:"vue-simple-suggest",inheritAttrs:!1,model:{prop:"value",event:"input"},props:{styles:{type:Object,default:()=>({})},controls:{type:Object,default:()=>s},minLength:{type:Number,default:1},maxSuggestions:{type:Number,default:10},displayAttribute:{type:String,default:"title"},valueAttribute:{type:String,default:"id"},list:{type:[Function,Array],default:()=>[]},removeList:{type:Boolean,default:!1},destyled:{type:Boolean,default:!1},filterByQuery:{type:Boolean,default:!1},filter:{type:Function,default(e,t){return!t||~this.displayProperty(e).toLowerCase().indexOf(t.toLowerCase())}},debounce:{type:Number,default:0},nullableSelect:{type:Boolean,default:!1},value:{},mode:{type:String,default:"input",validator:e=>!!~Object.keys(n).indexOf(e.toLowerCase())}},watch:{mode:{handler(e,t){this.constructor.options.model.event=e,this.$parent&&this.$parent.$forceUpdate(),this.$nextTick(()=>{"input"===e?this.$emit("input",this.text):this.$emit("select",this.selected)})},immediate:!0},value:{handler(e){"string"!=typeof e&&(e=this.displayProperty(e)),this.updateTextOutside(e)},immediate:!0}},data(){return{selected:null,hovered:null,suggestions:[],listShown:!1,inputElement:null,canSend:!0,timeoutInstance:null,text:this.value,isPlainSuggestion:!1,isClicking:!1,isInFocus:!1,isFalseFocus:!1,isTabbed:!1,controlScheme:{},listId:this._uid+"-suggestions"}},computed:{listIsRequest(){return"function"==typeof this.list},inputIsComponent(){return this.$slots.default&&this.$slots.default.length>0&&!!this.$slots.default[0].componentInstance},input(){return this.inputIsComponent?this.$slots.default[0].componentInstance:this.inputElement},on(){return this.inputIsComponent?"$on":"addEventListener"},off(){return this.inputIsComponent?"$off":"removeEventListener"},hoveredIndex(){for(let e=0;e<this.suggestions.length;e++){const t=this.suggestions[e];if(this.hovered&&this.valueProperty(this.hovered)==this.valueProperty(t))return e}return-1},textLength(){return this.text&&this.text.length||this.inputElement.value.length||0},isSelectedUpToDate(){return!!this.selected&&this.displayProperty(this.selected)===this.text}},created(){this.controlScheme=Object.assign({},s,this.controls)},mounted(){this.inputElement=this.$refs.inputSlot.querySelector("input"),this.setInputAriaAttributes(),this.prepareEventHandlers(!0)},beforeDestroy(){this.prepareEventHandlers(!1)},methods:{isEqual(e,t){return t&&this.valueProperty(e)==this.valueProperty(t)},isSelected(e){return this.isEqual(e,this.selected)},isHovered(e){return this.isEqual(e,this.hovered)},setInputAriaAttributes(){this.inputElement.setAttribute("aria-activedescendant",""),this.inputElement.setAttribute("aria-autocomplete","list"),this.inputElement.setAttribute("aria-controls",this.listId)},prepareEventHandlers(e){const t=this[e?"on":"off"],s={click:this.showSuggestions,keydown:this.onKeyDown,keyup:this.onListKeyUp},n=Object.assign({blur:this.onBlur,focus:this.onFocus,input:this.onInput},s);for(const e in n)this.input[t](e,n[e]);const i=e?"addEventListener":"removeEventListener";for(const e in s)this.inputElement[i](e,s[e])},isScopedSlotEmpty(e){if(e){const t=e(this);return!(Array.isArray(t)||t&&(t.tag||t.context||t.text||t.children))}return!0},miscSlotsAreEmpty(){const e=["misc-item-above","misc-item-below"].map(e=>this.$scopedSlots[e]);if(e.every(e=>!!e))return e.every(this.isScopedSlotEmpty.bind(this));const t=e.find(e=>!!e);return this.isScopedSlotEmpty.call(this,t)},getPropertyByAttribute(e,t){return this.isPlainSuggestion?e:void 0!==typeof e?function(e,t){return t.split(".").reduce((e,t)=>e===Object(e)?e[t]:e,e)}(e,t):e},displayProperty(t){if(this.isPlainSuggestion)return t;let s=this.getPropertyByAttribute(t,this.displayAttribute);return void 0===s&&(s=JSON.stringify(t),e&&~"production".indexOf("dev")&&console.warn("[vue-simple-suggest]: Please, provide `display-attribute` as a key or a dotted path for a property from your object.")),String(s||"")},valueProperty(e){if(this.isPlainSuggestion)return e;const t=this.getPropertyByAttribute(e,this.valueAttribute);return void 0===t&&console.error("[vue-simple-suggest]: Please, check if you passed 'value-attribute' (default is 'id') and 'display-attribute' (default is 'title') props correctly.\n        Your list objects should always contain a unique identifier."),t},autocompleteText(e){this.setText(this.displayProperty(e))},setText(e){this.$nextTick(()=>{this.inputElement.value=e,this.text=e,this.$emit("input",e)})},select(e){(this.selected!==e||this.nullableSelect&&!e)&&(this.selected=e,this.$emit("select",e),e&&this.autocompleteText(e)),this.hover(null)},hover(e,t){const s=e?this.getId(e,this.hoveredIndex):"";this.inputElement.setAttribute("aria-activedescendant",s),e&&e!==this.hovered&&this.$emit("hover",e,t),this.hovered=e},hideList(){this.listShown&&(this.listShown=!1,this.hover(null),this.$emit("hide-list"))},showList(){this.listShown||this.textLength>=this.minLength&&(this.suggestions.length>0||!this.miscSlotsAreEmpty())&&(this.listShown=!0,this.$emit("show-list"))},showSuggestions:l((function(){const e=this;return o((function(){if(0===e.suggestions.length&&e.minLength<=e.textLength)return e.showList(),function(e,t){if(!t)return e&&e.then?e.then(r):Promise.resolve()}(e.research())}),(function(){e.showList()}))})),onShowList(e){i(this.controlScheme.showList,e)&&this.showSuggestions()},moveSelection(e){if(this.listShown&&this.suggestions.length&&i([this.controlScheme.selectionUp,this.controlScheme.selectionDown],e)){e.preventDefault();const t=i(this.controlScheme.selectionDown,e),s=2*t-1,n=t?0:this.suggestions.length-1,a=t?this.hoveredIndex<this.suggestions.length-1:this.hoveredIndex>0;let r=null;r=this.hovered?a?this.suggestions[this.hoveredIndex+s]:this.suggestions[n]:this.selected||this.suggestions[n],this.hover(r)}},onKeyDown(e){const t=this.controlScheme.select,s=this.controlScheme.hideList;"Enter"===e.key&&this.listShown&&a([t,s],13)&&e.preventDefault(),"Tab"===e.key&&this.hovered&&this.select(this.hovered),this.onShowList(e),this.moveSelection(e),this.onAutocomplete(e)},onListKeyUp(e){const t=this.controlScheme.select,s=this.controlScheme.hideList;this.listShown&&i([t,s],e)&&(e.preventDefault(),i(t,e)&&this.select(this.hovered),this.hideList())},onAutocomplete(e){i(this.controlScheme.autocomplete,e)&&(e.ctrlKey||e.shiftKey)&&this.suggestions.length>0&&this.suggestions[0]&&this.listShown&&(e.preventDefault(),this.hover(this.suggestions[0]),this.autocompleteText(this.suggestions[0]))},suggestionClick(e,t){this.$emit("suggestion-click",e,t),this.select(e),this.hideList(),this.isClicking=!1},onBlur(e){this.isInFocus?(this.isClicking=this.hovered&&!this.isTabbed,this.isClicking?e&&e.isTrusted&&!this.isTabbed&&(this.isFalseFocus=!0,setTimeout(()=>{this.inputElement.focus()},0)):(this.isInFocus=!1,this.hideList(),this.$emit("blur",e))):(this.inputElement.blur(),console.error("This should never happen!\n          If you encountered this error, please make sure that your input component emits 'focus' events properly.\n          For more info see https://github.com/KazanExpress/vue-simple-suggest#custom-input.\n\n          If your 'vue-simple-suggest' setup does not include a custom input component - please,\n          report to https://github.com/KazanExpress/vue-simple-suggest/issues/new")),this.isTabbed=!1},onFocus(e){this.isInFocus=!0,e&&!this.isFalseFocus&&this.$emit("focus",e),this.isClicking||this.isFalseFocus||this.showSuggestions(),this.isFalseFocus=!1},onInput(e){const t=e.target?e.target.value:e;this.updateTextOutside(t),this.$emit("input",t)},updateTextOutside(e){this.text!==e&&(this.text=e,this.hovered&&this.hover(null),this.text.length<this.minLength?this.hideList():this.debounce?(clearTimeout(this.timeoutInstance),this.timeoutInstance=setTimeout(this.research,this.debounce)):this.research())},research:l((function(){const e=this;return p((function(){return c((function(){return function(e){var t=e();if(t&&t.then)return t.then(r)}((function(){if(e.canSend){e.canSend=!1;let t=e.text;return u(e.getSuggestions(e.text),(function(s){t===e.text&&e.$set(e,"suggestions",s)}))}}))}),(function(t){throw e.clearSuggestions(),t}))}),(function(){return e.canSend=!0,0===e.suggestions.length&&e.miscSlotsAreEmpty()?e.hideList():e.isInFocus&&e.showList(),e.suggestions}))})),getSuggestions:l((function(e){const t=this;if((e=e||"").length<t.minLength)return[];t.selected=null,t.listIsRequest&&t.$emit("request-start",e);let s=[];return p((function(){return c((function(){return o((function(){if(t.listIsRequest)return u(t.list(e),(function(e){s=e||[]}));s=t.list}),(function(){Array.isArray(s)||(s=[s]),t.isPlainSuggestion="object"!=typeof s[0]||Array.isArray(s[0]),t.filterByQuery&&(s=s.filter(s=>t.filter(s,e))),t.listIsRequest&&t.$emit("request-done",s)}))}),(function(e){if(!t.listIsRequest)throw e;t.$emit("request-failed",e)}))}),(function(){return t.maxSuggestions&&s.splice(t.maxSuggestions),s}))})),clearSuggestions(){this.suggestions.splice(0)},getId(e,t){return`${this.listId}-suggestion-${this.isPlainSuggestion?t:this.valueProperty(e)||t}`}}};t.a=d}).call(this,s("8oxB"))},"Usc/":function(e,t,s){"use strict";var n=s("Ye0E"),i=s("ta7f"),a=s("vDqi"),r={data:function(){return{activePrompt:!1,page:{submitType:"InsertByForm"},perusahaan:{perusahaan_id:null,nama:null,npwp:null,bidang:null,alamat:null,negara:null,aktif:!0},afriandi:"isna"}},validations:function(){return{perusahaan:{nama:{required:i.required},npwp:{required:i.required},bidang:{required:i.required},alamat:{required:i.required},negara:{required:i.required}}}},methods:{close:function(){this.$vs.notify({color:"danger",title:"Closed",text:"You close a dialog!"})},PostTODatabase:function(){var e=this;this.$v.$touch(),this.$v.$invalid?this.activePrompt=!0:a.post(n.a.api+"/perusahaan",{type:this.page.submitType,data:this.perusahaan}).then((function(t){e.$vs.notify({color:"success",title:t.data.title,text:t.data.text}),e.perusahaan.perusahaan_id=t.data.id,e.$emit("GetPerusahaanFromChild",e.perusahaan)})).catch((function(e){console.log(e)}))}}},o=(s("De6z"),s("KHd+")),l=Object(o.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("vs-prompt",{attrs:{active:e.activePrompt,title:"DATA PERUSAHAAN"},on:{cancel:function(t){e.activePrompt=!1},accept:function(t){return e.PostTODatabase()},close:e.close,"update:active":function(t){e.activePrompt=t}}},[s("div",{staticClass:"con-exemple-prompt"},[s("vs-input",{attrs:{label:"Npwp",danger:e.$v.perusahaan.npwp.$error},model:{value:e.$v.perusahaan.npwp.$model,callback:function(t){e.$set(e.$v.perusahaan.npwp,"$model","string"==typeof t?t.trim():t)},expression:"$v.perusahaan.npwp.$model"}}),e._v(" "),s("vs-input",{staticClass:"mt-2",attrs:{label:"Nama",danger:e.$v.perusahaan.nama.$error},model:{value:e.$v.perusahaan.nama.$model,callback:function(t){e.$set(e.$v.perusahaan.nama,"$model","string"==typeof t?t.trim():t)},expression:"$v.perusahaan.nama.$model"}}),e._v(" "),s("vs-input",{staticClass:"mt-2",attrs:{label:"Bidang",danger:e.$v.perusahaan.bidang.$error},model:{value:e.$v.perusahaan.bidang.$model,callback:function(t){e.$set(e.$v.perusahaan.bidang,"$model","string"==typeof t?t.trim():t)},expression:"$v.perusahaan.bidang.$model"}}),e._v(" "),s("vs-textarea",{staticClass:"mt-2",attrs:{label:"Alamat",danger:e.$v.perusahaan.alamat.$error},model:{value:e.$v.perusahaan.alamat.$model,callback:function(t){e.$set(e.$v.perusahaan.alamat,"$model","string"==typeof t?t.trim():t)},expression:"$v.perusahaan.alamat.$model"}}),e._v(" "),s("vs-input",{staticClass:"mt-2",attrs:{label:"Negara",danger:e.$v.perusahaan.negara.$error},model:{value:e.$v.perusahaan.negara.$model,callback:function(t){e.$set(e.$v.perusahaan.negara,"$model","string"==typeof t?t.trim():t)},expression:"$v.perusahaan.negara.$model"}}),e._v(" "),s("vs-switch",{staticClass:"mt-2",attrs:{color:"success"},model:{value:e.perusahaan.aktif,callback:function(t){e.$set(e.perusahaan,"aktif",t)},expression:"perusahaan.aktif"}},[s("span",{attrs:{slot:"on"},slot:"on"},[e._v("Aktif")]),e._v(" "),s("span",{attrs:{slot:"off"},slot:"off"},[e._v("Tidak Aktif")])]),e._v(" "),s("div",{staticStyle:{overflow:"scroll"}},[s("pre",[e._v(e._s(e.$v.$error))])])],1)])],1)}),[],!1,null,null,null);t.a=l.exports},Ye0E:function(e,t,s){"use strict";t.a={api:"http://datacenterftzkepri.com/panel",base:"panel",web:"datacenterftzkepri.com/panel",assets:"http://appkepri.com/Resources/perusahaan",publicData:"datacenterftzkepri.com/panel/public"}},eeHm:function(e,t,s){"use strict";s.r(t);var n=s("Ye0E"),i=s("ta7f"),a=s("qjld"),r=s("URHZ"),o=(s("xMlF"),s("Usc/")),l=(s("1BPP"),s("jVEP")),u=s.n(l);function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var p=s("vDqi"),d={name:"Autocomplete",components:{ImportExcel:a.a,VueSimpleSuggest:r.a,Prism:u.a,perusahaanForm:o.a},computed:{years:function(){var e=(new Date).getFullYear();return Array.from({length:e-2014},(function(e,t){return 2015+t}))}},data:function(){var e,t;return{url:{template:n.a.web+"/public/images/exelInveststasi.xlsx"},activePrompt:!1,onFocusperusahaan:0,selected:{name:"react"},model:null,mode:"input",loading:!1,log:[],yourData:{title:"Analytics Dashboard",url:"/dashboard/analytics",icon:"HomeIcon",is_bookmarked:!1},page:{submitType:"InsertByForm"},tabsActive:0,colorx:"#1978c3",triwulan:null,tahun:null,form:[(e={jenis_investasi:null,perkiraan_nilai:null,periode:!1,proses:null,perusahaan_id:null,nama:null,npwp:null,bidang:null,alamat:null,negara:null,triwulan:null,tahun:null,tanggal:null},c(e,"alamat",null),c(e,"aktif","true"),e),(t={jenis_investasi:null,perkiraan_nilai:null,periode:!1,proses:null,perusahaan_id:null,nama:null,npwp:null,bidang:null,alamat:null,negara:null,triwulan:null,tahun:null},c(t,"alamat",null),c(t,"tanggal",null),c(t,"aktif","true"),t)],distrik:{},perusahaan:[]}},validations:function(){return{form:{$each:{nama:{required:i.required},perkiraan_nilai:{required:i.required},proses:{required:i.required},periode:{required:i.required},jenis_investasi:{required:i.required}}}}},mounted:function(){this.getPerusahaan(),this.$route.query.p&&(this.page.submitType="UpdateById",this.getIzin()),this.getDistrik(),this.$nextTick((function(){var e=this;window.addEventListener("keyup",(function(t){t.altKey&&78===t.keyCode&&(e.$refs.formPopUpperusahaan.activePrompt=!e.$refs.formPopUpperusahaan.activePrompt)}))}))},methods:{openLoadingInDiv:function(){this.$vs.loading({container:"#div-with-loading",scale:.6})},DeleteFormPersyaratan:function(e){this.$delete(this.form.persyaratan,e)},AddFormPersyaratan:function(){var e;this.form.push((c(e={jenis_investasi:null,perkiraan_nilai:null,periode:!1,proses:null,perusahaan_id:null,nama:null,npwp:null,bidang:null,alamat:null,negara:null,triwulan:null},"alamat",null),c(e,"tahun",null),c(e,"aktif","true"),c(e,"tanggal",null),e))},postToDatabase:function(){var e=this;this.$v.$touch(),this.$v.$invalid||p.post(n.a.api+"/investasi",{type:this.page.submitType,data:this.form,triwulan:this.triwulan,tahun:this.tahun,distrik_id:this.$route.query.v}).then((function(t){e.$vs.notify({color:"success",title:t.data.title,text:t.data.text}),e.$router.push({name:"distrik-detail",query:{v:e.$route.query.v,t:1}})})).catch((function(e){console.log(e)}))},loadDataInTable:function(e){var t=this,s=e.results;e.header,e.meta;this.form=[],s.forEach((function(e,s){t.form.push({jenis_investasi:e["JENIS INVESTASI"],perkiraan_nilai:e["PERKIRAAN TOTAL INVESTASI                        (Dalam DOLAR US)"],periode:e["PERIODE INVESTASI"],proses:e["PROSES SAAT INI"],perusahaan_id:null,nama:e["NAMA PERUSAHAAN"],npwp:null,bidang:e["BIDANG PERUSAHAAN"],alamat:"",aktif:"true",negara:e["ASAL NEGARA"],triwulan:null,tanggal:null}),t.$refs.importExelData.isLoading=!1})),this.tabsActive=0},getDistrik:function(){var e=this;p.post(n.a.api+"/distrik",{type:"GetById",id:this.$route.query.v}).then((function(t){e.distrik=t.data})).catch((function(e){console.log(e)}))},getPerusahaan:function(){var e=this;p.post(n.a.api+"/perusahaan",{type:"all"}).then((function(t){e.perusahaan=t.data})).catch((function(e){console.log(e)}))},simpleSuggestionList:function(){return[{name:"react",url:"urlreac"},{name:"vue",url:"urlvue"},{name:"laragon",url:"urlvue"}]},tambahperusahaan:function(){alert("form keyboard")},onfocus:function(e){this.onFocusperusahaan=e},GetPerusahaanFromChild:function(e){this.form[this.onFocusperusahaan].nama=e.nama,this.form[this.onFocusperusahaan].npwp=e.npwp,this.form[this.onFocusperusahaan].bidang=e.bidang,this.form[this.onFocusperusahaan].alamat=e.alamat,this.form[this.onFocusperusahaan].negara=e.negara,this.perusahaan.push(e)}}},h=(s("FtBI"),s("2RtO"),s("KHd+")),m=Object(h.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"page-autocomplete-demo"}},[s("vx-card",{staticClass:"pd-5",attrs:{title:"Formulir Perkiraan & Realisasi Investasi",subtitle:e.distrik.nama,"no-shadow":""}},[s("p",[e._v("Tab "),s("code",[e._v("Formulir")]),e._v(", "),s("code",[e._v("import Exel")]),e._v(" untuk metode penginputan data. Template Exel dapat di Unduh melalui Tab "),s("code",[e._v("import Exel")])])]),e._v(" "),s("vx-card",{staticClass:"mt-2"},[s("vs-tabs",{attrs:{alignment:"center",color:e.colorx},model:{value:e.tabsActive,callback:function(t){e.tabsActive=t},expression:"tabsActive"}},[s("vs-tab",{attrs:{label:"Formulir"},on:{click:function(t){e.colorx="#1978c3"}}},[s("div",{staticClass:"flex flex-wrap items-center"},[s("vs-select",{staticClass:"p-1",attrs:{placeholder:"Triwulan"},model:{value:e.triwulan,callback:function(t){e.triwulan=t},expression:"triwulan"}},e._l(4,(function(e,t){return s("vs-select-item",{key:t,attrs:{label:e+1,value:e,text:e,autowidth:""}})})),1),e._v(" "),s("vs-select",{staticClass:"p-1",attrs:{placeholder:"Tahun"},model:{value:e.tahun,callback:function(t){e.tahun=t},expression:"tahun"}},e._l(e.years,(function(e,t){return s("vs-select-item",{key:t,attrs:{label:e,value:e,text:e}})})),1)],1),e._v(" "),s("vs-divider"),e._v(" "),s("table",{staticClass:"table-auto"},[s("tbody",e._l(e.$v.form.$each.$iter,(function(t,n){return s("tr",{key:n},[s("td",{staticClass:"border px-4 py-2"},[e._v(e._s(parseInt(n)+1))]),e._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("span",{staticClass:"pb-2",staticStyle:{"font-size":"10px",color:"#a0a0a0"}},[e._v("Nama Perusahaan")]),e._v(" "),s("vue-simple-suggest",{class:{errorComplate:t.nama.$error},attrs:{"filter-by-query":!0,list:e.perusahaan,mode:"input","display-attribute":"nama","value-attribute":"nama"},on:{focus:function(t){return e.onfocus(n)}},scopedSlots:e._u([{key:"misc-item-above",fn:function(t){var n=t.suggestions;t.query;return[n.length>0?[s("div",{staticClass:"misc-item"},[s("span",[e._v(e._s(n.name))])]),e._v(" "),s("hr")]:e.loading?e._e():s("div",{staticClass:"misc-item"},[s("span",{staticClass:"text-danger text-sm"},[e._v("Klik "),s("code",[e._v("ALT+N")]),e._v(" untuk menambahkan perusahaan")])])]}}],null,!0),model:{value:t.nama.$model,callback:function(s){e.$set(t.nama,"$model","string"==typeof s?s.trim():s)},expression:"p.nama.$model"}})],1),e._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("div",{staticClass:"pb-2",staticStyle:{"font-size":"10px",color:"#a0a0a0"}},[e._v("Perkiraan Investasi")]),e._v(" "),s("currency-input",{staticClass:"currencyField",class:{errorComplate:t.perkiraan_nilai.$error},model:{value:t.perkiraan_nilai.$model,callback:function(s){e.$set(t.perkiraan_nilai,"$model","string"==typeof s?s.trim():s)},expression:"p.perkiraan_nilai.$model"}})],1),e._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("vs-input",{attrs:{danger:t.jenis_investasi.$error,"label-placeholder":"Kategori (PMA /PMDN)"},model:{value:t.jenis_investasi.$model,callback:function(s){e.$set(t.jenis_investasi,"$model","string"==typeof s?s.trim():s)},expression:"p.jenis_investasi.$model"}})],1),e._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("vs-input",{attrs:{danger:t.proses.$error,"label-placeholder":"Proses Saat ini"},model:{value:t.proses.$model,callback:function(s){e.$set(t.proses,"$model","string"==typeof s?s.trim():s)},expression:"p.proses.$model"}})],1),e._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("vs-switch",{attrs:{color:"success"},model:{value:t.periode.$model,callback:function(s){e.$set(t.periode,"$model","string"==typeof s?s.trim():s)},expression:"p.periode.$model"}},[s("span",{attrs:{slot:"on"},slot:"on"},[e._v("Lapor")]),e._v(" "),s("span",{attrs:{slot:"off"},slot:"off"},[e._v("Belum Lapor")])])],1)])})),0)]),e._v(" "),s("center",[s("vs-button",{attrs:{color:"primary",type:"border",icon:"playlist_add"},on:{click:function(t){return e.AddFormPersyaratan()}}},[e._v("Tambah")])],1)],1),e._v(" "),s("vs-tab",{attrs:{label:"Import Via Exel"},on:{click:function(t){e.colorx="#FFA500"}}},[s("center",[s("import-excel",{ref:"importExelData",attrs:{onSuccess:e.loadDataInTable}}),e._v(" "),s("vs-button",{staticClass:"mt-10",attrs:{color:"warning",icon:"file_copy"}},[e._v("Template")])],1)],1)],1)],1),e._v(" "),s("vx-card",{staticClass:"mt-2"},[s("vs-row",{attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-type":"flex","vs-offset":"8","vs-justify":"right","vs-align":"right","vs-lg":"5","vs-sm":"5"}},[s("vs-button",{attrs:{color:"primary",icon:"save_alt"},on:{click:function(t){return e.postToDatabase()}}},[e._v("Simpan")])],1)],1)],1),e._v(" "),s("perusahaanForm",{ref:"formPopUpperusahaan",attrs:{activePrompt:e.activePrompt},on:{GetPerusahaanFromChild:e.GetPerusahaanFromChild}})],1)}),[],!1,null,null,null);t.default=m.exports},fE8N:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"[dir] .errorComplate {\n  border: 1px solid #ea5455 !important;\n  border-radius: 5px !important;\n}\n.currencyField {\n  height: 40px !important;\n}\n[dir] .currencyField {\n  border: 1px solid #cccccc;\n  border-radius: 5px !important;\n  padding: 0px !important;\n}\n[dir] .currencyField:focus {\n  border: 1px solid #1978c3;\n}\r\n",""])},qjld:function(e,t,s){"use strict";var n=s("EUZL"),i=s.n(n),a={props:{onSuccess:{type:Function,required:!0}},data:function(){return{isLoading:!1,excelData:{header:null,results:null,meta:null}}},methods:{generateData:function(e){var t=e.header,s=e.results,n=e.meta;this.excelData.header=t,this.excelData.results=s,this.excelData.meta=n,this.onSuccess&&this.onSuccess(this.excelData)},getHeaderRow:function(e){var t,s=[],n=i.a.utils.decode_range(e["!ref"]),a=n.s.r;for(t=n.s.c;t<=n.e.c;++t){var r=e[i.a.utils.encode_cell({c:t,r:a})],o="UNKNOWN "+t;r&&r.t&&(o=i.a.utils.format_cell(r)),s.push(o)}return s},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleDrop:function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files;if(1===t.length){var s=t[0];if(!this.isExcel(s))return this.$vs.notify({title:"Login Attempt",text:"Only supports upload .xlsx, .xls, .csv suffix files",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1;this.uploadFile(s)}else this.$vs.notify({title:"Login Attempt",text:"Only support uploading one file!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"})},readerData:function(e){var t=this;return new Promise((function(s){var n=new FileReader;n.onload=function(e){var n=e.target.result,a=i.a.read(n,{type:"array"}),r=a.SheetNames[0],o=a.Sheets[r],l=t.getHeaderRow(o),u=i.a.utils.sheet_to_json(o),c={sheetName:r};t.generateData({header:l,results:u,meta:c}),s()},n.readAsArrayBuffer(e)}))},handleClick:function(e){var t=e.target.files[0];t&&this.uploadFile(t)},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)},uploadFile:function(e){this.$refs.fileInput.value=null,this.readerData(e)}}},r=s("KHd+"),o=Object(r.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"excel-import"},[e.isLoading?s("vs-progress",{attrs:{indeterminate:"",color:"primary"}},[e._v("primary")]):e._e(),e._v(" "),s("input",{ref:"fileInput",staticClass:"hidden",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),e._v(" "),s("div",{staticClass:"px-8 py-16 cursor-pointer text-center border-2 border-dashed d-theme-border-grey-light d-theme-dark-bg text-xl",on:{click:function(t){e.$refs.fileInput.click(),e.isLoading=!0},drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[s("feather-icon",{staticClass:"block",attrs:{icon:"UploadCloudIcon",svgClasses:"h-16 w-16 stroke-current text-grey"}}),e._v(" "),s("span",[e._v("Drop Excel File or ")]),e._v(" "),s("span",{staticClass:"font-medium text-primary",on:{click:function(t){return t.stopPropagation(),e.$refs.fileInput.click()}}},[e._v("Browse")])],1)],1)}),[],!1,null,null,null);t.a=o.exports},s2Hj:function(e,t,s){var n=s("0LR2");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,i);n.locals&&(e.exports=n.locals)},xMlF:function(e,t,s){var n=s("73T2");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,i);n.locals&&(e.exports=n.locals)},xOtk:function(e,t,s){var n=s("MiKQ");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,i);n.locals&&(e.exports=n.locals)},"z+MQ":function(e,t,s){var n=s("fE8N");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,i);n.locals&&(e.exports=n.locals)}}]);