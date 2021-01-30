const createOrderQuery = {
    query : `
        mutation {
            createOrder(orderInput: {
            user: "600e9bf7ab74de2680fa32dc",
            orderItems: {
                name: "tanay",
                qty: 2,
                image: "qwerty",
                price: 20,
                product: "600efcb19782ed3f38131803",
            },
            shippingPrice: 10,
            shippingAddress: {
                address: "111",
                city: "mum",
                postalCode: "11",
                country: "ind"
            },
            paymentMethod: "cash",
            paymentResult: {
                id: "600e9bf7ab74de2680fa32d1",
                status: "paid",
                upString_time: "111",
                email_address: "qqq"
            },
            taxPrice: 11,
            totalPrice: 40,
            isPaid: true,
            paidAt: "11",
            isDelivered: false,
            deliveredAt: "11-09-80",
            }) {
            totalPrice,
            }
        }
    `
}

const getOrderQuery = {
    query: `
        {
            orderById(
                orderId: "600fbbee409090058ccc6509") { 
                    totalPrice
                }
        }
    `
}

const updateOrderToPaidQuery = {
    query: `
        mutation{
            updateOrderToPaid(orderId: "600fbbee409090058ccc6509") {
                isPaid
            }
        }
    `
}

const updateOrderToDeliveredQuery = {
    query: `
        mutation{
            updateOrderToDelivered(orderId: "600fbbee409090058ccc6509") {
                isDelivered
            }
        }
    `
}

const getAllOrdersQuery = {
    query: ` 
        {
            orders{
                totalPrice
            }
        }
        
    `
}

const getMyOrdersQuery = {
    query: `
        {
            myorders(userId: "600e9bf7ab74de2680fa32dc") {
                totalPrice
            }
        }
    `
}

export {
    createOrderQuery,
    getOrderQuery,
    updateOrderToDeliveredQuery,
    updateOrderToPaidQuery,
    getMyOrdersQuery,
    getAllOrdersQuery
}