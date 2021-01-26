import { buildSchema } from 'graphql';

export default buildSchema(`

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        isAdmin: Boolean!
        token: String
    }

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
        user:            User!
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
    
    type Question {
        _id: ID
        msg: String
        level: String
        index: String
    }
    
    type Response {
        msg: String!
    }

    input UserInput {
        name: String!
        email: String!
        password: String!
        isAdmin: Boolean
    }

    input UpdateUserInput {
        name: String
        email: String
        password: String
        isAdmin: Boolean
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

    input QuestionInput {
        msg: String
        level: String
        index: String
    }

    type rootQuery {
        orders: [Order!]!
        myorders(userId: ID!): [Order!]!
        orderById(orderId: ID!): Order!
        questions: [Question]
        question(level: String!, index: String!): Question
        authUser(email: String!, password: String!): User!
        getUserProfile: User!
        getUsers: [User!]!
        getUserById(userId: ID!): User!
    }

    type rootMutation {
        createOrder(orderInput: OrderInput): Order!
        updateOrderToPaid(orderId: ID!): Order!
        updateOrderToDelivered(orderId: ID!): Order!
        editQuestions(details: [QuestionInput]!): Response!
        registerUser(userInput: UserInput!): User!
        updateUserProfile(userInput: UpdateUserInput!): User!
        updateUser(userId: ID!, userInput: UpdateUserInput!): User!
        deleteUser(userId: ID!): Response!
    }

    schema {
        query: rootQuery
        mutation: rootMutation
    }
`);
