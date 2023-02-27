<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-label
      ><h2>{{ getUser }}</h2></v-label
    >
    <v-table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Slot</th>
          <th>Block</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody v-if="bookings?.length">
        <tr v-for="booking in bookings" :key="booking.id">
          <td>{{ booking.date ? booking.date : currentDate }}</td>
          <td>{{ booking.starttime ? booking.starttime : currentTime }}</td>
          <td>{{ booking.endtime ? booking.endtime : "-" }}</td>
          <td>{{ booking.slot }}</td>
          <td>{{ booking.block }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td>No bookings</td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script>
import axios from "axios";
import { onMounted, computed, ref } from "vue";

export default {
  setup() {
    const bookings = ref(null);

    const currentDate = computed(() => {
      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      return date;
    });

    const currentTime = computed(() => {
      const current = new Date();
      return (
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds()
      );
    });

    const getUser = computed(() => {
      const user = localStorage.getItem("user");
      return user;
    });

    onMounted(async () => {
      if (getUser) {
        await axios
          .get("http://localhost:3001/bookings?username=" + getUser.value)
          .then((res) => {
            bookings.value = res.data;
          });
      }
    });

    return { bookings, currentDate, currentTime, getUser };
  },
};
</script>
