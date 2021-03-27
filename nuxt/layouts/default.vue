<template>
    <div class="antialiased">
        <div class="max-w-md mx-auto">
            <Nuxt />
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$axios.post('/csrf');
        }
    }
</script>
