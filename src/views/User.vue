<template>
  <div align="center">
    <div v-if="renderLogin">
      <LoginUser></LoginUser>
    </div>
    <div id="regUser" v-else>
      <RegisterUser></RegisterUser>
    </div>
  </div>
</template>

<script>
import LoginUser from "@/components/LoginUser";
import RegisterUser from "@/components/RegisterUser";
export default {
  name: "loginUser",
  components: {
    LoginUser,
    RegisterUser
  },
  data() {
    return {
      renderLogin: true
    };
  },
  beforeCreate() {
    this.renderLogin = this.$route.query.pageMode === "register" ? false : true;
    console.log(this.$route.query, this.renderLogin);
  }
};
</script>