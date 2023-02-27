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
          type="date"
        ></v-text-field>

        <v-text-field
          v-model="starttime"
          label="Start Time"
          type="time"
        ></v-text-field>

        <v-text-field
          v-model="endtime"
          label="End Time"
          type="time"
        ></v-text-field>

        <v-select
          v-model="selectedSlot"
          label="Slot"
          single-line
          :items="slots"
          item-title="name"
          item-value="value"
          return-object
        ></v-select>

        <v-select
          v-model="selectedBlock"
          :items="blocks"
          label="Block"
          item-title="name"
          item-value="value"
          return-object
        ></v-select>

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
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";

export default {
  setup() {
    const form = ref(false);

    const router = useRouter();

    const slots = [
      { value: "Slot 1", name: "Slot 1" },
      { value: "Slot 2", name: "Slot 2" },
    ];

    const blocks = [
      { value: "A", name: "A" },
      { value: "B", name: "B" },
      { value: "C", name: "C" },
    ];

    let selectedSlot = { value: "Slot 1", name: "Slot 1" };

    let selectedBlock = { value: "A", name: "A" };

    const date = ref(null);

    const starttime = ref(null);

    const endtime = ref(null);

    const getUser = computed(() => {
      const user = localStorage.getItem("user");
      return user;
    });

    async function bookSlot() {
      let data = {
        username: getUser.value,
        date: date.value,
        starttime: starttime.value,
        endtime: endtime.value,
        slot: selectedSlot.value,
        block: selectedBlock.value,
      };
      await axios
        .post("http://localhost:3001/bookings?username=" + getUser.value, data)
        .then((res) => {
          toast("Booked SuccessFully !!! ", {
            autoClose: 2000,
          });
          router.push({ name: "Dashboard" });
        });
    }

    return {
      blocks,
      bookSlot,
      date,
      endtime,
      form,
      getUser,
      selectedBlock,
      selectedSlot,
      slots,
      starttime,
    };
  },
};
//
</script>
