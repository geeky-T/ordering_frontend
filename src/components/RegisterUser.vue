<template>
  <div class="sign main">
    <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="register-form"
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
                placeholder="name"
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
                class="register-form-button"
                :loading="requestInProcess"
        >
          Sign Up
        </a-button>
        Or
        <router-link to="/user">
          Sign In 
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
            this.form = this.$form.createForm(this, { name: "normal_register" });
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields(async (err, userCred) => {
                    if (!err) {
                        this.requestInProcess = true;
                        await axios
                            .post("http://localhost:8000/api/register", userCred)
                            .then(res => {
                                this.requestInProcess = false;
                                if (res.status === 201) {
                                    alert("User Created Successfully, Please Login");
                                    //window.location.reload()
                                    this.$router.push("user");
                                }
                            })
                            .catch(err => {
                                console.log("err", err);
                                this.requestInProcess = false;

                            });
                    }
                });
            }
        },

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
   

   body {
        background-color: #F3EBF6;
        font-family: 'Ubuntu', sans-serif;
    }
    
    .main {
        background-color: #FFFFFF;
        width: 400px;
        height: 400px;
        margin: 7em auto;
        border-radius: 1.5em;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    }
    
    .sign {
        padding-top: 40px;
        color: #8C55AA;
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
        font-size: 23px;
    }
    
    .un {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
    }
    
    form.form1 {
        padding-top: 40px;
    }
    
    .pass {
            width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
    }
    
   
    .un:focus, .pass:focus {
        border: 2px solid rgba(0, 0, 0, 0.18) !important;
        
    }
    
    .submit {
      cursor: pointer;
        border-radius: 5em;
        color: #fff;
        background: linear-gradient(to right, #9C27B0, #E040FB);
        border: 0;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        font-family: 'Ubuntu', sans-serif;
        margin-left: 35%;
        font-size: 13px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    }
    
    .forgot {
        text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
        color: #E1BEE7;
        padding-top: 15px;
    }
    
    a {
        text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
        color: #E1BEE7;
        text-decoration: none
    }
    
    @media (max-width: 600px) {
        .main {
            border-radius: 0px;
        }
      } 
</style>