<template>
<div>
    <vx-card class="pd-5" :title="distrik.nama | upper" :subtitle="distrik.alamat" no-shadow>
    </vx-card>
    <div class="vx-card mt-5 p-5">
        <vs-tabs alignment="right" :color="colorx" :value="tabs" v-model="tabs">
            <vs-tab label="Layanan Perizinan & Nonperizinan" @click="colorx = '#1978c3'">
                <div>
                    <vs-table v-model="table.selected" :data="izin" pagination max-items="10" search stripe>
                        <template slot="header">
                            <div class="pd-5">
                                <router-link :to="{ name: 'izin-form', query: { v: id } }">
                                    <vs-button color="primary" type="border" icon="playlist_add" size="medium">Tambah Data</vs-button>
                                </router-link>
                            </div>
                        </template>
                        <template slot="thead">
                            <vs-th></vs-th>
                            <vs-th>No</vs-th>
                            <vs-th>Nama Izin</vs-th>
                            <vs-th>OPD</vs-th>
                            <vs-th>Jumlah Persyaratan</vs-th>
                        </template>

                        <template slot-scope="{ data }">
                            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                                <vs-td>
                                    <vs-dropdown>
                                        <a class="a-icon" href="#">
                                            <vs-icon icon="view_quilt"></vs-icon>
                                            <vs-icon class="" icon="expand_more"></vs-icon>
                                        </a>

                                        <vs-dropdown-menu>
                                            <vs-dropdown-item>
                                                <router-link :to="{
                              name: 'izin-form',
                              query: { v: id, p: data[indextr].opdi_id },
                            }">
                                                    <vs-icon icon="edit-2" color="warning"></vs-icon>
                                                    Edit
                                                </router-link>
                                            </vs-dropdown-item>
                                            <vs-dropdown-item @click="onDeleteIzin(indextr)">
                                                <vs-icon icon="delete_outline" color="danger"></vs-icon>
                                                Delete
                                            </vs-dropdown-item>
                                        </vs-dropdown-menu>
                                    </vs-dropdown>
                                </vs-td>
                                <vs-td :data="data[indextr].opdi_id">
                                    {{ indextr + 1 }}
                                </vs-td>
                                <vs-td :data="data[indextr].nama_izin">
                                    {{ data[indextr].nama_izin }}
                                </vs-td>

                                <vs-td :data="data[indextr].opd_id">
                                    {{ data[indextr].opd_id }}
                                </vs-td>

                                <vs-td :data="data[indextr].biaya">
                                    {{ data[indextr].persyaratan.length }}
                                </vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                </div>
            </vs-tab>

            <vs-tab label="Investasi" @click="colorx = '#28c76f'">
                <investasi></investasi>
            </vs-tab>
            <vs-tab label="Perusahaan" @click="colorx = '#8B0000'">
                <perusahaan></perusahaan>
            </vs-tab>
            <vs-tab label="Infrastruktur" @click="colorx = '#FFA500'">
                <div></div>
            </vs-tab>
            <vs-tab label="Key Performance Indikator" @click="colorx = '#551A8B'">
                <div></div>
            </vs-tab>
        </vs-tabs>
    </div>
</div>
</template>

<script>
const axios = require("axios");
import investasi from "@/views/investasi/data";
import perusahaan from "@/views/perusahaan/data";
import url from "@/url";
export default {
    components: {
        investasi,
        perusahaan
    },
    data() {
        return {
            tabs: this.$route.query.t,
            page: {
                submitType: "DeleteById",
            },
            id: this.$route.query.v,
            colorx: "#1978c3",
            izin: [],
            table: {
                selected: {},
            },
            distrik: {}
        };
    },
    created() {
        this.getIzin();
        this.getPerusahaan();
    },
    mounted() {
        // if(this.$route.query.t){
        //   this.tabs = 1
        // }
    },
    filters: {
        upper(value) {
            if (!value) return ''
            value = value.toString()
            return value.toUpperCase()
        },
    },
    methods: {
        getIzin() {
            axios
                .post(url.api + "/layanan/izin", {
                    type: "dataByDistrik",
                    distrik_id: this.id,
                })
                .then((r) => {
                    this.izin = r.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getPerusahaan() {
            axios
                .post(url.api + "/distrik", {
                    type: "GetById",
                    id: this.$route.query.v
                })
                .then((r) => {
                    this.distrik = r.data;
                    console.log(r.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        onDeleteIzin(i) {
            axios
                .post(url.api + "/layanan/izin", {
                    type: "DeleteById",
                    data: this.izin[i],
                })
                .then((r) => {
                    this.$vs.notify({
                        color: "success",
                        title: r.data.title,
                        text: r.data.text,
                    });

                    this.$delete(this.izin, i);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
};
</script>
