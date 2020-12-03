<template>
<div>
    <div class="vx-row mb-5">
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/2">
            <statistics-card-line hideChart class="mb-base" icon="LayersIcon" color="warning" icon-right :statistic="pma | currency" statisticTitle="Penanaman Modal Asing" />
        </div>
        <div class="vx-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/2">
            <statistics-card-line hideChart class="mb-base" icon="LayersIcon" color="success" icon-right :statistic="pmdn | currency" statisticTitle="Penanaman Modal Dalam Negeri" />
        </div>
        <div class="vx-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/2">
            <statistics-card-line hideChart class="mb-base" icon="BarChartIcon" icon-right :statistic="belumLapor.length" statisticTitle="Periode Investasi Lapor / Belum Lapor" />
        </div>
        <div class="vx-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/2">
            <statistics-card-line hideChart class="mb-base" icon="DollarSignIcon" color="success" icon-right :statistic="totalInvestasiPerkiraan | currency" statisticTitle="Perkiraan Investasi" />
        </div>
    </div>
    <vx-card>
        <!-- TABLE ACTION ROW -->
        <div class="flex flex-wrap justify-between items-center">

            <!-- ITEMS PER PAGE -->
            <div class="mb-4 md:mb-0 mr-4 ag-grid-table-actions-left">
                <vs-collapse accordion>
                    <vs-collapse-item>
                        <div slot="header">
                            <vs-icon icon="sort"></vs-icon> &nbsp; <span class="text-bold">Filter Data</span>
                             <vs-button class="ml-2 mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Download</vs-button>
                        </div>
                        <div class="flex flex-wrap justify-between items-center">
                            <vs-select placeholder="Triwulan" v-model="searchQuery" class="p-1">
                                <vs-select-item v-for="(i,index) in 4" :label="i+1" :value="i" :key="index" :text="i" autowidth>
                                </vs-select-item>
                            </vs-select>
                            <vs-select placeholder="Tahun" v-model="searchQuery" class="p-1">
                                <vs-select-item v-for="(i,index) in years" :label="i" :value="i" :key="index" :text="i">
                                </vs-select-item>
                            </vs-select>
                            <vs-select placeholder="Kategori" v-model="searchQuery">
                                <vs-select-item value="pma" text="Penanaman Modal Asing"></vs-select-item>
                                <vs-select-item value="pmdn" text="Penanaman Modal Dalam Negeri">
                                </vs-select-item>
                            </vs-select>
                        </div>
                    </vs-collapse-item>
                </vs-collapse>
            </div>

            <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
            <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
                <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
                <div class="examplex">
                    <router-link :to="{ name: 'investasi-form', query: { v: id, t:0} }">
                        <vs-button class="btnx" type="filled">Add Data</vs-button>
                    </router-link>

                </div>
            </div>
        </div>
        <ag-grid-vue ref="agGridTable" :gridOptions="gridOptions" class="ag-theme-material w-100 my-4 ag-grid-table" :columnDefs="columnDefs" :defaultColDef="defaultColDef" :rowData="contacts" rowSelection="multiple" colResizeDefault="shift" :animateRows="true" :floatingFilter="false" :pagination="true" :paginationPageSize="paginationPageSize" :suppressPaginationPanel="true" :enableRtl="$vs.rtl">
        </ag-grid-vue>
        <vs-pagination :total="totalPages" :max="maxPageNumbers" v-model="currentPage" />
    </vx-card>
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
export default {
    components: {
        AgGridVue,
        StatisticsCardLine
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
                    field: "perusahaan.nama",
                    width: 375,
                },
                {
                    headerName: "Bidang Perusahaan",
                    field: "perusahaan.bidang",
                    width: 350,
                },
                {
                    headerName: "Rencana Investasi",
                    cellStyle: {
                        'height': '100%',
                        'display': 'flex ',
                        'justify-content': 'center',
                        'align-items': 'center ',
                        'text-align': 'center;'
                    },
                    children: [{
                            headerName: "Jenis",
                            field: "jenis_investasi",
                            width: 100
                        },
                        {
                            headerName: "Nilai",
                            field: "perkiraan_nilai",
                            width: 200,
                            valueFormatter: params => this.currencyFormatter(params.data.perkiraan_nilai),
                            cellStyle: {
                                'height': '100%',
                                'display': 'flex ',
                                'justify-content': 'right',
                                'align-items': 'right ',
                                'text-align': 'center;'
                            },
                        },
                    ],
                },
                {
                    headerName: "Proses",
                    field: "proses",
                    width: 175,
                },

                {
                    headerName: "Periode",
                    field: "periode",
                    width: 155,
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
                .post(url.api + "/investasi", {
                    type: "dataByDistrik",
                    id: this.id
                })
                .then((r) => {
                    this.$vs.notify({
                        color: "success",
                        title: r.data.title,
                        text: r.data.text,
                    });

                    this.contacts = r.data
                })
                .catch(function (error) {
                    console.log(error);
                });
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
