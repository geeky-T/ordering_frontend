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
export default {
  methods: {
    onDelete: function(temp) {
      console.log(temp);
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(rec => rec.key !== temp);
    }
  },
  data() {
    return {
      count: 2,
      columns: [
        {
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" }
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age"
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address"
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
        }
      ]
    };
  }
};
// export default {
//   name: "HelloWorld",
//   props: {
//     msg: String
//   }
// };
</script>
