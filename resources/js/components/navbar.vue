<template>
    <div>
        <!-- for logged-in user-->
        <div class="line"></div>
        <el-menu
            v-if="isLoggedIn"
            :default-active=activeIndex
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item :index="item.index" v-for="item in menu">
                <router-link :to="{name:item.text}" class="nav-item nav-link">{{item.text}}</router-link>
            </el-menu-item>
            <el-menu-item index="3"><a class="nav-item nav-link" style="cursor: pointer;"
                                       @click="logout">Logout</a></el-menu-item>
        </el-menu>
        <!-- for non-logged user-->
        <el-menu
            v-else
            :default-active=activeIndex2
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item :index="item.index" v-for="item in menu2">
                <router-link :to="{name:item.text}" class="nav-item nav-link">{{item.text}}</router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import {defineComponent, ref, inject, watch, computed} from 'vue';
    import {useRouter, useRoute } from 'vue-router';

    export default defineComponent({
        name: "navbar",
        setup() {
            const router = useRouter();
            const route = useRoute();
            const path = computed(() => route.fullPath);
            const axios = inject('$axios');
            const isLoggedIn = ref(false);

            if (window.Laravel.isLoggedin) isLoggedIn.value = true

            const logout = (e) => {
                console.log('ss')
                e.preventDefault()
                axios.get('/api/logout')
                    .then(response => {
                        if (response.data.success) {
                            window.location.href = "/calculator"
                        } else {
                            console.log(response)
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            }

            const menu = ref([
                {
                    to: '/',
                    index: 1,
                    text: 'Home'
                },
                {
                    to: '/calculator',
                    index: 2,
                    text: 'Calculator'
                }
            ]);
            const menu2 = ref([
                {
                    to: '/',
                    index: 1,
                    text: 'Home'
                },
                {
                    to: '/login',
                    index: 2,
                    text: 'Login'
                },
                {
                    to: '/register',
                    index: 3,
                    text: 'Register'
                }
            ]);
            const activeIndex = ref('1');
            const activeIndex2 = ref('1');

            watch(() => path, (n,o) => {
                if (!isLoggedIn.value) {
                    let item = menu2.value.find((e) => e.to === n.value);
                    activeIndex2.value = item.index.toString();
                    return true;
                }
                let item = menu.value.find((e) => e.to === n.value);
                activeIndex.value = item?.index.toString()
                return true;
            },{immediate:true,deep:true})

            return {
                isLoggedIn,
                activeIndex,
                activeIndex2,
                menu,
                menu2,
                path,
                logout,
            }
        }
    })
</script>

<style scoped lang="scss">
    .el-menu-item{
        padding:0 !important;
    }
    .nav-link {
        display: inline-block;
        height: 60px;
        width: 80px !important;
        line-height: 60px;
        padding: 0 20px;
        text-align: center;
        box-sizing: content-box;
    }
</style>
