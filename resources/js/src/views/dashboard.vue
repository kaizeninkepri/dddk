<template>
<div>
    <div class="vx-row mb-5">
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-4/12">
            <div class="">
                <h3 class="font-bold">Halaman Utama</h3>
                <div class="vx-card">
                    <div class="vx-row mt-10 p-5">
                        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/12">
                            <vs-icon icon="account_balance" color="primary"></vs-icon>
                        </div>
                        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-7/12">Perusahaan</div>
                        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-2/12">0</div>
                    </div>
                </div>
                <div class="vx-card">
                    <div class="vx-row mt-2 p-5">
                        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/12">
                            <vs-icon icon="monetization_on" color="warning"></vs-icon>
                        </div>
                        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-7/12">Rencana Investasi</div>
                        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-2/12">0</div>
                    </div>
                </div>
                <div class="vx-card">
                    <div class="vx-row mt-2 p-5">
                        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/12">
                            <vs-icon icon="monetization_on" color="success"></vs-icon>
                        </div>
                        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-7/12">Realisasi Investasi</div>
                        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-2/12">0</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:3/3 xl:w-8/12">
            <div class="vx-row p-5">
                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-4/12">
                    <div class="vx-card">
                        asda
                    </div>
                </div>
                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-8/12">
                    <div class="vx-card p-5">
                        <h5>Hallo !</h5>
                        <p>jangan lupa untuk mengisi data-data investasi dan lainnya dalam aplikasi data center</p>
                    </div>
                </div>
            </div>
            <div class="vx-card p-5">
                <h3 class="font-bold">Daftar Halaman</h3>
                <div class="vx-row mt-2 mb-20 p-5">
                    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-4/12">
                        <div class="vx-card p-5">
                            <router-link :to="{ name: 'distrik-detail', query: { v: id, t:0} }">
                            <div class="vx-col w-full">
                                <center>
                                    <vs-icon icon="flip_to_back" size="large" color="warning"></vs-icon>
                                </center>
                            </div>
                            <center>Daftar Layanan Perizinan</center>
                            </router-link>
                        </div>
                    </div>
                    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-4/12">
                        <div class="vx-card p-5">
                             <router-link :to="{ name: 'distrik-detail', query: { v: id, t:1} }">
                            <div class="vx-col w-full">
                                <center>
                                    <vs-icon icon="account_balance" size="large" color="warning"></vs-icon>
                                </center>
                            </div>
                            <center>Rencana & Realisasi Investasi</center>
                             </router-link>
                        </div>
                    </div>
                    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-4/12">
                        <div class="vx-card p-5">
                            <router-link :to="{ name: 'distrik-detail', query: { v: id, t:4} }">
                            <div class="vx-col w-full">
                                <center>
                                    <vs-icon icon="flip_to_back" size="large" color="warning"></vs-icon>
                                </center>
                            </div>
                            <center>Key Index Performance</center>
                            </router-link>
                        </div>
                    </div>
                </div>

                <h3 class="font-bold">Nilai Rencana Investasi</h3>
                <div class="vx-row mt-2 mb-10 p-5">
                    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/2">
                        <div class="vx-card p-1">
                            <div class="vx-row mt-2 p-5">
                                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-2/12">
                                    <vs-icon icon="monetization_on" size="medium" color="primary"></vs-icon>
                                </div>
                                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-10/12">
                                <h5 class="font-bold">0</h5>
                                <p>Penanaman Modal Asing</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/2">
                        <div class="vx-card p-1">
                            <div class="vx-row mt-2 p-5">
                                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-2/12">
                                    <vs-icon icon="monetization_on" size="medium" color="success"></vs-icon>
                                </div>
                                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-10/12">
                                <h5 class="font-bold">0</h5>
                                <p>Penanaman Modal Dalam Negeri</p></div>
                            </div>
                        </div>
                    </div>
                </div>
               <h3 class="font-bold">Nilai Realisasi Investasi</h3>
                <div class="vx-row mt-2 p-5">
                    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/2">
                        <div class="vx-card p-1">
                            <div class="vx-row mt-2 p-5">
                                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-2/12">
                                    <vs-icon icon="monetization_on" size="medium" color="primary"></vs-icon>
                                </div>
                                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-10/12">
                                <h5 class="font-bold">0</h5>
                                <p>Penanaman Modal Asing</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/2">
                        <div class="vx-card p-1">
                            <div class="vx-row mt-2 p-5">
                                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-2/12">
                                    <vs-icon icon="monetization_on" size="medium" color="success"></vs-icon>
                                </div>
                                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-10/12">
                                <h5 class="font-bold">0</h5>
                                <p>Penanaman Modal Dalam Negeri</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
const axios = require("axios");
import url from "@/url";
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
export default {
    data(){
        return {
            id : this.$route.query.v
        }
    }
}
</script>

<style lang="stylus">
.con-exemple-prompt {
    padding: 10px;
    padding-bottom: 0px;

    .vs-input {
        width: 100%;
        margin-top: 10px;
    }
}
</style>
