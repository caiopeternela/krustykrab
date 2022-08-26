<template>
    <div id="table">
        <div>
            <div id="table-head">
                <div class="order-id">#:</div>
                <div>Client name:</div>
                <div>Burger:</div>
                <div>Side dish:</div>
                <div>Drink:</div>
                <div>Actions:</div>
            </div>
        </div>
        <div v-if="!editableMode" class="table-rows">
            <div class="table-row" v-for="order in orders" :key="order.id">
                <div class="order-number">{{ order.id }}</div>
                <div>{{ order.name }}</div>
                <div>{{ order.burger }}</div>
                <div>{{ order.sideDish }}</div>
                <div>{{ order.drink }}</div>
                <button class="edit" @click="editOrderStatus(order.id)">Edit</button>
                <button class="delete" @click="deleteOrder(order.id)">Cancel order</button>
            </div>
        </div>
        <div v-else class="table-rows">
            <div class="table-row" v-for="order in orders" :key="order.id">
                <div class="order-number">{{ order.id }}</div>
                <div>{{ order.name }}</div>
                <div class="input-container">
                    <select @change="editOrder($event, order.id)" name="burger" id="burger" v-model="order.burger">
                        <option value="" disabled selected>Choose a burger</option>
                        <option v-for="burger in burgers" :key="burger.id" :value="burger.name">{{ burger.name }}</option>
                    </select>
                </div>
                <div class="input-container">
                    <select @change="editOrder($event, order.id)" name="sideDish" id="sideDish" v-model="order.sideDish">
                        <option value="" disabled selected>Choose a side dish</option>
                        <option v-for="sideDish in sideDishes" :key="sideDish.id" :value="sideDish.name">{{ sideDish.name }}</option>
                    </select>
                </div>
                <div class="input-container">
                    <select @change="editOrder($event, order.id)" name="drink" id="drink" v-model="order.drink">
                        <option value="" disabled selected>Choose a drink</option>
                        <option v-for="drink in drinks" :key="drink.id" :value="drink.name">{{ drink.name }}</option>
                    </select>
                </div>
                    <button class="edit" @click="editOrderStatus(order.id)">Save</button>
                    <button class="delete" @click="deleteOrder(order.id)">Cancel order</button>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data() {
            return {
                orders: null,
                editableMode: false,
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
                const req = await fetch("http://localhost:3000/menu")
                const data = await req.json()
                this.burgers = data.burgers
                this.sideDishes = data.sideDishes
                this.drinks = data.drinks
            },
            async getOrders() {
                const req = await fetch("http://localhost:3000/orders")
                const data = await req.json()
                this.orders = data
            },
            async deleteOrder(id) {
                const req = await fetch(`http://localhost:3000/orders/${id}`, {
                    method: "DELETE"
                })
                const res = await req.json()
                this.getOrders()
            },
            async editOrder(event, id) {
                const newValue = event.target.value
                const key = event.target.id
                // const dataJson = JSON.stringfy({})
                // const req = await fetch(`http://localhost:3000/orders/${id}`, {
                //     method: "PATCH",
                //     headers: {"Content-type": "application/json"},
                //     body: dataJson
                // })
                // const res = await req.json()
            },
            editOrderStatus() {
                this.editableMode = !this.editableMode
            }
        },
        mounted() {
            this.getMenu()
            this.getOrders()
        }
    }
</script>

<style scoped>
    #table {
        max-width: 1200px;
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

    .delete, .edit {
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

    .edit {
        width: 75px;
    }

    .delete:hover, .edit:hover {
        background-color: #00AEF0;
    }

    input, select {
        font-size: 16px;
        border-radius: 3px;
        background-color: white;
        border: 2px solid black;
    }

</style>