<template>
  <div>
    <a-tabs defaultActiveKey="1" @change="callback" id="tabBox">
      <a-tab-pane tab="create" key="create" ><Creator/></a-tab-pane>
      <a-tab-pane tab="manage" key="manage" ><Inventory/></a-tab-pane>
      
    </a-tabs>
    
  </div>
</template>

<script>
import Inventory from "@/components/Inventory.vue";
import Creator from "@/components/Creator.vue";
//import    from "@/component/";
export default {
  name: "ManageBooking",
  components: {
    Inventory,
    Creator
  }
};
</script>
