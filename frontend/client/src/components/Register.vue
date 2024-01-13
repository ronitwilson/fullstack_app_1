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
  <br>
  <button> Register </button>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Register',
      email: 'test_email',
      password: 'test_pwd'
    }
  },
  watch: {
    password (value) {
      console.log('password has changed ', value)
    }
  }
}
</script>
