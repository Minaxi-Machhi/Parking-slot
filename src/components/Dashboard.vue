<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    abc
    <v-table>
      <thead>
        <tr>
          <!-- <th>User Name</th> -->
          <th>Start Time</th>
          <th>End Time</th>
          <th>Slot</th>
          <th>Block</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in bookings" :key="id">
          <!-- <td>{{ booking.username }}</td> -->
          <td>{{ booking.starttime }}</td>
          <td>{{ booking.endtime }}</td>
          <td>{{ booking.slot }}</td>
          <td>{{ booking.block }}</td>
          <td>{{ booking.status }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const bookings = ref(null);

    onMounted(async () => {
      await axios
        .get("http://localhost:3001/bookings", {
          params: { username: "abc" },
        })
        .then((res) => {
          console.log("res", res.data[0].records);
          bookings.value = res.data[0]?.records;
        });
    });

    return { bookings };
  },
};
</script>
