<template>
  <a-table :columns="columns" :dataSource="data">
    <a slot="action" href="javascript:;"  >Create</a>
   
    <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
      {{ record.description }}
    </p>
  </a-table>
</template>

<script>
import axios from "axios";

const columns = [
 


    //{ title: "bookingId", dataIndex: "bookingId", key: "bookingId" ,slots:{title:"customTitle"},scopedSlots:{customRender:"name"}},
  { title: "hotelname", dataIndex: "name", key: "name" },
 // { title: "amount", dataIndex: "amount", key: "amount" },
  { title: "location", dataIndex: "location", key: "location" },
  { title: "rent", dataIndex: "rent", key: "rent" },
  //{ title: "hoursOccupied", dataIndex: "hoursOccupied", key: "hoursOccupied" },
   { title: 'Booking', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
  
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
    axios.get("http://localhost:8002/api/available").then(response => {
      console.log(response);
      this.data = response.data;
    });
  }
};
</script>
