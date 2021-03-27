<template>
    <div class="my-20 text-center">
        <h1 class="font-bold mb-4 uppercase text-2xl">Dashboard</h1>
        <pre class="text-left bg-gray-800 p-3 rounded text-xs text-white">{{ $auth.user }}</pre>
        <field-button :loading="loading" @click.native="logout();" class="mt-10">Logout</field-button>
    </div>
</template>

<script>
    export default {
        middleware: ['auth'],
        data() {
            return {
                loading: false,
            }
        },
        methods: {
            async logout() {
                this.loading = true;
                await this.$auth.logout();
                await this.$axios.post('/csrf');
                this.loading = false;
            }
        }
    }
</script>
