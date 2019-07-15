<template>
    <v-navigation-drawer
        id="sidebar"
        v-model="drawer"
        app
        width="255"
        :mini-variant.sync="mini"
        stateless
        hide-overlay
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
            <!-- 一级菜单 -->
            <template v-for="(item, index) in routes">
                <v-list-tile :key="index" :to="item.name" @click="listClick(item)">
                    <v-list-tile-action>
                        <v-icon>{{ item.meta.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.meta.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
            <!-- <template> -->
            <v-list-group no-action prepend-icon="account_circle">
                <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-title>Users</v-list-tile-title>
                    </v-list-tile>
                </template>
                <template v-for="(Two, i) in Twos">
                    <!-- 二级菜单 -->
                    <v-list-tile :key="i" @click="t2Click()">
                        <v-list-tile-title>{{ Two.meta.title }}</v-list-tile-title>
                        <v-list-tile-action>
                            <v-icon>{{ Two.meta.icon }}</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </template>

                <!-- 三级菜单 -->
                <!-- <template>
                    <v-list-group sub-group no-action>
                        <template v-slot:activator>
                            <v-list-tile>
                                <v-list-tile-title>Actions</v-list-tile-title>
                            </v-list-tile>
                        </template>
                        <v-list-tile v-for="(Three, i) in Threes" :key="i" @click="t3Click()">
                            <v-list-tile-title v-text="Three[0]"></v-list-tile-title>
                            <v-list-tile-action>
                                <v-icon v-text="Three[1]"></v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-group>
                </template>-->
            </v-list-group>
            <!-- </template> -->
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
            console.log(routes)
            return routes
        }
    },
    data () {
        return {
            drawer: true,
            mini: false,
            right: null,
            title: 'Vuetify Admin',
            scroll: null,

            // ?二级
            Twos: [
                {
                    name: 'create',
                    path: '/create',
                    meta: {
                        icon: 'add',
                        title: 'Create'
                    }
                }
            ],
            // ?三级
            Threes: [
                ['Management', 'people_outline'],
                ['Settings', 'settings']
            ]
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
         * @test
         */
        homeClick () {
            console.log('点了home')
        },
        t3Click () {
            console.log('点击了3级菜单')
        },
        t2Click () {
            console.log('点击了2级菜单')
        },

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
  color: red !important;
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
