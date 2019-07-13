<template>
  <nav>
    <v-toolbar flat app>
      <v-spacer></v-spacer>
      <v-btn fab small>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn fab small>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-avatar size="30" class="avatar-style" @click="avatarClick">
        <img src="../assets/images/avatar.jpg" alt="avatar" />
      </v-avatar>
    </v-toolbar>
  </nav>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {},
  methods: {
    avatarClick () {
      console.log('点击了头像')
    }
  }
}
</script>
<style lang="stylus" scoped>
.avatar-style
  cursor pointer
</style>
