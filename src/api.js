export { getMenu, getOrders, deleteOrder, submitOrder }

import axios from "axios"

axios.defaults.baseURL = "http://localhost:3000"

async function getMenu() {
    const req = await axios.get("/menu")
    return req.data
}

async function getOrders() {
    const req = await axios.get("/orders")
    return req.data
}

async function deleteOrder(id) {
    const req = await axios.delete(`/orders/${id}`)
}

async function submitOrder(data) {
    const req = await axios.post("/orders", data)
    return req.data
}