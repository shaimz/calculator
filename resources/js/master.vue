<template>
    <navbar></navbar>
    <router-view :key="path"></router-view>
</template>

<script>
    import {defineComponent, defineAsyncComponent, computed} from 'vue';
    import { useRoute } from 'vue-router';

    export default defineComponent({
        components:{
            navbar:defineAsyncComponent(() => import("./components/navbar.vue"))
        },
        setup(){
            const route = useRoute();
            const path = computed(() => route.fullPath);

            return {
                path
            }

        }
    })
</script>

<style scoped>

</style>
