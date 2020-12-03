<template>
  <div>
    <vx-card class="pd-5">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Nama Izin
          </label>
          <vs-input
            v-model.trim="$v.form.nama_izin.$model"
            :danger="$v.form.nama_izin.$error"
          />
          <div v-if="$v.form.nama_izin.$anyError">
            <span class="text-xs text-danger" v-if="!$v.form.nama_izin.required"
              >required</span
            >
          </div>
        </div>
        <div class="w-full md:w-1/6 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            kategori
          </label>
          <vs-select
            class="selectExample mt-2"
            v-model.trim="$v.form.kategori.$model"
            :danger="$v.form.kategori.$error"
          >
            <vs-select-item value="perizinan" text="perizinan" />
            <vs-select-item value="nonperizinan" text="nonperizinan" />
          </vs-select>
        </div>
        <div class="w-full md:w-1/6 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Masa Kerja
          </label>
          <vs-input
            v-model.trim="$v.form.masakerja.$model"
            :danger="$v.form.masakerja.$error"
          />
          <div v-if="$v.form.masakerja.$anyError">
            <span class="text-xs text-danger" v-if="!$v.form.masakerja.required"
              >required</span
            >
          </div>
        </div>
        <div class="w-full md:w-1/6 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
          </label>
          <vs-switch v-model="form.aktif" class="mt-8">
            <span slot="on">Aktif</span>
            <span slot="off">Tidak Aktif</span>
          </vs-switch>
        </div>
      </div>
    </vx-card>
    <vx-card class="mt-2">
      <vs-divider> Persyaratan </vs-divider>
      <vs-tabs alignment="center" :color="colorx" v-model="tabsActive">
        <vs-tab label="Formulir" @click="colorx = '#1978c3'">
          <table class="table-auto">
            <thead>
              <tr>
                <th class="px-4 py-2">No</th>
                <th class="w-full px-4 py-2">Persyaratan</th>
                <th class="w-1/3 px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(p, Index) in $v.form.persyaratan.$each.$iter"
                :key="Index"
              >
                <td class="border px-4 py-2">{{ parseInt(Index) + 1 }}</td>
                <td class="border px-4 py-2">
                  <vs-input
                    v-model.trim="p.persyaratan.$model"
                    :danger="p.persyaratan.$error"
                  />
                </td>
                <td class="border px-4 py-2">
                  <vs-button
                    v-if="form.persyaratan.length > 1"
                    color="danger"
                    type="border"
                    icon="delete_outline"
                    @click="DeleteFormPersyaratan(Index)"
                  ></vs-button>
                </td>
              </tr>
            </tbody>
          </table>
          <center>
            <vs-button
              color="primary"
              type="border"
              icon="playlist_add"
              @click="AddFormPersyaratan()"
              >Tambah persyaratan</vs-button
            >
          </center>
        </vs-tab>
        <vs-tab label="Import Via Exel" @click="colorx = '#FFA500'">
          <center>
            <import-excel :onSuccess="loadDataInTable" />
            <vs-button
              class="mt-10"
              color="warning"
              icon="file_copy"
              @click="AddFormPersyaratan()"
              >Template</vs-button
            >
          </center>
        </vs-tab>
      </vs-tabs>
    </vx-card>
    <vx-card class="mt-2">
      <vs-row vs-w="12">
        <vs-col
          vs-type="flex"
          vs-offset="8"
          vs-justify="right"
          vs-align="right"
          vs-lg="5"
          vs-sm="5"
        >
          <vs-button color="primary" icon="save_alt" @click="postToDatabase()"
            >Simpan</vs-button
          >
        </vs-col>
      </vs-row>
    </vx-card>
    <!-- <vs-progress indeterminate color="primary">primary</vs-progress> -->
  </div>
</template>
<script>
const axios = require("axios");
import url from "@/url";
import { required, minLength, between } from "vuelidate/lib/validators";
import ImportExcel from "@/components/excel/ImportExcel.vue";
export default {
  components: {
    ImportExcel,
  },
  data() {
    return {
      page: {
        submitType: "InsertByForm",
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
        persyaratan: [
          {
            persyaratan: "",
            aktif: true,
          },
          {
            persyaratan: "",
            aktif: true,
          },
          {
            persyaratan: "",
            aktif: true,
          },
        ],
      },
    };
  },
  validations() {
    return {
      form: {
        nama_izin: {
          required,
        },
        kategori: {
          required,
        },
        masakerja: {
          required,
        },
        persyaratan: {
          $each: {
            persyaratan: { required },
          },
        },
      },
    };
  },
  mounted() {
    if (this.$route.query.p) {
      this.page.submitType = "UpdateById";
      this.getIzin();
    }
  },
  methods: {
    DeleteFormPersyaratan(i) {
      this.$delete(this.form.persyaratan, i);
    },
    AddFormPersyaratan() {
      this.form.persyaratan.push({
        persyaratan: null,
        aktif: true,
      });
    },
    postToDatabase() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        axios
          .post(url.api + "/layanan/izin", {
            type: this.page.submitType,
            data: this.form,
          })
          .then((r) => {
            this.$vs.notify({
              color: "success",
              title: r.data.title,
              text: r.data.text,
            });
            this.$router.push({
              name: "distrik-detail",
              query: { v: this.form.distrik_id },
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    loadDataInTable({ results, header, meta }) {
      this.form.persyaratan = results;
      this.form.nama_izin = this.form.persyaratan[0].nama_izin;
      this.form.kategori = this.form.persyaratan[0].kategori;
      this.form.masakerja = this.form.persyaratan[0].masakerja;
      this.tabsActive = 0;
    },
    getIzin() {
      axios
        .post(url.api + "/layanan/izin", {
          type: "dataById",
          id: this.$route.query.p,
        })
        .then((r) => {
          this.form = r.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="stylus">
.vs-input {
  width: 100%;
  margin-top: 10px;
}
</style>