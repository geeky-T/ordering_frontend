<template>
  <div class="loginBox">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'name',
            {
              rules: [{ required: true, message: 'Please enter your name' }]
            }
          ]"
          placeholder="Name"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'email',
            {
              rules: [
                { required: true, message: 'Please enter a valid email!' }
              ]
            }
          ]"
          placeholder="email"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            }
          ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          class="login-form-button"
          :loading="requestInProcess"
        >
          Sign Up
        </a-button>
        Or
        <router-link to="/user">
          Sign In instead
        </router-link>
      </a-form-item>
    </a-form>
  </div>
</template>
<style scoped>
.loginBox {
  position: absolute;
  top: 30%;
  height: 20%;
  left: 40%;
  width: 20%;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      requestInProcess: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, userCred) => {
        if (!err) {
          this.requestInProcess = true;
          await axios
            .post("http://localhost:8000/api/login", userCred)
            .then(res => {
              this.requestInProcess = false;
              if (res.status === 200) {
                this.$router.push("booking");
              }
            })
            .catch(err => {
              console.log("err", err);
              this.requestInProcess = false;
            });
        }
      });
    }
  }
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
