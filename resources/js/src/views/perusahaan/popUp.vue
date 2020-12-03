<template>
<div>
    <vs-prompt @cancel="activePrompt = false" @accept="PostTODatabase()" @close="close" :active.sync="activePrompt" title="DATA PERUSAHAAN">
        <div class="con-exemple-prompt">
            <vs-input v-model.trim="$v.perusahaan.npwp.$model" label="Npwp" :danger="$v.perusahaan.npwp.$error" />
            <vs-input v-model.trim="$v.perusahaan.nama.$model" label="Nama" :danger="$v.perusahaan.nama.$error" class="mt-2" />
            <vs-input v-model.trim="$v.perusahaan.bidang.$model" label="Bidang" :danger="$v.perusahaan.bidang.$error" class="mt-2" />

            <vs-textarea v-model.trim="$v.perusahaan.alamat.$model" label="Alamat" :danger="$v.perusahaan.alamat.$error" class="mt-2" />
            <vs-input v-model.trim="$v.perusahaan.negara.$model" label="Negara" :danger="$v.perusahaan.negara.$error" class="mt-2" />
            <vs-switch color="success" v-model="perusahaan.aktif" class="mt-2">
                <span slot="on">Aktif</span>
                <span slot="off">Tidak Aktif</span>
            </vs-switch>
            <div style=" overflow: scroll;">
                <pre>{{$v.$error}}</pre>
            </div>
        </div>
    </vs-prompt>
</div>
</template>

<script>
const axios = require("axios");
import url from "@/url";
import {
    required,
    minLength,
    between
} from "vuelidate/lib/validators";
export default {
    data() {
        return {
            activePrompt: false,
            page:{
                submitType : "InsertByForm"
            },
            perusahaan: {
                perusahaan_id: null,
                nama: null,
                npwp: null,
                bidang: null,
                alamat: null,
                negara: null,
                aktif: true,
            },
            afriandi : "isna"
        }
    },
    // props: ['activePrompt'],
    validations() {
        return {
            perusahaan: {
                nama: {
                    required
                },
                npwp: {
                    required
                },
                bidang: {
                    required
                },
                alamat: {
                    required
                },
                negara: {
                    required
                },
            }
        }
    },
    methods: {
        close() {
            this.$vs.notify({
                color: "danger",
                title: "Closed",
                text: "You close a dialog!",
            });
            // this.$emit('propsFalse', false);
        },
        PostTODatabase() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.activePrompt = true
            } else {
                axios
                    .post(url.api + "/perusahaan", {
                        type: this.page.submitType,
                        data: this.perusahaan,
                    })
                    .then((r) => {
                        this.$vs.notify({
                            color: "success",
                            title: r.data.title,
                            text: r.data.text,
                        });
                        this.perusahaan.perusahaan_id =  r.data.id
                        this.$emit('GetPerusahaanFromChild', this.perusahaan);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
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
