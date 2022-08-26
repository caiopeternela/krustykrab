<template>
    <div>
        <div class="main-container">
            <h1>Make Your Order</h1>
            <Form/>
        </div>
    </div>
</template>

<script>
    import Form from "../components/Form.vue"
    export default {
        name: "Home",
        components: {
            Form
        }
    }
</script>
