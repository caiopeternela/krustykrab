<template>
    <div class="message-container">
        <p>{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            text: String
        }
    }
</script>

<style scoped>
    .message-container {
        background-color: #BF1E2E;
        text-align: center;
        color: white;
        border: 2px solid black;
        border-radius: 5px;
        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
    }
</style>