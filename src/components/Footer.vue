<template>
    <footer>
        <p>Krusty Krab &copy; 2022</p>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    footer {
        font-size: 24px;
        height: 150px;
        background-color: #DA9FC3;
        border-top: 4px solid #BF1E2E;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
    }
</style>