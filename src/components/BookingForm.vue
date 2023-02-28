<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="">
        <v-text-field
          :value="getUser"
          readonly
          class="mb-2"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="date"
          label="Select Date"
          :rules="[rules.required]"
          type="date"
        ></v-text-field>

        <v-text-field
          v-model="starttime"
          label="Start Time"
          :rules="[rules.required]"
          type="time"
        ></v-text-field>

        <v-text-field
          v-model="endtime"
          :rules="[rules.required]"
          label="End Time"
          type="time"
        ></v-text-field>

        <v-select
          v-model="selectedSlot"
          :rules="[rules.required]"
          label="Slot"
          single-line
          :items="['Slot1', 'Slot2']"
        ></v-select>

        <v-select
          v-model="selectedBlock"
          :rules="[rules.required]"
          :items="['A', 'B', 'C']"
          label="Block"
          return-object
        ></v-select>

        <v-btn
          block
          :disabled="!form"
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
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";

export default {
  setup() {
    const form = ref(false);

    const router = useRouter();

    let selectedSlot = ref(null);

    let selectedBlock = ref(null);

    const date = ref(null);

    const starttime = ref(null);

    const endtime = ref(null);

    const getUser = computed(() => {
      const user = localStorage.getItem("user");
      return user;
    });

    const rules = {
      required: (value) => !!value || "Required.",
    };

    async function bookSlot() {
      let data = {
        username: getUser.value,
        date: date.value,
        starttime: starttime.value,
        endtime: endtime.value,
        slot: selectedSlot.value,
        block: selectedBlock.value,
      };

      const api = "http://localhost:3001/bookings";

      await axios
        .post(api, data, { params: { username: getUser.value } })
        .then((res) => {
          toast("Booked SuccessFully !!! ", {
            autoClose: 2000,
          });
          router.push({ name: "Dashboard" });
        });
    }

    return {
      bookSlot,
      date,
      endtime,
      form,
      getUser,
      rules,
      selectedBlock,
      selectedSlot,
      starttime,
    };
  },
};
//
</script>
