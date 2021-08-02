<template class="p-4">
    <el-tabs type="border-card" class="container-fluid border-dark">
        <el-tab-pane label="Ingredients" class="d-flex">
            <ingredients class="d-flex"></ingredients>
        </el-tab-pane>
        <el-tab-pane label="tobe"></el-tab-pane>
        <el-tab-pane label="tobe"></el-tab-pane>
        <el-tab-pane label="tobe"></el-tab-pane>
    </el-tabs>
</template>

<script>
    import {defineComponent, ref} from 'vue';
    import ingredients from '../components/ingredients';

    export default defineComponent({
        components:{ingredients},
        setup() {
            const name = ref('');

            if (window.Laravel.user) {
                name.value = window.Laravel.user.name
            }
        },
        beforeRouteEnter(to, from, next) {
            if (!window.Laravel.isLoggedin) {
                window.location.href = "/login";
            }
            next();
        }
    })
</script>

<style scoped>

</style>
