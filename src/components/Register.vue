<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" fast-fail @submit.prevent="onSubmit">
        <v-text-field
          v-model="userName"
          :rules="userNameRules"
          label="User name"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email ID"
        ></v-text-field>

        <!-- <v-text-field
          v-model="phone"
          :rules="phoneRules"
          label="Phone Number"
        ></v-text-field> -->

        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-text-field
          v-model="confirmPassword"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min, rules.confirmPasswordMatch]"
          :type="show2 ? 'text' : 'password'"
          label="Confirm Password"
          hint="At least 8 characters"
          counter
          @click:append="show2 = !show2"
        ></v-text-field>

        <v-btn
          :disabled="!form"
          color="success"
          type="submit"
          block
          class="mt-2"
          :loading="loading"
          >Submit</v-btn
        >
      </v-form>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="error" @click="onClick">
          Already have account
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
  setup() {
    const router = useRouter();
    const form = ref(false);
    const loading = ref(false);
    const userName = ref("");
    const email = ref("");
    const phone = ref("");
    const password = ref("");
    const show1 = ref(false);
    const show2 = ref(false);
    const confirmPassword = ref("");
    const users = ref([]);

    const userNameRules = [
      (value) => {
        if (value?.length > 3) return true;

        return "First name must be at least 3 characters.";
      },
    ];
    const emailRules = [
      (value) => {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

        return "Must be a valid e-mail.";
      },
    ];
    const phoneRules = [
      (value) => {
        if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

        return "Phone number needs to be at least 9 digits.";
      },
    ];
    const rules = {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    };
    function onClick() {
      router.push("/login");
    }
    function onSubmit() {
      const userData = {
        username: userName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      };
      toast("Registration successful" + userName.value + "!!!", {
        autoClose: 1000,
      });
      localStorage.setItem("users", JSON.stringify(userData));
      router.push({ name: "Login" });
    }

    return {
      confirmPassword,
      email,
      emailRules,
      form,
      loading,
      onClick,
      onSubmit,
      password,
      phone,
      phoneRules,
      rules,
      show1,
      show2,
      userName,
      userNameRules,
    };
  },
};
</script>

