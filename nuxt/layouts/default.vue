<template>
    <div>
        <Nuxt />
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$axios.post('/csrf');
        }
    }
</script>
