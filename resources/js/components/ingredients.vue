<template>
    <div>
        <h2>Ingredients</h2>
        <div id="ingredients-list">

        </div>
    </div>
</template>

<script>
    import {defineComponent, ref, computed} from 'vue';
    import {useStore} from 'vuex';

    export default defineComponent({
        setup(){
            const store = useStore();
            const ingredients = computed(() => store.state.ingredients)
        }
    })
</script>

<style scoped>

</style>
