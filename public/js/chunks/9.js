(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+rQg":function(t,e,a){"use strict";a("U/4T")},DbqH:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"[dir] .con-exemple-prompt {\n  padding: 10px;\n  padding-bottom: 0px;\n}\n.con-exemple-prompt .vs-input {\n  width: 100%;\n}\n[dir] .con-exemple-prompt .vs-input {\n  margin-top: 10px;\n}\n",""])},EG0M:function(t,e,a){"use strict";a.r(e);var i=a("Ye0E"),s=(a("EyHm"),a("L0c2"));var n=a("vDqi"),o={components:{StatisticsCardLine:s.a},data:function(){return t={options1:[{text:"Tanjungpinang",value:"Tanjungpinang"},{text:"Bintan",value:"Bintan"},{text:"Karimun",value:"Karimun"}],activePrompt:!1,page:i.a.api,distrik:[],table:{button:!1,selected:{}}},a={submitType:"InsertByForm"},(e="page")in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t;var t,e,a},created:function(){this.getDistrik()},methods:{onDetail:function(t){this.$router.push({name:"distrik-detail",query:{v:this.distrik[t].distrik_id,t:0}})},onEdit:function(t){this.activePrompt=!0,this.page.submitType="UpdateById"},onDelete:function(t){this.page.submitType="DeleteById",this.PostTODatabase(),this.$delete(this.distrik,t)},acceptAlert:function(t){this.$vs.notify({color:"success",title:"Accept Selected",text:"Lorem ipsum dolor sit amet, consectetur"})},close:function(){this.$vs.notify({color:"danger",title:"Closed",text:"You close a dialog!"})},handleSelected:function(t){this.table.button=!0},getDistrik:function(){var t=this;n.post(i.a.api+"/distrik",{type:"all"}).then((function(e){t.distrik=e.data})).catch((function(t){console.log(t)}))},getPerusahaan:function(){var t=this;n.post(i.a.api+"/perusahaan",{type:"all"}).then((function(e){t.perusahaan=e.data})).catch((function(t){console.log(t)}))},PostTODatabase:function(){var t=this;n.post(i.a.api+"/distrik",{type:this.page.submitType,data:this.table.selected}).then((function(e){t.$vs.notify({color:"success",title:e.data.title,text:e.data.text})})).catch((function(t){console.log(t)}))}}},r=(a("+rQg"),a("KHd+")),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"vx-card"},[a("vs-table",{attrs:{data:t.distrik,pagination:"","max-items":"5",search:""},on:{selected:function(e){return t.handleSelected(e)}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data;return t._l(i,(function(e,s){return a("vs-tr",{key:s,attrs:{data:e}},[a("vs-td",[a("vs-dropdown",{attrs:{"vs-trigger-click":!0}},[a("a",{staticClass:"a-icon",attrs:{href:"#"}},[a("vs-icon",{attrs:{icon:"view_quilt"}}),t._v(" "),a("vs-icon",{attrs:{icon:"expand_more"}})],1),t._v(" "),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(e){return t.onEdit(s)}}},[a("vs-icon",{attrs:{icon:"edit-2",color:"warning"}}),t._v(" Edit\n                ")],1),t._v(" "),a("vs-dropdown-item",{on:{click:function(e){return t.onDelete(s)}}},[a("vs-icon",{attrs:{icon:"delete_outline",color:"danger"}}),t._v("\n                  Delete\n                ")],1),t._v(" "),a("vs-dropdown-item",{attrs:{divider:""},on:{click:function(e){return t.onDetail(s)}}},[a("vs-icon",{attrs:{icon:"view_quilt",color:"primary"}}),t._v(" Detail\n                ")],1)],1)],1)],1),t._v(" "),a("vs-td",{attrs:{data:i[s].distrik_id}},[t._v("\n            "+t._s(s+1)+"\n          ")]),t._v(" "),a("vs-td",{attrs:{data:i[s].nama}},[t._v("\n            "+t._s(i[s].nama)+"\n          ")]),t._v(" "),a("vs-td",{attrs:{data:i[s].kab_kota}},[t._v("\n            "+t._s(i[s].kab_kota)+"\n          ")]),t._v(" "),a("vs-td",{attrs:{data:i[s].alamat}},[t._v("\n            "+t._s(i[s].alamat)+"\n          ")])],1)}))}}]),model:{value:t.table.selected,callback:function(e){t.$set(t.table,"selected",e)},expression:"table.selected"}},[a("template",{slot:"header"}),t._v(" "),a("template",{slot:"thead"},[a("vs-th"),t._v(" "),a("vs-th",[t._v("No")]),t._v(" "),a("vs-th",[t._v("Nama")]),t._v(" "),a("vs-th",[t._v("Kota / Kabupaten")]),t._v(" "),a("vs-th",[t._v("Alamat")])],1)],2)],1),t._v(" "),a("vs-prompt",{attrs:{active:t.activePrompt,title:"EDIT BADAN PENGUSAHAAN"},on:{cancel:function(e){t.val=""},accept:function(e){return t.PostTODatabase()},close:t.close,"update:active":function(e){t.activePrompt=e}}},[a("div",{staticClass:"con-exemple-prompt"},[a("vs-input",{attrs:{label:"Nama"},model:{value:t.table.selected.nama,callback:function(e){t.$set(t.table.selected,"nama",e)},expression:"table.selected.nama"}}),t._v(" "),a("vs-select",{staticClass:"selectExample mt-2",attrs:{label:"Kota / Kabupaten"},model:{value:t.table.selected.kab_kota,callback:function(e){t.$set(t.table.selected,"kab_kota",e)},expression:"table.selected.kab_kota"}},t._l(t.options1,(function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1),t._v(" "),a("vs-textarea",{staticClass:"mt-2",attrs:{label:"Alamat"},model:{value:t.table.selected.alamat,callback:function(e){t.$set(t.table.selected,"alamat",e)},expression:"table.selected.alamat"}}),t._v(" "),a("vs-switch",{attrs:{color:"success"},model:{value:t.table.selected.aktif,callback:function(e){t.$set(t.table.selected,"aktif",e)},expression:"table.selected.aktif"}},[a("span",{attrs:{slot:"on"},slot:"on"},[t._v("Aktif")]),t._v(" "),a("span",{attrs:{slot:"off"},slot:"off"},[t._v("Tidak Aktif")])])],1)])],1)}),[],!1,null,null,null);e.default=l.exports},L0c2:function(t,e,a){"use strict";var i=a("EyHm"),s=a.n(i),n={grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}},o={grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}},r=a("bjns"),l={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{},color:{type:String,default:"primary"},colorTo:{type:String},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},hideChart:{type:Boolean,default:!1}},data:function(){return{chartOptions:null}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex(this.color)}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(t){if(r.a.isColor(t)){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return e=e.split(","),"#"+((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1)}return t},gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return e[t]?e[t]:e.primary}},components:{VueApexCharts:s.a},created:function(){"area"==this.type?(this.chartOptions=Object.assign({},n),this.chartOptions.theme={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}}):"line"==this.type&&(this.chartOptions=JSON.parse(JSON.stringify(o)),this.chartOptions.fill.gradient.gradientToColors=[this.gradientToColor(this.colorTo||this.color)],this.chartOptions.colors=[this.getHex(this.color)])}},c=a("KHd+"),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{staticClass:"overflow-hidden"},[a("div",{attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[a("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),t._v(" "),a("div",{staticClass:"truncate"},[a("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),t._v(" "),a("span",[t._v(t._s(t.statisticTitle))])])],1),t._v(" "),t.hideChart?t._e():a("div",{staticClass:"line-area-chart"},[a("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartOptions,series:t.chartData}})],1)])])}),[],!1,null,null,null);e.a=d.exports},"U/4T":function(t,e,a){var i=a("DbqH");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,s);i.locals&&(t.exports=i.locals)},Ye0E:function(t,e,a){"use strict";e.a={api:"http://datacenterftzkepri.com/panel",base:"panel",web:"datacenterftzkepri.com/panel",assets:"http://appkepri.com/Resources/perusahaan",publicData:"datacenterftzkepri.com/panel/public"}}}]);