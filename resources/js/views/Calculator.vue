<template class="p-4">
    <el-tabs type="border-card" class="container-fluid" v-model="active" @tab-click="handleTab">
        <el-tab-pane name="ingredients" label="Ingredients" class="justify-content-center">
            <ingredients v-if="active === 'ingredients'"></ingredients>
        </el-tab-pane>
        <el-tab-pane name="calculator" label="Calculator" class="justify-content-center">
            <calculation v-if="active === 'calculator'"></calculation>
        </el-tab-pane>
        <el-tab-pane name="menu" label="Menu" class="justify-content-center">
            <realization v-if="active === 'menu'"></realization>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import {defineComponent, ref, onMounted, computed} from 'vue';
    import ingredients from '../components/ingredients';
    import calculation from '../components/calculation';
    import realization from '../components/realization';

    export default defineComponent({
        components: {ingredients, calculation, realization},
        setup() {
            const name = ref('');
            const active = ref('ingredients');
            const tabName = computed(() => localStorage.getItem('activeTab'));

            const handleTab = (tab, event) => {
                localStorage.setItem('activeTab', tab.props.name);
            };

            onMounted(() => {
                if (tabName.value !== 'undefined' && tabName.value) active.value = tabName.value;
            })


            if (window.Laravel.user) {
                name.value = window.Laravel.user.name
            }

            return {
                active,
                tabName,
                handleTab
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
