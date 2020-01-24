<template>
  <a-table :columns="columns" :dataSource="dataSource" id="booking_table">
    <a slot="name" slot-scope="booking">{{ booking }}</a>
    <template slot="action" slot-scope="booking">
      <a-popconfirm
        placement="top"
        okText="Yes"
        cancelText="No"
        @confirm="confirmDelete(booking)"
      >
        <template slot="title">
          <p value>{{ getCancellationSummary(booking.key) }}</p>
        </template>
        <a-button :loading="loadingObject[booking.key]">Stop Booking</a-button>
      </a-popconfirm>
    </template>
  </a-table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loadingObject: {},
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "Location",
          dataIndex: "location",
          key: "location"
        },
        {
          title: "Rent",
          dataIndex: "rent",
          key: "rent"
        },
        {
          title: "Action",
          key: "action",
          scopedSlots: { customRender: "action" }
        }
      ],
      dataSource: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"]
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["loser"]
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"]
        },
        {
          key: "4",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"]
        },
        {
          key: "5",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"]
        },
        {
          key: "6",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"]
        },
        {
          key: "7",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"]
        }
      ]
    };
  },
  methods: {
    getCancellationSummary: function(bookingId) {
      return bookingId + " cancel?";
    },
    check: function(val) {
      console.log(val);
      return val;
    },
    confirmDelete: function(booking) {
      this.loadingObject[booking.key] = true;
      axios.get("https://jsonplaceholder.typicode.com/todos/1").then(() => {
        const dataSource = [...this.dataSource];
        this.dataSource = dataSource.filter(rec => rec.key !== booking.key);
      });
    }
  },
  created() {
    this.dataSource.forEach(booking =>
      this.$set(this.loadingObject, booking.key, false)
    );
  }
};
</script>
