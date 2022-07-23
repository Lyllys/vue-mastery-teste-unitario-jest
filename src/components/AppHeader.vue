<template>
    <div>
        <button v-show="loggedIn"></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loggedIn: false
        }
    }
}
</script>