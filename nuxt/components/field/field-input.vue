<template>
    <input
        :value="this.value"
        @input="$emit('input', $event.target.value)"
        class="border hover:border-gray-900 focus:border-gray-900 w-full rounded p-2 px-4"
    />
</template>

<script>
    export default {
        props: ['value'],
    }
</script>
