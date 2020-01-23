<template>

    <a-table :columns="columns" :dataSource="data">
    <a slot="action" href="javascript:;">Create</a>
    <p slot="expandedRowRender" slot-scope="record" style="margin: 0">{{record.description}}</p>
  </a-table>





    <!-- <div style="border: 1px solid black"    > -->
    <!-- <table  width="80%" allign="left" >
    <tr>
        <th> Name </th>
        <th> Location </th>
        <th > rent </th>
        <th> CreateBooking </th>
    </tr>
    <tr v-for="x in hotels" v-bind:key="x.id">
        <td >{{x.name}}</td>
        <td >{{x.location}}</td>
        <td >{{x.rent}}</td>
        <td><button value='create'>Book</button></td>
    </tr>
   
    </table>
        
    </div> -->

</template>

<script>

const columns= [
    { title: 'name', dataIndex: 'name', key: 'name' },
    { title: 'location', dataIndex: 'location', key: 'location' },
    { title: 'rent', dataIndex: 'rent', key: 'rent' },
    { title: 'Booking', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
  ];
   const data=[

                {
                    id:1,
                    name:"townhouse1",
                    location:"san francisco",
                    rent:100,
                    description:"Most of the people like this hotel"
                },
                 {
                    id:2,
                    name:"townhouse2",
                    location:"moscow",
                    rent:200,

                },
                 {
                    id:3,
                    name:"townhouse3",
                    location:"dubai",
                    rent:150,

                },
                 {
                    id:4,
                    name:"townhouse4",
                    location:"london",
                    rent:120,

                },

               
            ];

export default {
    name:"Creator",
    data(){
        return{

           data,
           columns,
            
    }

}}


</script>

<style scoped>

</style>