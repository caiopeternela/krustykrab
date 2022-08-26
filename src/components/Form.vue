<template>
    <div>
        <Message :text="text" v-show="text"/>
        <form @submit="submitOrder">
            <div class="input-container">
                <label for="name">Your name</label>
                <input type="text" name="name" id="name" v-model="name" placeholder="Enter your name">
            </div>
            <div class="input-container">
                <label for="burger">Choose a burger:</label>
                <select name="burger" id="burger" v-model="burger">
                    <option value="" disabled selected>Choose a burger</option>
                    <option v-for="burger in burgers" :key="burger.id" :value="burger.name">{{ burger.name }}</option>
                </select>
            </div>
            <div class="input-container">
                <label for="sideDish">Choose a side dish:</label>
                <select name="sideDish" id="sideDish" v-model="sideDish">
                    <option value="" disabled selected>Choose a side dish</option>
                    <option v-for="sideDish in sideDishes" :key="sideDish.id" :value="sideDish.name">{{ sideDish.name }}</option>
                </select>
            </div>
            <div class="input-container">
                <label for="drink">Choose a drink:</label>
                <select name="drink" id="drink" v-model="drink">
                    <option value="" disabled selected>Choose a drink</option>
                    <option v-for="drink in drinks" :key="drink.id" :value="drink.name">{{ drink.name }}</option>
                </select>
            </div>
            <div class="input-container">
                <input class="submit" type="submit" value="Confirm">
            </div>
        </form>
    </div>
</template>

<script>
    import Message from "./Message.vue"
    export default {
        name: "Form",
        components: {
            Message
        },
        data() {
            return {
                text: null,
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
            async submitOrder(e) {
                e.preventDefault()
                const data = {
                    name: this.name,
                    burger: this.burger,
                    sideDish: this.sideDish,
                    drink: this.drink
                }
                const dataJson = JSON.stringify(data)
                const req = await fetch("http://localhost:3000/orders", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: dataJson
                })
                const res = await req.json()
                this.text = `Order ${res.id} placed successfully`
                setTimeout(() => this.text = null, 3000)
                this.name = null
                this.burger = null
                this.sideDish = null
                this.drink = null
            }
        },
        mounted() {
            this.getMenu()
        }
    }
</script>

<style scoped>
    form {
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        padding: 5px 10px;
        border-left: 4px solid #00AEF0;
    }

    input, select {
        font-size: 16px;
        background-color: white;
        padding: 5px 10px;
        width: 400px;
        border-radius: 3px;
        border: 2px solid black;
    }

    .submit {
        background-color: #00AEF0;
        font-weight: bold;
        border-radius: 3px;
        border: 2px solid black;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .submit:hover {
        background-color: #DA9FC3;
    }

</style>