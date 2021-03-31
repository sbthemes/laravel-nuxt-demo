<template>
    <div class="antialiased text-sm">
        <div class="max-w-md mx-auto px-4">
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
