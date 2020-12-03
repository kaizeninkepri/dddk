<template>
  <div>
    <!-- <div class="vx-row">
      <div
        class="vx-col w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3"
        v-for="(i, Dis) in distrik"
        :key="Dis"
      >
        <statistics-card-line
          hideChart
          class="mb-base"
          icon="CpuIcon"
          icon-right
          statistic="86%"
          :statisticTitle="i.nama"
        />
      </div>
    </div> -->
    <div class="vx-card">
      <vs-table
        v-model="table.selected"
        :data="distrik"
        pagination
        max-items="5"
        search
        @selected="handleSelected($event)"
      >
        <template slot="header"> </template>
        <template slot="thead">
          <vs-th></vs-th>
          <vs-th>No</vs-th>
          <vs-th>Nama</vs-th>
          <vs-th>Kota / Kabupaten</vs-th>
          <vs-th>Alamat</vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <vs-dropdown :vs-trigger-click="true">
                <a class="a-icon" href="#">
                  <vs-icon icon="view_quilt"></vs-icon>
                  <vs-icon class="" icon="expand_more"></vs-icon>
                </a>

                <vs-dropdown-menu>
                  <vs-dropdown-item @click="onEdit(indextr)">
                    <vs-icon icon="edit-2" color="warning"></vs-icon> Edit
                  </vs-dropdown-item>
                  <vs-dropdown-item @click="onDelete(indextr)">
                    <vs-icon icon="delete_outline" color="danger"></vs-icon>
                    Delete
                  </vs-dropdown-item>
                  <vs-dropdown-item divider @click="onDetail(indextr)">
                    <vs-icon icon="view_quilt" color="primary"></vs-icon> Detail
                  </vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-td>
            <vs-td :data="data[indextr].distrik_id">
              {{ indextr + 1 }}
            </vs-td>
            <vs-td :data="data[indextr].nama">
              {{ data[indextr].nama }}
            </vs-td>

            <vs-td :data="data[indextr].kab_kota">
              {{ data[indextr].kab_kota }}
            </vs-td>

            <vs-td :data="data[indextr].alamat">
              {{ data[indextr].alamat }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>

    <vs-prompt
      @cancel="val = ''"
      @accept="PostTODatabase()"
      @close="close"
      :active.sync="activePrompt"
      title="EDIT BADAN PENGUSAHAAN"
    >
      <div class="con-exemple-prompt">
        <vs-input v-model="table.selected.nama" label="Nama" />
        <vs-select
          class="selectExample mt-2"
          label="Kota / Kabupaten"
          v-model="table.selected.kab_kota"
        >
          <vs-select-item
            :key="index"
            :value="item.value"
            :text="item.text"
            v-for="(item, index) in options1"
          />
        </vs-select>
        <vs-textarea
          v-model="table.selected.alamat"
          label="Alamat"
          class="mt-2"
        />
        <vs-switch color="success" v-model="table.selected.aktif">
          <span slot="on">Aktif</span>
          <span slot="off">Tidak Aktif</span>
        </vs-switch>
      </div>
    </vs-prompt>
  </div>
</template>
<script>
const axios = require("axios");
import url from "@/url";
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
export default {
  components: {
    StatisticsCardLine,
  },
  data() {
    return {
      options1: [
        { text: "Tanjungpinang", value: "Tanjungpinang" },
        { text: "Bintan", value: "Bintan" },
        { text: "Karimun", value: "Karimun" },
      ],
      activePrompt: false,
      page: url.api,
      distrik: [],
      table: {
        button: false,
        selected: {},
      },
      page: {
        submitType: "InsertByForm",
      },
    };
  },
  created() {
    this.getDistrik();
  },
  methods: {
    onDetail(i) {
      this.$router.push({
        name: "distrik-detail",
        query: { v: this.distrik[i].distrik_id, t:0 },
      });
    },
    onEdit(i) {
      this.activePrompt = true;
      this.page.submitType = "UpdateById";
    },
    onDelete(i) {
      this.page.submitType = "DeleteById";
      this.PostTODatabase();
      this.$delete(this.distrik, i);
    },
    acceptAlert(color) {
      this.$vs.notify({
        color: "success",
        title: "Accept Selected",
        text: "Lorem ipsum dolor sit amet, consectetur",
      });
    },
    close() {
      this.$vs.notify({
        color: "danger",
        title: "Closed",
        text: "You close a dialog!",
      });
    },
    handleSelected(tr) {
      this.table.button = true;
    },
    getDistrik() {
      axios
        .post(url.api + "/distrik", {
          type: "all",
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
    PostTODatabase() {
      axios
        .post(url.api + "/distrik", {
          type: this.page.submitType,
          data: this.table.selected,
        })
        .then((r) => {
          this.$vs.notify({
            color: "success",
            title: r.data.title,
            text: r.data.text,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
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
