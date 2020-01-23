<template>
  <div>
    <a-tabs defaultActiveKey="1" @change="callback" id="tabBox">
      <a-tab-pane tab="create" key="create" class="dataBox"></a-tab-pane>
      <a-tab-pane tab="manage" key="manage" forceRender
        ><Inventory
      /></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Inventory from "@/components/Inventory.vue";
export default {
  name: "manageBooking",
  components: {
    Inventory
  }
};
</script>
