<template>
    <div class="my-20">
        <h1 class="text-center font-bold mb-4 uppercase text-2xl">Login</h1>
        <form @submit.prevent="login()" class="space-y-4">
            <div>
                <field-input type="text" v-model="args.email" />
            </div>
            <div>
                <field-input type="password" v-model="args.password" />
            </div>
            <div>
                <label class="flex items-center">
                    <input type="checkbox" v-model="args.remember">
                    <span class="ml-2">Remember me</span>
                </label>
            </div>
            <field-button :loading="loading" type="submit" class="w-full">Login</field-button>
        </form>
        <feedback />
    </div>
</template>

<script>
    export default {
        middleware: ['auth'],
        auth: 'guest',
        data() {
            return {
                loading: false,
                args: {
                    email: 'sbthemes@gmail.com',
                    password: 'shail@45371945',
                    remember: false,
                }
            }
        },
        methods: {
            async login() {
                try {
                    this.loading = true;
                    await this.$auth.loginWith('cookie', {data: this.args});
                } catch {}
                this.loading = false;
            }
        }
    }
</script>
