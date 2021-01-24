import { buildSchema } from 'graphql';

export default buildSchema(`
    type OrderItems {
        name: String!
        qty: Float!
        image: String!
        price: Float!
        product: ID!
    }

    type ShippingAddress {
        address: String!
        city: String!
        postalCode: String!
        country: String!
    }

    type PaymentResult {
        id: String!
        status: String!
        upString_time: String!
        email_address: String!
    }

    type Order {
        _id:             ID!
        user:            ID!
        orderItems:      [OrderItems!]!
        shippingAddress: ShippingAddress!
        paymentMethod:   String!
        paymentResult:   PaymentResult
        taxPrice:        Float!
        shippingPrice:   Float!
        totalPrice:      Float!
        isPaid:          Boolean!
        paidAt:          String
        isDelivered:     Boolean!
        deliveredAt:     String
    }

    input OrderItemsInput {
        name: String!
        qty: Float!
        image: String!
        price: Float!
        product: ID!
    }

    input ShippingAddressInput {
        address: String!
        city: String!
        postalCode: String!
        country: String!
    }

    input PaymentResultInput {
        id: String!
        status: String!
        upString_time: String!
        email_address: String!
    }
    
    input OrderInput {
        user:            ID!
        orderItems:      [OrderItemsInput!]!
        shippingAddress: ShippingAddressInput!
        paymentMethod:   String!
        paymentResult:   PaymentResultInput
        taxPrice:        Float!
        shippingPrice:   Float!
        totalPrice:      Float!
        isPaid:          Boolean!
        paidAt:          String
        isDelivered:     Boolean!
        deliveredAt:     String
    }

    type rootQuery {
        orders: [Order!]!
        myorders(userId: ID!): [Order!]!
        orderById(orderId: ID!): Order
    }

    type rootMutation {
        createOrder(orderInput: OrderInput): Order
        updateOrderToPaid(orderId: ID!): Order!
        updateOrderToDelivered(orderId: ID!): Order!
    }

    schema {
        query: rootQuery
        mutation: rootMutation
    }
`);
