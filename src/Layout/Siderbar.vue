<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      width="240"
      :mini-variant.sync="mini"
      hide-overlay
      stateless
    >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar style="cursor: pointer;">
            <img src="../assets/images/avatar.jpg" @click="avatarClick"/>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="title-style">{{ title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="(item, index) in routes" :key="index" @click="listClick(item)">
        <v-list-tile-action>
          <v-icon>{{ item.meta.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.meta.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Siderbar',
  computed: {
    ...mapState({
      // sidebarClosed: state => state.sidebarClosed,
      // routers: state => state.Permission.routers
      // routes: function (state) {
      //   console.log(state)
      //   console.log(this.$router.options)
      // }
      routes () {
        console.log(this.$router.options)
        const { routes } = this.$router.options
        return routes
      }
    })
  },
  data () {
    return {
      drawer: true,
      mini: true,
      right: null,
      title: 'Dare to dream'
    }
  },
  mounted () {
    console.log(this.routes)
  },
  methods: {
    // ?点击了侧边栏菜单
    listClick (item) {
      console.log(item)
    },
    // ?logo点击
    avatarClick () {
      console.log('点击了logo')
    }
  }
}
</script>
<style lang="stylus" scoped>
.title-style
  color red
</style>
