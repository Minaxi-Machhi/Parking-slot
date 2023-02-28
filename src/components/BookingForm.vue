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
          :items="slots"
          @update:modelValue="changeSelection"
        ></v-select>

        <v-select
          v-model="selectedBlock"
          :rules="[rules.required]"
          :items="blocks"
          label="Block"
          return-object
        ></v-select>

        <v-dialog v-model="dialog" height="250px" width="400px">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
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
          </template>

          <v-card>
            <v-card-title>Booking Details</v-card-title>

            <v-divider></v-divider>

            <v-card-text style="height: 400px">
              <div class="text-h6">{{ starttime }} - {{ endtime }}</div>
              <div class="text-h6">
                {{ selectedSlot }} - {{ selectedBlock }}
              </div>
              <p>Charges - 2$</p>
              <p>PAYMENT DONE</p>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn color="blue-darken-1" variant="text" @click="downloadFile">
                Download Recipt
              </v-btn>

              <v-btn color="blue-darken-1" variant="text" @click="onCancel">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import { ref, computed, onMounted } from "vue";
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

    const slots = ref([]);

    const blocks = ref([]);

    let dialog = ref(false);

    const picker = new Date().toISOString().substr(0, 10);

    const getUser = computed(() => {
      const user = localStorage.getItem("user");
      return user;
    });

    const rules = {
      required: (value) => !!value || "Required.",
    };

    onMounted(async () => {
      await axios.get("http://localhost:3001/slots").then((res) => {
        res.data.map((d) => {
          slots.value.push(d.slotNo);
        });
      });
    });

    async function changeSelection(val) {
      blocks.value = [];

      const api = "http://localhost:3001/slots";

      await axios.get(api, { params: { slotNo: val } }).then((res) => {
        res.data.map((d) => {
          d.blocks.map((val) => {
            if (val.Availability === "Free Slot") {
              blocks.value.push(val.block);
            }
          });
        });
      });
    }

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
          dialog.value = true;
        });
    }

    function downloadFile() {
      let text = "hello";
      let filename = "booking.pdf";
      let element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:application/json;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();
      document.body.removeChild(element);
      dialog.value = false;
      router.push({ name: "Dashboard" });
    }

    function onCancel() {
      dialog.value = false;
      router.push({ name: "Dashboard" });
    }

    return {
      blocks,
      bookSlot,
      changeSelection,
      date,
      dialog,
      downloadFile,
      endtime,
      form,
      getUser,
      picker,
      onCancel,
      rules,
      selectedBlock,
      selectedSlot,
      slots,
      starttime,
    };
  },
};
//
</script>
