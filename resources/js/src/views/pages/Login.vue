<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vs-progress indeterminate color="primary" v-if="isLoading"></vs-progress>
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img
                src="@assets/images/pages/login.png"
                alt="login"
                class="mx-auto"
              />
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">
                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Login</h4>
                  <p>Dewan Kawasan.</p>
                </div>

                <div>
                  <vs-input
                    name="email"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    label-placeholder="Email"
                    v-model="email"
                    class="w-full"
                  />

                  <vs-input
                    type="password"
                    name="password"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    label-placeholder="Password"
                    v-model="password"
                    class="w-full mt-6"
                    v-on:keyup.enter="PostSubmit()"
                  />

                  <div class="flex flex-wrap justify-between my-5"></div>
                  <router-link to="">Lupa Password?</router-link>
                  <vs-button
                    class="float-right vs-con-loading__container"
                    @click="PostSubmit()"
                    ref="loadableButton"
                    id="button-with-loading"
                    type="relief"
                    >Login</vs-button
                  >

                  <vs-divider v-if="active">Information</vs-divider>

                  <div
                    class="social-login-buttons flex flex-wrap items-center mt-4"
                  >
                    <vs-alert :active.sync="active" color="danger" closable>
                      account dengan email : {{ email }} ini tidak di temukan.
                    </vs-alert>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import url from "@/url";
const axios = require("axios");

export default {
  data() {
    return {
      isLoading: false,
      active: false,
      email: "",
      password: "",
      checkbox_remember_me: false,
      url: {
        logo: url.web + "/public/images/logo",
      },
    };
  },
  mounted() {
    // this.PostSubmit();
    // this.notification();
  },
  methods: {
    openLoadingContained() {
      this.$vs.loading({
        background: "primary",
        color: "#fff",
        container: "#button-with-loading",
        scale: 0.45,
      });
    },
    notification() {
      this.$vs.notify({
        title: "Login Berhasil",
        text: "Aplikasi Data Center. Dewan Kawasan Provinsi Kepri.",
        color: "success",
        iconPack: "feather",
        icon: "icon-check",
        position: "top-center",
      });
    },
    PostSubmit() {
      this.openLoadingContained();
      this.isLoading = true;
      axios
        .post(url.web + "/login/submit", {
          email: this.email,
          password: this.password,
        })
        .then((r) => {
          this.isLoading = false;
          this.$vs.loading.close("#button-with-loading > .con-vs-loading");
          r.data.nama == "login"
            ? (this.$router.push({ path: "/dashboard", query : {v: r.data.id }}), this.notification())
            : (this.active = true);
        });
    },
  },
};
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>
