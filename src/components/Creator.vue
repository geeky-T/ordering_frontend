<template>
  <a-table :columns="columns" :dataSource="data">
    <a slot="action" href="javascript:;"  @click="crt" >Create</a>
   
    <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
      {{ record.description }}
    </p>
  </a-table>
</template>

<script>
import axios from "axios";

const columns = [
 


    //{ title: "bookingId", dataIndex: "bookingId", key: "bookingId" ,slots:{title:"customTitle"},scopedSlots:{customRender:"name"}},
  { title: "name", dataIndex: "name", key: "name" },
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
    axios.get("http://localhost:8000/api/available").then(response => {
      console.log(response);
      this.data = response.data;
    });
  },
  methods:{
    crt: function(){
        axios
        .get("http://localhost:8000/api/create")
    }
  }
};
</script>
