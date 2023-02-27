<template>
  <v-main>
    <v-tabs v-model="tab" color="deep-grey-accent-4" align-tabs="center">
      <v-tab v-for="item in items" :key="item.id" :value="item">
        <router-link :to="item.to">{{ item.label }}</router-link>
      </v-tab>
      <v-btn color="primary" v-if="isLoggedIn" @click="logoutUser"
        >Logout</v-btn
      >
    </v-tabs>
    <router-view />
  </v-main>
</template>

<script lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const tab = ref(null);
    const items = [
      { id: 1, to: "/", label: "Home" },
      { id: 2, to: "/register", label: "Register" },
      { id: 3, to: "/dashboard", label: "Dashboard" },
      { id: 4, to: "/booking", label: "Booking" },
    ];

    const isLoggedIn = computed(() => {
      return localStorage.getItem("loggedUser");
    });

    // onMounted(() => {});

    function logoutUser() {
      console.log("here");
      localStorage.removeItem("loggedUser");
      router.push({ name: "MainPage" });
    }
    return { isLoggedIn, items, logoutUser, tab };
  },
};
</script>
