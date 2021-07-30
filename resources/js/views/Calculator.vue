<template>
    <h1>test</h1>
</template>

<script>
    import {defineComponent,ref} from 'vue';
    export default defineComponent({
        setup(){
            const name = ref('');

            if(window.Laravel.user){
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
