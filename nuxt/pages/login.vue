<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login()">
            <input type="text" v-model="args.email">
            <input type="password" v-model="args.password">
            <button type="submit">Login</button>
        </form>
        <hr />
        <feedback />
    </div>
</template>

<script>
    export default {
        middleware: ['auth'],
        auth: 'guest',
        data() {
            return {
                args: {
                    email: 'sbthemes@gmail.com',
                    password: 'shail@45371945',
                }
            }
        },
        methods: {
            async login() {
                try {
                    await this.$auth.loginWith('cookie', {data: this.args});
                } catch {}
            }
        }
    }
</script>
