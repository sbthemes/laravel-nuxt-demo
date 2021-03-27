<template>
    <form @submit.prevent="submitFeedback()">
        <textarea v-model="message"></textarea>
        <button type="submit">Submit</button>
    </form>
</template>
<script>
    export default {
        data() {
            return {
                message: '',
            }
        },
        methods: {
            async submitFeedback() {
                try {
                    await this.$axios.post('/feedback', {message: this.message});
                } catch {}
            }
        }
    }
</script>
