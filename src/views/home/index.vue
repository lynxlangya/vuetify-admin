<template>
    <div>
        <h1>This is Home.</h1>
        <v-layout v-resize="onResize" column align-center justify-center>
            <v-subheader>Window Size</v-subheader>
            {{ windowSize }}
        </v-layout>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data: () => ({
        windowSize: {
            x: 0,
            y: 0
        }
    }),

    mounted () {
        this.onResize()
    },

    methods: {
        onResize () {
            this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        }
    }
}
</script>
