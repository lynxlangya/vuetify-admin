<template>
    <v-navigation-drawer
        id="sidebar"
        v-model="drawer"
        app
        width="255"
        :mini-variant.sync="mini"
        hide-overlay
        stateless
    >
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar style="cursor: pointer;">
                        <img src="../assets/images/avatar.jpg" @click="avatarClick" />
                    </v-list-tile-avatar>

                    <v-list-tile-content @click="titleClick">
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

            <v-list-tile
                v-for="(item, index) in routes"
                :key="index"
                :to="item.name"
                @click="listClick(item)"
            >
                <v-list-tile-action>
                    <v-icon>{{ item.meta.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.meta.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
/**
 * @author MARS <marshal_max@163.com>
 * @package PerfectScrollbar 侧边栏滚动条
 */
import { mapGetters } from 'vuex'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import PerfectScrollbar from 'perfect-scrollbar'
export default {
    name: 'Siderbar',
    computed: {
        ...mapGetters([
            'permission_routes'
        ]),
        routes () {
            console.log(this.$router.options)
            const { routes } = this.$router.options
            return routes
        }
    },
    data () {
        return {
            drawer: true,
            mini: true,
            right: null,
            title: 'Vuetify Admin',
            scroll: null
        }
    },
    mounted () {

    },
    created () {
        this.$nextTick(() => {
            this.scroll = new PerfectScrollbar('#sidebar', {
                suppressScrollX: true
            })
            this.$emit('changeTemporary', this.temporary)
        })
        this.temporary = this.$vuetify && this.$vuetify.breakpoint.smAndDown
    },
    beforeDestroy () {
        this.scroll.destroy()
        this.scroll = null
    },
    methods: {
    /**
     * @param {Object} item 点击list跳转到相应路由页面
     * @method 列表点击
     */
        listClick (item) {
            console.log(item)
        },

        /**
     * @method Logo点击
     */
        avatarClick () {
            console.log('点击了logo')
        },

        /**
     * @method title点击=>Github地址
     */
        titleClick () {
            window.open('https://github.com/wangyunfan418/vuetify-admin')
        }
    }
}
</script>
<style lang="stylus" scoped>
/deep/.primary--text {
  color: #ffffff !important;
  background: rgba(255, 255, 255, 0.2) !important;
}

.title-style {
  color: transparent;
  font-family: Georgia;
  font-style: italic;
  font-weight: bold;
  text-shadow: 0 0 0 #ffffff;
  transition: all 250ms ease-in;
  cursor: pointer;
}

.title-style:hover {
  text-shadow: 0 0 2px #ffffff;
  color: #dddddd;
}
</style>
