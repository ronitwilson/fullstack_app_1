<template>
  <div>
  <h1> Register</h1>

  <input
  type="email"
  name="email"
  v-model="email"
  placeholder="email"/>
  <br>
  <input
  type="password"
  name="password"
  v-model="password"
  placeholder="password"/>
  <br>
  <div class="error" v-html="error"></div>
  <br>
  <button @click="register"> Register </button>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Register',
      email: 'test_email',
      password: 'test_pwd',
      error: 'test'
    }
  },
  // watch: {
  //   password (value) {
  //     // console.log('password has changed ', value)
  //   }
  // },
  methods: {
    async register () {
      // console.log('register method is called', this.email, this.password)
      try {
        const response = await AuthenticationService.register({email: this.email, password: this.password})
        console.log('the respose is ', response.data)
      } catch (err) {
        console.log('in error case ', err.response.data)
        this.error = err.response.data.msg
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
