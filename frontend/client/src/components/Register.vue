<template>
  <div>
  <h1> Register</h1>

  <input
  type="email"
  name="email"
  placeholder="email"/>
  <br>
  <input
  type="password"
  name="password"
  placeholder="password"/>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Register'
    }
  }
}
</script>
