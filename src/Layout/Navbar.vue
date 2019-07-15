<template>
    <v-toolbar flat app>
        <v-spacer></v-spacer>
        <v-btn icon @click="searchClick">
            <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon @click="fullscreenClick(fullscreenIcon)">
            <v-icon>{{ fullscreenIcon }}</v-icon>
        </v-btn>
        <v-btn icon @click="featClick">
            <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon @click="messageClick">
            <v-icon>notifications</v-icon>
        </v-btn>
        <v-avatar size="30" class="avatar-style" @click="avatarClick">
            <img src="../assets/images/avatar.jpg" alt="avatar" />
        </v-avatar>
    </v-toolbar>
</template>
<script>
import screenfull from 'screenfull'
export default {
    data () {
        return {
            fullscreenIcon: 'fullscreen'
        }
    },
    mounted () {},
    methods: {
        /**
         * @method 搜索事件
         */
        searchClick () {
            console.log('点击了搜索')
        },

        /**
         * @method 功能性按钮
         */
        featClick () {
            console.log('点击了功能性按钮')
        },

        /**
         * @method 通知消息
         */
        messageClick () {
            console.log('点击了通知消息')
        },

        /**
         * @param {string} val 图标展示方式
         * @method 判断图标类型
         */
        fullscreenClick (val) {
            if (val === 'fullscreen') {
                this.fullscreenIcon = 'fullscreen_exit'
            } else {
                this.fullscreenIcon = 'fullscreen'
            }
            screenfull.toggle()
            if (!screenfull.enabled) {
                alert('不支持全屏展示')
            }
        },

        /**
         * @method 点击头像
         */
        avatarClick () {
            console.log('点击了头像')
        }
    }
}
</script>
<style lang="stylus" scoped>
.avatar-style {
  margin-left: 15px;
  cursor: pointer;
}
</style>
