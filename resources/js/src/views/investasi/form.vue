<template>
<div id="page-autocomplete-demo">

    <vx-card class="pd-5" title="Formulir Perkiraan & Realisasi Investasi" :subtitle="distrik.nama" no-shadow>
        <p>Tab <code>Formulir</code>, <code>import Exel</code> untuk metode penginputan data. Template Exel dapat di Unduh melalui Tab <code>import Exel</code></p>
    </vx-card>
    <vx-card class="mt-2">
        <vs-tabs alignment="center" :color="colorx" v-model="tabsActive">
            <vs-tab label="Formulir" @click="colorx = '#1978c3'">
                <div class="flex flex-wrap items-center">
                    <vs-select placeholder="Triwulan" v-model="triwulan" class="p-1">
                        <vs-select-item v-for="(i,index) in 4" :label="i+1" :value="i" :key="index" :text="i" autowidth>
                        </vs-select-item>
                    </vs-select>
                    <vs-select placeholder="Tahun" v-model="tahun" class="p-1">
                        <vs-select-item v-for="(i,index) in years" :label="i" :value="i" :key="index" :text="i">
                        </vs-select-item>
                    </vs-select>
                </div>
                <vs-divider></vs-divider>
                <table class="table-auto">
                    <!-- <thead>
              <tr>
                <th class="px-4 py-2">No</th>
                <th class="w-full px-4 py-2">Perusahaan</th>
                <th class="w-full px-4 py-2">Perkiraan</th>
                <th class="w-1/3 px-4 py-2">Aksi</th>
              </tr>
            </thead> -->
                    <tbody>
                        <tr v-for="(p, Index) in $v.form.$each.$iter" :key="Index">
                            <td class="border px-4 py-2">{{ parseInt(Index) + 1 }}</td>
                            <td class="border px-4 py-2">
                                <span style="font-size:10px; color:#a0a0a0" class="pb-2">Nama Perusahaan</span>
                                <vue-simple-suggest v-model.trim="p.nama.$model" :filter-by-query="true" :list="perusahaan" :class="{'errorComplate' : p.nama.$error }" mode="input" display-attribute="nama" value-attribute="nama" @focus="onfocus(Index)">
                                    <template slot="misc-item-above" slot-scope="{ suggestions, query }">
                                        <template v-if="suggestions.length > 0">
                                            <div class="misc-item">
                                                <span>{{ suggestions.name }}</span>
                                            </div>
                                            <hr>
                                        </template>
                                        <div class="misc-item" v-else-if="!loading">
                                            <span class="text-danger text-sm">Klik <code>ALT+N</code> untuk menambahkan perusahaan</span>
                                        </div>

                                    </template>
                                </vue-simple-suggest>
                            </td>
                            <td class="border px-4 py-2">
                                <div style="font-size:10px; color:#a0a0a0" class="pb-2">Perkiraan Investasi</div>
                                <currency-input v-model.trim="p.perkiraan_nilai.$model" :class="{'errorComplate' : p.perkiraan_nilai.$error }" class="currencyField" />
                            </td>
                            <td class="border px-4 py-2">
                                <vs-input v-model.trim="p.jenis_investasi.$model" :danger="p.jenis_investasi.$error" label-placeholder="Kategori (PMA /PMDN)" />
                            </td>
                            <td class="border px-4 py-2">
                                <vs-input v-model.trim="p.proses.$model" :danger="p.proses.$error" label-placeholder="Proses Saat ini" />
                            </td>
                            <td class="border px-4 py-2">

                                <vs-switch color="success" v-model.trim="p.periode.$model">
                                    <span slot="on">Lapor</span>
                                    <span slot="off">Belum Lapor</span>
                                </vs-switch>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <center>
                    <vs-button color="primary" type="border" icon="playlist_add" @click="AddFormPersyaratan()">Tambah</vs-button>
                </center>
            </vs-tab>
            <vs-tab label="Import Via Exel" @click="colorx = '#FFA500'">

                <center>
                    <import-excel ref="importExelData" :onSuccess="loadDataInTable" />
                    <vs-button class="mt-10" color="warning" icon="file_copy" >Template</vs-button>
                </center>
            </vs-tab>
        </vs-tabs>
    </vx-card>
    <vx-card class="mt-2">
        <vs-row vs-w="12">
            <vs-col vs-type="flex" vs-offset="8" vs-justify="right" vs-align="right" vs-lg="5" vs-sm="5">
                <vs-button color="primary" icon="save_alt" @click="postToDatabase()">Simpan</vs-button>
            </vs-col>
        </vs-row>
    </vx-card>
    <perusahaanForm :activePrompt="activePrompt" v-on:GetPerusahaanFromChild="GetPerusahaanFromChild" ref="formPopUpperusahaan"></perusahaanForm>
    <!-- <vs-progress indeterminate color="primary">primary</vs-progress> -->
</div>
</template>

<script>
const axios = require("axios");
import url from "@/url";
import {
    required,
    minLength,
    between,
    helpers
} from "vuelidate/lib/validators";
const contains = (param) =>
    (value) => !helpers.req(value) ||
    param.reduce((accum, curr) => accum && curr in value, true);
import ImportExcel from "@/components/excel/ImportExcel.vue";
import VueSimpleSuggest from 'vue-simple-suggest';
import 'vue-simple-suggest/dist/styles.css'
import perusahaanForm from "@/views/perusahaan/popUp.vue"
import {
    CurrencyInput
} from 'vue-currency-input'

import Prism from 'vue-prism-component'
export default {
    name: 'Autocomplete',
    components: {
        ImportExcel,
        VueSimpleSuggest,
        Prism,
        perusahaanForm,
        // CurrencyInput

    },
    computed: {
        years() {
            const year = new Date().getFullYear()
            return Array.from({
                length: year - 2014
            }, (value, index) => 2015 + index)
        }
    },
    data() {
        return {
            url :{
                template : url.web+"/public/images/exelInveststasi.xlsx"
            },
            activePrompt: false,
            onFocusperusahaan: 0,
            selected: {
                name: 'react',
            },
            model: null,
            mode: 'input',
            loading: false,
            log: [],
            yourData: {
                title: "Analytics Dashboard",
                url: "/dashboard/analytics",
                icon: "HomeIcon",
                is_bookmarked: false
            },
            page: {
                submitType: "InsertByForm",
            },
            tabsActive: 0,
            colorx: "#1978c3",
            triwulan: null,
            tahun: null,
            form: [{
                    jenis_investasi: null,
                    perkiraan_nilai: null,
                    periode: false,
                    proses: null,
                    perusahaan_id: null,
                    nama: null,
                    npwp: null,
                    bidang: null,
                    alamat: null,
                    negara: null,
                    triwulan: null,
                    tahun: null,
                    tanggal: null,
                    alamat: null,
                    aktif: 'true',
                },
                {
                    jenis_investasi: null,
                    perkiraan_nilai: null,
                    periode: false,
                    proses: null,
                    perusahaan_id: null,
                    nama: null,
                    npwp: null,
                    bidang: null,
                    alamat: null,
                    negara: null,
                    triwulan: null,
                    tahun: null,
                    alamat: null,
                    tanggal: null,
                    aktif: 'true',
                }
            ],
            distrik: {},
            perusahaan: []
        };
    },
    validations() {
        return {
            form: {
                $each: {
                    nama: {
                        required
                    },

                    perkiraan_nilai: {
                        required,
                    },
                    proses: {
                        required,
                    },
                    periode: {
                        required,
                    },
                    jenis_investasi: {
                        required,
                    },
                }
            }
        };
    },
    mounted() {
        this.getPerusahaan();

        if (this.$route.query.p) {
            this.page.submitType = "UpdateById";
            this.getIzin();
        }
        this.getDistrik();
        this.$nextTick(function () {
            window.addEventListener('keyup', event => {
                if (event.altKey && event.keyCode === 78) {
                    this.$refs.formPopUpperusahaan.activePrompt = !this.$refs.formPopUpperusahaan.activePrompt

                }
            })
        });
    },
    methods: {
        openLoadingInDiv() {
            this.$vs.loading({
                container: '#div-with-loading',
                scale: 0.6
            })
        },
        DeleteFormPersyaratan(i) {
            this.$delete(this.form.persyaratan, i);
        },
        AddFormPersyaratan() {
            this.form.push({
                jenis_investasi: null,
                perkiraan_nilai: null,
                periode: false,
                proses: null,
                perusahaan_id: null,
                nama: null,
                npwp: null,
                bidang: null,
                alamat: null,
                negara: null,
                triwulan: null,
                alamat: null,
                tahun: null,
                aktif: 'true',
                tanggal: null,
            });
        },
        postToDatabase() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                axios
                    .post(url.api + "/investasi", {
                        type: this.page.submitType,
                        data: this.form,
                        triwulan: this.triwulan,
                        tahun: this.tahun,
                        distrik_id: this.$route.query.v,
                    })
                    .then((r) => {
                        this.$vs.notify({
                            color: "success",
                            title: r.data.title,
                            text: r.data.text,
                        });
                        this.$router.push({
                            name: "distrik-detail",
                            query: {
                                v: this.$route.query.v,
                                t : 1,
                            },
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        loadDataInTable({
            results,
            header,
            meta
        }) {
            this.form = []
            results.forEach((r, key) => {
                // this.form.push({
                //     jenis_investasi: null,
                //     perkiraan: r['PERKIRAAN TOTAL INVESTASI                        (Dalam DOLAR US)'],
                //     periode: r['PERIODE INVESTASI'],
                //     proses: r['PROSES SAAT INI'],
                //     perusahaan_id: null,
                //     nama: r['NAMA PERUSAHAAN'],
                //     npwp: null,
                //     bidang: r['BIDANG PERUSAHAAN'],
                //     alamat: r['ALAMAT'],
                //     negara: r['ASAL NEGARA'],
                //     triwulan: null,
                //     tanggal: null,
                //     kategori: null
                // });

                // this.perusahaan.push({
                //     nama: r['NAMA PERUSAHAAN'],
                // })
                this.form.push({
                    jenis_investasi: r['JENIS INVESTASI'],
                    perkiraan_nilai: r['PERKIRAAN TOTAL INVESTASI                        (Dalam DOLAR US)'],
                    periode: r['PERIODE INVESTASI'],
                    proses: r['PROSES SAAT INI'],
                    perusahaan_id: null,
                    nama: r['NAMA PERUSAHAAN'],
                    npwp: null,
                    bidang: r['BIDANG PERUSAHAAN'],
                    alamat: '',
                    aktif: 'true',
                    negara: r['ASAL NEGARA'],
                    triwulan: null,
                    tanggal: null,
                });
                this.$refs.importExelData.isLoading = false
            });

            this.tabsActive = 0

        },
        getDistrik() {
            axios
                .post(url.api + "/distrik", {
                    type: "GetById",
                    id: this.$route.query.v,
                })
                .then((r) => {
                    this.distrik = r.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getPerusahaan() {
            axios
                .post(url.api + "/perusahaan", {
                    type: "all",
                })
                .then((r) => {
                    this.perusahaan = r.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        simpleSuggestionList() {
            return [{
                    name: "react",
                    url: "urlreac"
                },
                {
                    name: "vue",
                    url: "urlvue"
                }, {
                    name: "laragon",
                    url: "urlvue"
                }
            ]
        },
        tambahperusahaan() {
            alert("form keyboard")
        },
        onfocus(i) {
            this.onFocusperusahaan = i
        },
        GetPerusahaanFromChild(value) {
            this.form[this.onFocusperusahaan].nama = value.nama
            this.form[this.onFocusperusahaan].npwp = value.npwp
            this.form[this.onFocusperusahaan].bidang = value.bidang
            this.form[this.onFocusperusahaan].alamat = value.alamat
            this.form[this.onFocusperusahaan].negara = value.negara
            this.perusahaan.push(value)
        }

    },
};
</script>

<style lang="scss">
@import "@sass/vuexy/extraComponents/autocomplete.scss";
</style><style>
.errorComplate {
    border: 1px solid #ea5455 !important;
    border-radius: 5px !important;
}

.currencyField {
    border: 1px solid #cccccc;
    border-radius: 5px !important;
    height: 40px !important;
    padding: 0px !important;
}

.currencyField:focus {
    border: 1px solid #1978c3;
}
</style>
