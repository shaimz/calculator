<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <div class="alert alert-danger" role="alert" v-if="error !== null">
                    {{ error }}
                </div>

                <div class="card card-default">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form>
                            <div class="form-group row">
                                <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" v-model="email" required
                                           autofocus autocomplete="off">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-model="password"
                                           required autocomplete="off">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary" @click="handleSubmit">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref, inject} from 'vue';
    import { useRouter } from 'vue-router';

    export default defineComponent({
        setup() {
            const router = useRouter();
            const $axios = inject('$axios');
            const email = ref(""),
                password = ref(""),
                error = ref(null);

            const handleSubmit = (e) => {
                e.preventDefault()
                if (password.value.length > 0) {
                    $axios.post('api/login', {
                        email: email.value,
                        password: password.value
                    })
                        .then(response => {
                            if (response.data.success) {
                                router.push({name:'Calculator'})
                            } else {
                                error.value = response.data.message
                            }
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                }
            }

            return{
                email,
                password,
                error,
                handleSubmit
            }
        },
        beforeRouteEnter(to, from, next) {
            if (window.Laravel.isLoggedin) {
                return next('/');
            }
            next();
        }
    })
</script>
