<template>
    <div>
        <nav>
            <router-link to="/" id="logo-url"><img :src="logo" :alt="alt" id="logo"></router-link>
            <router-link to="/">Home</router-link>
            <router-link to="/orders">Orders</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        props: ["logo", "alt"]
    }
</script>

<style scoped>
    nav {
        background-color: #DA9FC3;
        border-bottom: 4px solid #BF1E2E;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
    }

    nav a {
        color: black;
        font-size: 24px;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    nav a:hover {
        color: #fff;
    }

    #logo-url {
        margin: auto;
        margin-left: 0;
    }

    #logo {
        width: 80px;
        height: 90px;
    }
</style>