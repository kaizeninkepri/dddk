<template>
  <div
    class="the-navbar__user-meta flex items-center"
    v-if="activeUserInfo.displayName"
  >
    <!-- <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ activeUserInfo.displayName }}</p>
      <small>Available</small>
    </div> -->
 <vs-button icon="unlock" @click="logout()">Logout</vs-button>
  
  </div>
</template>

<script>
import url from "@/url";

export default {
  data() {
    return {};
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
  },
  methods: {
    logout() {
      window.location.href = url.web + "/auth/logout";
    },
  },
};
</script>
