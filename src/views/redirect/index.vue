<script>
export default {
    beforeCreate() {
        const { params, query } = this.$route;
        const { path } = params;
        this.$router.replace({ path: `/${path}`, query });
    },
    render(h) {
        // ?避免警告信息
        return h();
    }
};
</script>
