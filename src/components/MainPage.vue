<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto" max-width="">
      <v-container fluid>
        <div class="fill-height"></div>

        <v-row v-for="slot in slots" :key="slot.id" dense>
          <v-btn size="x-large" block> Slot {{ slot.slotNo }} </v-btn>

          <v-col v-for="block in slot.blocks" :key="block.id">
            <v-card>
              <v-img
                :src="block.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-text class="text-white">
                  {{ block.block }}
                </v-card-text>

                <v-btn
                  :disabled="block.Availability !== 'Free Slot'"
                  variant="outlined"
                  color="primary"
                  @click="onClick"
                >
                  {{ block.Availability }}
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
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const router = useRouter();

    const slots = ref(null);

    onMounted(async () => {
      await axios.get("http://localhost:3001/slots").then((res) => {
        slots.value = res.data;
      });
    });

    function onClick() {
      router.push({ name: "Login" });
    }

    return { slots, onClick };
  },
};
</script>
