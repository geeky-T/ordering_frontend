<template>
<div>
  <a-table :columns="columns" :dataSource="data">
    <!--<a slot="action" href="javascript:;" @click="crt">Create</a> -->

  </a-table>
  <form @submit="crt" method="POST" ref="form" class="login">
  <!--Enter Email Id<input type="text" id="email" name="email" ref="email">  -->
  Enter Hotel Id  <input type="text" id="hotelId" name="hotelId" ref="hotelId" v-model="hotelId" />  
    <br><br>
  <input type="submit" value="submit"> 
  </form>


  </div>
</template>

<script>
import axios from "axios";
//axios.defaults.withCredentials=true;
const columns = [
  //{ title: "bookingId", dataIndex: "bookingId", key: "bookingId" ,slots:{title:"customTitle"},scopedSlots:{customRender:"name"}},
  { title: "hotelId", dataIndex: "hotelId", key: "hotelId" },
  { title: "name", dataIndex: "name", key: "name" },
  // { title: "amount", dataIndex: "amount", key: "amount" },
  { title: "location", dataIndex: "location", key: "location" },
  { title: "rent", dataIndex: "rent", key: "rent" },
  //{ title: "hoursOccupied", dataIndex: "hoursOccupied", key: "hoursOccupied" },
  // {
  //   title: "Booking",
  //   dataIndex: "",
  //   key: "x",
  //   scopedSlots: { customRender: "action" }
  // }
];

export default {
  name: "Creator",
  data: function() {
      return {
        data: null,
      columns,
    //  requestInProcess: false,
      hotelId: null
      }
  },
  // beforeCreate() {
  //   this.form = this.$form.createForm(this, { name: "normal_create" });
  // },
   mounted() {
     axios.get("api/available").then(response => {
       console.log(response);
       this.data = response.data;

     });
   },
  methods: {

crt: function(e) {
e.preventDefault();
console.log('Refs: ', this.$refs);
console.log('this hotelid: ', this.hotelId);
    //   this.$refs.form.validateFields(async (err, hotelId) => {
    //     if (!err) {
      const { hotelId } = this;
          this.requestInProcess = true;
          axios
            .post("/api/create", { hotelId })
            .then(res => {
              this.requestInProcess = false;
              var hotelId = this.$refs["hotelId"];
              console.log(hotelId)
              localStorage.setItem('hotelId', hotelId.value);
              if (res.status === 201) {
                alert('Post Request Added Created.');
                window.location.reload();
                this.$router.push("booking");
              }
            })
            .catch(err => {
              console.log("err", err);
              this.requestInProcess = false;
            });
    //     }
    //  });
    }
  }
};

</script>

<style scoped>
.login {
  position: relative;
  margin: 30px auto;
  padding: 20px 20px 20px;
  width: 310px;
  background: white;
  border-radius: 3px;
  -webkit-box-shadow: 0 0 200px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 200px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3);
}
</style>
