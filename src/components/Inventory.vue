<template>
  <a-table :columns="columns" :dataSource="dataSource" id="inventory_template">
    <a slot="name" slot-scope="text" href="javascript:;">{{ text }}</a>
    <span slot="customTitle">Name</span>
    <template slot="action" slot-scope="text, record">
      <a-popconfirm
        v-if="dataSource.length"
        title="Sure to delete?"
        @confirm="() => onDelete(record.key)"
      >
        <a href="javascript:;">Stop Booking</a>
      </a-popconfirm>
    </template>
  </a-table>
</template>

<script>
import axios from 'axios';

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
  name:"Inventory",
  methods: {
    onDelete: function(temp) {
      console.log(temp);
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(rec => rec.key !== temp);
    }
  },
  data() {
    return {
      dataSource: null,
      columns
    };
  },
  beforeMount() {
    axios.get("http://localhost:8000/api/index").then(response => {
      console.log(response);
      this.dataSource = response.data;
    });
  }
  
};
// export default {
//   name: "HelloWorld",
//   props: {
//     msg: String
//   }
// };
</script>
