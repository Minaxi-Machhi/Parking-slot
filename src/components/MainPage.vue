<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto" max-width="">
      <v-container fluid>
        <div class="fill-height">
          <v-btn size="x-large" block> Slot 1 </v-btn>
        </div>
        <v-row dense>
          <v-col v-for="slot in slot1" :key="slot.id">
            <v-card>
              <v-img
                :src="slot.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-title
                  class="text-white"
                  v-text="slot.block"
                ></v-card-title>
                <v-btn
                  :disabled="slot.Availability !== 'Free Slot'"
                  variant="outlined"
                  color="primary"
                  @click="onClick"
                >
                  {{ slot.Availability }}
                </v-btn>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-row>=</v-row>

        <div class="fill-height">
          <v-btn size="x-large" block> Slot 2 </v-btn>
        </div>
        <v-row dense>
          <v-col v-for="slot in slot1" :key="slot.id">
            <v-card>
              <v-img
                :src="slot.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-title
                  class="text-white"
                  v-text="slot.block"
                ></v-card-title>
                <v-btn
                  :disabled="slot.Availability !== 'Free Slot'"
                  variant="outlined"
                  @click="onClick"
                  color="primary"
                >
                  {{ slot.Availability }}
                </v-btn>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  setup(context) {
    const router = useRouter();

    const slot1 = reactive([
      {
        id: "1",
        block: "block A",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        Availability: "Booked Slot",
      },
      {
        id: "2",
        block: "block B",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        Availability: "Free Slot",
      },
      {
        id: "3",
        block: "block C",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        Availability: "Booked Slot",
      },
      {
        id: "4",
        block: "block D",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        Availability: "Free Slot",
      },
      {
        id: "5",
        block: "block E",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        Availability: "Free Slot",
      },
    ]);

    function onClick() {
      // context.emit("pass-selected-block", event.target.value);
      router.push({ name: "Login" });
    }

    return { slot1, onClick };
  },
};
</script>
