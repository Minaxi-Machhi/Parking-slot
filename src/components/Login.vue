<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          label="Normal with hint text"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <br />

        <v-btn
          :disabled="!form"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
      </v-form>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="error" @click="onClick">
          Create an account
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/init.js";
import { useAppStore } from "@/store/app";
const store = useAppStore();

const emit = ["loginUser"];

export default {
  setup(ctx) {
    const router = useRouter();
    const form = ref(false);
    const email = ref("");
    const password = ref("");
    const show1 = ref(false);
    const rules = {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    };

    const emailRules = [
      (value) => {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

        return "Must be a valid e-mail.";
        P;
      },
    ];

    function onClick() {
      router.push("/register");
    }

    async function onSubmit() {
      //<--------------------------------------------------LOGIN USING FIREBASE START------------------------------------------------------->

      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
          toast("Login successful !!! !", {
            autoClose: 1000,
          });
          store.setUser(email.value);
          localStorage.setItem("user", email.value);
          emit("loginUser",email.value);
          router.push({ name: "Booking" });
        })
        .catch((err) => {
          console.log(err.message.substr(22, 14));
          toast.error(err.message.substr(22, 14), {
            autoClose: 2000,
          });
        });

      //<--------------------------------------------------LOGIN USING FIREBASE END----------------------------------------------------------->

      //<--------------------------------------------------LOGIN USING API THROUGH START------------------------------------------------------>
      // let users = [];

      // await axios.get("http://localhost:3001/users").then((res) => {
      //   users = res.data;
      // });

      // const isMatched = users.find(
      //   (user) => user.email === email.value && user.password === password.value
      // );

      // if (isMatched) {
      //   toast("Login successful !!! !", {
      //     autoClose: 2000,
      //   });
      //   localStorage.setItem("user", isMatched.username);
      //   router.push({ name: "Booking" });
      // } else {
      //   toast.error("Invalid Credentials !!! !", {
      //     autoClose: 2000,
      //   });
      // }
      //<--------------------------------------------------LOGIN USING API THROUGH END-------------------------------------------------------->
    }

    return {
      email,
      emailRules,
      form,
      onClick,
      onSubmit,
      password,
      rules,
      show1,
    };
  },
};
</script>

