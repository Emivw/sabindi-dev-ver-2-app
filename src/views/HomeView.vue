<template>
  <LoginForm/>
</template>

<script>
  import LoginForm from '../components/SignupForm.vue'

  export default {
    name: 'Home',
    data: () => ({ drawer: null }),
    components: {
      LoginForm,
    },
  }
</script>
