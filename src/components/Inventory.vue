<template>
  <a-table :columns="columns" :dataSource="data">
    <a slot="action" href="javascript:;"  @click="crt" >Checkout</a>
   
   
  </a-table>
</template>

<script>
import axios from "axios";
//axios.defaults.withCredentials=true;
const columns = [
 


    { title: "bookingId", dataIndex: "bookingId", key: "bookingId" },
  { title: "name", dataIndex: "name", key: "name" },
  { title: "amount", dataIndex: "amount", key: "amount" },
  { title: "location", dataIndex: "location", key: "location" },
  { title: "rent", dataIndex: "rent", key: "rent" },
  { title: "hoursOccupied", dataIndex: "hoursOccupied", key: "hoursOccupied" },
   { title: 'Booking', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
  
];

export default {
  name: "Inventory",
  data() {
    return {
      data: null,
      columns
    };
  },
  beforeMount() {
    axios.get("/api/show").then(response => {
      console.log(response);
      this.data = response.data;
    });
  },
  methods:{
    crt: function(){
        axios
        .get("/api/end")
    }
  }
};
</script>
