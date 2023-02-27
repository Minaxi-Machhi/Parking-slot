<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="">
        <v-text-field
        :value='getEmail'
          readonly
          class="mb-2"
          clearable
        ></v-text-field>

        <v-text-field label="Start Time" type="time"></v-text-field>

        <v-text-field label="End Time" type="time"></v-text-field>

        <v-select label="Slot" :items="['Slot 1', 'Slot 2']"></v-select>

        <v-select label="Block" :items="['A', 'B', 'C', 'D', 'E']"></v-select>

        <v-btn
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          @click="bookSlot()"
        >
          Book
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script lang="ts">
import { ref, computed } from "vue";

export default {
  setup() {
    const form = ref(false);
    const getEmail = computed(() => {
      const user = localStorage.getItem("loggedUser");
      console.log("user", JSON.parse(user).username);

      return JSON.parse(user)?.username;
    });

    function bookSlot(){

    }
    return { bookSlot, form, getEmail };
  },
};
//
</script>
