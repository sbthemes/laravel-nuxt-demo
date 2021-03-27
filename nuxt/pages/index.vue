<template>
    <div>
        <h1>Dashboard</h1>
        <pre>{{ $auth.user }}</pre>
        <button @click="logout();">Logout</button>
        <hr />
        <feedback />
    </div>
</template>

<script>
    export default {
        middleware: ['auth'],
        methods: {
            async logout() {
                await this.$auth.logout();
                await this.$axios.post('/csrf');
            }
        }
    }
</script>
