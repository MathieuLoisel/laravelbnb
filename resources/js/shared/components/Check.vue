<template>
    <button class="btn btn-secondary btn-block" :disabled="loading" >
        <span v-if="!loading">Check !</span> 
        <span v-if="loading">
            <i class="fas fa-circle-notch fa-spin"></i> <span class="ml-2">Checking...</span> 
        </span> 
    </button>
</template>

<script>
export default {
    props: ["loading"]
}
</script>