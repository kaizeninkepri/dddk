<template>
<div>
    <vx-card>
        <!-- TABLE ACTION ROW -->
        <div class="flex flex-wrap justify-between items-center">

            <!-- ITEMS PER PAGE -->
            <div class="mb-4 md:mb-0 mr-4 ag-grid-table-actions-left">
               
            </div>

            <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
            <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
                <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
                <div class="examplex">
                        <vs-button class="btnx" type="filled" @click="popUp()">Add Data</vs-button>

                </div>
            </div>
        </div>
        <ag-grid-vue ref="agGridTable" :gridOptions="gridOptions" class="ag-theme-material w-100 my-4 ag-grid-table" :columnDefs="columnDefs" :defaultColDef="defaultColDef" :rowData="contacts" rowSelection="multiple" colResizeDefault="shift" :animateRows="true" :floatingFilter="false" :pagination="true" :paginationPageSize="paginationPageSize" :suppressPaginationPanel="true" :enableRtl="$vs.rtl">
        </ag-grid-vue>
        <vs-pagination :total="totalPages" :max="maxPageNumbers" v-model="currentPage" />
    </vx-card>
     <perusahaanForm ref="formPopUpperusahaan" v-on:GetPerusahaanFromChild="GetPerusahaanFromChild"></perusahaanForm>
</div>
</template>

<script>
import {
    AgGridVue
} from "ag-grid-vue";
const axios = require("axios");
import url from "@/url";
import "@sass/vuexy/extraComponents/agGridStyleOverride.scss";
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import perusahaanForm from "@/views/perusahaan/popUp.vue"
export default {
    components: {
        AgGridVue,
        StatisticsCardLine,
        perusahaanForm
    },
    data() {
        return {
            id: this.$route.query.v,
            searchQuery: "",
            gridOptions: {},
            maxPageNumbers: 7,
            gridApi: null,
            defaultColDef: {
                sortable: true,
                editable: true,
                resizable: true,
                suppressMenu: true,
            },
            columnDefs: [{
                    headerName: "No",
                    valueGetter: "node.rowIndex + 1",
                    width: 50,
                },
                {
                    headerName: "Perusahaan",
                    field: "nama",
                    width: 575,
                },
                {
                    headerName: "Bidang Perusahaan",
                    field: "bidang",
                    width: 450,
                },
                {
                    headerName: "Asal Negara",
                    field: "negara",
                    width: 375,
                },
            ],
            contacts: [],
        }
    },
    watch: {
        "$store.state.windowWidth"(val) {
            if (val <= 576) {
                this.maxPageNumbers = 4;
                this.gridOptions.columnApi.setColumnPinned("email", null);
            } else this.gridOptions.columnApi.setColumnPinned("email", "left");
        },
    },
    computed: {
        pma() {
            var total = 0;
            this.contacts.forEach((r) => {
                if (r.jenis_investasi.toLowerCase() == 'pma') {
                    total = total + r.perkiraan_nilai
                }
            });
            return total;
        },
        pmdn() {
            var total = 0;
            this.contacts.forEach((r) => {
                if (r.jenis_investasi.toLowerCase() == 'pmdn') {
                    total = total + r.perkiraan_nilai
                }
            });
            return total;
        },
        totalInvestasiPerkiraan() {
            var total = 0;
            this.contacts.forEach((r) => {
                    total = total + r.perkiraan_nilai
                
            });
            return total;
        },
        belumLapor() {
            var total = []
            this.contacts.forEach((r) => {
                   if (r.periode.toLowerCase() == 'belum lapor') {
                    total.push({
                        periode : r.periode
                    })
                }
                
            });
            return total;
        },
        paginationPageSize() {
            if (this.gridApi) return this.gridApi.paginationGetPageSize();
            else return 50;
        },
        totalPages() {
            if (this.gridApi) return this.gridApi.paginationGetTotalPages();
            else return 0;
        },
        currentPage: {
            get() {
                if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1;
                else return 1;
            },
            set(val) {
                this.gridApi.paginationGoToPage(val - 1);
            },
        },
        years() {
            const year = new Date().getFullYear()
            return Array.from({
                length: year - 2014
            }, (value, index) => 2015 + index)
        }
    },
    methods: {
        popUp(){
             this.$refs.formPopUpperusahaan.activePrompt = !this.$refs.formPopUpperusahaan.activePrompt
        },
        currencyFormatter(currency, sign) {
            var sansDec = currency.toFixed(2);
            var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return `$` + `${formatted}`;
        },
        updateSearchQuery(val) {
            this.gridApi.setQuickFilter(val);
        },
        getInvestasi() {
            axios
                .post(url.api + "/perusahaan", {
                    type: "dataByDistrik",
                    id: this.id
                })
                .then((r) => {
                    this.contacts = r.data
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        GetPerusahaanFromChild(value) {
            this.contacts.push(value)
        }
    },
    mounted() {
        this.gridApi = this.gridOptions.api;
        this.getInvestasi()
        /* =================================================================
            NOTE:
            Header is not aligned properly in RTL version of agGrid table.
            However, we given fix to this issue. If you want more robust solution please contact them at gitHub
        ================================================================= */
        if (this.$vs.rtl) {
            const header = this.$refs.agGridTable.$el.querySelector(
                ".ag-header-container"
            );
            header.style.left =
                "-" + String(Number(header.style.transform.slice(11, -3)) + 9) + "px";
        }
    },
};
</script>
