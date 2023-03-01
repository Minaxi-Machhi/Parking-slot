<template>
  <v-main>
    <v-tabs v-model="tab" color="deep-grey-accent-4" align-tabs="center">
      <v-tab v-for="item in items" :key="item.id" :value="item">
        <router-link :to="item.to">{{ item.label }}</router-link>
      </v-tab>
      <v-btn color="primary" v-if="showLogout" @click="logoutUser"
        >Logout</v-btn
      >
    </v-tabs>
    <router-view />
  </v-main>
</template>

<script lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useAppStore } from "@/store/app";
const store = useAppStore();

export default {
  setup() {
    const router = useRouter();

    const tab = ref(null);

    const showLogout = ref(false);

    const items = [
      { id: 1, to: "/", label: "Home" },
      { id: 2, to: "/register", label: "Register" },
      { id: 3, to: "/dashboard", label: "Dashboard" },
      { id: 4, to: "/booking", label: "Booking" },
    ];

    function loginUser() {
      console.log("hey");
    }

    onMounted(() => {
      if (localStorage.getItem("user") || store.currentUser) {
        showLogout.value = true;
      }
    });

    function logoutUser() {
      signOut(auth).then((res) => {
        router.push({ name: "MainPage" });
      });
      showLogout.value = false;

      // localStorage.removeItem("user");
      // router.push({ name: "MainPage" });
    }
    return { showLogout, items, logoutUser, tab, loginUser };
  },
};
</script>
