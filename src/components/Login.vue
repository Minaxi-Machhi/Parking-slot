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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

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
    function onSubmit() {
      const user = localStorage.getItem("users");
      if (email.value === JSON.parse(user).email && password.value) {
        toast("Login successful !!! !", {
          autoClose: 1000,
        });
        localStorage.setItem("loggedUser", user);
        // ctx.emit("refresh-page");
        router.push({ name: "Booking" });
      }
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

