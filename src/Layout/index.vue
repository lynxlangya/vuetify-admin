<template>
  <v-app dark>
    <Navbar></Navbar>
    <Main></Main>
    <Siderbar></Siderbar>
  </v-app>
</template>
<script>
import Navbar from './Navbar'
import Main from './Main'
import Siderbar from './Siderbar'
export default {
  components: { Navbar, Main, Siderbar },
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
</style>
