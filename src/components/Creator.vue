<template>
<div>
  <a-table :columns="columns" :dataSource="data">
    <!--<a slot="action" href="javascript:;" @click="crt">Create</a> -->

  </a-table>
  <form onsubmit="crt" method="POST">
  <!--Enter Email Id<input type="text" id="email" name="email" ref="email">  -->
  Enter Hotel Id<input type="text" id="hotelId" name="hotelId" ref="hotelId"/>  

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
  data() {
    return {
      data: null,
      columns,
    //  requestInProcess: false,
      hotelId:0
     
    };
  },
  // beforeCreate() {
  //   this.form = this.$form.createForm(this, { name: "normal_create" });
  // },
   beforeMount() {
     axios.get("api/available").then(response => {
       console.log(response);
       this.data = response.data;

     });
   },
  methods: {
    // 
    //   //let x=this.data.hotelId;
    //   var x=document.getElementsById("search").value;
    //  // {{x}}
    //   //var y=this.data.userId;

    //   console.log(x);
     
    //   axios.post(`api/create/${this.x}`)

      //this.$router.push("user");

crt: function(e) {
e.preventDefault();
 // this.form.validateFields(async (err, userCred) => {
     
    //  if (!err) {
          //this.requestInProcess = true;
           axios
            .post("/api/create",  {
                            hotelId: document.getElementById("hotelId"),
                            
                          })
            .then(res => {
             // this.requestInProcess = false;
              // var hotelId = this.$refs["hotelId"];
              // console.log(hotelId)
            //  localStorage.setItem('hotelId', res.data.hotelId);
              //if (res.status === 200) {
                //('Post Request Added Created.', 'success');
                this.$router.push("booking");
                console.log(res);
              //}
            })
           // .catch(err => {
             // console.log("err", err);
            //  this.requestInProcess = false;
               //});
     //   }
//});
    }
  }
};
</script>
