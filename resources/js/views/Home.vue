<template>
    <h1>test2</h1>
</template>

<script>
    import {defineComponent,ref} from 'vue';
    export default defineComponent({
        setup(){
           const name = ref('');

           if(window.Laravel.user){
               name.value = window.Laravel.user.name
           }
        }
    })
</script>

<style scoped>

</style>
