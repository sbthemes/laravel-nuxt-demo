<template>
    <input
        :value="this.value"
        @input="$emit('input', $event.target.value)"
    />
</template>

<script>
    export default {
        props: ['value'],
    }
</script>
