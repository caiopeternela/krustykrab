<template>
    <div id="table">
        <Message  :text="text" v-show="text"/>
        <div>
            <div id="table-head">
                <div class="order-id">#:</div>
                <div>Client name:</div>
                <div>Burger:</div>
                <div>Side dish:</div>
                <div>Drink:</div>
            </div>
        </div>
        <div class="table-rows">
            <div class="table-row" v-for="order in orders" :key="order.id">
                <div class="order-number">{{ order.id }}</div>
                <div>{{ order.name }}</div>
                <div>{{ order.burger }}</div>
                <div>{{ order.sideDish }}</div>
                <div>{{ order.drink }}</div>
                <button class="delete" @click="deleteOrder(order.id)">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
    import * as api from "../api.js"
    import Message from "./Message.vue"
    export default {
        name: "Dashboard",
        components: {
            Message
        },
        data() {
            return {
                //dashboard
                text: null,
                orders: null,
                //menu
                burgers: null,
                sideDishes: null,
                drinks: null,
                //order
                name: null,
                burger: null,
                sideDish: null,
                drink: null
            }
        },
        methods: {
            async getMenu() {
                const req = await api.getMenu()
                this.burgers = req.burgers
                this.sideDishes = req.sideDishes
                this.drinks = req.drinks
            },
            async getOrders() {
                this.orders = await api.getOrders()
            },
            async deleteOrder(id) {
                const req = await api.deleteOrder(id)
                this.getOrders()
                this.text = "Order cancelled successfully"
                setTimeout(() => this.text = null, 3000)
            },
        },
        created() {
            this.getMenu()
            this.getOrders()
        }
    }
</script>

<style scoped>
    #table {
        max-width: 1100px;
        margin: 0 auto;
    }

    #table-head, .table-rows, .table-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    #table-head {
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #00AEF0;
    }

    #table-head div, .table-row div {
        width: 19%;
    }

    .table-row {
        width: 100%;
        padding: 12px;
        border: 1px solid #00AEF0;
    }

    #table-head .order-id, .table-row .order-number {
        width: 5%;
    }

    .delete {
        background-color: #BF1E2E;
        color: white;
        font-weight: bold;
        border: 2px solid black;
        padding: 10px;
        font-size: 14px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }


    .delete:hover {
        background-color: #00AEF0;
    }

    input, select {
        font-size: 16px;
        border-radius: 3px;
        background-color: white;
        border: 2px solid black;
    }

</style>