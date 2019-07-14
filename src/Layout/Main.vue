<template>
    <v-content>
        <!-- <the-breadcrumb layout-class="pl-3 pb-0" /> -->
        <v-container fluid>
            <v-slide-y-transition mode="out-in">
                <router-view />
            </v-slide-y-transition>
        </v-container>
    </v-content>
</template>
<script>
export default {
    data () {
        return {}
    }
}
</script>
<style lang="stylus" scoped>
/deep/.v-content__wrap {
  border: 1px solid #ffffff;
  margin: 15px;
}
</style>
