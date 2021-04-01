<template>
    <button
        :disabled="loading"
        :class="[ ! loading ? 'hover:bg-gray-800 active:bg-gray-900' : 'cursor-default' ]"
        class="btn"
    >
        <span :class="[ loading ? 'invisible' : '' ]"><slot></slot></span>
        <span :class="[ ! loading ? 'hidden' : '' ]" class="absolute inset-0 flex items-center justify-center">
            <icon-spin class="animate-spin h-5 w-5" />
        </span>
    </button>
</template>
<script>
    export default {
        props: {
            loading: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>
