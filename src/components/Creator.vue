<template>
  <a-table :columns="columns" :dataSource="data">
    <a slot="action" href="javascript:;">Create</a>
    <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
      {{ record.description }}
    </p>
  </a-table>
</template>

<script>
import axios from "axios";

const columns = [
  { title: "bookingId", dataIndex: "bookingId", key: "bookingId" },
  { title: "userId", dataIndex: "userId", key: "userId" },
  { title: "hotelId", dataIndex: "hotelId", key: "hotelId" },
  { title: "hoursOccupied", dataIndex: "hoursOccupied", key: "hoursOccupied" }
  //  { title: 'Booking', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
];

export default {
  name: "Creator",
  data() {
    return {
      data: null,
      columns
    };
  },
  beforeMount() {
    axios.get("http://localhost:8000/api/search").then(response => {
      console.log(response);
      this.data = response.data;
    });
  }
};
</script>
